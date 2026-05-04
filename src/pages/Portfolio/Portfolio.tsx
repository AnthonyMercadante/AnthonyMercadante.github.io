import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LandscapeOverlay from '../../components/LandscapeOverlay';
import { motion } from 'framer-motion';
import { pageVariants, containerVariants, itemVariants, headerVariants, backButtonVariants, cardHover, cardTap } from '../../animations';

const navItems = [
  {
    label: 'About Me',
    route: '/about-me',
    description: 'Background, philosophy, and what drives the work',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
    <motion.div
      className="h-screen flex flex-col px-6 py-8 text-white overflow-y-auto"
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

      <div className="max-w-lg mx-auto w-full flex flex-col h-full">
        <motion.div className="mb-6 pt-2" variants={headerVariants} initial="hidden" animate="visible">
          <h2 className="text-3xl font-bold tracking-tight">Portfolio</h2>
          <p className="text-sm text-zinc-500 font-mono mt-1">Anthony Mercadante · Raethexn Technologies</p>
        </motion.div>

        <motion.div
          className="flex-1 flex flex-col gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map(({ label, route, description, icon }) => (
            <motion.button
              key={route}
              onClick={() => navigate(route)}
              className="flex-1 flex items-center gap-4 border border-zinc-800 hover:border-zinc-600 rounded-xl px-6 bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors text-left group"
              variants={itemVariants}
              whileHover={cardHover}
              whileTap={cardTap}
            >
              <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors shrink-0">
                {icon}
              </span>
              <div className="min-w-0">
                <div className="font-medium text-white text-base">{label}</div>
                <div className="text-xs text-zinc-500 mt-0.5">{description}</div>
              </div>
              <motion.span
                className="ml-auto text-zinc-600 shrink-0"
                whileHover={{ x: 3, color: '#a1a1aa' }}
                transition={{ duration: 0.15 }}
              >
                →
              </motion.span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <LandscapeOverlay />
    </motion.div>
  );
};

export default Portfolio;
