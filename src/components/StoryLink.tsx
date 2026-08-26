import React from 'react';
import { Link } from 'react-router-dom';
import { chapterById } from '../pages/Story/storyData';
import { accentClasses } from '../pages/Story/accents';

interface StoryLinkProps {
  /** Chapter id from storyData — e.g. 'xr-lab'. */
  chapter: string;
  /** The hook: one short line on why this page belongs to that chapter. */
  label?: string;
  /** 'pill' for prose pages, 'inline' for the tight card layouts. */
  variant?: 'pill' | 'inline';
  className?: string;
}

/**
 * The return leg of the /story cross-links.
 *
 * Chapters already point out to the project pages that cover their work
 * technically; this points back — from the project or the role to the chapter
 * it came out of. The chapter's own title, era and accent colour are read from
 * the data rather than passed in, so retitling a chapter can't strand a stale
 * label on a page nobody thought to update.
 */
const StoryLink = ({ chapter, label = 'How I got here', variant = 'pill', className = '' }: StoryLinkProps) => {
  const c = chapterById(chapter);
  if (!c) return null;

  const a = accentClasses[c.accent];

  if (variant === 'inline') {
    return (
      <Link
        to={`/story#${c.id}`}
        className={`group/story inline-flex max-w-full items-center gap-1.5 text-[10px] font-mono text-zinc-600 hover:text-zinc-300 transition-colors ${className}`}
      >
        <span className={`w-1 h-1 shrink-0 rounded-full ${a.dot}`} />
        <span className="truncate">
          story{' '}
          <span className={`${a.text} opacity-70 group-hover/story:opacity-100 transition-opacity`}>
            {c.railLabel}
          </span>
        </span>
        <span aria-hidden className="shrink-0 transition-transform group-hover/story:translate-x-0.5">→</span>
      </Link>
    );
  }

  return (
    <Link
      to={`/story#${c.id}`}
      className={`group/story inline-flex max-w-full items-center gap-2 rounded-full border ${a.border} bg-white/[0.03] px-3 py-1.5 text-[11px] font-mono text-zinc-400 hover:bg-white/[0.07] transition-colors ${className}`}
    >
      <span className={`w-1 h-1 shrink-0 rounded-full ${a.dot}`} />
      <span className="truncate text-zinc-400 group-hover/story:text-zinc-200 transition-colors">{label}</span>
      <span className="text-zinc-700" aria-hidden>·</span>
      <span className={`${a.text} truncate`}>{c.railLabel}</span>
      <span aria-hidden className="shrink-0 text-zinc-600 transition-transform group-hover/story:translate-x-0.5">→</span>
    </Link>
  );
};

export default StoryLink;
