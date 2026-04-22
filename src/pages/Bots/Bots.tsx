import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandscapeOverlay from '../../components/LandscapeOverlay';
import PreloadImages from '../../components/PreloadImages';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import ProjectImage from '../../assets/images/RealEstateBot.png';
import ProjectImage2 from '../../assets/images/BattleShipBot.png';

const projects = [
  {
    title: 'Real Estate Bot',
    route: '/RealEstateBot',
    imageUrl: ProjectImage,
    description: 'GPT-powered knowledge assistant for real estate agents — answers property, listing, and market questions via natural language.',
    tags: ['Python', 'OpenAI', 'GPT'],
  },
  {
    title: 'BattleShip Bot',
    route: '/BattleShipBot',
    imageUrl: ProjectImage2,
    description: 'AI opponent for Battleship using probabilistic targeting and hunt/destroy strategy logic.',
    tags: ['Python', 'Game AI', 'Algorithms'],
  },
];

const Bots = () => {
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

        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">Bot Projects</h1>
            <p className="text-sm text-zinc-500 font-mono">AI-powered automation and game agents</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {projects.map(({ title, route, imageUrl, description, tags }) => (
              <button
                key={route}
                onClick={() => navigate(route)}
                className="flex flex-col gap-4 border border-zinc-800 hover:border-zinc-600 rounded-xl p-5 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all text-left group"
              >
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-36 object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"
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
              </button>
            ))}
          </div>
        </div>

        <LandscapeOverlay />
      </div>
    </PreloadImages>
  );
};

export default Bots;
