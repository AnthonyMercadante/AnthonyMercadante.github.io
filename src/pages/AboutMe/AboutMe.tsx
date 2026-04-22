import React from 'react';
import { useNavigate } from 'react-router-dom';
import profileImage from '../../assets/images/professional-photo.jpg';
import LandscapeOverlay from '../../components/LandscapeOverlay';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PreloadImages from '../../components/PreloadImages';

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <PreloadImages>
      <div className="min-h-screen bg-black text-zinc-300 flex flex-col justify-center px-6 py-16">
        <IconButton
          onClick={() => navigate(-1)}
          sx={{ position: 'absolute', top: 20, left: 20, color: 'rgba(255,255,255,0.4)', '&:hover': { color: '#fff' } }}
        >
          <ArrowBackIcon />
        </IconButton>

        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-10 max-w-3xl mx-auto w-full">

          {/* Profile photo */}
          <div className="shrink-0 w-40 sm:w-48">
            <img
              src={profileImage}
              alt="Anthony Mercadante"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

          {/* Bio */}
          <div className="flex-1 space-y-5 text-left">
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Anthony Mercadante
              </h1>
              <p className="text-sm font-mono text-cyan-400 tracking-wide">
                Software & AI Engineer
              </p>
              <a
                href="https://www.raethexntechnologies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                Raethexn Technologies ↗
              </a>
            </div>

            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                I'm a software and AI engineer based in Canada, and the founder of{' '}
                <span className="text-cyan-400 font-medium">Raethexn Technologies</span> — an
                independent engineering studio building open-source systems at the intersection of
                AI, identity, memory, and cloud-native infrastructure.
              </p>
              <p>
                I started programming at 14, and it's been the primary medium through which I build
                and think ever since. My current focus is on{' '}
                <span className="text-white font-medium">AI agent architectures</span>, LLM
                integrations, memory infrastructure, and natural language interfaces — systems where
                the engineering decisions determine what the software can actually do.
              </p>
              <p>
                Recent work includes{' '}
                <span className="text-white font-medium">OpenMemory</span>, a research prototype for
                portable AI memory on the Internet Computer Protocol with Physarum-inspired graph
                dynamics, and the{' '}
                <span className="text-white font-medium">AircraftIdentificationAI</span> project — a
                CNN-based classifier built in partnership with Canada's National Air Force Museum.
              </p>
              <p>
                Beyond AI systems, I've built XR simulations for engineering education, automated
                tooling for research workflows, and full-stack SaaS applications. I approach each
                domain the same way: prototype clearly labeled as such, limitations documented
                alongside capabilities, production-readiness earned rather than assumed.
              </p>
              <p className="text-zinc-500">
                <span className="text-white font-medium">Engineering is a long-term practice.</span>{' '}
                Not a product cycle.
              </p>
            </div>

            <button
              onClick={() => navigate('/skills')}
              className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 rounded-lg px-5 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-900/40 transition-all"
            >
              View Skills & Stack →
            </button>
          </div>
        </div>

        <LandscapeOverlay />
      </div>
    </PreloadImages>
  );
};

export default AboutMe;
