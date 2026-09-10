import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Photo } from '../pages/Story/storyData';
import { ARCHIVE_CAMERA } from '../pages/Story/storyData';

interface LightboxProps {
  photos: Photo[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const pointerStart = useRef<number | null>(null);
  const [failed, setFailed] = useState(false);
  const open = index !== null;
  const photo = index === null ? null : photos[index];
  useEffect(() => setFailed(false), [photo?.slug]);
  useEffect(() => {
    const element = dialog.current;
    if (!element || !open) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    element.showModal();
    closeButton.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, [open]);
  const step = (delta: number) => {
    if (index !== null && photos.length)
      onNavigate((index + delta + photos.length) % photos.length);
  };

  return createPortal(
    <dialog
      ref={dialog}
      className="photo-dialog"
      aria-labelledby="photo-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === 'Tab') {
          const controls = dialog.current?.querySelectorAll<HTMLButtonElement>('button');
          const first = controls?.[0];
          const last = controls?.[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          step(1);
        }
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          step(-1);
        }
      }}
    >
      {photo && (
        <div className="photo-viewer">
          <div className="photo-toolbar">
            <span className="mono" aria-live="polite">
              {(index ?? 0) + 1} / {photos.length}
            </span>
            <div>
              {photos.length > 1 && (
                <>
                  <button onClick={() => step(-1)} aria-label="Previous photo">
                    ←
                  </button>
                  <button onClick={() => step(1)} aria-label="Next photo">
                    →
                  </button>
                </>
              )}
              <button ref={closeButton} onClick={onClose} aria-label="Close photo">
                ×
              </button>
            </div>
          </div>
          <div
            className="photo-stage"
            onClick={(event) => {
              if (event.target === event.currentTarget) onClose();
            }}
            onPointerDown={(event) => {
              pointerStart.current = event.clientX;
            }}
            onPointerUp={(event) => {
              if (pointerStart.current !== null) {
                const distance = event.clientX - pointerStart.current;
                if (Math.abs(distance) > 55) step(distance < 0 ? 1 : -1);
              }
              pointerStart.current = null;
            }}
            onPointerCancel={() => {
              pointerStart.current = null;
            }}
          >
            {failed ? (
              <p role="status">This photograph couldn’t load. Try another, or reopen it.</p>
            ) : (
              <img
                key={photo.slug}
                src={`${process.env.PUBLIC_URL}/story/photos/${photo.slug}.jpg`}
                alt={photo.caption}
                draggable={false}
                onError={() => setFailed(true)}
              />
            )}
          </div>
          <div className="photo-caption">
            <div>
              <h2 id="photo-title">{photo.title}</h2>
              <time dateTime={photo.date}>{photo.dateLabel}</time>
            </div>
            <p>{photo.caption}</p>
            <small>
              {photo.date < '2015' ? `Shot on ${ARCHIVE_CAMERA}` : 'Shot on Samsung Galaxy Tab S7'}
            </small>
          </div>
        </div>
      )}
    </dialog>,
    document.body,
  );
}
