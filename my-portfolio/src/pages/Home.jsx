import { useOutletContext } from 'react-router-dom';
import ShyWord from '../components/ShyWord';

export default function Home() {
  const { mouse } = useOutletContext();

  return (
    <>
      {/* Hero */}
      <section style={{
        position:       'relative',
        zIndex:         10,
        minHeight:      '100vh',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'center',
        padding:        '0 60px',
        maxWidth:       1100,
      }}>
        <p className="tag fade-in">Game Developer · Creator · VR Engineer</p>

        <h1 className="fade-in" style={{
          fontFamily:    'Syne, sans-serif',
          fontSize:      'clamp(3.2rem, 8vw, 7rem)',
          fontWeight:    800,
          lineHeight:    0.95,
          letterSpacing: '-0.02em',
          marginBottom:  32,
        }}>
          Building<br />
          <ShyWord mouse={mouse} /><br />
          in code.
        </h1>

        <p className="sub fade-in" style={{
          fontSize:     'clamp(0.85rem, 1.5vw, 1rem)',
          color:        '#888',
          maxWidth:     480,
          lineHeight:   1.7,
          marginBottom: 52,
        }}>
          Producing polished software, engaging game experiences, and immersive
          virtual reality worlds. Bringing ideas to life and adopting the newest
          emerging technologies.
        </p>

        <div className="fade-in" style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <a href="/projects" className="btn btn-primary">View Projects</a>
          <a href="#contact"  className="btn btn-ghost">Get in Touch</a>
        </div>
      </section>

      {/* Stats */}
      <div className="stats">
        <div className="stat-item">
          <span className="stat-num">5+</span>
          <span className="stat-label">Years experience</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">∞</span>
          <span className="stat-label">Lines written</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">0</span>
          <span className="stat-label">Bugs. ever</span>
        </div>
      </div>
    </>
  );
}
