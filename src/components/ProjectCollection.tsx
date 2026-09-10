import { Link } from 'react-router-dom';
import PageShell, { Tags } from './PageShell';
import StoryLink from './StoryLink';

interface CollectionProject {
  title: string;
  route: string;
  imageUrl: string;
  imageSrcSet?: string;
  description: string;
  tags: string[];
}
interface ProjectCollectionProps {
  title: string;
  description: string;
  chapter: string;
  storyLabel: string;
  projects: CollectionProject[];
}

export default function ProjectCollection({
  title,
  description,
  chapter,
  storyLabel,
  projects,
}: ProjectCollectionProps) {
  return (
    <PageShell
      title={title}
      eyebrow="Project archive"
      description={description}
      parent={{ to: '/Projects', label: 'Projects' }}
      className="collection-page"
    >
      <div className={`project-card-grid ${projects.length === 1 ? 'single-project' : ''}`}>
        {projects.map(({ title, route, imageUrl, imageSrcSet, description, tags }, index) => (
          <Link className="project-card" to={route} key={route}>
            <div className="project-card-image">
              <img
                src={imageUrl}
                srcSet={imageSrcSet}
                sizes="(max-width: 767px) calc(100vw - 44px), (max-width: 1200px) 42vw, 510px"
                alt=""
                width="640"
                height="400"
                loading="lazy"
              />
              <span className="project-card-open" aria-hidden="true">
                ↗
              </span>
            </div>
            <div className="project-card-body">
              <span className="entry-number" aria-hidden="true">
                0{index + 1}
              </span>
              <h2>{title}</h2>
              <p>{description}</p>
              <Tags items={tags} />
              <span className="project-card-read">
                Explore project <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
      <aside className="collection-origin">
        <p className="eyebrow">How this started</p>
        <StoryLink chapter={chapter} label={storyLabel} />
      </aside>
    </PageShell>
  );
}
