import PageShell from '../../components/PageShell';
import DetailSections from '../../components/DetailSections';
import StoryLink from '../../components/StoryLink';

const sections = [
  {
    label: 'The Challenge',
    accent: 'text-cyan-400',
    content: (
      <>
        The research department's funding proposals manager needed to produce grant proposals
        repeatedly across different funding bodies — each with slightly different requirements. The
        process was manual, time-consuming, and error-prone. Goal: automate template selection,
        content generation, and formatting into one desktop workflow.
      </>
    ),
  },
  {
    label: 'Approach',
    accent: 'text-violet-400',
    content: (
      <>
        Built a Python desktop application with <span className="text-white font-medium">Qt 6</span>{' '}
        for the UI, integrated <span className="text-white font-medium">OpenAI</span> for draft
        generation from structured prompts, and SQLite for proposal history and template management.
        httpx handled async API calls to keep the interface responsive during generation.
      </>
    ),
  },
  {
    label: 'Key Responsibilities',
    accent: 'text-orange-400',
    content: (
      <>
        <strong className="text-white">Template System:</strong> Parameterized engine that adapted
        proposal structure based on funding body requirements.
        <br />
        <br />
        <strong className="text-white">AI Integration:</strong> OpenAI API generating proposal
        sections from structured form data — first production LLM integration.
        <br />
        <br />
        <strong className="text-white">Staff Onboarding:</strong> Training sessions and
        documentation so the department could operate the tool independently.
      </>
    ),
  },
  {
    label: 'Tech Stack',
    accent: 'text-blue-400',
    content: (
      <div className="flex flex-wrap gap-1.5 mt-1">
        {['Python', 'Qt 6', 'OpenAI API', 'httpx', 'SQLite'].map((t) => (
          <span
            key={t}
            className="text-xs text-zinc-300 bg-zinc-800/60 border border-zinc-700/60 px-2 py-0.5 rounded font-mono"
          >
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
        <strong className="text-white">Time Reduction:</strong> Proposal drafting cut from hours to
        a guided 20-minute workflow.
        <br />
        <br />
        <strong className="text-white">Accuracy:</strong> Automated templates and form validation
        reduced structural errors.
        <br />
        <br />
        <strong className="text-white">Adoption:</strong> Department transitioned without disrupting
        ongoing grant cycles.
      </>
    ),
  },
  {
    label: 'Reflection',
    accent: 'text-zinc-400',
    content: (
      <>
        My first production integration of language models into real institutional software. It
        shaped how I think about{' '}
        <span className="text-white font-medium">LLMs as workflow infrastructure</span> — not
        chatbots, but systems that do specific, bounded tasks with user-controlled inputs. A
        principle I've carried into every AI project since.
      </>
    ),
  },
];

export default function RoleDetail() {
  return (
    <PageShell
      title="Automation Assistant"
      eyebrow="Inside the role"
      description="Mohawk College Research Dept. · Sep 2022 – Dec 2022"
      parent={{ to: '/WorkExperience', label: 'Experience' }}
      className="role-detail"
    >
      <div className="detail-origin">
        <StoryLink chapter="ideaworks" label="The floor of desks nobody was allowed to touch" />
      </div>
      <DetailSections sections={sections} />
    </PageShell>
  );
}
