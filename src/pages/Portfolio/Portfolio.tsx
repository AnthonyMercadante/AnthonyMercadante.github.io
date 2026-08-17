import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandscapeOverlay from '../../components/LandscapeOverlay';
import BackButton from '../../components/BackButton';
import portrait from '../../assets/images/portrait.jpg';
import { ArrowUpRightIcon } from '../../components/SocialIcons';
import { motion } from 'framer-motion';
import { pageVariants, containerVariants, itemVariants, headerVariants, cardTap } from '../../animations';

/** The one project worth leading with. Everything else lives under Projects. */
const featured = {
  name: 'OpenMemory',
  href: 'https://github.com/Raethexn-Technologies/OpenMemory',
  blurb: 'Portable AI memory on the Internet Computer, with Physarum-inspired graph dynamics for recall that strengthens along the paths you actually use.',
  tags: ['PHP', 'ICP', 'Knowledge Graph', 'Raethexn'],
};

const navItems = [
  {
    label: 'About Me',
    route: '/about-me',
    description: 'Background, philosophy, and what drives the work',
    meta: 'Engineer · Founder · Canada',
    accent: 'text-cyan-400',
    glow: 'hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_0_32px_-10px_rgba(34,211,238,0.35)]',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    label: 'Work Experience',
    route: '/WorkExperience',
    description: 'Industry roles in AI, XR, and full-stack engineering',
    meta: '5 roles · since 2022 · Clarity, Raethexn, BASL.ai, Mohawk',
    accent: 'text-violet-400',
    glow: 'hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_0_32px_-10px_rgba(167,139,250,0.35)]',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    label: 'Projects',
    route: '/Projects',
    description: 'Open-source repos, XR simulations, AI tools, and more',
    meta: '5 featured repos · 5 archive collections',
    accent: 'text-emerald-400',
    glow: 'hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_0_32px_-10px_rgba(52,211,153,0.35)]',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14.5" y1="4" x2="9.5" y2="20" />
      </svg>
    ),
  },
  {
    label: 'Skills & Stack',
    route: '/skills',
    description: 'Languages, frameworks, AI tooling, and infrastructure',
    meta: '6 categories · AI, cloud, frontend, XR',
    accent: 'text-orange-400',
    glow: 'hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_0_32px_-10px_rgba(251,146,60,0.35)]',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <motion.p className="text-[11px] text-zinc-600 font-mono uppercase tracking-[0.18em]" variants={itemVariants}>
    {children}
  </motion.p>
);

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="min-h-screen px-6 py-8 text-white text-left"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <BackButton />

      <div className="max-w-lg mx-auto w-full space-y-8 pt-2">

        {/* Header — carries the face over from the landing page */}
        <motion.div className="flex items-center gap-4" variants={headerVariants} initial="hidden" animate="visible">
          <span className="shrink-0 block w-14 h-14 rounded-full overflow-hidden bg-[#0a0a0e] ring-1 ring-white/10">
            <img src={portrait} alt="" aria-hidden className="w-full h-full object-cover scale-[1.04]" />
          </span>
          <div>
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
              The work
            </h2>
            <p className="text-sm text-zinc-500 font-mono mt-0.5">Anthony Mercadante · Raethexn Technologies</p>
          </div>
        </motion.div>

        {/* Featured project */}
        <motion.div className="space-y-3" variants={containerVariants} initial="hidden" animate="visible">
          <SectionLabel>Currently building</SectionLabel>

          <motion.a
            href={featured.href}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card glass-card-hover hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_0_40px_-12px_rgba(34,211,238,0.4)] block p-5 group/featured"
            variants={itemVariants}
            whileHover={{ y: -2, transition: { duration: 0.18 } }}
            whileTap={cardTap}
          >
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.5)]" />
              <span className="text-lg font-semibold text-white">{featured.name}</span>
              <span className="ml-auto text-zinc-600 group-hover/featured:text-cyan-300 transition-colors">
                <ArrowUpRightIcon />
              </span>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed mt-2.5">{featured.blurb}</p>

            <div className="flex flex-wrap gap-1.5 mt-3.5">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono text-zinc-500 border border-white/[0.08] rounded-md px-2 py-0.5 group-hover/featured:border-white/[0.14] group-hover/featured:text-zinc-400 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        </motion.div>

        {/* Hub */}
        <motion.div className="space-y-3" variants={containerVariants} initial="hidden" animate="visible">
          <SectionLabel>Explore</SectionLabel>

          <div className="flex flex-col gap-2.5">
            {navItems.map(({ label, route, description, meta, icon, accent, glow }) => (
              <motion.button
                key={route}
                onClick={() => navigate(route)}
                className={`glass-card glass-card-hover ${glow} flex items-start gap-4 p-5 text-left group w-full`}
                variants={itemVariants}
                whileHover={{ x: 3, transition: { duration: 0.15 } }}
                whileTap={cardTap}
              >
                <span className={`${accent} opacity-70 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5`}>
                  {icon}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-white text-base">{label}</div>
                  <div className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors mt-1">
                    {description}
                  </div>
                  <div className={`text-[11px] font-mono ${accent} opacity-50 group-hover:opacity-80 transition-opacity mt-2`}>
                    {meta}
                  </div>
                </div>
                <span className="text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-1 transition-all duration-200 shrink-0 mt-0.5">
                  →
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

      </div>

      <LandscapeOverlay />
    </motion.div>
  );
};

export default Portfolio;
