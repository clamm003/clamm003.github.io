import { useRef, useEffect, useState } from 'react';

const SHY_RADIUS = 90;
const LETTERS    = 'worlds'.split('');

function ShyLetter({ char, mouse, index, total }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState('');

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx   = rect.left + rect.width  / 2;
    const cy   = rect.top  + rect.height / 2;
    const dist = Math.hypot(cx - mouse.x, cy - mouse.y);

    if (dist < SHY_RADIUS) {
      const t      = 1 - dist / SHY_RADIUS;
      const scaleY = 1 - t * 0.62;
      const scaleX = 1 + t * 0.20;
      const nudge  = -t * 10;
      setTransform(`translateY(${nudge}px) scaleX(${scaleX}) scaleY(${scaleY})`);
    } else {
      setTransform('');
    }
  }, [mouse]);

  // Interpolate color cyan → purple across the word
  const pct = total > 1 ? index / (total - 1) : 0;
  const r   = Math.round(0   + pct * 123);
  const g   = Math.round(229 + pct * (97  - 229));
  const b   = 255;

  return (
    <span
      ref={ref}
      className="shy-letter"
      style={{ color: `rgb(${r},${g},${b})`, transform }}
    >
      {char}
    </span>
  );
}

export default function ShyWord({ mouse }) {
  return (
    <span>
      {LETTERS.map((char, i) => (
        <ShyLetter
          key={i}
          char={char}
          mouse={mouse}
          index={i}
          total={LETTERS.length}
        />
      ))}
    </span>
  );
}
