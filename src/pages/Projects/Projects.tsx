import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LandscapeOverlay from '../../components/LandscapeOverlay';
import BackButton from '../../components/BackButton';
import StoryLink from '../../components/StoryLink';
import { motion } from 'framer-motion';
import { pageVariants, containerVariants, itemVariants, headerVariants, cardTap } from '../../animations';

import ProjectIconImage from '../../assets/images/VRProjectsIcon.png';
import ProjectIconImage2 from '../../assets/images/BotProjects.png';
import ProjectIconImage3 from '../../assets/images/ReactProjectIcon.png';
import ProjectIconImage4 from '../../assets/images/Machine Learning.webp';
import ProjectIconImage6 from '../../assets/images/video-games-projects.png';

const langColors: Record<string, string> = {
  PHP: 'bg-indigo-400',
  Python: 'bg-yellow-400',
  'C#': 'bg-purple-400',
  TypeScript: 'bg-blue-400',
};

/**
 * `chapter` is the id of the /story chapter this work came out of, where there
 * is one. The story links out to the project pages; these are the way back.
 */
const featuredProjects = [
  {
    name: 'OpenMemory',
    lang: 'PHP',
    tags: ['ICP', 'AI Memory', 'Knowledge Graph'],
    url: 'https://github.com/Raethexn-Technologies/OpenMemory',
    studio: true,
    chapter: 'clarity',
  },
  {
    name: 'AircraftIdentificationAI',
    lang: 'Python',
    tags: ['PyTorch', 'CNN', 'RCAF Partnership'],
    url: 'https://github.com/AnthonyMercadante/AircraftIdentificationAI',
    studio: false,
    chapter: 'research',
  },
  {
    name: 'FlowChannel-XR',
    lang: 'C#',
    tags: ['Unity', 'XR', 'Simulation'],
    url: 'https://github.com/AnthonyMercadante/FlowChannel-XR',
    studio: false,
    chapter: 'xr-lab',
  },
  {
    name: 'nl2sql-poc',
    lang: 'Python',
    tags: ['NLP', 'LLM', 'SQL'],
    url: 'https://github.com/AnthonyMercadante/nl2sql-poc',
    studio: false,
  },
  {
    name: 'StockPeek',
    lang: 'Python',
    tags: ['CLI', 'Finance'],
    url: 'https://github.com/AnthonyMercadante/StockPeek',
    studio: false,
    // The markets became an interest in the same lockdown that sent me back to software.
    chapter: 'back-to-software',
  },
];

const archiveCategories = [
  { title: 'Game Projects', route: '/Games/Void', imageUrl: ProjectIconImage6, chapter: 'the-lean-year' },
  { title: 'VR Projects', route: '/XRDeveloper', imageUrl: ProjectIconImage, chapter: 'xr-lab' },
  { title: 'Bot Projects', route: '/Bots', imageUrl: ProjectIconImage2, chapter: 'the-bot' },
  { title: 'React Native Projects', route: '/ReactProjects', imageUrl: ProjectIconImage3, chapter: 'the-hand-coded-years' },
  { title: 'Machine Learning Projects', route: '/MachineLearningProjects', imageUrl: ProjectIconImage4, chapter: 'research' },
];

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current shrink-0" aria-hidden>
    <path d="M12 0a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.57v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.82 1.32 3.51 1 .11-.8.42-1.32.76-1.62-2.66-.31-5.46-1.34-5.46-5.95 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.57.12-3.27 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.28-1.55 3.28-1.23 3.28-1.23.66 1.7.24 2.96.12 3.27.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.63-5.47 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57A12 12 0 0 0 12 0z" />
  </svg>
);

