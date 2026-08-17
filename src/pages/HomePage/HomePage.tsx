import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants, containerVariants, itemVariants, headerVariants, cardTap } from "../../animations";
import portrait from "../../assets/images/portrait.jpg";
import {
  GitHubIcon,
  AppleMusicIcon,
  StravaIcon,
  LetterboxdIcon,
  GoodreadsIcon,
  InstagramIcon,
  TikTokIcon,
  MailIcon,
  ArrowUpRightIcon,
} from "../../components/SocialIcons";

/**
 * The centrepiece: one square per place I exist online. This page is the link
 * in every social bio, so the grid — not the portfolio — is the main event.
 * `hover` is the brand tint the icon takes; `glow` is the matching ring.
 */
const socialLinks = [
  {
    name: "Strava",
    href: "https://strava.app.link/42BwywgdHTb",
    icon: <StravaIcon />,
    hover: "group-hover/tile:text-orange-400",
    glow: "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.10),0_0_30px_-8px_rgba(251,146,60,0.55)]",
  },
  {
    name: "Goodreads",
    href: "https://www.goodreads.com/user/show/195355250-anthony-mercadante",
    icon: <GoodreadsIcon />,
    hover: "group-hover/tile:text-amber-300",
    glow: "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.10),0_0_30px_-8px_rgba(252,211,77,0.55)]",
  },
  {
    name: "Letterboxd",
    href: "https://boxd.it/4K1Yl",
    icon: <LetterboxdIcon />,
    hover: "group-hover/tile:text-emerald-400",
    glow: "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.10),0_0_30px_-8px_rgba(52,211,153,0.55)]",
  },
  {
    name: "Music",
    href: "https://music.apple.com/profile/anthony_mercadante",
    icon: <AppleMusicIcon />,
    hover: "group-hover/tile:text-rose-400",
    glow: "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.10),0_0_30px_-8px_rgba(251,113,133,0.55)]",
  },
  {
    name: "GitHub",
    href: "https://github.com/AnthonyMercadante",
    icon: <GitHubIcon />,
    hover: "group-hover/tile:text-white",
    glow: "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.10),0_0_30px_-8px_rgba(255,255,255,0.4)]",
  },
  {
    name: "Email",
    href: "mailto:Anthony@raethexntechnologies.com",
    icon: <MailIcon />,
    hover: "group-hover/tile:text-violet-300",
    glow: "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.10),0_0_30px_-8px_rgba(196,181,253,0.55)]",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@anthony_mercadante",
    icon: <TikTokIcon />,
    hover: "group-hover/tile:text-sky-300",
    glow: "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.10),0_0_30px_-8px_rgba(125,211,252,0.55)]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/anthony_mercadante/",
    icon: <InstagramIcon />,
    hover: "group-hover/tile:text-pink-400",
    glow: "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.10),0_0_30px_-8px_rgba(244,114,182,0.55)]",
  },
];

export default function HomePage() {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-6 py-14 text-white"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="w-full max-w-lg flex flex-col items-center text-center space-y-8">

        {/* Identity */}
        <motion.div className="flex flex-col items-center space-y-4" variants={headerVariants}>
          <Link
            to="/about-me"
            className="group/portrait rounded-full p-[2px] bg-gradient-to-br from-cyan-400/60 via-white/10 to-violet-500/60 shadow-[0_0_50px_-12px_rgba(34,211,238,0.45)] hover:shadow-[0_0_60px_-10px_rgba(34,211,238,0.6)] transition-shadow"
            aria-label="About Anthony Mercadante"
          >
            <span className="block w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-[#0a0a0e]">
              <img
                src={portrait}
                alt="Anthony Mercadante"
                className="w-full h-full object-cover scale-[1.04] group-hover/portrait:scale-[1.09] transition-transform duration-500"
              />
            </span>
          </Link>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-none bg-gradient-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Anthony Mercadante
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-sm font-mono">
              <span className="text-zinc-400">Software &amp; AI Engineer</span>
              <span className="text-zinc-700">/</span>
              <a
                href="https://www.raethexntechnologies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Raethexn <ArrowUpRightIcon />
              </a>
              <span className="text-zinc-700">/</span>
              <span className="text-zinc-500">Canada</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping motion-reduce:animate-none" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-mono text-emerald-300/90 tracking-wide">Building AI systems at Clarity</span>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
            AI systems and memory infrastructure by day. Running, reading, and films
            the rest of the time.
          </p>
        </motion.div>

        {/* The main event */}
        <motion.div
          className="w-full grid grid-cols-4 gap-2.5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {socialLinks.map(({ name, href, icon, hover, glow }) => (
            <motion.a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card glass-card-hover ${glow} !rounded-2xl aspect-square flex flex-col items-center justify-center gap-2.5 px-1.5 group/tile`}
              variants={itemVariants}
              whileHover={{ scale: 1.06, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={`text-zinc-300 transition-colors ${hover}`}>{icon}</span>
              <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500 group-hover/tile:text-zinc-200 transition-colors">
                {name}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Work, kept quiet */}
        <motion.div
          className="w-full space-y-2 pt-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }} whileTap={cardTap}>
            <Link
              to="/portfolio"
              className="block rounded-xl p-px bg-gradient-to-r from-cyan-500/40 via-white/[0.08] to-violet-500/40 shadow-[0_0_24px_-12px_rgba(34,211,238,0.35)] hover:shadow-[0_0_32px_-10px_rgba(34,211,238,0.5)] transition-shadow group"
            >
              <span className="relative flex items-center justify-between w-full py-3 px-5 rounded-[calc(0.75rem-1px)] bg-[#0a0a0e]/95 overflow-hidden text-left">
                <span className="absolute inset-0 -translate-x-full group-hover:animate-shine motion-reduce:hidden bg-gradient-to-r from-transparent via-white/[0.07] to-transparent w-1/2 skew-x-[-20deg]" />
                <span className="text-sm">
                  <span className="font-medium">The work</span>
                  <span className="text-zinc-500"> — projects, experience, and stack</span>
                </span>
                <span className="text-zinc-500 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all duration-200">→</span>
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.p className="text-[11px] font-mono text-zinc-700" variants={itemVariants} initial="hidden" animate="visible">
          © {new Date().getFullYear()} Anthony Mercadante
        </motion.p>

      </div>
    </motion.div>
  );
}
