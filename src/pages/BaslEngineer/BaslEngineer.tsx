import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import LandscapeOverlay from '../../components/LandscapeOverlay';
import { motion } from 'framer-motion';
import { pageVariants, containerVariants, itemVariants, headerVariants, backButtonVariants } from '../../animations';

const sections = [
  {
    label: 'The Challenge',
    accent: 'text-cyan-400',
    content: (
      <>
        BASL.ai is a <span className="text-white font-medium">knowledge-management SaaS</span> for
        real-estate brokerages. Agents were drowning in siloed CRMs, manual data entry, and
        disjointed communications tools — a dialer here, an SMS portal there, a legacy CRM
        somewhere else. Goal: consolidate into one unified platform.
      </>
    ),
  },
  {
    label: 'Approach',
    accent: 'text-violet-400',
    content: (
      <>
        Delivered end-to-end features with{' '}
        <span className="text-white font-medium">Vue 3 + Inertia.js</span>, a Laravel API, and
        TailwindCSS. Shipped production PRs weekly, pairing with senior engineers for code review
        and rapid iteration. Everything ran through GitHub Actions + Docker for dev/stage/prod parity.
      </>
    ),
  },
  {
    label: 'Key Responsibilities',
    accent: 'text-orange-400',
    content: (
      <>
        <strong className="text-white">Data Pipeline:</strong> Auto-mapped MLS/CRM exports,
        validated rows server-side, processed{' '}
        <span className="text-white">10k-row files in under 30s</span>.
        <br /><br />
        <strong className="text-white">Comms:</strong> Twilio Voice/SMS for in-browser calling,
        routing, voicemail transcription, and auto-logging.
        <br /><br />
        <strong className="text-white">CI/CD:</strong> PHPUnit tests, GitHub Actions, Docker containerization.
      </>
    ),
  },
  {
    label: 'Tech Stack',
    accent: 'text-blue-400',
    content: (
      <div className="flex flex-wrap gap-1.5 mt-1">
        {['Vue 3', 'Inertia.js', 'Laravel', 'TailwindCSS', 'Twilio', 'Docker', 'PHPUnit', 'GitHub Actions', 'MySQL'].map((t) => (
          <span key={t} className="text-xs text-zinc-300 bg-zinc-800/60 border border-zinc-700/60 px-2 py-0.5 rounded font-mono">
            {t}
          </span>
        ))}
      </div>
    ),
  },
  {
    label: 'Outcomes',
    accent: 'text-emerald-400',
    content: (
      <>
        <strong className="text-white">Zero Manual Entry:</strong> Agents upload once, work in a
        unified dashboard.
        <br /><br />
        <strong className="text-white">Tool Consolidation:</strong> One Vue interface replaced
        three legacy apps.
        <br /><br />
        <strong className="text-white">Performance:</strong> Large imports dropped from hours to
        seconds.
      </>
    ),
  },
  {
    label: 'Reflection',
    accent: 'text-zinc-400',
    content: (
      <>
        Sharpened my ability to{' '}
        <span className="text-white font-medium">ship full-stack features fast</span>, weave
        third-party APIs into seamless UX, and communicate business value clearly in stakeholder
        demos. A pattern I carry into every product I build now.
      </>
    ),
  },
];

const BaslEngineer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="h-screen flex flex-col px-6 py-8 bg-black text-zinc-300 overflow-y-auto"
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

      <div className="max-w-4xl mx-auto w-full flex flex-col h-full pt-2">
        <motion.div className="mb-5" variants={headerVariants} initial="hidden" animate="visible">
          <h1 className="text-3xl font-bold text-white tracking-tight">Software Engineer Intern</h1>
          <p className="text-sm font-mono text-cyan-400 mt-1">BASL.ai · May 2024 – Sep 2024</p>
        </motion.div>

        <motion.div
          className="flex-1 grid grid-cols-3 grid-rows-2 gap-3 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sections.map(({ label, accent, content }) => (
            <motion.div
              key={label}
              className="flex flex-col border border-zinc-800 rounded-xl p-4 bg-zinc-900/30 overflow-hidden"
              variants={itemVariants}
              whileHover={{ borderColor: 'rgba(63,63,70,0.8)', transition: { duration: 0.2 } }}
            >
              <h2 className={`text-xs font-mono font-medium uppercase tracking-widest mb-2 shrink-0 ${accent}`}>
                {label}
              </h2>
              <div className="text-sm leading-relaxed">{content}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <LandscapeOverlay />
    </motion.div>
  );
};

export default BaslEngineer;
