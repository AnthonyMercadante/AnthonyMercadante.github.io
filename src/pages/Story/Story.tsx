import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import BackButton from '../../components/BackButton';
import LandscapeOverlay from '../../components/LandscapeOverlay';
import Lightbox from '../../components/Lightbox';
import TrackList from '../../components/TrackList';
import {
  chapters,
  photos,
  tracks,
  clips,
  stats,
  type Accent,
  type Photo,
} from './storyData';
import { pageVariants, containerVariants, itemVariants, headerVariants } from '../../animations';

/**
 * Accent classes are written out as complete literal strings because Tailwind
 * scans source text — a template like `text-${accent}-400` would never make it
 * into the built stylesheet.
 */
const accentClasses: Record<Accent, { text: string; rail: string; dot: string; border: string }> = {
  cyan: { text: 'text-cyan-400', rail: 'bg-cyan-400/60', dot: 'bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.5)]', border: 'border-cyan-400/20' },
  amber: { text: 'text-amber-400', rail: 'bg-amber-400/60', dot: 'bg-amber-400 shadow-[0_0_10px_2px_rgba(251,191,36,0.5)]', border: 'border-amber-400/20' },
  violet: { text: 'text-violet-400', rail: 'bg-violet-400/60', dot: 'bg-violet-400 shadow-[0_0_10px_2px_rgba(167,139,250,0.5)]', border: 'border-violet-400/20' },
  sky: { text: 'text-sky-400', rail: 'bg-sky-400/60', dot: 'bg-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.5)]', border: 'border-sky-400/20' },
  rose: { text: 'text-rose-400', rail: 'bg-rose-400/60', dot: 'bg-rose-400 shadow-[0_0_10px_2px_rgba(251,113,133,0.5)]', border: 'border-rose-400/20' },
  orange: { text: 'text-orange-400', rail: 'bg-orange-400/60', dot: 'bg-orange-400 shadow-[0_0_10px_2px_rgba(251,146,60,0.5)]', border: 'border-orange-400/20' },
  fuchsia: { text: 'text-fuchsia-400', rail: 'bg-fuchsia-400/60', dot: 'bg-fuchsia-400 shadow-[0_0_10px_2px_rgba(232,121,249,0.5)]', border: 'border-fuchsia-400/20' },
  emerald: { text: 'text-emerald-400', rail: 'bg-emerald-400/60', dot: 'bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.5)]', border: 'border-emerald-400/20' },
};

/** Minimal inline formatter for the `**bold**` / `*emphasis*` used in the prose. */
const INLINE = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
const renderInline = (text: string): React.ReactNode[] =>
  text
    .split(INLINE)
    .filter(Boolean)
    .map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-medium text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return (
          <em key={i} className="italic text-zinc-300">
            {part.slice(1, -1)}
          </em>
        );
      }
      return part;
    });

const thumbUrl = (slug: string) => `${process.env.PUBLIC_URL}/story/photos/thumb/${slug}.jpg`;
const videoUrl = (slug: string) => `${process.env.PUBLIC_URL}/story/video/${slug}.mp4`;
/** First-frame grab, so a `preload="none"` player still shows something. */
const posterUrl = (slug: string) => `${process.env.PUBLIC_URL}/story/video/${slug}.jpg`;

/**
 * Machine-readable version of the timeline. The stated goal for this page is
 * that it stays legible decades from now — including to automated readers — so
 * the same history is emitted as schema.org JSON-LD rather than living only in
 * prose.
 */
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Anthony Mercadante',
  birthDate: '1996',
  nationality: 'Canadian',
  jobTitle: 'Software & AI Engineer',
  url: 'https://anthonymercadante.github.io/',
  alternateName: ['Synth Rider', 'M E R C S'],
  description:
    'Software and AI engineer. Built his first computer from scratch in the summer of 2009 at thirteen, spent 2009–2014 salvaging and rebuilding hardware, worked as an audio engineer and music producer from 2016 to 2020 under the aliases Synth Rider and M E R C S, and returned to software development in 2020.',
  knowsAbout: [
    'Computer hardware assembly and repair',
    'Electronics and circuit prototyping',
    'Audio engineering',
    'Digital music production',
    'Signal chain and gain staging',
    'Software development',
    'AI systems',
    'Self-directed investing',
  ],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'George Brown College', description: 'Game Programming, Casa Loma campus, 2015. Left after one semester.' },
    { '@type': 'CollegeOrUniversity', name: 'Mohawk College', description: 'Information Technology, 2015–2016. Left after one semester.' },
    { '@type': 'CollegeOrUniversity', name: 'Metalworks Institute of Sound and Music Production', description: 'Audio Engineering and Digital Music Production, completed.' },
  ],
  hasOccupation: [
    { '@type': 'Occupation', name: 'Audio Engineer and Music Producer', occupationalCategory: 'Music', description: 'Active 2016–2020 as Synth Rider (retro/synthwave) and M E R C S (bass music).' },
    { '@type': 'Occupation', name: 'Software and AI Engineer', occupationalCategory: 'Software Engineering', description: 'From 2020 onward.' },
  ],
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <motion.p
    className="text-[11px] text-zinc-600 font-mono uppercase tracking-[0.18em]"
    variants={itemVariants}
  >
    {children}
  </motion.p>
);

