import { useState } from 'react';

const ChevronIcon = () => (
  <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
    <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default function ProjectCard({ project }) {
  const [open, setOpen]           = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  const { index, title, org, tags, description, contributions, images, link } = project;

  return (
    <article className={`project-card ${open ? 'open' : ''}`}>

      {/* ── Header ── */}
      <div className="card-header" onClick={() => setOpen(o => !o)}>
        <div className="card-left">
          <span className="card-index">{index}</span>
          <div className="card-titles">
            <div className="card-title">{title}</div>
            <div className="card-org">{org}</div>
          </div>
        </div>
        <div className="card-tags">
          {tags.map(tag => <span key={tag} className="tag-pill">{tag}</span>)}
        </div>
        <div className="card-chevron"><ChevronIcon /></div>
      </div>

      {/* ── Expandable body ── */}
      <div className="card-body">
        <div className="card-body-inner">
          <div className="card-content">

            {/* Images */}
            <div className="card-images">
              <img
                className="main-img"
                src={images[activeImg]}
                alt={title}
              />
              {images.length > 1 && (
                <div className="img-thumbnails">
                  {images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className={i === activeImg ? 'active' : ''}
                      onClick={e => { e.stopPropagation(); setActiveImg(i); }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="card-info">
              <p className="card-description">{description}</p>
              <div>
                <p className="contributions-label">Key Contributions</p>
                <ul className="contributions">
                  {contributions.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              {link && (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="card-link"
                  onClick={e => e.stopPropagation()}
                >
                  {link.label} <ArrowIcon />
                </a>
              )}
            </div>

          </div>
        </div>
      </div>

    </article>
  );
}
