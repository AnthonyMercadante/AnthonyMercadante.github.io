import type { Accent } from './storyData';

/**
 * Per-chapter accent colours, shared by the story page and by anything
 * elsewhere in the site that points back into a chapter.
 *
 * Written out as complete literal strings because Tailwind scans source text —
 * a template like `text-${accent}-400` would never make it into the built
 * stylesheet.
 */
export const accentClasses: Record<Accent, { text: string; rail: string; dot: string; border: string }> = {
  cyan: { text: 'text-cyan-400', rail: 'bg-cyan-400/60', dot: 'bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.5)]', border: 'border-cyan-400/20' },
  amber: { text: 'text-amber-400', rail: 'bg-amber-400/60', dot: 'bg-amber-400 shadow-[0_0_10px_2px_rgba(251,191,36,0.5)]', border: 'border-amber-400/20' },
  violet: { text: 'text-violet-400', rail: 'bg-violet-400/60', dot: 'bg-violet-400 shadow-[0_0_10px_2px_rgba(167,139,250,0.5)]', border: 'border-violet-400/20' },
  sky: { text: 'text-sky-400', rail: 'bg-sky-400/60', dot: 'bg-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.5)]', border: 'border-sky-400/20' },
  rose: { text: 'text-rose-400', rail: 'bg-rose-400/60', dot: 'bg-rose-400 shadow-[0_0_10px_2px_rgba(251,113,133,0.5)]', border: 'border-rose-400/20' },
  orange: { text: 'text-orange-400', rail: 'bg-orange-400/60', dot: 'bg-orange-400 shadow-[0_0_10px_2px_rgba(251,146,60,0.5)]', border: 'border-orange-400/20' },
  fuchsia: { text: 'text-fuchsia-400', rail: 'bg-fuchsia-400/60', dot: 'bg-fuchsia-400 shadow-[0_0_10px_2px_rgba(232,121,249,0.5)]', border: 'border-fuchsia-400/20' },
  emerald: { text: 'text-emerald-400', rail: 'bg-emerald-400/60', dot: 'bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.5)]', border: 'border-emerald-400/20' },
};
