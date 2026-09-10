import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import portrait from '../assets/images/portrait.jpg';

const destinations = [
  { to: '/portfolio', label: 'The work', note: 'An overview' },
  { to: '/Projects', label: 'Projects', note: 'Built & explored' },
  { to: '/WorkExperience', label: 'Experience', note: 'The professional path' },
  { to: '/skills', label: 'Skills & stack', note: 'Tools of the practice' },
  { to: '/about-me', label: 'About', note: 'A little context' },
  { to: '/story', label: 'The story', note: 'The long version' },
  { to: '/Music', label: 'Music', note: 'Mixes & recordings' },
];

export default function SiteNavigation() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const region = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!region.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="site-identity" aria-label="Anthony Mercadante — home">
          <img src={portrait} width="30" height="30" alt="" />
          <span>Anthony Mercadante</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary">
          {['/portfolio', '/about-me', '/story'].map((to) => (
            <NavLink key={to} to={to}>
              {destinations.find((item) => item.to === to)?.label}
            </NavLink>
          ))}
        </nav>
        <div
          className="site-index"
          ref={region}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
          }}
        >
          <button
            ref={button}
            className="index-toggle"
            aria-expanded={open}
            aria-controls="site-index"
            onClick={() => setOpen(!open)}
          >
            Index <span aria-hidden="true">{open ? '−' : '+'}</span>
          </button>
          <nav id="site-index" className="index-panel" aria-label="Site index" hidden={!open}>
            <p className="eyebrow">A few ways in</p>
            {destinations.map(({ to, label, note }) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)}>
                <span>
                  {label}
                  <small>{note}</small>
                </span>
                <span aria-hidden="true">↗</span>
              </NavLink>
            ))}
            <Link to="/" className="index-home">
              Back to the surface <span aria-hidden="true">↑</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link to="/" className="footer-home">
        Anthony Mercadante <span aria-hidden="true">↑</span>
      </Link>
      <nav aria-label="Footer">
        <Link to="/portfolio">The work</Link>
        <Link to="/story">The story</Link>
        <Link to="/Music">Music</Link>
      </nav>
      <span className="footer-year">© {new Date().getFullYear()}</span>
    </footer>
  );
}
