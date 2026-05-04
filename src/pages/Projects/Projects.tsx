import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandscapeOverlay from '../../components/LandscapeOverlay';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion';
import { pageVariants, containerVariants, itemVariants, headerVariants, backButtonVariants, cardTap } from '../../animations';

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

const featuredProjects = [
  {
    name: 'OpenMemory',
    lang: 'PHP',
    tags: ['ICP', 'AI Memory', 'Knowledge Graph'],
    url: 'https://github.com/Raethexn-Technologies/OpenMemory',
    studio: true,
  },
  {
    name: 'AircraftIdentificationAI',
    lang: 'Python',
    tags: ['PyTorch', 'CNN', 'RCAF Partnership'],
    url: 'https://github.com/AnthonyMercadante/AircraftIdentificationAI',
    studio: false,
  },
  {
    name: 'FlowChannel-XR',
    lang: 'C#',
    tags: ['Unity', 'XR', 'Simulation'],
    url: 'https://github.com/AnthonyMercadante/FlowChannel-XR',
    studio: false,
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
  },
];

const archiveCategories = [
  { title: 'Game Projects', route: '/Games/Void', imageUrl: ProjectIconImage6 },
  { title: 'VR Projects', route: '/XRDeveloper', imageUrl: ProjectIconImage },
  { title: 'Bot Projects', route: '/Bots', imageUrl: ProjectIconImage2 },
  { title: 'React Native Projects', route: '/ReactProjects', imageUrl: ProjectIconImage3 },
  { title: 'Machine Learning Projects', route: '/MachineLearningProjects', imageUrl: ProjectIconImage4 },
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
      className="h-screen flex flex-col px-6 py-8 bg-black text-white overflow-y-auto"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div variants={backButtonVariants} initial="hidden" animate="visible">
        <IconButton
          onClick={() => navigate(-1)}
          sx={{ position: 'absolute', top: 20, left: 20, color: 'rgba(255,255,255,0.4)', '&:hover': { color: '#fff' } }}
        >
          <ArrowBackIcon />
        </IconButton>
      </motion.div>

      <div className="max-w-4xl mx-auto w-full flex flex-col h-full pt-2">
        <motion.div className="mb-5" variants={headerVariants} initial="hidden" animate="visible">
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-sm text-zinc-500 font-mono mt-1">Open-source repositories and project archive</p>
        </motion.div>

        <motion.div
          className="flex-1 grid grid-cols-5 gap-4 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Featured repos — 3 columns */}
          <motion.div
            className="col-span-3 flex flex-col border border-zinc-800 rounded-xl overflow-hidden"
            variants={itemVariants}
          >
            <div className="px-5 py-3 border-b border-zinc-800 shrink-0">
              <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Open Source</p>
            </div>
            <div className="flex-1 flex flex-col divide-y divide-zinc-800/60">
              {featuredProjects.map(({ name, lang, tags, url, studio }) => (
                <motion.a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-3 px-5 transition-colors group"
                  whileHover={{ backgroundColor: 'rgba(39,39,42,0.6)' }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <span className="font-mono font-medium text-sm text-white group-hover:text-cyan-400 transition-colors truncate">
                      {name}
                    </span>
                    {studio && (
                      <span className="text-xs text-cyan-400/70 border border-cyan-400/30 px-1.5 py-0.5 rounded-full font-mono shrink-0 leading-none">
                        studio
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="flex items-center gap-1">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${langColors[lang] ?? 'bg-zinc-400'}`} />
                      <span className="text-xs text-zinc-500 font-mono">{lang}</span>
                    </div>
                    <div className="hidden sm:flex flex-wrap gap-1">
                      {tags.map((tag) => (
                        <span key={tag} className="text-xs text-zinc-600 bg-zinc-800/60 border border-zinc-700/40 px-1.5 py-0.5 rounded font-mono leading-none">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">
                      <GitHubIcon />
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Archive — 2 columns */}
          <motion.div
            className="col-span-2 flex flex-col border border-zinc-800 rounded-xl overflow-hidden"
            variants={itemVariants}
          >
            <div className="px-5 py-3 border-b border-zinc-800 shrink-0">
              <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Archive</p>
            </div>
            <div className="flex-1 flex flex-col divide-y divide-zinc-800/60">
              {archiveCategories.map(({ title, route, imageUrl }) => (
                <motion.button
                  key={route}
                  onClick={() => navigate(route)}
                  className="flex-1 flex items-center gap-4 px-5 transition-colors group text-left"
                  whileHover={{ backgroundColor: 'rgba(39,39,42,0.6)' }}
                  whileTap={cardTap}
                  transition={{ duration: 0.15 }}
                >
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-8 h-8 rounded-lg object-cover opacity-70 group-hover:opacity-100 transition-opacity shrink-0"
                  />
                  <span className="text-sm text-zinc-300 group-hover:text-white transition-colors flex-1">
                    {title}
                  </span>
                  <motion.span
                    className="text-zinc-600 text-sm shrink-0"
                    whileHover={{ x: 3, color: '#a1a1aa' }}
                    transition={{ duration: 0.15 }}
                  >
                    →
                  </motion.span>
                </motion.button>
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
