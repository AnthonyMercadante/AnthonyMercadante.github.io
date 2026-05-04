import React from 'react';
import { useNavigate } from 'react-router-dom';
import PreloadImages from '../../components/PreloadImages';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LandscapeOverlay from '../../components/LandscapeOverlay';
import { motion } from 'framer-motion';
import { pageVariants, containerVariants, itemVariants, headerVariants, backButtonVariants, cardHover, cardTap } from '../../animations';

import ReactProjectIconImage2 from '../../assets/images/TorontoNightlifeExplorerIcon.png';
import ReactProjectIconImage from '../../assets/images/EcoChallengeTrackerIcon.png';

const projects = [
  {
    title: 'Eco Challenge Tracker',
    route: '/EcoChallengeTracker',
    imageUrl: ReactProjectIconImage,
    description: 'React Native mobile app for environmental challenge tracking — users log eco-friendly actions and compete on community leaderboards.',
    tags: ['React Native', 'Expo', 'TypeScript'],
  },
  {
    title: 'Toronto Nightlife Explorer',
    route: '/TorontoNightlifeExplorer',
    imageUrl: ReactProjectIconImage2,
    description: 'Map-based React Native app for discovering Toronto venues, events, and nightlife — filtering by category, distance, and ratings.',
    tags: ['React Native', 'Google Maps API', 'TypeScript'],
  },
];

const ReactProjects = () => {
  const navigate = useNavigate();

  return (
    <PreloadImages>
      <motion.div
        className="h-screen flex flex-col items-center justify-center px-6 py-8 bg-black text-white overflow-y-auto"
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

        <div className="w-full max-w-2xl space-y-6">
          <motion.div variants={headerVariants} initial="hidden" animate="visible">
            <h1 className="text-3xl font-bold tracking-tight">React Native Projects</h1>
            <p className="text-sm text-zinc-500 font-mono mt-1">Cross-platform mobile applications</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map(({ title, route, imageUrl, description, tags }) => (
              <motion.button
                key={route}
                onClick={() => navigate(route)}
                className="flex flex-col gap-4 border border-zinc-800 rounded-xl p-5 bg-zinc-900/30 text-left group"
                variants={itemVariants}
                whileHover={cardHover}
                whileTap={cardTap}
              >
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-32 object-contain rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="space-y-2">
                  <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {title}
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed">{description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span key={tag} className="text-xs text-zinc-500 bg-zinc-800/60 border border-zinc-700/40 px-2 py-0.5 rounded font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>

        <LandscapeOverlay />
      </motion.div>
    </PreloadImages>
  );
};

export default ReactProjects;
