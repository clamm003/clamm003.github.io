import { Outlet, useLocation } from 'react-router-dom';
import { useRef, useLayoutEffect, useState } from 'react';
import { useMouse } from '../hooks/useMouse';
import GridCanvas from './GridCanvas';
import Cursor     from './Cursor';
import Nav        from './Nav';

const PAGE_ORDER = ['/', '/projects', '/skills', '/cv'];

export default function Layout() {
  const mouse    = useMouse();
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  const [animation, setAnimation] = useState('');

  useLayoutEffect(() => {
    const prev = prevPath.current;
    const curr = location.pathname;

    if (prev !== curr) {
      const prevIndex = PAGE_ORDER.indexOf(prev);
      const currIndex = PAGE_ORDER.indexOf(curr);

      if (currIndex > prevIndex) {
        setAnimation('slideInRight 0.35s cubic-bezier(0.4,0,0.2,1) forwards');
      } else {
        setAnimation('slideInLeft 0.35s cubic-bezier(0.4,0,0.2,1) forwards');
      }

      prevPath.current = curr;
    }
  }, [location.pathname]);

  return (
    <>
      <GridCanvas mouse={mouse} />
      <Cursor     mouse={mouse} />

      <div style={{
        position:      'fixed',
        inset:         0,
        zIndex:        1,
        pointerEvents: 'none',
        background:    'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
      }} />

      <Nav />

      <div
        key={location.pathname}
        style={{ animation }}
        onAnimationEnd={() => setAnimation('')}
      >
        <Outlet context={{ mouse }} />
      </div>
    </>
  );
}