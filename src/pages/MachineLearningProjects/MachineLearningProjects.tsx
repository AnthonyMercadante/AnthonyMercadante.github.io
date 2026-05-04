import React from 'react';
import { useNavigate } from 'react-router-dom';
import PreloadImages from '../../components/PreloadImages';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion';
import { pageVariants, itemVariants, headerVariants, backButtonVariants, cardHover, cardTap } from '../../animations';

import MachineLearningProjectIconImage from '../../assets/images/AircraftIdentificationAI.webp';

const projects = [
  {
    title: 'Aircraft Identification AI',
    route: '/AircraftIdentifierAI',
    imageUrl: MachineLearningProjectIconImage,
    description: "CNN-based aircraft classifier trained on imagery from Canada's National Air Force Museum. Identifies aircraft type from photos with high accuracy.",
    tags: ['Python', 'PyTorch', 'CNN', 'Computer Vision'],
  },
];

const MachineLearningProjects = () => {
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

        <div className="w-full max-w-sm space-y-6">
          <motion.div variants={headerVariants} initial="hidden" animate="visible">
            <h1 className="text-3xl font-bold tracking-tight">Machine Learning</h1>
            <p className="text-sm text-zinc-500 font-mono mt-1">Computer vision and applied ML</p>
          </motion.div>

          {projects.map(({ title, route, imageUrl, description, tags }) => (
            <motion.button
              key={route}
              onClick={() => navigate(route)}
              className="w-full flex flex-col gap-4 border border-zinc-800 rounded-xl p-5 bg-zinc-900/30 text-left group"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover={cardHover}
              whileTap={cardTap}
            >
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-40 object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="space-y-2">
                <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {title}
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">{description}</p>
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
        </div>
      </motion.div>
    </PreloadImages>
  );
};

export default MachineLearningProjects;