const Story = () => {
  const [lightboxChapter, setLightboxChapter] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeChapter, setActiveChapter] = useState<string>(chapters[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  /** Resolved photo objects per chapter, so the lightbox can arrow within one era. */
  const chapterPhotos = useMemo(() => {
    const map: Record<string, Photo[]> = {};
    chapters.forEach((c) => {
      map[c.id] = c.photos.map((slug) => photos[slug]).filter(Boolean);
    });
    return map;
  }, []);

  // Highlight whichever chapter is currently under the sticky nav.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) setActiveChapter(visible[0].target.id);
      },
      // Bias the band toward the top of the viewport so the nav tracks reading position.
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const openLightbox = (chapterId: string, index: number) => {
    setLightboxChapter(chapterId);
    setLightboxIndex(index);
  };

  return (
    <motion.div
      className="min-h-screen text-white text-left"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <BackButton />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <header className="px-6 pt-20 pb-12 sm:pt-24">
        <motion.div className="max-w-2xl mx-auto space-y-6" variants={headerVariants} initial="hidden" animate="visible">
          <div className="space-y-3">
            <p className="text-[11px] font-mono text-cyan-400 uppercase tracking-[0.18em]">
              Origins · 2009 — 2020
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05] bg-gradient-to-br from-white via-zinc-100 to-zinc-500 bg-clip-text text-transparent">
              How I got here
            </h1>
          </div>

          <div className="space-y-4 text-[15px] leading-relaxed text-zinc-400">
            <p>
              I built my first computer from scratch in the summer of 2009, when I was thirteen. What
              happened after that was not a career plan — it was one obsession that kept finding new
              hardware to live in.
            </p>
            <p>
              This is the long version, assembled from what survived: twenty-three photographs pulled
              off old phones, eleven audio files that outlived the laptops they were made on, and two
              video clips. Every date here was recovered from file metadata rather than from memory,
              so the timeline is the machine&apos;s account, not mine.
            </p>
            <p className="text-zinc-500">
              My favourite thing in the world has always been to disappear into electronics.{' '}
              <span className="text-white">That has never once left me.</span>
            </p>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map(({ value, label }) => (
              <motion.div key={label} className="glass-card p-3.5" variants={itemVariants}>
                <div className="text-xl font-semibold text-white tabular-nums">{value}</div>
                <div className="text-[10px] font-mono text-zinc-500 leading-snug mt-1">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </header>

      {/* ── Sticky chapter nav ─────────────────────────────────── */}
      <nav
        aria-label="Chapters"
        className="sticky top-0 z-30 border-y border-white/[0.06] bg-[#050507]/85 backdrop-blur-md"
      >
        <div className="max-w-2xl mx-auto px-6">
          <ul className="flex gap-1 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {chapters.map((c) => {
              const a = accentClasses[c.accent];
              const isActive = activeChapter === c.id;
              return (
                <li key={c.id} className="shrink-0">
                  <a
                    href={`#${c.id}`}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-mono transition-colors ${
                      isActive ? `${a.text} bg-white/[0.06]` : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    <span className={`w-1 h-1 rounded-full ${isActive ? a.dot : 'bg-zinc-700'}`} />
                    {c.railLabel}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* ── Chapters ───────────────────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-6 py-12 space-y-20">
        {chapters.map((chapter, chapterNumber) => {
          const a = accentClasses[chapter.accent];
          const chapterPhotoSet = chapterPhotos[chapter.id];

          return (
            <motion.section
              key={chapter.id}
              id={chapter.id}
              ref={(el: HTMLElement | null) => { sectionRefs.current[chapter.id] = el; }}
              className="scroll-mt-20"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              {/* Chapter header */}
              <motion.div variants={itemVariants} className="space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
                  <span className={`text-[11px] font-mono ${a.text} tracking-wide`}>{chapter.era}</span>
                  <span className="text-[11px] font-mono text-zinc-700 ml-auto tabular-nums">
                    {String(chapterNumber + 1).padStart(2, '0')} / {String(chapters.length).padStart(2, '0')}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                  {chapter.title}
                </h2>
                <p className={`text-sm ${a.text} opacity-80`}>{chapter.subtitle}</p>
              </motion.div>

              {/* Prose */}
              <motion.div
                variants={itemVariants}
                className={`mt-5 space-y-4 text-[15px] leading-relaxed text-zinc-400 border-l pl-5 ${a.border}`}
              >
                {chapter.paragraphs.map((p, i) => (
                  <p key={i}>{renderInline(p)}</p>
                ))}
              </motion.div>

              {/* Photo grid */}
              {chapterPhotoSet.length > 0 && (
                <motion.div variants={itemVariants} className="mt-7 space-y-2.5">
                  <SectionLabel>
                    {chapterPhotoSet.length} photograph{chapterPhotoSet.length === 1 ? '' : 's'}
                  </SectionLabel>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {chapterPhotoSet.map((photo, i) => (
                      <button
                        key={photo.slug}
                        onClick={() => openLightbox(chapter.id, i)}
                        className={`group relative overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.02] hover:border-white/25 transition-colors ${
                          photo.wide ? 'col-span-2' : ''
                        } ${photo.wide ? 'aspect-[2/1]' : 'aspect-square'}`}
                        aria-label={`View: ${photo.title}`}
                      >
                        <img
                          src={thumbUrl(photo.slug)}
                          alt={photo.title}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-500"
                        />
                        {/* Caption scrim */}
                        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-2.5 pt-6 pb-2 text-left">
                          <span className="block text-[10px] font-medium text-white leading-tight truncate">
                            {photo.title}
                          </span>
                          <span className="block text-[9px] font-mono text-zinc-400 mt-px">
                            {photo.dateLabel}
                          </span>
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* The music archive lives inside the Metalworks chapter */}
              {chapter.id === 'metalworks' && (
                <>
                  <motion.div variants={itemVariants} className="mt-8 space-y-2.5">
                    <SectionLabel>The surviving audio · {tracks.length} files</SectionLabel>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      Transcoded from the original masters for the web. Source format and everything
                      knowable about each file is listed with it; nothing here has been retitled or
                      re-attributed to look tidier than the evidence allows.
                    </p>
                  </motion.div>

                  <motion.div variants={containerVariants} className="mt-3">
                    <TrackList tracks={tracks} />
                  </motion.div>

                  <motion.div variants={itemVariants} className="mt-8 space-y-2.5">
                    <SectionLabel>Video · {clips.length} clips</SectionLabel>
                    <div className="grid grid-cols-1 gap-3">
                      {clips.map((clip) => (
                        <div key={clip.slug} className="glass-card overflow-hidden">
                          <video
                            controls
                            preload="none"
                            playsInline
                            poster={posterUrl(clip.slug)}
                            className={`w-full bg-black object-cover ${clip.square ? 'aspect-square' : 'aspect-video'}`}
                            src={videoUrl(clip.slug)}
                          >
                            <track kind="captions" />
                          </video>
                          <div className="p-4">
                            <div className="flex items-baseline gap-2 flex-wrap">
                              <h4 className="text-sm font-medium text-white">{clip.title}</h4>
                              <span className="text-[11px] font-mono text-zinc-600 tabular-nums ml-auto">
                                {clip.duration}
                              </span>
                            </div>
                            <p className="text-[11px] font-mono text-fuchsia-300/70 mt-1">{clip.when}</p>
                            <p className="text-xs text-zinc-400 leading-relaxed mt-2">{clip.note}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </motion.section>
          );
        })}

        {/* ── Closing ──────────────────────────────────────────── */}
        <motion.section
          className="pt-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={itemVariants} className="glass-card p-6 space-y-4">
            <SectionLabel>The through-line</SectionLabel>
            <p className="text-[15px] leading-relaxed text-zinc-300">
              A boy who took apart other people&apos;s broken computers because he could not afford new
              ones learned to read hardware. A producer who spent four years chasing why a mix was
              &ldquo;somehow wrong&rdquo; learned to debug systems by ear. Someone who walked out of two
              college programs learned to trust a technical read over an institutional one.
            </p>
            <p className="text-[15px] leading-relaxed text-zinc-400">
              None of that was a detour. It is the whole toolkit, and I use all of it every day.
            </p>
            <p className="text-xs font-mono text-zinc-600 pt-1">
              This chapter covers 2009 to 2020. The rest — the software career, Raethexn Technologies,
              and the AI work — continues from here.
            </p>
          </motion.div>
        </motion.section>
      </div>

      <Lightbox
        photos={lightboxChapter ? chapterPhotos[lightboxChapter] : []}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />

      <LandscapeOverlay />
    </motion.div>
  );
};

export default Story;
