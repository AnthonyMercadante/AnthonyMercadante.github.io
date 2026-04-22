import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandscapeOverlay from '../../components/LandscapeOverlay';
import PreloadImages from '../../components/PreloadImages';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
    description:
      'Decentralized AI memory: user-owned, browser-signed writes to an ICP canister with Physarum-inspired graph dynamics and multi-agent collective memory.',
    tags: ['ICP', 'Knowledge Graph', 'AI Memory', 'Open Source'],
    url: 'https://github.com/AnthonyMercadante/OpenMemory',
    studio: true,
  },
  {
    name: 'AircraftIdentificationAI',
    lang: 'Python',
    description:
      'CNN-based aircraft classifier built in partnership with Canada\'s National Air Force Museum. 3-star repository.',
    tags: ['PyTorch', 'CNN', 'Computer Vision', 'RCAF Partnership'],
    url: 'https://github.com/AnthonyMercadante/AircraftIdentificationAI',
    studio: false,
  },
  {
    name: 'FlowChannel-XR',
    lang: 'C#',
    description:
      'XR simulation of open water channel flow dynamics for fluid dynamics engineers. Built in Unity.',
    tags: ['Unity', 'XR', 'Simulation', 'Engineering'],
    url: 'https://github.com/AnthonyMercadante/FlowChannel-XR',
    studio: false,
  },
  {
    name: 'nl2sql-poc',
    lang: 'Python',
    description:
      'Natural English to SQL query generation and execution. Proof-of-concept for language-first data interfaces.',
    tags: ['NLP', 'LLM', 'SQL', 'Natural Language'],
    url: 'https://github.com/AnthonyMercadante/nl2sql-poc',
    studio: false,
  },
  {
    name: 'StockPeek',
    lang: 'Python',
    description:
      'Zero-setup CLI and Python library for live stock prices from Yahoo Finance. No API key required.',
    tags: ['CLI', 'Finance', 'Python'],
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
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
    <path d="M12 0a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.57v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.82 1.32 3.51 1 .11-.8.42-1.32.76-1.62-2.66-.31-5.46-1.34-5.46-5.95 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.57.12-3.27 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.28-1.55 3.28-1.23 3.28-1.23.66 1.7.24 2.96.12 3.27.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.63-5.47 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57A12 12 0 0 0 12 0z" />
  </svg>
);

const Projects = () => {
  const navigate = useNavigate();

  return (
    <PreloadImages>
      <div className="min-h-screen bg-black text-white px-6 py-16">
        <IconButton
          onClick={() => navigate(-1)}
          sx={{ position: 'absolute', top: 20, left: 20, color: 'rgba(255,255,255,0.4)', '&:hover': { color: '#fff' } }}
        >
          <ArrowBackIcon />
        </IconButton>

        <div className="max-w-3xl mx-auto space-y-14">

          {/* Featured */}
          <div className="space-y-6">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
              <p className="text-sm text-zinc-500 font-mono">Open-source repositories and research</p>
            </div>

            <div className="space-y-3">
              {featuredProjects.map(({ name, lang, description, tags, url, studio }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-zinc-800 hover:border-zinc-600 rounded-xl p-5 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0 space-y-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-semibold text-white group-hover:text-cyan-400 transition-colors font-mono">
                          {name}
                        </span>
                        {studio && (
                          <span className="text-xs text-cyan-400/70 border border-cyan-400/30 px-2 py-0.5 rounded-full font-mono">
                            studio
                          </span>
                        )}
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2.5 h-2.5 rounded-full ${langColors[lang] ?? 'bg-zinc-400'}`} />
                          <span className="text-xs text-zinc-500 font-mono">{lang}</span>
                        </div>
                      </div>
                      <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-zinc-500 bg-zinc-800/60 border border-zinc-700/40 px-2 py-0.5 rounded font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors shrink-0 mt-1">
                      <GitHubIcon />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Archive Categories */}
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold tracking-tight">Project Archive</h2>
              <p className="text-sm text-zinc-500 font-mono">XR, AI/ML, mobile, and game projects</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {archiveCategories.map(({ title, route, imageUrl }) => (
                <button
                  key={route}
                  onClick={() => navigate(route)}
                  className="flex flex-col items-center gap-3 border border-zinc-800 hover:border-zinc-600 rounded-xl p-5 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all group"
                >
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-16 h-16 object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="text-xs text-zinc-400 group-hover:text-zinc-200 text-center transition-colors leading-snug">
                    {title}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

        <LandscapeOverlay />
      </div>
    </PreloadImages>
  );
};

export default Projects;
