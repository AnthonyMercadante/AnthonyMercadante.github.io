import PageShell from '../../../components/PageShell';
import DetailSections from '../../../components/DetailSections';
import StoryLink from '../../../components/StoryLink';
import MediaEmbed from '../../../components/MediaEmbed';

const sections = [
  {
    label: 'Vision',
    accent: 'text-violet-400',
    content: (
      <>
        VOID is a dark, stylized 3D game exploring ambient dread and sci-fi estrangement. Built in
        Unity with a focus on performance and immersion — animated mobs, real-time mechanics, and a
        floating unit-frame UI instead of traditional camera-locked health bars.
      </>
    ),
  },
  {
    label: 'Demo',
    accent: 'text-cyan-400',
    content: (
      <div className="w-full h-full min-h-0 rounded-lg overflow-hidden mt-1">
        <MediaEmbed src="https://www.youtube.com/embed/1FKdzQ8HbpU" title="VOID game demo" />
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
    label: 'Design Choices',
    accent: 'text-yellow-400',
    content: (
      <>
        Health bars anchored to the UI, not world space — inspired by MMORPG unit frames.
        Performance-first mindset throughout. Modular mob system designed for easy future expansion
        of enemy types and behaviors.
      </>
    ),
  },
  {
    label: 'Current Status',
    accent: 'text-emerald-400',
    content: (
      <>
        Alpha v0.0.1. Core mechanics in place: enemy animation loops, unit frame UI system, basic
        game loop. Next phase: enemy AI and pathfinding, terrain polish, ambient soundtrack and VFX
        layering.
      </>
    ),
  },
  {
    label: "What's Next",
    accent: 'text-pink-400',
    content: (
      <>
        Enemy AI pathfinding · Procedural level elements · Ambient soundtrack and VFX layering ·
        Steam prototype release
      </>
    ),
  },
];

export default function RoleDetail() {
  return (
    <PageShell
      title="VOID"
      eyebrow="Games / In development"
      description="Raethexn Technologies · Unity · Alpha v0.0.1"
      parent={{ to: '/Projects', label: 'Projects' }}
      className="role-detail"
    >
      <div className="detail-origin">
        <StoryLink
          chapter="the-lean-year"
          label="Built as the antidote to a hundred silent job applications"
        />
      </div>
      <DetailSections sections={sections} />
    </PageShell>
  );
}
