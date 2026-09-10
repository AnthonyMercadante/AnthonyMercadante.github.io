import React from 'react';

interface Section {
  label: string;
  content: React.ReactNode;
}
/** Label/content rows let long technical sections grow without fixed-height cards. */
export default function DetailSections({ sections }: { sections: Section[] }) {
  return (
    <div className="detail-sections">
      {sections.map(({ label, content }, i) => (
        <section key={label} className="detail-section">
          <h2>
            <span className="entry-number" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            {label}
          </h2>
          <div className="detail-section-content">{content}</div>
        </section>
      ))}
    </div>
  );
}
