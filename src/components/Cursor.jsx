export default function Cursor({ mouse }) {
  return (
    <>
      <div style={{
        position:      'fixed',
        width:         12,
        height:        12,
        borderRadius:  '50%',
        background:    'var(--accent)',
        pointerEvents: 'none',
        zIndex:        9999,
        left:          mouse.x,
        top:           mouse.y,
        transform:     'translate(-50%, -50%)',
        mixBlendMode:  'screen',
        transition:    'transform 0.08s ease',
      }} />
      <div style={{
        position:      'fixed',
        width:         36,
        height:        36,
        borderRadius:  '50%',
        border:        '1px solid rgba(0,229,255,0.4)',
        pointerEvents: 'none',
        zIndex:        9998,
        left:          mouse.x,
        top:           mouse.y,
        transform:     'translate(-50%, -50%)',
        transition:    'left 0.18s ease, top 0.18s ease',
      }} />
    </>
  );
}
