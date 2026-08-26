import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, containerVariants, itemVariants, headerVariants } from '../../../animations';
import BackButton from '../../../components/BackButton';
import StoryLink from '../../../components/StoryLink';

const sections = [
  {
    label: 'Vision',
    accent: 'text-violet-400',
    content: (
      <>
        VOID is a dark, stylized 3D game exploring ambient dread and sci-fi estrangement. Built in
        Unity with a focus on performance and immersion — animated mobs, real-time mechanics, and
        a floating unit-frame UI instead of traditional camera-locked health bars.
      </>
    ),
  },
  {
    label: 'Demo',
    accent: 'text-cyan-400',
    content: (
      <div className="w-full h-full min-h-0 rounded-lg overflow-hidden mt-1">
        <iframe
          className="w-full h-full min-h-[120px]"
          src="https://www.youtube.com/embed/1FKdzQ8HbpU"
          title="VOID Game Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    ),
    flex: true,
  },
  {
    label: 'Tech Stack',
    accent: 'text-blue-400',
    content: (
      <div className="flex flex-wrap gap-1.5 mt-1">
        {['Unity', 'C#', 'Animator Controllers', 'Unity UI Toolkit', 'Blender'].map((t) => (
          <span key={t} className="text-xs text-zinc-300 bg-zinc-800/60 border border-zinc-700/60 px-2 py-0.5 rounded font-mono">
            {t}
          </span>
        ))}
      </div>
    ),
  },
  {
    label: 'Design Choices',
    accent: 'text-yellow-400',
    content: (
      <>
        Health bars anchored to the UI, not world space — inspired by MMORPG unit frames.
        Performance-first mindset throughout. Modular mob system designed for easy future
        expansion of enemy types and behaviors.
      </>
    ),
  },
  {
    label: 'Current Status',
    accent: 'text-emerald-400',
    content: (
      <>
        Alpha v0.0.1. Core mechanics in place: enemy animation loops, unit frame UI system,
        basic game loop. Next phase: enemy AI and pathfinding, terrain polish, ambient
        soundtrack and VFX layering.
      </>
    ),
  },
  {
    label: "What's Next",
    accent: 'text-pink-400',
    content: (
      <>
        Enemy AI pathfinding · Procedural level elements · Ambient soundtrack and VFX
        layering · Steam prototype release
      </>
    ),
  },
];

const VoidGame: React.FC = () => {
  return (
    <motion.div
      className="h-screen flex flex-col px-6 py-8 text-zinc-300 overflow-y-auto"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <BackButton />

      <div className="max-w-4xl mx-auto w-full flex flex-col h-full pt-2">
        <motion.div className="mb-5" variants={headerVariants} initial="hidden" animate="visible">
          <h1 className="text-3xl font-bold text-white tracking-tight">VOID</h1>
          <p className="text-sm font-mono text-violet-400 mt-1">Raethexn Technologies · Unity · Alpha v0.0.1</p>
          <StoryLink
            chapter="the-lean-year"
            label="Built as the antidote to a hundred silent job applications"
            className="mt-3"
          />
        </motion.div>

        <motion.div
          className="flex-1 grid grid-cols-3 grid-rows-2 gap-3 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sections.map(({ label, accent, content, flex }) => (
            <motion.div
              key={label}
              className={`flex flex-col glass-card glass-card-hover p-4 overflow-hidden ${flex ? 'min-h-0' : ''}`}
              variants={itemVariants}
              whileHover={{ borderColor: 'rgba(63,63,70,0.8)', transition: { duration: 0.2 } }}
            >
              <h2 className={`text-xs font-mono font-medium uppercase tracking-widest mb-2 shrink-0 ${accent}`}>
                {label}
              </h2>
              <div className={`text-sm leading-relaxed ${flex ? 'flex-1 min-h-0' : ''}`}>
                {content}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VoidGame;
