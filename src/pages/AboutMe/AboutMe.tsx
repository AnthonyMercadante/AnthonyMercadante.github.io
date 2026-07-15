import React from 'react';
import { useNavigate } from 'react-router-dom';
import profileImage from '../../assets/images/professional-photo.jpg';
import LandscapeOverlay from '../../components/LandscapeOverlay';
import BackButton from '../../components/BackButton';
import PreloadImages from '../../components/PreloadImages';
import { motion } from 'framer-motion';
import { pageVariants, headerVariants, itemVariants, containerVariants, cardHover, cardTap } from '../../animations';

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <PreloadImages>
      <motion.div
        className="h-screen flex flex-col px-6 py-8 text-zinc-300 overflow-y-auto"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <BackButton />

        <div className="flex-1 flex flex-col sm:flex-row items-center gap-10 max-w-3xl mx-auto w-full pt-6">

          {/* Profile photo */}
          <motion.div
            className="shrink-0 w-36 sm:w-44"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="rounded-2xl p-px bg-gradient-to-br from-cyan-400/50 via-white/10 to-violet-500/50 shadow-[0_0_40px_-12px_rgba(34,211,238,0.4)]">
              <img
                src={profileImage}
                alt="Anthony Mercadante"
                className="w-full h-auto rounded-[calc(1rem-1px)]"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            className="flex-1 space-y-4 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-1" variants={headerVariants}>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight bg-gradient-to-br from-white via-zinc-100 to-zinc-500 bg-clip-text text-transparent">
                Anthony Mercadante
              </h1>
              <p className="text-sm font-mono text-cyan-400 tracking-wide">Software & AI Engineer</p>
              <a
                href="https://www.raethexntechnologies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                Raethexn Technologies ↗
              </a>
            </motion.div>

            <motion.div className="space-y-3 text-sm leading-relaxed" variants={itemVariants}>
              <p>
                I'm a software and AI engineer based in Canada, and the founder of{' '}
                <span className="text-cyan-400 font-medium">Raethexn Technologies</span> — an
                independent engineering studio building open-source systems at the intersection of
                AI, identity, memory, and cloud-native infrastructure.
              </p>
              <p>
                I started programming at 14. My current focus is on{' '}
                <span className="text-white font-medium">AI agent architectures</span>, LLM
                integrations, memory infrastructure, and natural language interfaces. Recent work
                includes <span className="text-white font-medium">OpenMemory</span> — portable AI
                memory on ICP with Physarum-inspired graph dynamics — and the{' '}
                <span className="text-white font-medium">AircraftIdentificationAI</span> project,
                built in partnership with Canada's National Air Force Museum.
              </p>
              <p className="text-zinc-500">
                Beyond AI: XR simulations for engineering education, automated research tooling,
                full-stack SaaS.{' '}
                <span className="text-white">Engineering is a long-term practice.</span>
              </p>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={cardHover} whileTap={cardTap}>
              <button
                onClick={() => navigate('/skills')}
                className="glass-card glass-card-hover !rounded-lg inline-flex items-center gap-2 px-5 py-2.5 text-sm text-zinc-300 hover:text-white"
              >
                View Skills & Stack →
              </button>
            </motion.div>
          </motion.div>
        </div>

        <LandscapeOverlay />
      </motion.div>
    </PreloadImages>
  );
};

export default AboutMe;
