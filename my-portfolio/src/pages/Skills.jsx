import { SKILLS } from '../data/skills';

const LEVEL_COLOR = {
  Proficient: 'var(--accent)',
  Familiar:   'var(--accent2)',
  Learning:   '#555',
};

export default function Skills() {
  return (
    <section style={{
      position:  'relative',
      zIndex:    10,
      maxWidth:  900,
      margin:    '0 auto',
      padding:   '160px 60px 120px',
    }}>

      {/* Page header */}
      <header style={{ marginBottom: 80 }}>
        <p className="tag fade-in">What I work with</p>
        <h1 className="fade-in" style={{
          fontFamily:    'Syne, sans-serif',
          fontSize:      'clamp(2.8rem, 6vw, 5rem)',
          fontWeight:    800,
          lineHeight:    0.95,
          letterSpacing: '-0.02em',
        }}>
          Skills.
        </h1>
        <p className="fade-in" style={{
          marginTop:  20,
          color:      '#888',
          fontSize:   '0.9rem',
          lineHeight: 1.7,
          maxWidth:   480,
        }}>
          Tools, languages, and technologies I've used across various projects and positions.
        </p>

        {/* Legend */}
        <div className="fade-in" style={{
          display:    'flex',
          gap:        28,
          marginTop:  28,
        }}>
          {Object.entries(LEVEL_COLOR).map(([label, color]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: color }} />
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#666' }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </header>

      {/* Skill grid */}
      <div style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap:                 2,
      }}>
        {SKILLS.map((group, gi) => (
          <div
            key={group.category}
            style={{
              gridColumn:  gi === SKILLS.length - 1 && SKILLS.length % 2 !== 0 ? '1 / -1' : 'auto',
              border:      '1px solid var(--border)',
              background:  'rgba(17,17,20,0.6)',
              backdropFilter: 'blur(8px)',
              padding:     '32px 36px',
              opacity:     0,
              transform:   'translateY(16px)',
              animation:   `fadeUp 0.6s forwards ${0.1 + gi * 0.1}s`,
            }}
          >
            {/* Category header */}
            <p style={{
              fontSize:      '0.65rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color:         'var(--accent)',
              marginBottom:  28,
              display:       'flex',
              alignItems:    'center',
              gap:           10,
            }}>
              <span style={{ width: 20, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
              {group.category}
            </p>

            {/* Skills list */}
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
              {group.items.map((skill, si) => (
                <li
                  key={skill.name}
                  style={{
                    display:       'flex',
                    justifyContent:'space-between',
                    alignItems:    'center',
                    padding:       '12px 0',
                    borderBottom:  si < group.items.length - 1 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <span style={{ fontSize: '0.88rem', color: 'var(--text)' }}>
                    {skill.name}
                  </span>
                  <div style={{
                    width:        6,
                    height:       6,
                    borderRadius: '50%',
                    background:   LEVEL_COLOR[skill.level],
                    flexShrink:   0,
                  }} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
}
