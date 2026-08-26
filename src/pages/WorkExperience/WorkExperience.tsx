import React from 'react';
import { Link } from 'react-router-dom';
import LandscapeOverlay from '../../components/LandscapeOverlay';
import BackButton from '../../components/BackButton';
import { motion } from 'framer-motion';
import StoryLink from '../../components/StoryLink';
import { pageVariants, containerVariants, itemVariants, headerVariants, cardHover } from '../../animations';

interface WorkEntry {
  title: string;
  company: string;
  type?: string;
  location?: string;
  period: string;
  details: string;
  highlights?: string[];
  skills: string[];
  link?: string;
  /**
   * How the role actually came about, and the /story chapter that tells it.
   * A CV says what the job was; this says why it happened at all.
   */
  origin?: { note: string; chapter: string };
}

const workExperiences: WorkEntry[] = [
  {
    title: 'Junior AI/ML Engineer',
    company: 'Clarity',
    type: 'Contract Full-time',
    location: 'Canada - Remote',
    period: 'Jul 2025 - Present',
    details:
      'Designing and building applied AI systems, memory infrastructure, and natural-language software.',
    highlights: [
      'Building LLM-powered applications, agent workflows, and automation systems.',
      'Integrating AI capabilities into scalable production software.',
      'Designing memory, retrieval, and document-processing pipelines for AI applications.',
      'Deploying systems across cloud infrastructure with attention to security, reliability, and maintainability.',
      'Working across GCP, Python, Laravel, Vue, Node.js, PostgreSQL, and DevOps workflows.',
    ],
    skills: ['GCP', 'Vertex AI', 'Python', 'Laravel', 'Vue', 'Node.js', 'PostgreSQL', 'DevOps'],
    origin: {
      note: 'Seven months of applications before this one landed.',
      chapter: 'clarity',
    },
  },
  {
    title: 'Software Engineer, Applied AI Systems - Independent Contractor',
    company: 'Raethexn Technologies',
    type: 'Contract Part-time',
    location: 'Canada',
    period: 'Jan 2025 - Present',
    details:
      'Designing and building applied AI systems, memory infrastructure, retrieval pipelines, automation workflows, and production software.',
    highlights: [
      'Built LLM-powered applications, agent workflows, and automation systems.',
      'Integrated AI capabilities into scalable production web software.',
      'Designed memory, retrieval, RAG, and document-processing pipelines for AI applications.',
      'Developed production systems with attention to security, reliability, maintainability, and deployment constraints.',
      'Worked across GCP, Python, Laravel, Vue, Node.js, PostgreSQL, and DevOps workflows.',
      'Explored interactive systems and real-time prototypes where they supported broader engineering and research goals.',
    ],
    skills: ['GCP', 'Python', 'Laravel', 'Vue', 'Node.js', 'PostgreSQL', 'RAG', 'DevOps'],
    origin: {
      note: 'Founded in 2023 as an XR studio; the applied-AI work came later.',
      chapter: 'raethexn',
    },
  },
  {
    title: 'Software Engineer Intern',
    company: 'BASL.ai',
    period: 'May 2024 – Sep 2024',
    details:
      'Full-stack SaaS delivery on a knowledge-management platform for real-estate brokerages. Shipped production features weekly — auto-import pipeline for 10k-row MLS/CRM exports in under 30s, Twilio voice/SMS with in-browser calling and voicemail transcription, Docker-based CI/CD across dev/stage/prod.',
    skills: ['Vue 3', 'Inertia.js', 'Laravel', 'TailwindCSS', 'Twilio', 'Docker', 'PHPUnit'],
    link: '/BaslEngineer',
    origin: {
      note: 'Hired off a chatbot I built as a joke about my sister.',
      chapter: 'the-bot',
    },
  },
  {
    title: 'XR Software Developer',
    company: 'Mohawk College',
    period: 'Jan 2023 – Dec 2023',
    details:
      'Built immersive XR learning environments for engineering and automotive education. Key deliverables: open-channel water flow simulation for fluid dynamics training, VR cell tower inspection simulator, and an interactive automotive industry exhibit for the Ontario VR Innovation Network (OVIN).',
    skills: ['C#', 'Unity', 'Unreal Engine', 'Blender', 'Git'],
    link: '/XRDeveloper',
    origin: {
      note: 'Nobody was teaching XR yet, which turned out to be the point.',
      chapter: 'xr-lab',
    },
  },
  {
    title: 'Automation Assistant',
    company: 'Mohawk College Research Dept.',
    period: 'Sep 2022 – Dec 2022',
    details:
      'Developed a Python desktop application to automate the grant proposal creation process for the research funding department. Integrated OpenAI for AI-assisted draft generation, Qt 6 for the UI, SQLite for proposal history — my first production LLM integration.',
    skills: ['Python', 'Qt 6', 'OpenAI API', 'httpx', 'SQLite'],
    link: '/AutomationAssistant',
    origin: {
      note: 'A floor of applied-research desks nobody was allowed to touch.',
      chapter: 'ideaworks',
    },
  },
];

