import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandscapeOverlay from '../../components/LandscapeOverlay';
import PreloadImages from '../../components/PreloadImages';
import { motion } from 'framer-motion';
import { pageVariants, containerVariants, itemVariants, headerVariants, cardHover, cardTap } from '../../animations';

import ProjectImage from '../../assets/images/OpenFlowIcon.png';
import ProjectImage2 from '../../assets/images/CellTowerIcon.png';
import ProjectImage3 from '../../assets/images/OVIN.png';
import BackButton from '../../components/BackButton';
import StoryLink from '../../components/StoryLink';

const projects = [
  {
    title: 'Water Machine',
    route: '/OpenFlowMachine',
    imageUrl: ProjectImage,
    description: 'XR simulation of open-channel water flow dynamics, built for fluid dynamics engineering education at Mohawk College.',
    tags: ['Unity', 'C#', 'Simulation'],
  },
  {
    title: 'Cell Tower Simulator',
    route: '/CellTower',
    imageUrl: ProjectImage2,
    description: 'VR tower inspection and safety training simulator, enabling trainees to practice procedures in a risk-free environment.',
    tags: ['Unity', 'C#', 'VR Training'],
  },
  {
    title: 'OVIN Exhibit',
    route: '/OVIN',
    imageUrl: ProjectImage3,
    description: 'Interactive automotive industry exhibit for the Ontario VR Innovation Network — immersive EV manufacturing exploration.',
    tags: ['Unreal Engine', 'C++', 'XR'],
  },
];

const XRDeveloper = () => {
  const navigate = useNavigate();

  return (
    <PreloadImages>
      <motion.div
        className="h-screen flex flex-col items-center justify-center px-6 py-8 text-white overflow-y-auto"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <BackButton />

        <div className="w-full max-w-3xl space-y-6">
          <motion.div variants={headerVariants} initial="hidden" animate="visible">
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">XR Projects</h1>
            <p className="text-sm text-zinc-500 font-mono mt-1">Virtual reality simulations for engineering and industry education</p>
            <StoryLink
              chapter="xr-lab"
              label="Nobody was teaching this yet, which was the point"
              className="mt-3"
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map(({ title, route, imageUrl, description, tags }) => (
              <motion.button
                key={route}
                onClick={() => navigate(route)}
                className="flex flex-col gap-3 glass-card glass-card-hover p-4 text-left group"
                variants={itemVariants}
                whileHover={cardHover}
                whileTap={cardTap}
              >
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-28 object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="space-y-1.5">
                  <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors text-sm">
                    {title}
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed">{description}</p>
                  <div className="flex flex-wrap gap-1">
                    {tags.map((tag) => (
                      <span key={tag} className="text-xs text-zinc-500 bg-zinc-800/60 border border-zinc-700/40 px-1.5 py-0.5 rounded font-mono">
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

export default XRDeveloper;
