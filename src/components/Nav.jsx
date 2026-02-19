import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Projects', path: '/projects' },
  { label: 'Skills',   path: '/skills'   },
  { label: 'CV',       path: '/cv'        },
];

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <nav>
      <Link to="/" className="nav-logo">CHRISTIAN/LAMM</Link>
      <ul className="nav-links">
        {NAV_LINKS.map(({ label, path }) => (
          <li key={label}>
            <Link to={path} className={pathname === path ? 'active' : ''}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
