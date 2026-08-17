import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../animations';
import type { Track } from '../pages/Story/storyData';

const trackUrl = (slug: string) => `${process.env.PUBLIC_URL}/story/audio/${slug}.m4a`;

const fmt = (seconds: number) => {
  if (!isFinite(seconds) || seconds < 0) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
};

const attributionLabel: Record<Track['attribution'], string> = {
  tagged: 'metadata intact',
  filename: 'named file',
  unattributed: 'no metadata',
};

/**
 * The surviving-audio player for the Metalworks chapter.
 *
 * One shared <audio> element for the whole list, so starting a track always
 * stops the previous one, and `preload="none"` so that opening the page does not
 * pull 53 MB of AAC down the wire. Seeking is wired through a range input rather
 * than a custom-drawn bar because that gets keyboard and screen-reader support
 * for free.
 */
const TrackList: React.FC<{ tracks: Track[] }> = ({ tracks }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  /** Real duration off the decoded file; falls back to the catalogued value. */
  const [loadedDuration, setLoadedDuration] = useState(0);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const onTime = () => setPosition(el.currentTime);
    const onMeta = () => setLoadedDuration(el.duration);
    const onEnd = () => {
      setPlaying(false);
      setPosition(0);
    };

    el.addEventListener('timeupdate', onTime);
    el.addEventListener('loadedmetadata', onMeta);
    el.addEventListener('ended', onEnd);
    return () => {
      el.removeEventListener('timeupdate', onTime);
      el.removeEventListener('loadedmetadata', onMeta);
      el.removeEventListener('ended', onEnd);
    };
  }, []);

  /**
   * play() rejects if the browser blocks it or the media fails to decode. Reset
   * the button rather than leaving it showing a pause icon over silence.
   */
  const start = (el: HTMLAudioElement) => {
    setPlaying(true);
    el.play().catch(() => setPlaying(false));
  };

  const toggle = (track: Track) => {
    const el = audioRef.current;
    if (!el) return;

    if (activeSlug === track.slug) {
      if (el.paused) {
        start(el);
      } else {
        el.pause();
        setPlaying(false);
      }
      return;
    }

    // Switching tracks: point the single element at the new source.
    setActiveSlug(track.slug);
    setPosition(0);
    setLoadedDuration(0);
    el.src = trackUrl(track.slug);
    start(el);
  };

  const seek = (value: number) => {
    const el = audioRef.current;
    if (!el) return;
    el.currentTime = value;
    setPosition(value);
  };

  return (
    <div className="space-y-2">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption -- instrumental archive audio */}
      <audio ref={audioRef} preload="none" />

      {tracks.map((track) => {
        const isActive = activeSlug === track.slug;
        const isPlaying = isActive && playing;
        const duration = isActive && loadedDuration ? loadedDuration : track.duration;

        return (
          <motion.div
            key={track.slug}
            variants={itemVariants}
            className={`glass-card p-4 transition-colors ${
              isActive ? 'border-fuchsia-400/25 bg-fuchsia-400/[0.04]' : 'glass-card-hover'
            }`}
          >
            <div className="flex items-start gap-3.5">
              <button
                onClick={() => toggle(track)}
                aria-label={`${isPlaying ? 'Pause' : 'Play'} ${track.title}`}
                className={`shrink-0 mt-0.5 flex items-center justify-center w-9 h-9 rounded-full border transition-all ${
                  isActive
                    ? 'border-fuchsia-400/40 bg-fuchsia-400/10 text-fuchsia-300'
                    : 'border-white/[0.10] bg-white/[0.03] text-zinc-400 hover:text-white hover:border-white/25'
                }`}
              >
                {isPlaying ? (
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                    <rect x="6" y="5" width="4" height="14" rx="1" />
                    <rect x="14" y="5" width="4" height="14" rx="1" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                    <path d="M8 5l11 7-11 7V5z" />
                  </svg>
                )}
              </button>

              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <h4 className="text-sm font-medium text-white">{track.title}</h4>
                  {track.alias && (
                    <span className="text-[10px] font-mono text-fuchsia-300/90 border border-fuchsia-400/20 rounded px-1.5 py-px">
                      {track.alias}
                    </span>
                  )}
                  <span className="text-[11px] font-mono text-zinc-600 tabular-nums ml-auto">
                    {fmt(duration)}
                  </span>
                </div>

                <p className="text-[11px] font-mono text-zinc-500 mt-1">
                  {track.when} · {track.source}
                </p>

                <p className="text-xs text-zinc-400 leading-relaxed mt-2">{track.note}</p>

                {/* Scrubber, only mounted for the active track */}
                {isActive && (
                  <div className="flex items-center gap-2.5 mt-3">
                    <span className="text-[10px] font-mono text-zinc-500 tabular-nums w-8">
                      {fmt(position)}
                    </span>
                    <input
                      type="range"
                      min={0}
                      max={duration || 0}
                      step={0.5}
                      value={Math.min(position, duration || 0)}
                      onChange={(e) => seek(Number(e.target.value))}
                      aria-label={`Seek within ${track.title}`}
                      className="flex-1 h-1 appearance-none rounded-full bg-white/10 accent-fuchsia-400 cursor-pointer
                                 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3
                                 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full
                                 [&::-webkit-slider-thumb]:bg-fuchsia-400
                                 [&::-webkit-slider-thumb]:shadow-[0_0_10px_2px_rgba(232,121,249,0.5)]"
                    />
                    <span className="text-[10px] font-mono text-zinc-600 tabular-nums w-8 text-right">
                      -{fmt(Math.max(0, (duration || 0) - position))}
                    </span>
                  </div>
                )}

                <p className="text-[10px] font-mono text-zinc-700 mt-2">
                  {attributionLabel[track.attribution]}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default TrackList;
