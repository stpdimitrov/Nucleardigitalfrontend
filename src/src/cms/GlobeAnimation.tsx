import { useEffect, useRef, useState } from 'react';
import { useCMSStore } from './cmsStore';

// ─── Types ────────────────────────────────────────────────────────────────────

type Ring = [number, number][]; // [lon, lat] pairs in geographic degrees
interface RingBounds { ring: Ring; min0: number; max0: number; min1: number; max1: number; }
interface Dot { x: number; y: number; z: number; land: boolean; }

// ─── Module-level world map cache ─────────────────────────────────────────────

let _cache: RingBounds[] | null = null;
let _fetch: Promise<RingBounds[]> | null = null;

function decodeTopojson(topo: any): RingBounds[] {
  const rawArcs: number[][][] = topo.arcs;
  const [sx, sy] = topo.transform.scale as [number, number];
  const [tx, ty] = topo.transform.translate as [number, number];

  function decodeArc(idx: number): Ring {
    const rev = idx < 0;
    const raw = rawArcs[rev ? ~idx : idx];
    let x = 0, y = 0;
    const pts: Ring = raw.map((d: number[]) => {
      x += d[0]; y += d[1];
      return [x * sx + tx, y * sy + ty] as [number, number];
    });
    return rev ? pts.reverse() : pts;
  }

  const result: RingBounds[] = [];

  function addRing(arcIndices: number[]) {
    const ring: Ring = [];
    for (const idx of arcIndices) ring.push(...decodeArc(idx));
    if (ring.length < 3) return;
    let min0 = Infinity, max0 = -Infinity, min1 = Infinity, max1 = -Infinity;
    for (const [lo, la] of ring) {
      if (lo < min0) min0 = lo; if (lo > max0) max0 = lo;
      if (la < min1) min1 = la; if (la > max1) max1 = la;
    }
    result.push({ ring, min0, max0, min1, max1 });
  }

  for (const geom of topo.objects.land.geometries) {
    if (geom.type === 'Polygon') addRing(geom.arcs[0]);
    else if (geom.type === 'MultiPolygon')
      (geom.arcs as number[][][]).forEach(p => addRing(p[0]));
  }
  return result;
}

function loadLand(): Promise<RingBounds[]> {
  if (_cache) return Promise.resolve(_cache);
  if (!_fetch) {
    _fetch = fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json')
      .then(r => r.json())
      .then(topo => { _cache = decodeTopojson(topo); return _cache!; })
      .catch(() => { _fetch = null; return [] as RingBounds[]; });
  }
  return _fetch;
}

function inRing(lo: number, la: number, ring: Ring): boolean {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if ((yi > la) !== (yj > la) && lo < ((xj - xi) * (la - yi)) / (yj - yi) + xi)
      inside = !inside;
  }
  return inside;
}

function isLand(lon360: number, lat: number, rings: RingBounds[]): boolean {
  const lo = lon360 > 180 ? lon360 - 360 : lon360;
  for (const { ring, min0, max0, min1, max1 } of rings) {
    if (lo < min0 || lo > max0 || lat < min1 || lat > max1) continue;
    if (inRing(lo, lat, ring)) return true;
  }
  return false;
}

function buildDots(rings: RingBounds[]): Dot[] {
  const dots: Dot[] = [];
  for (let latDeg = -87; latDeg <= 87; latDeg += 3.5) {
    const latR = (latDeg * Math.PI) / 180;
    const cosLat = Math.cos(latR);
    const count = Math.max(1, Math.round(96 * cosLat));
    for (let i = 0; i < count; i++) {
      const f = i / count;
      const lonR = f * 2 * Math.PI;
      dots.push({
        x: cosLat * Math.cos(lonR),
        y: Math.sin(latR),
        z: cosLat * Math.sin(lonR),
        land: rings.length > 0 ? isLand(f * 360, latDeg, rings) : true,
      });
    }
  }
  return dots;
}

// Pre-generate uniform dots for initial render while world map loads
const UNIFORM_DOTS: Dot[] = buildDots([]);

// ─── Geocoding ────────────────────────────────────────────────────────────────

