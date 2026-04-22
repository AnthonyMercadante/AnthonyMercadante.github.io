import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LandscapeOverlay from '../../components/LandscapeOverlay';

const navItems = [
  {
    label: 'About Me',
    route: '/about-me',
    description: 'Background, philosophy, and what drives the work',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    label: 'Work Experience',
    route: '/WorkExperience',
    description: 'Industry roles in AI, XR, and full-stack engineering',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    label: 'Projects',
    route: '/Projects',
    description: 'Open-source repos, XR simulations, AI tools, and more',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14.5" y1="4" x2="9.5" y2="20" />
      </svg>
    ),
  },
  {
    label: 'Skills & Stack',
    route: '/skills',
    description: 'Languages, frameworks, AI tooling, and infrastructure',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 text-white">
      <IconButton
        onClick={() => navigate(-1)}
        sx={{ position: 'absolute', top: 20, left: 20, color: 'rgba(255,255,255,0.4)', '&:hover': { color: '#fff' } }}
      >
        <ArrowBackIcon />
      </IconButton>

      <div className="w-full max-w-md space-y-8">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight">Portfolio</h2>
          <p className="text-sm text-zinc-500 font-mono">Anthony Mercadante · Raethexn Technologies</p>
        </div>

        <div className="space-y-3">
          {navItems.map(({ label, route, description, icon }) => (
            <button
              key={route}
              onClick={() => navigate(route)}
              className="w-full flex items-center gap-4 border border-zinc-800 hover:border-zinc-600 rounded-xl p-5 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all text-left group"
            >
              <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors shrink-0">
                {icon}
              </span>
              <div className="min-w-0">
                <div className="font-medium text-white group-hover:text-white">{label}</div>
                <div className="text-xs text-zinc-500 mt-0.5 leading-relaxed">{description}</div>
              </div>
              <span className="ml-auto text-zinc-600 group-hover:text-zinc-400 transition-colors shrink-0">→</span>
            </button>
          ))}
        </div>
      </div>

      <LandscapeOverlay />
    </div>
  );
};

export default Portfolio;
