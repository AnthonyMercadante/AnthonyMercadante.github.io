import { CSSProperties, PointerEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import { pageVariants } from '../../animations';
import portrait from '../../assets/images/portrait.jpg';
import {
  GitHubIcon,
  AppleMusicIcon,
  StravaIcon,
  LetterboxdIcon,
  GoodreadsIcon,
  InstagramIcon,
  TikTokIcon,
  MailIcon,
  ArrowUpRightIcon,
} from '../../components/SocialIcons';
import './HomePage.css';

const socialLinks = [
  {
    name: 'Strava',
    interest: 'Running',
    href: 'https://strava.app.link/42BwywgdHTb',
    icon: <StravaIcon />,
    color: '#f7a578',
  },
  {
    name: 'Goodreads',
    interest: 'Reading',
    href: 'https://www.goodreads.com/user/show/195355250-anthony-mercadante',
    icon: <GoodreadsIcon />,
    color: '#e3c598',
  },
  {
    name: 'Letterboxd',
    interest: 'Watching',
    href: 'https://boxd.it/4K1Yl',
    icon: <LetterboxdIcon />,
    color: '#a8d6a3',
  },
  {
    name: 'Music',
    interest: 'Listening',
    href: 'https://music.apple.com/profile/anthony_mercadante',
    icon: <AppleMusicIcon />,
    color: '#edaba9',
  },
  {
    name: 'GitHub',
    interest: 'Building',
    href: 'https://github.com/AnthonyMercadante',
    icon: <GitHubIcon />,
    color: '#e0e6df',
  },
  {
    name: 'Email',
    interest: 'Say hello',
    href: 'mailto:Anthony@raethexntechnologies.com',
    icon: <MailIcon />,
    color: '#c3b1e0',
  },
  {
    name: 'TikTok',
    interest: 'In motion',
    href: 'https://www.tiktok.com/@anthony_mercadante',
    icon: <TikTokIcon />,
    color: '#a4d1da',
  },
  {
    name: 'Instagram',
    interest: 'Life lately',
    href: 'https://www.instagram.com/anthony_mercadante/',
    icon: <InstagramIcon />,
    color: '#dea5c3',
  },
];

/**
 * The portrait as a foil card: it tilts toward the pointer while a sheen and
 * an iridescent wash track across it, inside a slowly turning colour ring.
 */
function HoloPortrait() {
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 180, damping: 18, mass: 0.6 };
  const rotateX = useSpring(useTransform(py, [0, 1], [14, -14]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-14, 14]), spring);
  const sheenX = useTransform(px, [0, 1], [0, 100]);
  const sheenY = useTransform(py, [0, 1], [0, 100]);
  const foilAngle = useTransform(px, [0, 1], [70, 250]);
  const sheen = useMotionTemplate`radial-gradient(circle at ${sheenX}% ${sheenY}%, rgba(255,255,255,0.4), rgba(255,255,255,0) 55%)`;
  const foil = useMotionTemplate`linear-gradient(${foilAngle}deg, transparent 20%, rgba(155,212,209,0.28) 38%, rgba(197,223,170,0.26) 50%, rgba(237,171,169,0.24) 62%, transparent 80%)`;

  const onMove = (e: PointerEvent<HTMLAnchorElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div className="home-portrait-stage">
      <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
        <Link
          className="home-portrait"
          to="/about-me"
          aria-label="About Anthony Mercadante"
          onPointerMove={onMove}
          onPointerLeave={onLeave}
        >
          <span className="portrait-foil-ring" aria-hidden="true" />
          <span className="portrait-face">
            <img src={portrait} alt="Anthony Mercadante" width="112" height="112" />
            <motion.span className="portrait-foil" aria-hidden="true" style={{ backgroundImage: foil }} />
            <motion.span className="portrait-sheen" aria-hidden="true" style={{ backgroundImage: sheen }} />
          </span>
          <span className="portrait-arrow" aria-hidden="true">
            ↗
          </span>
        </Link>
      </motion.div>
    </div>
  );
}

export default function HomePage() {
  return (
    <motion.div className="home" variants={pageVariants} initial="hidden" animate="visible">
      <div className="home-margin home-margin-left" aria-hidden="true">
        <span>Software / sound / life</span>
      </div>
      <div className="home-sheet">
        <div className="home-masthead">
          <span className="eyebrow">A personal index</span>
          <span className="eyebrow">
            Canada{' '}
            <span className="north-mark" aria-hidden="true">
              ↗
            </span>
          </span>
        </div>
        <header className="home-identity">
          <div>
            <h1>
              Anthony
              <br />
              <span className="aurora-text">Mercadante</span>
            </h1>
            <p className="home-role">Software &amp; AI Engineer</p>
          </div>
          <HoloPortrait />
        </header>
        <div className="home-intro">
          <p>
            AI systems and memory infrastructure by day.
            <br className="home-linebreak" /> Running, reading, and films the rest of the time.
          </p>
          <div className="home-current">
            <span className="status-dot" aria-hidden="true" />
            <span>
              Building AI systems at{' '}
              <a href="https://claritydc.com/" target="_blank" rel="noopener noreferrer">
                Clarity<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </span>
          </div>
          <a
            className="home-studio"
            href="https://www.raethexntechnologies.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Founder, Raethexn Technologies <ArrowUpRightIcon />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <nav className="home-elsewhere" aria-label="Find Anthony online">
          <div className="home-section-label">
            <h2 className="eyebrow">Elsewhere</h2>
            <span>Different sides of the same person.</span>
          </div>
          <div className="social-grid">
            {socialLinks.map(({ name, interest, href, icon, color }) => (
              <a
                key={name}
                href={href}
                className="social-tile glass-edge"
                style={{ '--tile-accent': color } as CSSProperties}
                target={name === 'Email' ? undefined : '_blank'}
                rel={name === 'Email' ? undefined : 'noopener noreferrer'}
                aria-label={`${name} — ${interest}${name === 'Email' ? '' : ' (opens in a new tab)'}`}
              >
                <span className="social-arrow" aria-hidden="true">
                  ↗
                </span>
                <span className="social-icon">{icon}</span>
                <span className="social-name">{name}</span>
                <span className="social-interest" aria-hidden="true">
                  {interest}
                </span>
              </a>
            ))}
          </div>
        </nav>
        <Link className="home-work" to="/portfolio">
          <span className="home-work-icon" aria-hidden="true">
            ↳
          </span>
          <span>
            <strong>The work</strong>
            <small>Projects, experience &amp; experiments</small>
          </span>
          <span className="home-work-arrow" aria-hidden="true">
            →
          </span>
        </Link>
        <footer className="home-footer">
          <nav aria-label="Get to know Anthony">
            <Link to="/about-me">About</Link>
            <Link to="/story">The story</Link>
            <Link to="/Music">My mixes</Link>
          </nav>
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </div>
      <div className="home-margin home-margin-right" aria-hidden="true">
        <span>One person. Many interests.</span>
      </div>
    </motion.div>
  );
}
