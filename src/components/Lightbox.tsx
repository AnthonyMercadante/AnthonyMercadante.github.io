import React, { useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Photo } from '../pages/Story/storyData';
import { ARCHIVE_CAMERA } from '../pages/Story/storyData';

interface LightboxProps {
  /** The ordered set the viewer can arrow through. */
  photos: Photo[];
  /** Index into `photos`, or null when closed. */
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const photoUrl = (slug: string) => `${process.env.PUBLIC_URL}/story/photos/${slug}.jpg`;

/**
 * Full-bleed photo viewer for the story archive. Deliberately keyboard-first:
 * these are captioned archival images, so people read them one at a time rather
 * than skim a grid.
 */
const Lightbox: React.FC<LightboxProps> = ({ photos, index, onClose, onNavigate }) => {
  const open = index !== null;
  const photo = open ? photos[index as number] : null;

  const step = useCallback(
    (delta: number) => {
      if (index === null) return;
      // Wrap, so arrowing off either end stays inside the set.
      onNavigate((index + delta + photos.length) % photos.length);
    },
    [index, photos.length, onNavigate]
  );

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };

    window.addEventListener('keydown', onKey);
    // Stop the page behind the overlay from scrolling under the viewer.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose, step]);

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-[#050507]/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={photo.title}
          onClick={onClose}
        >
          {/* Chrome */}
          <div className="flex items-center justify-between px-5 py-4 shrink-0">
            <span className="text-[11px] font-mono text-zinc-500 tabular-nums">
              {(index as number) + 1} / {photos.length}
            </span>
            <button
              onClick={onClose}
              aria-label="Close photo"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400 hover:text-white hover:border-white/25 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Image */}
          <div className="flex-1 min-h-0 flex items-center justify-center px-4 sm:px-16">
            <motion.img
              key={photo.slug}
              src={photoUrl(photo.slug)}
              alt={photo.caption}
              className="max-h-full max-w-full object-contain rounded-lg shadow-[0_24px_80px_-20px_rgba(0,0,0,0.9)]"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Caption */}
          <div
            className="shrink-0 px-5 sm:px-8 py-5 max-w-3xl mx-auto w-full text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-baseline gap-3 flex-wrap">
              <h3 className="text-base font-medium text-white">{photo.title}</h3>
              <time dateTime={photo.date} className="text-[11px] font-mono text-cyan-400/80">
                {photo.dateLabel}
              </time>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mt-2">{photo.caption}</p>
            <p className="text-[10px] font-mono text-zinc-700 mt-3">
              {photo.date < '2015' ? `Shot on ${ARCHIVE_CAMERA}` : 'Shot on Samsung Galaxy Tab S7'}
            </p>
          </div>

          {/* Arrows — hidden from AT since keyboard nav is already wired */}
          {photos.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); step(-1); }}
                aria-label="Previous photo"
                className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400 hover:text-white hover:border-white/25 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); step(1); }}
                aria-label="Next photo"
                className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400 hover:text-white hover:border-white/25 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
