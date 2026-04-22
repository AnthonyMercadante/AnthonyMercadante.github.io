import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
      'Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'OpenAI API',
      'Claude API', 'HuggingFace', 'LangChain', 'NumPy', 'Pandas',
      'Matplotlib', 'OpenCV', 'CUDA',
    ],
  },
  {
    category: 'Languages',
    accent: 'text-violet-400',
    skills: [
      'TypeScript', 'JavaScript', 'Python', 'PHP', 'C#', 'Java', 'Swift',
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    accent: 'text-blue-400',
    skills: [
      'GCP', 'Docker', 'ICP (Internet Computer)', 'PostgreSQL', 'Redis',
      'SQLite', 'MySQL', 'Azure', 'GitHub Pages',
    ],
  },
  {
    category: 'Frontend & Frameworks',
    accent: 'text-emerald-400',
    skills: [
      'Vue 3', 'React', 'React Native', 'Inertia.js', 'TailwindCSS',
      'Node.js', 'Laravel', '.NET', 'Blazor', 'Flask', 'Vite', 'Webpack',
    ],
  },
  {
    category: 'XR & Simulation',
    accent: 'text-orange-400',
    skills: [
      'Unity', 'Unreal Engine', 'Blender', 'C# (Unity scripting)',
    ],
  },
  {
    category: 'Design & Creative',
    accent: 'text-pink-400',
    skills: [
      'Adobe Photoshop', 'Adobe Illustrator', 'Adobe After Effects',
      'Adobe Premiere Pro', 'Blender (3D)', 'Figma',
    ],
  },
  {
    category: 'Tools & DevOps',
    accent: 'text-zinc-400',
    skills: [
      'Git', 'Docker', 'Jira', 'Postman', 'Swagger', 'VS Code',
      'Xcode', 'IntelliJ IDEA',
    ],
  },
];

const Skills = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <IconButton
        onClick={() => navigate(-1)}
        sx={{ position: 'absolute', top: 20, left: 20, color: 'rgba(255,255,255,0.4)', '&:hover': { color: '#fff' } }}
      >
        <ArrowBackIcon />
      </IconButton>

      <div className="max-w-3xl mx-auto">
        <div className="mb-10 space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Skills & Stack</h1>
          <p className="text-sm text-zinc-500 font-mono">Technologies I've built with, ship with, or actively use</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {skillGroups.map(({ category, accent, skills }) => (
            <div
              key={category}
              className="border border-zinc-800 rounded-xl p-5 bg-zinc-900/30 space-y-4"
            >
              <h2 className={`text-xs font-mono font-medium uppercase tracking-widest ${accent}`}>
                {category}
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-zinc-300 bg-zinc-800/60 border border-zinc-700/60 px-2.5 py-1 rounded-md font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
