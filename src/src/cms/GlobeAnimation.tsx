import { useEffect, useRef, useState } from 'react';
import { useCMSStore } from './cmsStore';

// Evenly distributed dots on a sphere using lat/lon grid
function generateDots(): [number, number, number][] {
  const dots: [number, number, number][] = [];
  for (let latDeg = -88; latDeg <= 88; latDeg += 4) {
    const latR = (latDeg * Math.PI) / 180;
    const cosLat = Math.cos(latR);
    const sinLat = Math.sin(latR);
    // Fewer dots near poles
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

interface GlobeAnimationProps {
  latKey: string;
  lngKey: string;
  addressKey: string;
  defaultLat?: number;
  defaultLng?: number;
  defaultAddress?: string;
  width?: number;
  height?: number;
}

export function GlobeAnimation({
  latKey,
  lngKey,
  addressKey,
  defaultLat = 51.5,
  defaultLng = -0.13,
  defaultAddress = 'London, UK',
  width = 380,
  height = 380,
}: GlobeAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isEditMode, getContent, updateContent, persistContent } = useCMSStore();

  const lat = parseFloat(getContent(latKey, String(defaultLat))) || defaultLat;
  const lng = parseFloat(getContent(lngKey, String(defaultLng))) || defaultLng;
  const address = getContent(addressKey, defaultAddress);

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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const R = (Math.min(width, height) / 2) * 0.82;
    const cx = width / 2;
    const cy = height / 2 + R * 0.05;

    // Light direction (top-left front)
    const lx = -0.4, ly = -0.7, lz = 0.6;
    const lLen = Math.sqrt(lx * lx + ly * ly + lz * lz);
    const light = [lx / lLen, ly / lLen, lz / lLen] as const;

    let angle = 0;
    let animFrame: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle ambient glow behind globe
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

      // Rotate and project all dots
      type DotEntry = { px: number; py: number; z: number; bright: number };
      const projected: DotEntry[] = [];
      for (const [x, y, z] of DOTS) {
        // Rotate around Y axis
        const rx = x * cosA + z * sinA;
        const ry = y;
        const rz = -x * sinA + z * cosA;

        if (rz < -0.08) continue; // cull back face (with slight bleed for edge)

        // Diffuse lighting
        const diff = Math.max(0, rx * light[0] + ry * light[1] + rz * light[2]);
        const ambient = 0.15;
        const bright = ambient + diff * 0.85;

        // Depth fade for back-hemisphere
        const visibility = (rz + 0.08) / 1.08;

        projected.push({
          px: cx + rx * R,
          py: cy - ry * R,
          z: rz,
          bright: bright * Math.pow(Math.max(0, visibility), 0.5),
        });
      }

      // Sort back-to-front
      projected.sort((a, b) => a.z - b.z);

      for (const { px, py, z, bright } of projected) {
        const size = 0.8 + z * 1.4; // bigger dots toward camera
        ctx.beginPath();
        ctx.arc(px, py, Math.max(0.3, size), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${bright.toFixed(3)})`;
        ctx.fill();
      }

      // Draw rim glow (atmosphere edge highlight)
      const rimGrad = ctx.createRadialGradient(cx, cy, R * 0.8, cx, cy, R * 1.02);
      rimGrad.addColorStop(0, 'rgba(200,200,220,0.0)');
      rimGrad.addColorStop(0.85, 'rgba(200,200,220,0.0)');
      rimGrad.addColorStop(1, 'rgba(200,200,220,0.06)');
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = rimGrad;
      ctx.lineWidth = R * 0.04;
      ctx.stroke();

      // --- Blue location marker ---
      const mLatR = (lat * Math.PI) / 180;
      const mLngR = (lng * Math.PI) / 180;
      const mx0 = Math.cos(mLatR) * Math.cos(mLngR);
      const my0 = Math.sin(mLatR);
      const mz0 = Math.cos(mLatR) * Math.sin(mLngR);

      // Apply same Y rotation
      const mrx = mx0 * cosA + mz0 * sinA;
      const mry = my0;
      const mrz = -mx0 * sinA + mz0 * cosA;

      if (mrz > -0.05) {
        const markerVis = Math.max(0, (mrz + 0.05) / 1.05);
        const mpx = cx + mrx * R;
        const mpy = cy - mry * R;

        const pulseR = 14 + pulse * 10;
        const glowAlpha = 0.35 * markerVis * (0.5 + pulse * 0.5);

        // Outer pulse ring
        const pulseGrad = ctx.createRadialGradient(mpx, mpy, 0, mpx, mpy, pulseR);
        pulseGrad.addColorStop(0, `rgba(0,160,255,${glowAlpha})`);
        pulseGrad.addColorStop(0.5, `rgba(0,120,255,${glowAlpha * 0.5})`);
        pulseGrad.addColorStop(1, 'rgba(0,100,255,0)');
        ctx.beginPath();
        ctx.arc(mpx, mpy, pulseR, 0, Math.PI * 2);
        ctx.fillStyle = pulseGrad;
        ctx.fill();

        // Inner glow
        const innerGlow = ctx.createRadialGradient(mpx, mpy, 0, mpx, mpy, 10);
        innerGlow.addColorStop(0, `rgba(100,220,255,${0.9 * markerVis})`);
        innerGlow.addColorStop(1, `rgba(0,140,255,0)`);
        ctx.beginPath();
        ctx.arc(mpx, mpy, 10, 0, Math.PI * 2);
        ctx.fillStyle = innerGlow;
        ctx.fill();

        // Core dot
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
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ display: 'block' }}
      />
      {/* Address label — shown when marker is roughly visible (always rendered, fades with marker) */}
      <div style={{
        position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)',
        color: 'rgba(255,255,255,0.85)', fontSize: 12, fontFamily: 'Arial, sans-serif',
        fontWeight: 500, letterSpacing: '0.02em', whiteSpace: 'nowrap',
        textShadow: '0 0 12px rgba(0,160,255,0.8)',
        pointerEvents: isEditMode ? 'auto' : 'none',
      }}>
        {isEditMode ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
            <input
              type="text"
              defaultValue={address}
              onBlur={(e) => { updateContent(addressKey, e.target.value); persistContent(); }}
              style={{
                background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(0,160,255,0.5)',
                borderRadius: 4, padding: '2px 8px', color: '#fff', fontSize: 12,
                fontFamily: 'Arial, sans-serif', outline: 'none', textAlign: 'center',
              }}
              placeholder="Address label"
            />
            <div style={{ display: 'flex', gap: 4 }}>
              <input
                type="number"
                defaultValue={lat}
                onBlur={(e) => { updateContent(latKey, e.target.value); persistContent(); }}
                style={{
                  width: 70, background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(0,160,255,0.3)',
                  borderRadius: 4, padding: '2px 4px', color: 'rgba(255,255,255,0.6)', fontSize: 10,
                  fontFamily: 'Arial, sans-serif', outline: 'none', textAlign: 'center',
                }}
                placeholder="Latitude"
                step="0.1"
              />
              <input
                type="number"
                defaultValue={lng}
                onBlur={(e) => { updateContent(lngKey, e.target.value); persistContent(); }}
                style={{
                  width: 70, background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(0,160,255,0.3)',
                  borderRadius: 4, padding: '2px 4px', color: 'rgba(255,255,255,0.6)', fontSize: 10,
                  fontFamily: 'Arial, sans-serif', outline: 'none', textAlign: 'center',
                }}
                placeholder="Longitude"
                step="0.1"
              />
            </div>
          </div>
        ) : (
          <span>{address}</span>
        )}
      </div>
    </div>
  );
}
