import PageShell from '../../components/PageShell';
import MediaEmbed from '../../components/MediaEmbed';
import React from 'react';
import StoryLink from '../../components/StoryLink';

const TorontoNightlifeExplorer = () => {
  return (
    <PageShell
      title="Toronto Nightlife Explorer: Discover the City's Vibrant Nightlife"
      eyebrow="React Native / Mobile application"
      parent={{ to: '/ReactProjects', label: 'React Native projects' }}
      className="case-study"
    >
      <div className="case-content">
        <div className="case-origin">
          <StoryLink
            chapter="the-hand-coded-years"
            label="Coursework from the fully remote years"
          />
        </div>

        <MediaEmbed
          src="https://www.youtube.com/embed/ux_hegEjP9s?si=OCZc5g_SeGPG7Ku5"
          title="Toronto Nightlife Explorer — demonstration"
        />

        <a
          className="action-link case-download"
          href="https://drive.google.com/file/d/1Y_E-ye0HN7NRk-d5Gg7DcbRVdVBA4hnI/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download app <span aria-hidden="true">↗</span>
        </a>

        <div className="case-columns">
          <div className="case-column">
            <p>
              The <span className="case-emphasis">Toronto Nightlife Explorer</span> app is a unique
              proof of concept prototype that connects users with the best clubs, restaurants,
              venues, and festivals in Toronto. It utilizes web API calls to Google to fetch
              real-time data about nightlife spots.
            </p>

            <p>
              Incorporating a <span className="case-emphasis">user-friendly interface</span> and a
              curated search function, the app enhances the search for nightlife experiences by
              providing personalized recommendations based on user preferences.
            </p>
          </div>

          <div className="case-column">
            <h2>Interactive Features and Dynamic Data Retrieval</h2>

            <p>
              Key features include dynamic searches based on user input, comprehensive listings, and
              a sleek layout using <span className="case-emphasis">React Native</span> and{' '}
              <span className="case-emphasis">Flexbox</span> for layout optimization.
            </p>

            <p>
              This project highlights my capabilities in integrating web services and developing
              responsive mobile applications, demonstrating my ability in creating engaging user
              experiences and leveraging technology in an innovative way.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
};

export default TorontoNightlifeExplorer;
