import { useEffect, useRef, useState } from 'react';
import { useCMSStore } from './cmsStore';

// Evenly distributed dots on a sphere using lat/lon grid
function generateDots(): [number, number, number][] {
  const dots: [number, number, number][] = [];
  for (let latDeg = -88; latDeg <= 88; latDeg += 4) {
    const latR = (latDeg * Math.PI) / 180;
    const cosLat = Math.cos(latR);
    const sinLat = Math.sin(latR);
    const count = Math.max(1, Math.round(90 * cosLat));
    for (let i = 0; i < count; i++) {
      const lonR = (i / count) * 2 * Math.PI;
      const x = cosLat * Math.cos(lonR);
      const y = sinLat;
      const z = cosLat * Math.sin(lonR);
      dots.push([x, y, z]);
    }
  }
  return dots;
}

const DOTS = generateDots();

async function geocodeAddress(address: string): Promise<{ lat: number; lng: number } | null> {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`,
      { headers: { 'Accept': 'application/json' } }
    );
    const data = await res.json();
    if (data && data[0]) {
      return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
    }
  } catch {
    // silently fail
  }
  return null;
}

interface GlobeAnimationProps {
  addressKey: string;   // CMS key for address text
  latKey: string;       // CMS key for geocoded latitude
  lngKey: string;       // CMS key for geocoded longitude
  defaultAddress?: string;
  defaultLat?: number;
  defaultLng?: number;
  width?: number;
  height?: number;
}

export function GlobeAnimation({
  addressKey,
  latKey,
  lngKey,
  defaultAddress = 'London, UK',
  defaultLat = 51.5,
  defaultLng = -0.13,
  width = 380,
  height = 380,
}: GlobeAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isEditMode, getContent, updateContent, persistContent } = useCMSStore();

  const address = getContent(addressKey, defaultAddress);
  const lat = parseFloat(getContent(latKey, String(defaultLat))) || defaultLat;
  const lng = parseFloat(getContent(lngKey, String(defaultLng))) || defaultLng;

  const [geocoding, setGeocoding] = useState(false);
  const [geocodeError, setGeocodeError] = useState('');
  const [pulse, setPulse] = useState(0);

  // Pulse animation for the blue dot
  useEffect(() => {
    let frame: number;
    let t = 0;
    const tick = () => {
      t += 0.04;
      setPulse(Math.abs(Math.sin(t)));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleAddressSave = async (value: string) => {
    updateContent(addressKey, value);
    if (!value.trim()) return;

    setGeocoding(true);
    setGeocodeError('');
    const result = await geocodeAddress(value.trim());
    setGeocoding(false);

    if (result) {
      updateContent(latKey, String(result.lat));
      updateContent(lngKey, String(result.lng));
      persistContent();
    } else {
      setGeocodeError('Address not found — check spelling');
      persistContent();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const R = (Math.min(width, height) / 2) * 0.82;
    const cx = width / 2;
    const cy = height / 2 + R * 0.05;

    const lx = -0.4, ly = -0.7, lz = 0.6;
    const lLen = Math.sqrt(lx * lx + ly * ly + lz * lz);
    const light = [lx / lLen, ly / lLen, lz / lLen] as const;

    let angle = 0;
    let animFrame: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const glowGrad = ctx.createRadialGradient(cx, cy, R * 0.5, cx, cy, R * 1.3);
      glowGrad.addColorStop(0, 'rgba(60,60,70,0.0)');
      glowGrad.addColorStop(0.7, 'rgba(40,40,50,0.08)');
      glowGrad.addColorStop(1, 'rgba(20,20,30,0.0)');
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.3, 0, Math.PI * 2);
      ctx.fillStyle = glowGrad;
      ctx.fill();

      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      type DotEntry = { px: number; py: number; z: number; bright: number };
      const projected: DotEntry[] = [];
      for (const [x, y, z] of DOTS) {
        const rx = x * cosA + z * sinA;
        const ry = y;
        const rz = -x * sinA + z * cosA;
        if (rz < -0.08) continue;

        const diff = Math.max(0, rx * light[0] + ry * light[1] + rz * light[2]);
        const bright = 0.15 + diff * 0.85;
        const visibility = (rz + 0.08) / 1.08;

        projected.push({
          px: cx + rx * R,
          py: cy - ry * R,
          z: rz,
          bright: bright * Math.pow(Math.max(0, visibility), 0.5),
        });
      }

      projected.sort((a, b) => a.z - b.z);

      for (const { px, py, z, bright } of projected) {
        const size = 0.8 + z * 1.4;
        ctx.beginPath();
        ctx.arc(px, py, Math.max(0.3, size), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${bright.toFixed(3)})`;
        ctx.fill();
      }

      // Rim glow
      const rimGrad = ctx.createRadialGradient(cx, cy, R * 0.8, cx, cy, R * 1.02);
      rimGrad.addColorStop(0, 'rgba(200,200,220,0.0)');
      rimGrad.addColorStop(0.85, 'rgba(200,200,220,0.0)');
      rimGrad.addColorStop(1, 'rgba(200,200,220,0.06)');
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = rimGrad;
      ctx.lineWidth = R * 0.04;
      ctx.stroke();

      // Blue location marker
      const mLatR = (lat * Math.PI) / 180;
      const mLngR = (lng * Math.PI) / 180;
      const mx0 = Math.cos(mLatR) * Math.cos(mLngR);
      const my0 = Math.sin(mLatR);
      const mz0 = Math.cos(mLatR) * Math.sin(mLngR);

      const mrx = mx0 * cosA + mz0 * sinA;
      const mry = my0;
      const mrz = -mx0 * sinA + mz0 * cosA;

      if (mrz > -0.05) {
        const markerVis = Math.max(0, (mrz + 0.05) / 1.05);
        const mpx = cx + mrx * R;
        const mpy = cy - mry * R;

        const pulseR = 14 + pulse * 10;
        const glowAlpha = 0.35 * markerVis * (0.5 + pulse * 0.5);

        const pulseGrad = ctx.createRadialGradient(mpx, mpy, 0, mpx, mpy, pulseR);
        pulseGrad.addColorStop(0, `rgba(0,160,255,${glowAlpha})`);
        pulseGrad.addColorStop(0.5, `rgba(0,120,255,${glowAlpha * 0.5})`);
        pulseGrad.addColorStop(1, 'rgba(0,100,255,0)');
        ctx.beginPath();
        ctx.arc(mpx, mpy, pulseR, 0, Math.PI * 2);
        ctx.fillStyle = pulseGrad;
        ctx.fill();

        const innerGlow = ctx.createRadialGradient(mpx, mpy, 0, mpx, mpy, 10);
        innerGlow.addColorStop(0, `rgba(100,220,255,${0.9 * markerVis})`);
        innerGlow.addColorStop(1, `rgba(0,140,255,0)`);
        ctx.beginPath();
        ctx.arc(mpx, mpy, 10, 0, Math.PI * 2);
        ctx.fillStyle = innerGlow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mpx, mpy, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${markerVis})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mpx, mpy, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,200,255,${markerVis})`;
        ctx.fill();
      }

      angle += 0.0025;
      animFrame = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animFrame);
  }, [lat, lng, pulse, width, height]);

  return (
    <div style={{ position: 'relative', width, height }}>
      <canvas ref={canvasRef} width={width} height={height} style={{ display: 'block' }} />

      {/* Address label — always visible below marker */}
      {!isEditMode && address && (
        <div style={{
          position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.85)', fontSize: 12, fontFamily: 'Arial, sans-serif',
          fontWeight: 500, whiteSpace: 'nowrap',
          textShadow: '0 0 12px rgba(0,160,255,0.8)',
          pointerEvents: 'none',
        }}>
          {address}
        </div>
      )}

      {/* Edit mode: address input only — geocodes on blur */}
      {isEditMode && (
        <div style={{
          position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
          width: '90%',
        }}>
          <input
            type="text"
            defaultValue={address}
            onBlur={(e) => handleAddressSave(e.target.value)}
            style={{
              width: '100%', background: 'rgba(0,0,0,0.75)',
              border: `1px solid ${geocodeError ? 'rgba(255,80,80,0.7)' : 'rgba(0,160,255,0.6)'}`,
              borderRadius: 6, padding: '5px 10px', color: '#fff', fontSize: 12,
              fontFamily: 'Arial, sans-serif', outline: 'none', textAlign: 'center',
              boxSizing: 'border-box',
            }}
            placeholder="Enter office address…"
          />
          {geocoding && (
            <span style={{ color: 'rgba(0,180,255,0.8)', fontSize: 10, fontFamily: 'Arial, sans-serif' }}>
              Locating…
            </span>
          )}
          {geocodeError && !geocoding && (
            <span style={{ color: 'rgba(255,100,100,0.9)', fontSize: 10, fontFamily: 'Arial, sans-serif' }}>
              {geocodeError}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
