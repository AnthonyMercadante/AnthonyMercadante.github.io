import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LandscapeOverlay from '../../components/LandscapeOverlay';

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
      'Full-stack SaaS delivery on a knowledge-management platform for real-estate brokerages. Shipped production features weekly — auto-import pipeline processing 10k-row MLS/CRM exports in under 30s, Twilio voice/SMS integration with in-browser calling and voicemail transcription, and Docker-based CI/CD across dev/stage/prod.',
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
      'Developed a Python desktop application to automate the grant proposal creation process for the college\'s research funding department. Integrated OpenAI for draft generation, Qt 6 for the UI, and SQLite for proposal history and template management.',
    skills: ['Python', 'Qt 6', 'OpenAI API', 'httpx', 'SQLite'],
    link: '/AutomationAssistant',
  },
];

const WorkExperienceComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <IconButton
        onClick={() => navigate(-1)}
        sx={{ position: 'absolute', top: 20, left: 20, color: 'rgba(255,255,255,0.4)', '&:hover': { color: '#fff' } }}
      >
        <ArrowBackIcon />
      </IconButton>

      <div className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Work Experience</h1>
          <p className="text-sm text-zinc-500 font-mono">Industry roles in AI, XR, and full-stack engineering</p>
        </div>

        <div className="space-y-4">
          {workExperiences.map(({ title, company, period, details, skills, link }) => (
            <div
              key={link}
              className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/30 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <div>
                  <h2 className="font-semibold text-white text-lg leading-tight">{title}</h2>
                  <p className="text-sm text-cyan-400 font-mono">{company}</p>
                </div>
                <span className="text-xs text-zinc-500 font-mono shrink-0 mt-0.5">{period}</span>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed">{details}</p>

              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-zinc-400 bg-zinc-800/60 border border-zinc-700/40 px-2 py-0.5 rounded font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <Link
                to={link}
                className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors font-mono"
              >
                Full details →
              </Link>
            </div>
          ))}
        </div>
      </div>

      <LandscapeOverlay />
    </div>
  );
};

export default WorkExperienceComponent;
