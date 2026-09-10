import PageShell from '../../components/PageShell';
import MediaEmbed from '../../components/MediaEmbed';
import React from 'react';
import StoryLink from '../../components/StoryLink';

const EcoChallenger = () => {
  return (
    <PageShell
      title="Eco Challenge Tracker: Community Engagement in Environmental Cleanup"
      eyebrow="React Native / Mobile application"
      parent={{ to: '/ReactProjects', label: 'React Native projects' }}
      className="case-study"
    >
      <div className="case-content">
        <div className="case-origin">
          <StoryLink chapter="the-hand-coded-years" label="Built during the fully remote years" />
        </div>

        <MediaEmbed
          src="https://www.youtube.com/embed/6fOtOiw-vnE?si=19EodNK7KmocSbvN"
          title="Eco Challenge Tracker — demonstration"
        />

        <a
          className="action-link case-download"
          href="https://drive.google.com/file/d/1Lb1Nvqy_wcp7yvRpE-myXIyjVrjK3Iw3/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download app <span aria-hidden="true">↗</span>
        </a>

        <div className="case-columns">
          <div className="case-column">
            <p>
              The <span className="case-emphasis">Eco Challenge Tracker</span> app was a fun proof
              of concept project designed to empower communities in environmental cleanup
              initiatives. Users could capture and post geo-tagged photos of litter in their
              surroundings, contributing to a communal effort to identify and resolve local
              environmental challenges.
            </p>

            <p>
              By integrating <span className="case-emphasis">Google Maps</span> with user-generated
              content, the app provided a dynamic and interactive platform for users to find and
              participate in local clean-up challenges.
            </p>
          </div>

          <div className="case-column">
            <h2>Engaging and User-Friendly Interface</h2>

            <p>
              A key feature was the app's{' '}
              <span className="case-emphasis">user-friendly interface</span>, which makes it easy
              for users of all ages to participate in environmental challenges. The app's design
              encouraged easy adoption and active community engagement.
            </p>

            <p>
              This project showcased my technical skills in React Native and Expo SDK but also my
              commitment to leveraging technology for{' '}
              <span className="case-emphasis">social good</span>. It demonstrates the potential of
              mobile applications to drive meaningful community action and environmental awareness.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
};

export default EcoChallenger;
