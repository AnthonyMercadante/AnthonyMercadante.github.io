import { Link } from 'react-router-dom';
import PageShell, { Tags } from '../../components/PageShell';
import { ArrowUpRightIcon } from '../../components/SocialIcons';
import { chapters, photos } from '../Story/storyData';
import { featuredProjects, archiveCategories } from '../../data/projects';
import { openMemory } from '../../data/openMemory';
import { tikRune } from '../../data/tikRune';
import { nova } from '../../data/nova';

const archivePhotos = ['the-workbench', 'metalworks-studio-6', 'xr-desk-day-one'].map(
  (slug) => photos[slug],
);
const entries = [
  {
    label: 'Projects',
    to: '/Projects',
    detail: 'Open-source systems, XR simulations, and experiments.',
    meta: `${featuredProjects.length} featured projects / ${archiveCategories.length} collections`,
  },
  {
    label: 'Work experience',
    to: '/WorkExperience',
    detail: 'Industry roles in AI, XR, and full-stack engineering.',
    meta: 'Clarity / Raethexn / BASL.ai / Mohawk',
  },
  {
    label: 'Skills & stack',
    to: '/skills',
    detail: 'Languages, frameworks, AI tooling, and infrastructure.',
    meta: 'Tools of a continuing practice',
  },
  {
    label: 'About me',
    to: '/about-me',
    detail: 'Background, philosophy, and what drives the work.',
    meta: 'Engineer / Founder / Canada',
  },
];

export default function Portfolio() {
  return (
    <PageShell
      title="The work"
      eyebrow="Anthony Mercadante / Portfolio"
      description="AI systems, investment research, and interactive worlds. Different tools, the same instinct to build."
      className="portfolio-page"
      parent={{ to: '/', label: 'The surface' }}
    >
      <section
        className="featured-project glass-edge nova-feature"
        aria-labelledby="nova-feature-title"
      >
        <div>
          <p className="eyebrow">Featured engineering / AI & automation</p>
          <Link to={nova.route} className="featured-title-link">
            <h2 id="nova-feature-title">{nova.name}</h2>
            <span aria-hidden="true">→</span>
            <span className="sr-only"> case study</span>
          </Link>
          <p className="featured-thesis">{nova.subtitle}</p>
          <p>{nova.summary}</p>
          <Tags items={['Laravel', 'Vue 3', 'OpenAI', 'Cloud Run']} />
          <Link to={nova.route} className="text-link featured-case-link">
            Explore the case study <span aria-hidden="true">→</span>
          </Link>
        </div>
        <ol className="nova-feature-scope" aria-label="Nova engineering scope">
          <li>
            <span className="entry-number" aria-hidden="true">
              01
            </span>
            <div>
              <h3>Lead intelligence</h3>
              <p>Research, qualification, and evidence.</p>
            </div>
          </li>
          <li>
            <span className="entry-number" aria-hidden="true">
              02
            </span>
            <div>
              <h3>Real-time AI</h3>
              <p>Live voice and 38 business tools.</p>
            </div>
          </li>
          <li>
            <span className="entry-number" aria-hidden="true">
              03
            </span>
            <div>
              <h3>Cloud architecture</h3>
              <p>Application, workers, and infrastructure.</p>
            </div>
          </li>
        </ol>
      </section>
      <div className="portfolio-layout">
        <section className="featured-project glass-edge" aria-labelledby="featured-title">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Currently building
          </p>
          <a
            href={tikRune.url}
            className="featured-title-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 id="featured-title">TikRune</h2>
            <ArrowUpRightIcon />
            <span className="sr-only"> research page (opens in a new tab)</span>
          </a>
          <p className="featured-thesis">{tikRune.thesis}</p>
          <p>
            Research for long-term investors that starts from something happening in the world and
            follows it outward: which businesses it would change, which companies are exposed, and
            what evidence would strengthen or weaken the thesis. Canadian and TSX-focused.
          </p>
          <Tags items={tikRune.tags} label="Project themes" />
          <a
            className="text-link featured-case-link"
            href={tikRune.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read about the research <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <div className="featured-footnote">
            <span>Raethexn Technologies · In private development</span>
            <Link to={openMemory.route}>
              Previously: OpenMemory <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
        <nav className="explore-list" aria-label="Explore the work">
          {entries.map(({ label, to, detail, meta }, i) => (
            <Link key={to} to={to}>
              <span className="entry-number" aria-hidden="true">
                0{i + 1}
              </span>
              <span className="entry-body">
                <h2>{label}</h2>
                <p>{detail}</p>
                <small>{meta}</small>
              </span>
              <span className="entry-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </nav>
      </div>
      <Link to="/story" className="archive-invitation">
        <div className="archive-invitation-copy">
          <p className="eyebrow">The person behind the projects</p>
          <h2>
            How I got here<span aria-hidden="true"> ↗</span>
          </h2>
          <p>First builds, the salvage years, audio engineering, and everything that followed.</p>
          <span className="mono">
            2009–2025 · {chapters.length} chapters · {Object.keys(photos).length} photographs
          </span>
        </div>
        <div className="archive-contact-sheet" aria-hidden="true">
          {archivePhotos.map((photo) => (
            <img
              key={photo.slug}
              src={`${process.env.PUBLIC_URL}/story/photos/thumb/${photo.slug}.jpg`}
              width="160"
              height="180"
              alt=""
              loading="lazy"
            />
          ))}
        </div>
      </Link>
      <div className="portfolio-personal">
        <span>Outside the editor</span>
        <Link className="text-link" to="/Music">
          DJ mixes &amp; music <span aria-hidden="true">↗</span>
        </Link>
        <Link className="text-link" to="/Games/Void">
          VOID / a game in progress <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </PageShell>
  );
}
