/**
 * Brand marks for the "Elsewhere" grid. All icons draw with `currentColor` so a
 * single tile style can tint them on hover — see HomePage's socialLinks.
 */

const box = "w-[26px] h-[26px]";
const stroke = `${box} fill-none stroke-current`;

export const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className={`${box} fill-current`} aria-hidden>
    <path d="M12 0a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.57v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.82 1.32 3.51 1 .11-.8.42-1.32.76-1.62-2.66-.31-5.46-1.34-5.46-5.95 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.57.12-3.27 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.28-1.55 3.28-1.23 3.28-1.23.66 1.7.24 2.96.12 3.27.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.63-5.47 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57A12 12 0 0 0 12 0z" />
  </svg>
);

export const StravaIcon = () => (
  <svg viewBox="0 0 24 24" className={`${box} fill-current`} aria-hidden>
    <path d="M12 2l5.5 10H13l-1 2h6.5L12 22 5.5 14H11l1-2H5.5L12 2z" />
  </svg>
);

export const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5.5" />
    <circle cx="12" cy="12" r="4.25" />
    <circle cx="17.4" cy="6.6" r="1.15" className="fill-current stroke-none" />
  </svg>
);

export const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className={`${box} fill-current`} aria-hidden>
    <path d="M16.6 2h-3.1v13.2a2.7 2.7 0 1 1-2.7-2.7c.26 0 .5.04.74.11V9.4a6.2 6.2 0 0 0-.74-.05 5.83 5.83 0 1 0 5.83 5.83V8.6a7.2 7.2 0 0 0 4.2 1.35V6.83A4.24 4.24 0 0 1 16.6 2z" />
  </svg>
);

/** Three overlapping dots of the Letterboxd mark, rendered monochrome. */
export const LetterboxdIcon = () => (
  <svg viewBox="0 0 24 24" className={`${box} fill-current`} aria-hidden>
    <circle cx="4.6" cy="12" r="3.4" />
    <circle cx="12" cy="12" r="3.4" />
    <circle cx="19.4" cy="12" r="3.4" />
  </svg>
);

/** Beamed double-eighth note, the Apple Music mark. */
export const AppleMusicIcon = () => (
  <svg viewBox="0 0 24 24" className={box} aria-hidden>
    <path
      d="M9.2 17.2V6.6l10-2.1v10.6"
      className="fill-none stroke-current"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ellipse cx="6.6" cy="17.4" rx="2.7" ry="2.3" className="fill-current" />
    <ellipse cx="16.6" cy="15.3" rx="2.7" ry="2.3" className="fill-current" />
  </svg>
);

/** Goodreads' serif "g" with its long descender. */
export const GoodreadsIcon = () => (
  <svg viewBox="0 0 24 24" className={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="10.5" cy="9" r="5" />
    <path d="M15.5 4v11.5a5.2 5.2 0 0 1-9.4 3.1" />
  </svg>
);

export const MailIcon = () => (
  <svg viewBox="0 0 24 24" className={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const ArrowUpRightIcon = () => (
  <svg viewBox="0 0 12 12" className="w-3 h-3 inline-block" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3.5 8.5L8.5 3.5M4.5 3.5h4v4" />
  </svg>
);