async function geocodeAddress(address: string): Promise<{ lat: number; lng: number } | null> {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`,
      { headers: { Accept: 'application/json' } }
    );
    const data = await res.json();
    if (data?.[0]) return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
  } catch { /* silent */ }
  return null;
}

// ─── Component ────────────────────────────────────────────────────────────────

interface GlobeAnimationProps {
  addressKey: string;
  latKey: string;
  lngKey: string;
  defaultAddress?: string;
  defaultLat?: number;
  defaultLng?: number;
  width?: number;
  height?: number;
}

export function GlobeAnimation({
  addressKey, latKey, lngKey,
  defaultAddress = 'London, UK',
  defaultLat = 51.5, defaultLng = -0.13,
  width = 380, height = 380,
}: GlobeAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const angleRef = useRef(-Math.PI / 2); // start with Europe/Africa visible
  const dotsRef = useRef<Dot[]>(UNIFORM_DOTS);
  const frameRef = useRef<number>(0);

  const { isEditMode, getContent, updateContent, persistContent } = useCMSStore();

  const address = getContent(addressKey, defaultAddress);
  const lat = parseFloat(getContent(latKey, String(defaultLat))) || defaultLat;
  const lng = parseFloat(getContent(lngKey, String(defaultLng))) || defaultLng;

  const [geocoding, setGeocoding] = useState(false);
  const [geocodeError, setGeocodeError] = useState('');
  const [mapReady, setMapReady] = useState(false);

  // Load world map once
  useEffect(() => {
    loadLand().then(rings => {
      if (rings.length > 0) {
        dotsRef.current = buildDots(rings);
        setMapReady(true);
      }
    });
  }, []);

  // Canvas render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const R = Math.min(width, height) * 0.42;
    const cx = width / 2;
    const cy = height * 0.48;

    // Light from top-left-front
    const lx = -0.3, ly = -0.6, lz = 0.74;
    const lLen = Math.sqrt(lx * lx + ly * ly + lz * lz);
    const [lnx, lny, lnz] = [lx / lLen, ly / lLen, lz / lLen];

    let pulse = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      pulse += 0.04;
      const pulseVal = Math.abs(Math.sin(pulse));
      const angle = angleRef.current;
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      // Draw dots ─────────────────────────────────────────────────────────────
      const dots = dotsRef.current;
      type Entry = { px: number; py: number; z: number; alpha: number; size: number };
      const visible: Entry[] = [];

      for (const { x, y, z, land } of dots) {
        // Rotate around Y axis
        const rx = x * cosA + z * sinA;
        const ry = y;
        const rz = -x * sinA + z * cosA;

        if (rz < -0.05) continue; // back-face cull

        // Diffuse lighting
        const diff = Math.max(0, rx * lnx + ry * lny + rz * lnz);
        const depthFade = Math.pow(Math.max(0, (rz + 0.05) / 1.05), 0.4);

        let alpha: number;
        let size: number;

        if (land) {
          alpha = (0.2 + diff * 0.8) * depthFade;
          size = 0.9 + rz * 1.2;
        } else {
          // Very faint ocean dots just to show sphere shape
          alpha = 0.06 * depthFade;
          size = 0.5;
        }

        visible.push({ px: cx - rx * R, py: cy - ry * R, z: rz, alpha, size });
      }

      // Sort back-to-front
      visible.sort((a, b) => a.z - b.z);

      for (const { px, py, alpha, size } of visible) {
        ctx.beginPath();
        ctx.arc(px, py, Math.max(0.3, size), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
        ctx.fill();
      }

      // Atmosphere rim ────────────────────────────────────────────────────────
      const rim = ctx.createRadialGradient(cx, cy, R * 0.88, cx, cy, R * 1.08);
      rim.addColorStop(0, 'rgba(180,200,255,0)');
      rim.addColorStop(0.7, 'rgba(180,200,255,0.04)');
      rim.addColorStop(1, 'rgba(180,200,255,0)');
      ctx.beginPath(); ctx.arc(cx, cy, R * 1.04, 0, Math.PI * 2);
      ctx.strokeStyle = rim; ctx.lineWidth = R * 0.06; ctx.stroke();

      // Blue location marker ──────────────────────────────────────────────────
      const mLatR = (lat * Math.PI) / 180;
      const mLngR = (lng * Math.PI) / 180;
      // In my coord system: lon 0° → lonR 0 → x=cosLat, z=0
      // Geographic lon → lonR: geoLon → (geoLon > 0 ? geoLon : 360 + geoLon) / 360 * 2π
      const lonDeg360 = lng < 0 ? lng + 360 : lng;
      const mLonR = (lonDeg360 / 360) * 2 * Math.PI;
      const cosMLat = Math.cos(mLatR);
      const mx0 = cosMLat * Math.cos(mLonR);
      const my0 = Math.sin(mLatR);
      const mz0 = cosMLat * Math.sin(mLonR);

      const mrx = mx0 * cosA + mz0 * sinA;
      const mry = my0;
      const mrz = -mx0 * sinA + mz0 * cosA;

      if (mrz > -0.05) {
        const vis = Math.max(0, (mrz + 0.05) / 1.05);
        const mpx = cx - mrx * R;
        const mpy = cy - mry * R;

        const pr = 12 + pulseVal * 12;
        const ga = 0.4 * vis * (0.4 + pulseVal * 0.6);

        // Pulse ring
        const pg = ctx.createRadialGradient(mpx, mpy, 0, mpx, mpy, pr);
        pg.addColorStop(0, `rgba(0,150,255,${ga})`);
        pg.addColorStop(0.6, `rgba(0,120,255,${ga * 0.4})`);
        pg.addColorStop(1, 'rgba(0,100,255,0)');
        ctx.beginPath(); ctx.arc(mpx, mpy, pr, 0, Math.PI * 2);
        ctx.fillStyle = pg; ctx.fill();

        // Inner glow
        const ig = ctx.createRadialGradient(mpx, mpy, 0, mpx, mpy, 9);
        ig.addColorStop(0, `rgba(120,220,255,${0.95 * vis})`);
        ig.addColorStop(1, 'rgba(0,140,255,0)');
        ctx.beginPath(); ctx.arc(mpx, mpy, 9, 0, Math.PI * 2);
        ctx.fillStyle = ig; ctx.fill();

        // Core
        ctx.beginPath(); ctx.arc(mpx, mpy, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${vis})`; ctx.fill();
        ctx.beginPath(); ctx.arc(mpx, mpy, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,200,255,${vis})`; ctx.fill();
      }

      angleRef.current += 0.004; // ~1.4 full rotations per minute
      frameRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(frameRef.current);
  }, [lat, lng, mapReady, width, height]);

  const handleAddressSave = async (value: string) => {
    updateContent(addressKey, value);
    if (!value.trim()) { persistContent(); return; }
    setGeocoding(true);
    setGeocodeError('');
    const result = await geocodeAddress(value.trim());
    setGeocoding(false);
    if (result) {
      updateContent(latKey, String(result.lat));
      updateContent(lngKey, String(result.lng));
    } else {
      setGeocodeError('Address not found — check spelling');
    }
    persistContent();
  };

  return (
    <div style={{ position: 'relative', width, height }}>
      <canvas ref={canvasRef} width={width} height={height} style={{ display: 'block' }} />

      {/* Address label */}
      {!isEditMode && address && (
        <div style={{
          position: 'absolute', bottom: 18, left: '50%', transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.88)', fontSize: 12, fontFamily: 'Arial, sans-serif',
          fontWeight: 500, whiteSpace: 'nowrap',
          textShadow: '0 0 10px rgba(0,150,255,0.9)',
          pointerEvents: 'none',
        }}>
          {address}
        </div>
      )}

      {/* Edit mode controls */}
      {isEditMode && (
        <div style={{
          position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
          width: '90%',
        }}>
          <input
            type="text"
            defaultValue={address}
            onBlur={e => handleAddressSave(e.target.value)}
            style={{
              width: '100%', background: 'rgba(0,0,0,0.8)',
              border: `1px solid ${geocodeError ? 'rgba(255,80,80,0.7)' : 'rgba(0,150,255,0.6)'}`,
              borderRadius: 6, padding: '5px 10px', color: '#fff', fontSize: 12,
              fontFamily: 'Arial, sans-serif', outline: 'none', textAlign: 'center',
              boxSizing: 'border-box',
            }}
            placeholder="Enter office address…"
          />
          {geocoding && (
            <span style={{ color: 'rgba(0,180,255,0.8)', fontSize: 10, fontFamily: 'Arial,sans-serif' }}>
              Locating…
            </span>
          )}
          {geocodeError && !geocoding && (
            <span style={{ color: 'rgba(255,100,100,0.9)', fontSize: 10, fontFamily: 'Arial,sans-serif' }}>
              {geocodeError}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
