import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
              Mercadante
            </h1>
            <p className="home-role">Software &amp; AI Engineer</p>
          </div>
          <Link className="home-portrait" to="/about-me" aria-label="About Anthony Mercadante">
            <img src={portrait} alt="Anthony Mercadante" width="112" height="112" />
            <span className="portrait-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        </header>
        <div className="home-intro">
          <p>
            AI systems and memory infrastructure by day.
            <br className="home-linebreak" /> Running, reading, and films the rest of the time.
          </p>
          <div className="home-current">
            <span className="status-dot" aria-hidden="true" />
            <span>
              Building AI systems at <Link to="/WorkExperience">Clarity</Link>
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
                className="social-tile"
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
