import { projectImage } from '../../data/projectMedia';
import PageShell from '../../components/PageShell';
import MediaEmbed from '../../components/MediaEmbed';
import React from 'react';
import Image from '../../assets/images/OVINMenu.png';
import StoryLink from '../../components/StoryLink';

const Image2 = projectImage('ovin');

const OVIN = () => {
  return (
    <PageShell
      title="Ontario Vehicle Innovation Network: VR in Automotive Education"
      eyebrow="XR / Automotive education"
      parent={{ to: '/XRDeveloper', label: 'XR projects' }}
      className="case-study"
    >
      <div className="case-content">
        <div className="case-origin">
          <StoryLink chapter="ovin" label="Same tools as the tower, audience aged eleven" />
        </div>

        <div className="case-columns">
          <div className="case-column">
            <MediaEmbed
              src="https://www.youtube.com/embed/tafaUV6LheQ?si=vCzON4Kc9-5p8ggE"
              title="Ontario Vehicle Innovation Network — demonstration"
              poster={Image}
            />

            <p>
              At <span className="case-emphasis">Mohawk College's XR Innovation Studio</span>, I
              engaged in a project for the{' '}
              <span className="case-emphasis">Ontario Vehicle Innovation Network</span>, developing
              a VR game to ignite student interest in automotive technology.
            </p>

            <img
              loading="lazy"
              decoding="async"
              src={Image}
              alt="OVIN Menu"
              className="w-full md:max-w-md mx-auto h-auto shadow-lg my-4"
              width="3230"
              height="1312"
            />

            <h2>Realistic VR Driving Experience</h2>

            <p>
              My role was to create a{' '}
              <span className="case-emphasis">realistic driving experience</span>, simulating the
              nuances of driving and making every action, from turning to accelerating, feel
              lifelike and authentic for the users.
            </p>
          </div>

          <div className="case-column">
            <img
              loading="lazy"
              decoding="async"
              {...Image2}
              sizes="(max-width: 767px) calc(100vw - 44px), 514px"
              alt="Formula Car"
              className="w-full md:max-w-md mx-auto h-auto shadow-lg my-4"
              width="1334"
              height="775"
            />

            <h2>Engaging and Educating</h2>

            <p>
              The project balanced{' '}
              <span className="case-emphasis">education with entertainment</span>, aiming to deliver
              a comprehensive understanding of the automotive world to young minds. Incentives like
              driving a custom-built car and an intuitive tutorial system were crucial in
              maintaining engagement and ensuring a smooth learning curve.
            </p>

            <h2>Technical Optimization</h2>

            <p>
              A significant challenge was optimizing the VR experience for high-poly car models.
              Through research and application of various{' '}
              <span className="case-emphasis">optimization techniques</span>, I achieved a balance
              between high visual fidelity and smooth gameplay, showcasing VR's potential in
              immersive education.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
};

export default OVIN;
