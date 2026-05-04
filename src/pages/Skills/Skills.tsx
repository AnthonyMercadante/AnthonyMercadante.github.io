import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion';
import { pageVariants, containerVariants, itemVariants, headerVariants, backButtonVariants } from '../../animations';

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
      'Claude API', 'HuggingFace', 'LangChain', 'NumPy', 'Pandas', 'OpenCV', 'CUDA',
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
      'SQLite', 'MySQL', 'Azure', 'GitHub Actions',
    ],
  },
  {
    category: 'Frontend & Frameworks',
    accent: 'text-emerald-400',
    skills: [
      'Vue 3', 'React', 'React Native', 'Inertia.js', 'TailwindCSS',
      'Node.js', 'Laravel', '.NET', 'Blazor', 'Flask', 'Vite',
    ],
  },
  {
    category: 'XR & Simulation',
    accent: 'text-orange-400',
    skills: [
      'Unity', 'Unreal Engine', 'Blender', 'C# (Unity scripting)', 'XR Interaction Toolkit',
    ],
  },
  {
    category: 'Design & Tools',
    accent: 'text-pink-400',
    skills: [
      'Adobe Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro',
      'Blender (3D)', 'Git', 'Jira', 'Postman', 'VS Code', 'Xcode',
    ],
  },
];

const Skills = () => {
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

      <div className="max-w-4xl mx-auto w-full flex flex-col h-full pt-2">
        <motion.div className="mb-5" variants={headerVariants} initial="hidden" animate="visible">
          <h1 className="text-3xl font-bold tracking-tight">Skills & Stack</h1>
          <p className="text-sm text-zinc-500 font-mono mt-1">Technologies I build with, ship with, or actively use</p>
        </motion.div>

        <motion.div
          className="flex-1 grid grid-cols-3 grid-rows-2 gap-3 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillGroups.map(({ category, accent, skills }) => (
            <motion.div
              key={category}
              className="flex flex-col border border-zinc-800 rounded-xl p-4 bg-zinc-900/30 overflow-hidden"
              variants={itemVariants}
              whileHover={{ borderColor: 'rgba(63,63,70,0.8)', transition: { duration: 0.2 } }}
            >
              <h2 className={`text-xs font-mono font-medium uppercase tracking-widest mb-3 shrink-0 ${accent}`}>
                {category}
              </h2>
              <div className="flex flex-wrap gap-1.5 content-start overflow-hidden">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-zinc-300 bg-zinc-800/60 border border-zinc-700/60 px-2 py-0.5 rounded font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
