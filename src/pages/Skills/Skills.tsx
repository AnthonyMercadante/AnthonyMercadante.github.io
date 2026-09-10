import PageShell, { TextLink } from '../../components/PageShell';

interface SkillGroup {
  category: string;
  accent: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'AI & LLM Systems',
    accent: 'text-cyan-400',
    skills: [
      'Python',
      'PyTorch',
      'TensorFlow',
      'scikit-learn',
      'OpenAI API',
      'Claude API',
      'HuggingFace',
      'LangChain',
      'NumPy',
      'Pandas',
      'OpenCV',
      'CUDA',
    ],
  },
  {
    category: 'Languages',
    accent: 'text-violet-400',
    skills: ['TypeScript', 'JavaScript', 'Python', 'PHP', 'C#', 'Java', 'Swift'],
  },
  {
    category: 'Cloud & Infrastructure',
    accent: 'text-blue-400',
    skills: [
      'GCP',
      'Docker',
      'ICP (Internet Computer)',
      'PostgreSQL',
      'Redis',
      'SQLite',
      'MySQL',
      'Azure',
      'GitHub Actions',
    ],
  },
  {
    category: 'Frontend & Frameworks',
    accent: 'text-emerald-400',
    skills: [
      'Vue 3',
      'React',
      'React Native',
      'Inertia.js',
      'TailwindCSS',
      'Node.js',
      'Laravel',
      '.NET',
      'Blazor',
      'Flask',
      'Vite',
    ],
  },
  {
    category: 'XR & Simulation',
    accent: 'text-orange-400',
    skills: ['Unity', 'Unreal Engine', 'Blender', 'C# (Unity scripting)', 'XR Interaction Toolkit'],
  },
  {
    category: 'Design & Tools',
    accent: 'text-pink-400',
    skills: [
      'Adobe Photoshop',
      'Illustrator',
      'After Effects',
      'Premiere Pro',
      'Blender (3D)',
      'Git',
      'Jira',
      'Postman',
      'VS Code',
      'Xcode',
    ],
  },
];

export default function Skills() {
  return (
    <PageShell
      title="Skills & stack"
      eyebrow="Tools of the practice"
      description="Technologies I build with, ship with, or actively use."
    >
      <div className="skills-grid">
        {skillGroups.map(({ category, skills }, i) => (
          <section key={category} className="skill-group">
            <div className="skill-heading">
              <span className="entry-number" aria-hidden="true">
                0{i + 1}
              </span>
              <h2>{category}</h2>
            </div>
            <ul>
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="section-end">
        <p>Tools make more sense in context.</p>
        <TextLink to="/Projects">See what I’ve built with them</TextLink>
      </div>
    </PageShell>
  );
}
