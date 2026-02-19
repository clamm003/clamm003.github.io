import { CV } from '../data/cv';

export default function CVPage() {
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
        <p className="tag fade-in">Background</p>
        <h1 className="fade-in" style={{
          fontFamily:    'Syne, sans-serif',
          fontSize:      'clamp(2.8rem, 6vw, 5rem)',
          fontWeight:    800,
          lineHeight:    0.95,
          letterSpacing: '-0.02em',
        }}>
          CV.
        </h1>
      </header>

      {/* Experience */}
      <div style={{ marginBottom: 80 }}>
        <p style={{
          fontSize:      '0.65rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color:         'var(--accent)',
          marginBottom:  32,
          display:       'flex',
          alignItems:    'center',
          gap:           10,
        }}>
          <span style={{ width: 28, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
          Work Experience
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {CV.experience.map((job, i) => (
            <div key={i} style={{
              border:         '1px solid var(--border)',
              background:     'rgba(17,17,20,0.6)',
              backdropFilter: 'blur(8px)',
              padding:        '32px 36px',
              opacity:        0,
              transform:      'translateY(16px)',
              animation:      `fadeUp 0.6s forwards ${0.1 + i * 0.1}s`,
            }}>
              {/* Job header */}
              <div style={{
                display:        'flex',
                justifyContent: 'space-between',
                alignItems:     'flex-start',
                marginBottom:   20,
                gap:            24,
                flexWrap:       'wrap',
              }}>
                <div>
                  <h2 style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize:   '1.1rem',
                    fontWeight: 800,
                    color:      'var(--text)',
                    marginBottom: 6,
                  }}>
                    {job.title}
                  </h2>
                  <p style={{
                    fontSize:      '0.72rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color:         'var(--muted)',
                  }}>
                    {job.company}
                  </p>
                </div>
                <span style={{
                  fontSize:      '0.68rem',
                  letterSpacing: '0.1em',
                  color:         'var(--accent)',
                  whiteSpace:    'nowrap',
                  paddingTop:    2,
                }}>
                  {job.period}
                </span>
              </div>

              {/* Bullets */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {job.bullets.map((b, j) => (
                  <li key={j} style={{
                    fontSize:    '0.82rem',
                    color:       '#777',
                    lineHeight:  1.65,
                    paddingLeft: 16,
                    position:    'relative',
                  }}>
                    <span style={{
                      position:   'absolute',
                      left:       0,
                      color:      'var(--accent)',
                      opacity:    0.6,
                    }}>+</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <p style={{
          fontSize:      '0.65rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color:         'var(--accent)',
          marginBottom:  32,
          display:       'flex',
          alignItems:    'center',
          gap:           10,
        }}>
          <span style={{ width: 28, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
          Education
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {CV.education.map((edu, i) => (
            <div key={i} style={{
              border:         '1px solid var(--border)',
              background:     'rgba(17,17,20,0.6)',
              backdropFilter: 'blur(8px)',
              padding:        '32px 36px',
              display:        'flex',
              justifyContent: 'space-between',
              alignItems:     'flex-start',
              flexWrap:       'wrap',
              gap:            24,
              opacity:        0,
              transform:      'translateY(16px)',
              animation:      `fadeUp 0.6s forwards 0.15s`,
            }}>
              <div>
                <h2 style={{
                  fontFamily:   'Syne, sans-serif',
                  fontSize:     '1.1rem',
                  fontWeight:   800,
                  color:        'var(--text)',
                  marginBottom: 6,
                }}>
                  {edu.degree}
                </h2>
                {edu.minor && (
                  <p style={{
                    fontSize:      '0.72rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color:         'var(--accent2)',
                    marginBottom:  8,
                  }}>
                    {edu.minor}
                  </p>
                )}
                <p style={{
                  fontSize:      '0.72rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color:         'var(--muted)',
                }}>
                  {edu.school} — {edu.location}
                </p>
              </div>
              <span style={{
                fontSize:      '0.68rem',
                letterSpacing: '0.1em',
                color:         'var(--accent)',
                whiteSpace:    'nowrap',
                paddingTop:    2,
              }}>
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
