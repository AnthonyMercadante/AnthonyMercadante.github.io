import { Link } from 'react-router-dom';
import PageShell, { Tags } from '../../components/PageShell';
import StoryLink from '../../components/StoryLink';
import { featuredProjects, archiveCategories } from '../../data/projects';

const descriptions: Record<string, string> = {
  OpenMemory: 'Portable AI memory with Physarum-inspired graph dynamics.',
  AircraftIdentificationAI: 'Computer vision for historical aircraft identification.',
  'FlowChannel-XR': 'An open-channel water flow simulation for engineering education.',
  'nl2sql-poc': 'A proof of concept for natural language to SQL.',
  StockPeek: 'A command-line project for exploring financial data.',
};
const caseStudies: Record<string, string> = {
  AircraftIdentificationAI: '/AircraftIdentifierAI',
  'FlowChannel-XR': '/OpenFlowMachine',
};

export default function Projects() {
  return (
    <PageShell
      title="Projects"
      eyebrow="Built / explored / archived"
      description="Open-source repositories and a growing record of experiments. Most have a year and a room behind them."
    >
      <section aria-labelledby="open-source-heading">
        <div className="section-heading">
          <h2 id="open-source-heading" className="eyebrow">
            Open source
          </h2>
          <span className="mono">{featuredProjects.length} repositories</span>
        </div>
        <div className="repository-list">
          {featuredProjects.map(({ name, lang, tags, url, studio, chapter }, i) => (
            <article key={name} className="repository-row">
              <span className="entry-number" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="repository-body">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repository-title"
                >
                  <h3>{name}</h3>
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only"> on GitHub (opens in a new tab)</span>
                </a>
                <p>{descriptions[name]}</p>
                <Tags items={[lang, ...tags]} />
              </div>
              <div className="repository-context">
                {studio && <span className="studio-label">Raethexn Technologies</span>}
                {caseStudies[name] && (
                  <Link className="text-link" to={caseStudies[name]}>
                    Case study <span aria-hidden="true">→</span>
                  </Link>
                )}
                {chapter && <StoryLink chapter={chapter} variant="inline" />}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="project-collections" aria-labelledby="collections-heading">
        <div className="section-heading">
          <h2 id="collections-heading" className="eyebrow">
            Project archive
          </h2>
          <span>Choose a thread</span>
        </div>
        <div className="collection-index">
          {archiveCategories.map(({ title, route, imageUrl, chapter }) => (
            <article key={route}>
              <Link to={route} className="collection-index-link">
                <img src={imageUrl} alt="" width="56" height="56" loading="lazy" />
                <h3>{title}</h3>
                <span aria-hidden="true">↗</span>
              </Link>
              <StoryLink chapter={chapter} variant="inline" />
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
