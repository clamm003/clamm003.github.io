import { useEffect, useState } from 'react';

export function useMouse() {
  const [pos, setPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const handler = e => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return pos;
}
