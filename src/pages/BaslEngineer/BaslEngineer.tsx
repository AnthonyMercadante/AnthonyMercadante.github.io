import PageShell from '../../components/PageShell';
import DetailSections from '../../components/DetailSections';
import StoryLink from '../../components/StoryLink';

const sections = [
  {
    label: 'The Challenge',
    accent: 'text-cyan-400',
    content: (
      <>
        BASL.ai is a <span className="text-white font-medium">knowledge-management SaaS</span> for
        real-estate brokerages. Agents were drowning in siloed CRMs, manual data entry, and
        disjointed communications tools — a dialer here, an SMS portal there, a legacy CRM somewhere
        else. Goal: consolidate into one unified platform.
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
        and rapid iteration. Everything ran through GitHub Actions + Docker for dev/stage/prod
        parity.
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
        <br />
        <br />
        <strong className="text-white">Comms:</strong> Twilio Voice/SMS for in-browser calling,
        routing, voicemail transcription, and auto-logging.
        <br />
        <br />
        <strong className="text-white">CI/CD:</strong> PHPUnit tests, GitHub Actions, Docker
        containerization.
      </>
    ),
  },
  {
    label: 'Tech Stack',
    accent: 'text-blue-400',
    content: (
      <div className="flex flex-wrap gap-1.5 mt-1">
        {[
          'Vue 3',
          'Inertia.js',
          'Laravel',
          'TailwindCSS',
          'Twilio',
          'Docker',
          'PHPUnit',
          'GitHub Actions',
          'MySQL',
        ].map((t) => (
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
        <strong className="text-white">Zero Manual Entry:</strong> Agents upload once, work in a
        unified dashboard.
        <br />
        <br />
        <strong className="text-white">Tool Consolidation:</strong> One Vue interface replaced three
        legacy apps.
        <br />
        <br />
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

export default function RoleDetail() {
  return (
    <PageShell
      title="Software Engineer Intern"
      eyebrow="Inside the role"
      description="BASL.ai · May 2024 – Sep 2024"
      parent={{ to: '/WorkExperience', label: 'Experience' }}
      className="role-detail"
    >
      <div className="detail-origin">
        <StoryLink chapter="the-bot" label="They found me through a chatbot I built as a joke" />
      </div>
      <DetailSections sections={sections} />
    </PageShell>
  );
}
