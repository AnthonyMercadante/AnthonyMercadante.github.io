import { Link } from 'react-router-dom';
import PageShell, { Tags } from '../../components/PageShell';
import { ArrowUpRightIcon } from '../../components/SocialIcons';
import { chapters, photos } from '../Story/storyData';
import { featuredProjects, archiveCategories } from '../../data/projects';
import { openMemory } from '../../data/openMemory';

const archivePhotos = ['the-workbench', 'metalworks-studio-6', 'xr-desk-day-one'].map(
  (slug) => photos[slug],
);
const entries = [
  {
    label: 'Projects',
    to: '/Projects',
    detail: 'Open-source systems, XR simulations, and experiments.',
    meta: `${featuredProjects.length} featured repos / ${archiveCategories.length} collections`,
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
      description="AI systems, memory infrastructure, and interactive worlds. Different tools, the same instinct to build."
      className="portfolio-page"
      parent={{ to: '/', label: 'The surface' }}
    >
      <div className="portfolio-layout">
        <section className="featured-project" aria-labelledby="featured-title">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Currently building
          </p>
          <Link to={openMemory.route} className="featured-title-link">
            <h2 id="featured-title">OpenMemory</h2>
            <ArrowUpRightIcon />
            <span className="sr-only"> case study</span>
          </Link>
          <p className="featured-thesis">{openMemory.thesis}</p>
          <p>
            Bring ChatGPT, Claude, and Gemini exports into a local history you can question and
            trace back to source. Built on deeper work in cross-agent memory, retrieval, and
            ownership.
          </p>
          <Tags items={openMemory.tags} label="Project themes" />
          <Link className="text-link featured-case-link" to={openMemory.route}>
            Read the project story <span aria-hidden="true">→</span>
          </Link>
          <div className="featured-footnote">
            <span>Raethexn Technologies</span>
            <a href={openMemory.repository} target="_blank" rel="noopener noreferrer">
              GitHub <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
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
