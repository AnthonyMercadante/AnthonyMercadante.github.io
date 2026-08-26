import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  unattributedTrackSlugs,
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
    'Software and AI engineer. Built his first computer from scratch in the summer of 2009 at thirteen, spent 2009–2014 salvaging and rebuilding hardware, worked as an audio engineer and music producer from 2016 to 2020 under the aliases Synth Rider and M E R C S — including studio work in Toronto and Los Angeles — returned to software development in 2020, worked as an XR Developer in Mohawk College\'s XR Department from 2023, ran applied computer-vision research at the college in 2023–2024, and has worked as an AI engineer since July 2025.',
  knowsAbout: [
    'Computer hardware assembly and repair',
    'Electronics and circuit prototyping',
    'Audio engineering',
    'Digital music production',
    'Signal chain and gain staging',
    'Studio acoustic treatment and room design',
    'Spatial and binaural audio for XR',
    'Philosophy',
    'Software development',
    'Virtual and mixed reality development',
    'Unity and real-time 3D',
    '3D printing and rapid prototyping',
    'Computer vision and model training',
    'AI systems',
    'Large language model application development',
    'Self-directed investing',
  ],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'George Brown College', description: 'Game Programming, Casa Loma campus, 2015. Left after one semester.' },
    { '@type': 'CollegeOrUniversity', name: 'Mohawk College', description: 'Information Technology, 2015–2016. Left after one semester.' },
    { '@type': 'CollegeOrUniversity', name: 'Metalworks Institute of Sound and Music Production', description: 'Audio Engineering and Digital Music Production, completed.' },
    { '@type': 'CollegeOrUniversity', name: 'Humber College', description: 'General Arts and Science, major in philosophy, 2017–2018. Studied concurrently with working in music.' },
    { '@type': 'CollegeOrUniversity', name: 'Mohawk College', description: 'Software Development, 2020–2025. Graduated June 19, 2025 with two diplomas, including applied research credits earned on a computer-vision project with Professor Steven Adams.' },
  ],
  hasOccupation: [
    { '@type': 'Occupation', name: 'Audio Engineer and Music Producer', occupationalCategory: 'Music', description: 'Active 2016–2020 as Synth Rider (retro/synthwave) and M E R C S (bass music). Studio work in Toronto, and in Los Angeles in December 2018 with producer Daxz (Jahmar Carter).' },
    { '@type': 'Occupation', name: 'XR Developer', occupationalCategory: 'Software Engineering', description: 'Mohawk College XR Department, from January 2023. Built a VR cell tower climbing and repair simulator with Korol Contracting, demonstrated at the STAC conference in March 2023, and an electric-vehicle careers experience for the Ontario Vehicle Innovation Network (OVIN). Departmental lead on spatial and binaural audio.' },
    { '@type': 'Occupation', name: 'Applied Researcher', occupationalCategory: 'Machine Learning', description: 'Mohawk College IdeaWorks, 2023–2024. Trained an aircraft identification model from scratch, without cloud infrastructure or a pretrained backbone, with Professor Steven Adams. Interviewed by CHCH in February 2024.' },
    { '@type': 'Occupation', name: 'Software and AI Engineer', occupationalCategory: 'Software Engineering', description: 'From 2020 onward. Built a real estate conversational agent against the OpenAI API in 2023, which led to an engineering role at basl.ai connecting it to live listing data. AI engineer at Clarity from July 2025.' },
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
  const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

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

  /**
   * The chapters overflow the nav rail several times over, so keep the active
   * chip in view —
   * otherwise by the LA chapter the rail is still showing 2009 and the
   * highlight is scrolled off somewhere to the left.
   */
  useEffect(() => {
    const chip = navRefs.current[activeChapter];
    const rail = chip?.parentElement?.parentElement;
    if (!chip || !rail) return;

    const chipMid = chip.offsetLeft + chip.offsetWidth / 2;
    rail.scrollTo({ left: chipMid - rail.clientWidth / 2, behavior: 'smooth' });
  }, [activeChapter]);

  const openLightbox = (chapterId: string, index: number) => {
    setLightboxChapter(chapterId);
    setLightboxIndex(index);
  };

  /** Slug -> object lookups, so chapters can name their media by slug. */
  const trackBySlug = useMemo(() => new Map(tracks.map((t) => [t.slug, t])), []);
  const clipBySlug = useMemo(() => new Map(clips.map((c) => [c.slug, c])), []);
  const salvageTracks = useMemo(
    () => unattributedTrackSlugs.map((s) => trackBySlug.get(s)).filter((t): t is NonNullable<typeof t> => !!t),
    [trackBySlug]
  );

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
              Origins · 2009 — 2025
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
              This is the long version, assembled from what survived: seventy-three photographs
              pulled off old phones, eleven audio files that outlived the laptops they were made on,
              and eight video clips. Every date here was recovered from file metadata rather than
              from memory, so the timeline is the machine&apos;s account, not mine — and in one case
              it reunited a photograph and a recording from the same night, seven years after both
              were forgotten.
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
                    ref={(el) => { navRefs.current[c.id] = el; }}
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
          const chapterTracks = (chapter.tracks ?? [])
            .map((s) => trackBySlug.get(s))
            .filter((t): t is NonNullable<typeof t> => !!t);
          const chapterClips = (chapter.clips ?? [])
            .map((s) => clipBySlug.get(s))
            .filter((c): c is NonNullable<typeof c> => !!c);

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

              {/* Out to the project pages that cover this work technically */}
              {(chapter.links?.length ?? 0) > 0 && (
                <motion.div variants={itemVariants} className="mt-5 flex flex-wrap gap-2">
                  {chapter.links!.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-mono transition-colors ${a.border} ${a.text} hover:bg-white/[0.06]`}
                    >
                      {link.label}
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  ))}
                </motion.div>
              )}

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

              {/* Audio belonging to this chapter, sitting next to its photographs */}
              {chapterTracks.length > 0 && (
                <>
                  <motion.div variants={itemVariants} className="mt-7 space-y-2">
                    <SectionLabel>
                      {chapterTracks.length} surviving {chapterTracks.length === 1 ? 'recording' : 'recordings'}
                    </SectionLabel>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      Transcoded from the original masters. Nothing has been retitled or re-attributed
                      to look tidier than the evidence allows.
                    </p>
                  </motion.div>
                  <motion.div variants={containerVariants} className="mt-3">
                    <TrackList tracks={chapterTracks} />
                  </motion.div>
                </>
              )}

              {/* Video belonging to this chapter */}
              {chapterClips.length > 0 && (
                <motion.div variants={itemVariants} className="mt-7 space-y-2.5">
                  <SectionLabel>
                    {chapterClips.length === 1 ? 'Video' : `Video · ${chapterClips.length} clips`}
                  </SectionLabel>
                  <div className="grid grid-cols-1 gap-3">
                    {chapterClips.map((clip) => (
                      <div key={clip.slug} className="glass-card overflow-hidden">
                        {/*
                          Phone-shot vertical clips get a fixed height and their
                          natural width instead of filling the column: 9:16 across
                          a text column is absurd, and cropping to 16:9 throws
                          away most of the frame.
                        */}
                        <video
                          controls
                          preload="none"
                          playsInline
                          poster={posterUrl(clip.slug)}
                          className={
                            clip.portrait
                              ? 'mx-auto h-[min(70vh,520px)] max-w-full bg-black'
                              : `w-full bg-black object-cover ${clip.square ? 'aspect-square' : 'aspect-video'}`
                          }
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
                          <p className={`text-[11px] font-mono mt-1 ${a.text} opacity-70`}>{clip.when}</p>
                          <p className="text-xs text-zinc-400 leading-relaxed mt-2">{clip.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* The undateable remainder, parked after the last music chapter */}
              {chapter.id === 'los-angeles' && salvageTracks.length > 0 && (
                <>
                  <motion.div variants={itemVariants} className="mt-9 space-y-2">
                    <SectionLabel>The rest of what survived · {salvageTracks.length} files</SectionLabel>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      These carry no date, no title worth the name, and no alias — just a filename and
                      whatever the file format itself gives away. They could be from anywhere across the
                      four years. Grouped here because &ldquo;this is what was left on the drive&rdquo; is
                      the only label the evidence actually supports.
                    </p>
                  </motion.div>
                  <motion.div variants={containerVariants} className="mt-3">
                    <TrackList tracks={salvageTracks} />
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
              &ldquo;somehow wrong&rdquo; learned to debug systems by ear. Someone who studied philosophy
              at night learned to find the assumption holding up an argument.
            </p>
            <p className="text-[15px] leading-relaxed text-zinc-400">
              And three times — at George Brown, at Mohawk, and in a studio in Los Angeles with
              everything apparently going right — I left something that looked good on paper because I
              could see what it would actually cost. That turned out to be the most useful skill of the
              lot.
            </p>
            <p className="text-[15px] leading-relaxed text-zinc-400">
              Then a college lab where nobody had ten years of experience because the field was not
              ten years old, and where the only skill that separated people was whether they could
              teach themselves something quickly. Everything since — the research, the models, the
              engineering work — is that same skill, pointed somewhere new.
            </p>
            <p className="text-[15px] leading-relaxed text-zinc-400">
              None of it was a detour. It is the whole toolkit, and I use all of it every day.
            </p>
            <p className="text-xs font-mono text-zinc-600 pt-1">
              This chapter covers 2009 to July 2025. The rest — Raethexn Technologies and the
              current AI work — continues from here.
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
