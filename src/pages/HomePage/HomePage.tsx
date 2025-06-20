import React from "react";
import { Link } from "react-router-dom";
import cursorImage from "../../assets/images/arrow.png";
import LandscapeOverlay from "../../components/LandscapeOverlay";

/**
 * One-screen personal “link-in-bio” page (portfolio + socials).
 * Mobile-first, responsive, and sized to fit the viewport
 * without vertical scrolling. Icons are inline SVGs—no extra requests.
 */
const links = [
  {
    name: "Portfolio",
    path: "/portfolio",
    internal: true,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M4 7a2 2 0 0 1 2-2h2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7zm8-3h4v1h-4V4zm-4 3h12v11H4V7h4z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/AnthonyMercadante",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12 0a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.57v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.82 1.32 3.51 1 .11-.8.42-1.32.76-1.62-2.66-.31-5.46-1.34-5.46-5.95 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.57.12-3.27 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.28-1.55 3.28-1.23 3.28-1.23.66 1.7.24 2.96.12 3.27.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.63-5.47 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57A12 12 0 0 0 12 0z" />
      </svg>
    ),
  },
  {
    name: "Strava",
    href: "https://strava.app.link/42BwywgdHTb",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12 2l5.5 10H13l-1 2h6.5L12 22 5.5 14H11l1-2H5.5L12 2z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/anthony_mercadante",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-2.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z" />
      </svg>
    ),
  },
  {
    name: "SoundCloud",
    href: "https://soundcloud.com/anthony_mercadante",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.715 10.402a3.72 3.72 0 00-1.173.188 4.739 4.739 0 00-4.475-3.28c-.27 0-.53.026-.79.062A5.986 5.986 0 006.938 9.73a4.173 4.173 0 00-.516-.032A4.419 4.419 0 002 14.114a4.421 4.421 0 004.421 4.42h11.273a3.34 3.34 0 100-6.671h-.003a3.42 3.42 0 00-.976.14z" />
      </svg>
    ),
  },  
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@anthony_mercadante",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M17 1h-3v12.56a2.44 2.44 0 1 1-2.44-2.44h.12V8.83a5.56 5.56 0 1 0 5.56 5.55V8.5a5.5 5.5 0 0 0 3 0V5.5a5.5 5.5 0 0 1-3-4.5z" />
      </svg>
    ),
  },
  {
    name: "Twitch",
    href: "https://www.twitch.tv/anthonymercadante",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M4.265 0L0 4.265v15.47h5.62V24l4.265-4.265h3.185L24 13.06V0H4.265zM21.265 11.56l-3.53 3.53h-3.53L10.06 19.47v-4.38H5.62V2.735h15.645v8.825zM15.53 6.18h-1.765v5.295H15.53V6.18zm-4.47 0H9.295v5.295h1.765V6.18z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@anthonymercadante695",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19.615 3.184H4.385A1.386 1.386 0 003 4.57v14.86a1.386 1.386 0 001.385 1.385h15.23A1.386 1.386 0 0021 19.43V4.57a1.386 1.386 0 00-1.385-1.385zM10 15V9l5 3-5 3z" />
      </svg>
    ),
  },  
];

export default function HomePage() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-transparent text-white">
      {/* background overlay */}
      <div className="absolute inset-0 -z-10">
        <LandscapeOverlay />
      </div>

      <div className="flex flex-col items-center justify-center gap-6 w-full max-w-md px-6">
        {/* cursor icon */}
        <img src={cursorImage} alt="cursor" className="w-8 h-8 mb-2 animate-bounce" />

        {/* name */}
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-center">
          <Link to="/about-me" className="hover:text-blue-400 transition-colors">
            Anthony Mercadante
          </Link>
        </h1>

        {/* tagline */}
        <p className="text-center text-sm sm:text-base opacity-90">
          Full-stack software developer & sound designer.
        </p>

        {/* links */}
        <ul className="w-full grid grid-cols-2 gap-3 mt-4">
          {links.map(({ name, path, href, internal, icon }) => (
            <li key={name} className="w-full">
              {internal ? (
                <Link
                  to={path}
                  className="flex items-center gap-3 border border-white/20 hover:border-blue-500 rounded-lg py-3 px-4 bg-white/5 backdrop-blur-sm transition"
                >
                  {icon}
                  <span>{name}</span>
                </Link>
              ) : (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-white/20 hover:border-blue-500 rounded-lg py-3 px-4 bg-white/5 backdrop-blur-sm transition"
                >
                  {icon}
                  <span>{name}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