const Projects = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="h-screen flex flex-col px-6 py-8 text-white overflow-y-auto"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <BackButton />

      <div className="max-w-4xl mx-auto w-full flex flex-col h-full pt-2">
        <motion.div className="mb-5" variants={headerVariants} initial="hidden" animate="visible">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">Projects</h1>
          <p className="text-sm text-zinc-500 font-mono mt-1">Open-source repositories and project archive</p>
          <p className="text-xs text-zinc-600 mt-2">
            Most of these have a year and a room behind them — follow the small links through to{' '}
            <Link to="/story" className="text-zinc-400 hover:text-white underline decoration-white/20 underline-offset-2 transition-colors">
              the story
            </Link>.
          </p>
        </motion.div>

        <motion.div
          /* min-h-0 + an explicit `minmax(0, 1fr)` row: without both, the grid
             sizes itself to its content and the two-line rows push the last
             repo off the bottom of the screen. */
          className="flex-1 min-h-0 grid grid-cols-5 grid-rows-1 gap-4 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Featured repos — 3 columns */}
          <motion.div
            className="glass-card col-span-3 flex flex-col overflow-hidden"
            variants={itemVariants}
          >
            <div className="px-5 py-3 border-b border-white/[0.08] bg-white/[0.02] shrink-0">
              <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Open Source</p>
            </div>
            <div className="flex-1 min-h-0 flex flex-col divide-y divide-white/[0.06]">
              {featuredProjects.map(({ name, lang, tags, url, studio, chapter }) => (
                /*
                  The repo link is an overlay covering the row rather than a
                  wrapper around it: the story pill is itself a link, and an
                  anchor cannot legally sit inside another anchor. The row stays
                  clickable end to end, and the pill sits above it.
                */
                <motion.div
                  key={name}
                  className="relative flex-1 flex items-center gap-3 px-5 py-2 transition-colors group"
                  whileHover={{ backgroundColor: 'rgba(39,39,42,0.6)' }}
                  transition={{ duration: 0.15 }}
                >
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0"
                    aria-label={`${name} on GitHub`}
                  />
                  <div className="relative min-w-0 flex-1 flex flex-col items-start gap-1 pointer-events-none">
                    <span className="inline-flex items-center gap-2 max-w-full">
                      <span className="font-mono font-medium text-sm text-white group-hover:text-cyan-400 transition-colors truncate">
                        {name}
                      </span>
                      {studio && (
                        <span className="text-xs text-cyan-400/70 border border-cyan-400/30 px-1.5 py-0.5 rounded-full font-mono shrink-0 leading-none">
                          studio
                        </span>
                      )}
                      <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors shrink-0">
                        <GitHubIcon />
                      </span>
                    </span>
                    {chapter && <StoryLink chapter={chapter} variant="inline" className="pointer-events-auto" />}
                  </div>
                  <div className="relative flex items-center gap-2 shrink-0 pointer-events-none">
                    <div className="flex items-center gap-1">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${langColors[lang] ?? 'bg-zinc-400'}`} />
                      <span className="text-xs text-zinc-500 font-mono">{lang}</span>
                    </div>
                    <div className="hidden md:flex flex-wrap gap-1 justify-end">
                      {tags.map((tag) => (
                        <span key={tag} className="text-xs text-zinc-600 bg-zinc-800/60 border border-zinc-700/40 px-1.5 py-0.5 rounded font-mono leading-none">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Archive — 2 columns */}
          <motion.div
            className="glass-card col-span-2 flex flex-col overflow-hidden"
            variants={itemVariants}
          >
            <div className="px-5 py-3 border-b border-white/[0.08] bg-white/[0.02] shrink-0">
              <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Archive</p>
            </div>
            <div className="flex-1 min-h-0 flex flex-col divide-y divide-white/[0.06]">
              {archiveCategories.map(({ title, route, imageUrl, chapter }) => (
                <motion.div
                  key={route}
                  className="relative flex-1 flex items-center gap-4 px-5 py-2 transition-colors group text-left"
                  whileHover={{ backgroundColor: 'rgba(39,39,42,0.6)' }}
                  whileTap={cardTap}
                  transition={{ duration: 0.15 }}
                >
                  <button
                    onClick={() => navigate(route)}
                    className="absolute inset-0"
                    aria-label={`Open ${title}`}
                  />
                  <img
                    src={imageUrl}
                    alt={title}
                    className="relative w-8 h-8 rounded-lg object-cover opacity-70 group-hover:opacity-100 transition-opacity shrink-0 pointer-events-none"
                  />
                  <div className="relative min-w-0 flex-1 flex flex-col items-start gap-1 pointer-events-none">
                    <span className="text-sm text-zinc-300 group-hover:text-white transition-colors max-w-full truncate">
                      {title}
                    </span>
                    <StoryLink chapter={chapter} variant="inline" className="pointer-events-auto" />
                  </div>
                  {/* Follows the row's hover rather than its own, now that the
                      click target is the overlay behind it. */}
                  <span className="relative text-zinc-600 text-sm shrink-0 self-center pointer-events-none transition-all duration-150 group-hover:text-zinc-400 group-hover:translate-x-0.5">
                    →
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>

      <LandscapeOverlay />
    </motion.div>
  );
};

export default Projects;
