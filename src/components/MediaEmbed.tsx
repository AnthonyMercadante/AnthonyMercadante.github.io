import { useState } from 'react';

interface MediaEmbedProps {
  src: string;
  title: string;
  poster?: string;
  posterSrcSet?: string;
  availabilityNote?: string;
  provider?: 'YouTube' | 'SoundCloud';
}
/** Reserve the media frame; load the third-party player only on an intentional tap. */
export default function MediaEmbed({
  src,
  title,
  poster,
  posterSrcSet,
  availabilityNote,
  provider = 'YouTube',
}: MediaEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const embedUrl =
    provider === 'YouTube' ? src.replace('www.youtube.com', 'www.youtube-nocookie.com') : src;
  return (
    <div
      className={`media-embed media-${provider.toLowerCase()} ${availabilityNote ? 'media-unavailable' : ''}`}
    >
      {loaded ? (
        <iframe
          src={embedUrl}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          className="media-load"
          onClick={() => setLoaded(true)}
          aria-label={`${availabilityNote ? 'Check' : 'Load'} ${title} on ${provider}`}
        >
          {poster && (
            <img
              src={poster}
              srcSet={posterSrcSet}
              sizes="(max-width: 767px) 100vw, 50vw"
              alt=""
              loading="lazy"
            />
          )}
          <span className="media-play" aria-hidden="true">
            {availabilityNote ? (
              '↗'
            ) : (
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </span>
          <span className="media-caption">
            <strong>{title}</strong>
            <small>
              {availabilityNote ?? `Load ${provider} player`} <span aria-hidden="true">↗</span>
            </small>
          </span>
        </button>
      )}
      {loaded && (
        <a
          className="media-fallback"
          href={
            provider === 'YouTube'
              ? `https://www.youtube.com/watch?v=${src.split('/embed/')[1]?.split('?')[0]}`
              : src
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          Open on {provider} ↗
        </a>
      )}
    </div>
  );
}
