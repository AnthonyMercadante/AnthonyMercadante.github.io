import React from 'react';

// Fine film grain, inlined so it costs no network request
const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

/**
 * Site-wide atmospheric background: slow-drifting color glows,
 * film grain, and a vignette. Sits behind every route.
 */
const Ambient = () => (
  <div aria-hidden className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-[#050507]">
    {/* Aurora glows */}
    <div className="absolute -top-[20%] -left-[15%] w-[70vmax] h-[70vmax] rounded-full bg-cyan-500/[0.07] blur-[120px] animate-drift-slow motion-reduce:animate-none" />
    <div className="absolute -bottom-[25%] -right-[15%] w-[65vmax] h-[65vmax] rounded-full bg-violet-600/[0.06] blur-[120px] animate-drift-slower motion-reduce:animate-none" />
    <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[45vmax] h-[45vmax] rounded-full bg-blue-500/[0.04] blur-[100px]" />

    {/* Film grain */}
    <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: NOISE }} />

    {/* Vignette */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.5)_100%)]" />
  </div>
);

export default Ambient;
