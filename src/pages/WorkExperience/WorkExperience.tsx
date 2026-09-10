import { Link } from 'react-router-dom';
import PageShell, { Tags } from '../../components/PageShell';
import StoryLink from '../../components/StoryLink';

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

export default function WorkExperience() {
  return (
    <PageShell
      title="Work experience"
      eyebrow="The professional path / Since 2022"
      description={
        <>
          Industry roles in AI, XR, and full-stack engineering. Each one has a story that starts
          before the dates below.
        </>
      }
    >
      <div className="experience-list">
        {workExperiences.map(
          ({
            title,
            company,
            type,
            location,
            period,
            details,
            highlights,
            skills,
            link,
            origin,
          }) => (
            <article key={`${company}-${title}`} className="experience-entry">
              <div className="experience-meta">
                <p className="experience-period">{period}</p>
                <h2>{company}</h2>
                {(type || location) && (
                  <p className="experience-location">
                    {[type, location].filter(Boolean).join(' · ')}
                  </p>
                )}
                {period.includes('Present') && (
                  <span className="current-label">
                    <span className="status-dot" aria-hidden="true" />
                    Current
                  </span>
                )}
              </div>
              <div className="experience-body">
                <h3>{title}</h3>
                <p>{details}</p>
                {highlights && (
                  <details className="responsibilities">
                    <summary>
                      Responsibilities <span aria-hidden="true">+</span>
                    </summary>
                    <ul>
                      {highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </details>
                )}
                <Tags items={skills} />
                {origin && (
                  <aside className="experience-origin">
                    <p>{origin.note}</p>
                    <StoryLink chapter={origin.chapter} variant="inline" />
                  </aside>
                )}
                {link && (
                  <Link className="text-link" to={link}>
                    Inside the role <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </article>
          ),
        )}
      </div>
    </PageShell>
  );
}
