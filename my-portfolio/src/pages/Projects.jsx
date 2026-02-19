import { PROJECTS }    from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
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
        <p className="tag fade-in">Selected Work</p>
        <h1 className="fade-in" style={{
          fontFamily:    'Syne, sans-serif',
          fontSize:      'clamp(2.8rem, 6vw, 5rem)',
          fontWeight:    800,
          lineHeight:    0.95,
          letterSpacing: '-0.02em',
        }}>
          Projects.
        </h1>
        <p className="fade-in" style={{
          marginTop:  20,
          color:      '#888',
          fontSize:   '0.9rem',
          lineHeight: 1.7,
          maxWidth:   480,
        }}>
          Work from VMASC, Ascendium Interactive, and personal projects —
          spanning games, VR experiences, and interactive tools.
        </p>
      </header>

      {/* Cards */}
      <div className="projects">
        {PROJECTS.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  );
}
