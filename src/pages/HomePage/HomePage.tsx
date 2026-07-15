import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants, containerVariants, itemVariants, headerVariants, cardTap } from "../../animations";

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 12 12" className="w-3 h-3 inline-block opacity-60" fill="currentColor">
    <path d="M3.5 1H1v10h10V8.5M7 1h4m0 0v4m0-4L5 7" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
    <path d="M12 0a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.57v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.82 1.32 3.51 1 .11-.8.42-1.32.76-1.62-2.66-.31-5.46-1.34-5.46-5.95 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.57.12-3.27 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.28-1.55 3.28-1.23 3.28-1.23.66 1.7.24 2.96.12 3.27.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.63-5.47 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57A12 12 0 0 0 12 0z" />
  </svg>
);

const StravaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
    <path d="M12 2l5.5 10H13l-1 2h6.5L12 22 5.5 14H11l1-2H5.5L12 2z" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const socialLinks = [
  { name: "GitHub", href: "https://github.com/AnthonyMercadante", icon: <GitHubIcon />, hover: "group-hover/social:text-white" },
  { name: "Raethexn.com", href: "https://www.raethexntechnologies.com/", icon: <GlobeIcon />, hover: "group-hover/social:text-cyan-300" },
  { name: "Strava", href: "https://strava.app.link/42BwywgdHTb", icon: <StravaIcon />, hover: "group-hover/social:text-orange-400" },
];

export default function HomePage() {
  return (
    <motion.div
      className="h-screen flex items-center justify-center px-6 py-12 text-white overflow-y-auto"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="w-full max-w-md space-y-10">

        {/* Identity */}
        <motion.div className="space-y-3" variants={headerVariants}>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping motion-reduce:animate-none" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-mono text-emerald-300/90 tracking-wide">Building AI systems at Clarity</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-none">
            <Link
              to="/about-me"
              className="bg-gradient-to-br from-white via-zinc-100 to-zinc-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Anthony Mercadante
            </Link>
          </h1>
          <p className="text-base text-zinc-400 font-mono tracking-wide">
            Software & AI Engineer
          </p>
          <a
            href="https://www.raethexntechnologies.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
          >
            Raethexn Technologies <ExternalLinkIcon />
          </a>
        </motion.div>

        {/* Tagline */}
        <motion.p className="text-zinc-500 text-sm leading-relaxed" variants={itemVariants}>
          Building AI systems, memory infrastructure, and natural language interfaces.
        </motion.p>

        {/* Primary CTA — gradient border with shine sweep */}
        <motion.div variants={itemVariants} whileHover={{ scale: 1.015 }} whileTap={cardTap}>
          <Link
            to="/portfolio"
            className="block rounded-2xl p-px bg-gradient-to-r from-cyan-500/50 via-white/10 to-violet-500/50 shadow-[0_0_28px_-10px_rgba(34,211,238,0.35)] hover:shadow-[0_0_36px_-8px_rgba(34,211,238,0.5)] transition-shadow group"
          >
            <span className="relative flex items-center justify-between w-full py-4 px-6 rounded-[calc(1rem-1px)] bg-[#0a0a0e]/95 overflow-hidden">
              <span className="absolute inset-0 -translate-x-full group-hover:animate-shine motion-reduce:hidden bg-gradient-to-r from-transparent via-white/[0.07] to-transparent w-1/2 skew-x-[-20deg]" />
              <span className="text-base font-medium">Portfolio</span>
              <span className="text-zinc-500 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all duration-200 text-lg">→</span>
            </span>
          </Link>
        </motion.div>

        {/* Connect */}
        <motion.div className="space-y-3" variants={containerVariants} initial="hidden" animate="visible">
          <motion.p className="text-xs text-zinc-600 font-mono uppercase tracking-widest" variants={itemVariants}>
            Connect
          </motion.p>
          <div className="grid grid-cols-3 gap-2">
            {socialLinks.map(({ name, href, icon, hover }) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover !rounded-lg flex items-center gap-2 py-2.5 px-3 group/social"
                title={name}
                variants={itemVariants}
                whileHover={{ scale: 1.04, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.96 }}
              >
                <span className={`text-zinc-400 transition-colors ${hover}`}>{icon}</span>
                <span className="text-xs text-zinc-400 group-hover/social:text-zinc-200 transition-colors truncate">{name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