const WorkExperienceComponent = () => {
  return (
    <motion.div
      className="h-screen flex flex-col px-6 py-8 text-white overflow-y-auto"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <BackButton />

      <div className="max-w-5xl mx-auto w-full flex flex-col pt-2">
        <motion.div className="mb-5" variants={headerVariants} initial="hidden" animate="visible">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">Work Experience</h1>
          <p className="text-sm text-zinc-500 font-mono mt-1">Industry roles in AI, XR, and full-stack engineering</p>
          <p className="text-xs text-zinc-600 mt-2">
            None of these started where the dates say. Each one links back to the chapter of{' '}
            <Link to="/story" className="text-zinc-400 hover:text-white underline decoration-white/20 underline-offset-2 transition-colors">
              the story
            </Link>{' '}
            it came out of.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-4 pb-6 sm:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {workExperiences.map(({ title, company, type, location, period, details, highlights, skills, link, origin }) => (
            <motion.div
              key={`${company}-${title}`}
              className="glass-card glass-card-hover hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_0_36px_-12px_rgba(34,211,238,0.3)] flex flex-col p-5 text-left"
              variants={itemVariants}
              whileHover={cardHover}
            >
              <div className="mb-3">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="font-semibold text-white leading-tight">{title}</h2>
                  {period.includes('Present') && (
                    <span className="inline-flex items-center gap-1.5 shrink-0 text-[10px] font-mono text-emerald-300/90 border border-emerald-400/20 bg-emerald-400/[0.06] rounded-full px-2 py-0.5 leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-emerald-400" />
                      Current
                    </span>
                  )}
                </div>
                <p className="text-sm text-cyan-400 font-mono mt-0.5">{company}</p>
                <p className="text-xs text-zinc-500 font-mono mt-0.5">{period}</p>
                {(type || location) && (
                  <p className="text-xs text-zinc-600 font-mono mt-0.5">
                    {[type, location].filter(Boolean).join(' - ')}
                  </p>
                )}
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed">{details}</p>

              {highlights && (
                <ul className="mt-3 space-y-1 pl-4 text-xs text-zinc-500 leading-relaxed list-disc">
                  {highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}

              {origin && (
                <div className="mt-4 border-l border-white/10 pl-3">
                  <p className="text-xs text-zinc-500 italic leading-relaxed">{origin.note}</p>
                  <StoryLink chapter={origin.chapter} variant="inline" className="mt-1.5" />
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 mt-4">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-zinc-400 bg-white/[0.04] border border-white/10 px-2 py-0.5 rounded font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {link && (
                <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.15 }}>
                <Link
                  to={link}
                  className="mt-4 inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors font-mono"
                >
                  Full details →
                </Link>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <LandscapeOverlay />
    </motion.div>
  );
};

export default WorkExperienceComponent;
