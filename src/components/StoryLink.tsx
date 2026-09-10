import { Link } from 'react-router-dom';
import { chapterById } from '../pages/Story/storyData';

interface StoryLinkProps {
  chapter: string;
  label?: string;
  variant?: 'pill' | 'inline';
  className?: string;
}

export default function StoryLink({
  chapter,
  label = 'How I got here',
  variant = 'pill',
  className = '',
}: StoryLinkProps) {
  const c = chapterById(chapter);
  if (!c) return null;
  return (
    <Link
      to={`/story#${c.id}`}
      className={`story-link ${variant === 'inline' ? 'story-link-inline' : ''} ${className}`}
    >
      <span className="story-link-mark" aria-hidden="true">
        ↳
      </span>
      {variant === 'inline' ? (
        <span>
          The story <span className="story-link-chapter">/ {c.railLabel}</span>
        </span>
      ) : (
        <span>
          {label}
          <span className="story-link-chapter"> / {c.railLabel}</span>
        </span>
      )}
      <span className="story-link-arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
