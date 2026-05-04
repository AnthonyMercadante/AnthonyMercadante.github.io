import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LandscapeOverlay from '../../components/LandscapeOverlay';
import { motion } from 'framer-motion';
import { pageVariants, containerVariants, itemVariants, headerVariants, backButtonVariants, cardHover } from '../../animations';

interface WorkEntry {
  title: string;
  company: string;
  period: string;
  details: string;
  skills: string[];
  link: string;
}

const workExperiences: WorkEntry[] = [
  {
    title: 'Software Engineer Intern',
    company: 'BASL.ai',
    period: 'May 2024 – Sep 2024',
    details:
      'Full-stack SaaS delivery on a knowledge-management platform for real-estate brokerages. Shipped production features weekly — auto-import pipeline for 10k-row MLS/CRM exports in under 30s, Twilio voice/SMS with in-browser calling and voicemail transcription, Docker-based CI/CD across dev/stage/prod.',
    skills: ['Vue 3', 'Inertia.js', 'Laravel', 'TailwindCSS', 'Twilio', 'Docker', 'PHPUnit'],
    link: '/BaslEngineer',
  },
  {
    title: 'XR Software Developer',
    company: 'Mohawk College',
    period: 'Jan 2023 – Dec 2023',
    details:
      'Built immersive XR learning environments for engineering and automotive education. Key deliverables: open-channel water flow simulation for fluid dynamics training, VR cell tower inspection simulator, and an interactive automotive industry exhibit for the Ontario VR Innovation Network (OVIN).',
    skills: ['C#', 'Unity', 'Unreal Engine', 'Blender', 'Git'],
    link: '/XRDeveloper',
  },
  {
    title: 'Automation Assistant',
    company: 'Mohawk College Research Dept.',
    period: 'Sep 2022 – Dec 2022',
    details:
      'Developed a Python desktop application to automate the grant proposal creation process for the research funding department. Integrated OpenAI for AI-assisted draft generation, Qt 6 for the UI, SQLite for proposal history — my first production LLM integration.',
    skills: ['Python', 'Qt 6', 'OpenAI API', 'httpx', 'SQLite'],
    link: '/AutomationAssistant',
  },
];

const WorkExperienceComponent = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="h-screen flex flex-col px-6 py-8 bg-black text-white overflow-y-auto"
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

      <div className="max-w-5xl mx-auto w-full flex flex-col h-full pt-2">
        <motion.div className="mb-5" variants={headerVariants} initial="hidden" animate="visible">
          <h1 className="text-3xl font-bold tracking-tight">Work Experience</h1>
          <p className="text-sm text-zinc-500 font-mono mt-1">Industry roles in AI, XR, and full-stack engineering</p>
        </motion.div>

        <motion.div
          className="flex-1 grid grid-cols-3 gap-4 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {workExperiences.map(({ title, company, period, details, skills, link }) => (
            <motion.div
              key={link}
              className="flex flex-col border border-zinc-800 rounded-xl p-5 bg-zinc-900/30 overflow-hidden"
              variants={itemVariants}
              whileHover={cardHover}
            >
              <div className="mb-3">
                <h2 className="font-semibold text-white leading-tight">{title}</h2>
                <p className="text-sm text-cyan-400 font-mono mt-0.5">{company}</p>
                <p className="text-xs text-zinc-500 font-mono mt-0.5">{period}</p>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed flex-1">{details}</p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-zinc-400 bg-zinc-800/60 border border-zinc-700/40 px-2 py-0.5 rounded font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.15 }}>
                <Link
                  to={link}
                  className="mt-4 inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors font-mono"
                >
                  Full details →
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <LandscapeOverlay />
    </motion.div>
  );
};

export default WorkExperienceComponent;
