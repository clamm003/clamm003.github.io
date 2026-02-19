import { useEffect, useRef } from 'react';

const SPACING    = 36;
const PLUS_SIZE  = 5;
const RIPPLE_R   = 140;
const MAX_SCALE  = 2.2;

export default function GridCanvas({ mouse }) {
  const canvasRef = useRef(null);
  const mouseRef  = useRef(mouse);
  const wavesRef  = useRef([]);

  // Keep mouseRef current without restarting the loop
  useEffect(() => { mouseRef.current = mouse; }, [mouse]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    let animId;

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const handleClick = e => {
      wavesRef.current.push({ x: e.clientX, y: e.clientY, born: performance.now() });
    };
    window.addEventListener('click', handleClick);

    function easeOut(t) { return 1 - Math.pow(1 - t, 1.8); }

    function drawPlus(cx, cy, scale, alpha, glowAlpha, colorMix, rotation) {
      const s = PLUS_SIZE * scale;

      if (glowAlpha > 0.01) {
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, s * 4.5);
        g.addColorStop(0, `rgba(0,229,255,${glowAlpha * 0.28})`);
        g.addColorStop(1, 'rgba(0,229,255,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, s * 4.5, 0, Math.PI * 2);
        ctx.fill();
      }

      const r  = Math.round(55 + colorMix * -55);
      const g2 = Math.round(55 + colorMix * 174);
      const b  = Math.round(60 + colorMix * 195);
      ctx.strokeStyle = `rgba(${r},${g2},${b},${alpha})`;
      ctx.lineWidth   = 1.4 * (0.7 + colorMix * 0.7);
      ctx.lineCap     = 'round';

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.moveTo(-s, 0); ctx.lineTo(s, 0);
      ctx.moveTo(0, -s); ctx.lineTo(0, s);
      ctx.stroke();
      ctx.restore();
    }

    function loop(now) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouseRef.current;

      const cols    = Math.ceil(canvas.width  / SPACING) + 2;
      const rows    = Math.ceil(canvas.height / SPACING) + 2;
      const offsetX = (canvas.width  % SPACING) / 2;
      const offsetY = (canvas.height % SPACING) / 2;

      wavesRef.current = wavesRef.current.filter(w => now - w.born < 1000);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const px = offsetX + col * SPACING;
          const py = offsetY + row * SPACING;
          let scale = 1, alpha = 0.38, glowAlpha = 0, colorMix = 0, rotation = 0;

          // Cursor hover
          const dist = Math.hypot(px - mx, py - my);
          if (dist < RIPPLE_R) {
            const boost = easeOut(1 - dist / RIPPLE_R);
            scale     = 1 + boost * (MAX_SCALE - 1);
            alpha     = 0.38 + boost * 0.42;
            glowAlpha = boost * 0.35;
            colorMix  = boost * 0.55;
            rotation  = boost * (Math.PI / 2);
          }

          // Click waves
          for (const w of wavesRef.current) {
            const age   = (now - w.born) / 1000;
            const wDist = Math.hypot(px - w.x, py - w.y);
            const waveR = 30 + age * 500;
            const front = Math.abs(wDist - waveR);
            const width = 50 + age * 70;
            if (front < width) {
              const wt = easeOut(1 - front / width) * (1 - age);
              scale     = Math.max(scale,     1 + wt * 1.8);
              alpha     = Math.max(alpha,     0.38 + wt * 0.62);
              glowAlpha = Math.max(glowAlpha, wt * 0.6);
              colorMix  = Math.max(colorMix,  wt * 0.85);
              rotation  = Math.max(rotation,  wt * (Math.PI / 2));
            }
          }

          drawPlus(px, py, scale, alpha, glowAlpha, colorMix, rotation);
        }
      }

      animId = requestAnimationFrame(loop);
    }

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  );
}
