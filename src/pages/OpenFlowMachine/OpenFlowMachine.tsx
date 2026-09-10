import { projectImage } from '../../data/projectMedia';
import PageShell from '../../components/PageShell';
import MediaEmbed from '../../components/MediaEmbed';
import React from 'react';
import Image2 from '../../assets/images/closeupwatermachine.png';
import Image3 from '../../assets/images/Toolsforuse.png';
import StoryLink from '../../components/StoryLink';

const Image = projectImage('water-machine');

const OpenFlowMachinePortfolio = () => {
  return (
    <PageShell
      title="Open Flow Water Channel Machine in Virtual Reality"
      eyebrow="XR / Engineering education"
      parent={{ to: '/XRDeveloper', label: 'XR projects' }}
      className="case-study"
    >
      <div className="case-content">
        <div className="case-origin">
          <StoryLink chapter="xr-lab" label="The lab this was built in" />
        </div>

        <div className="case-columns">
          <div className="case-column">
            <div className="max-w-md mx-auto mb-6">
              <MediaEmbed
                src="https://www.youtube.com/embed/Hc-zFQL8nQQ"
                title="Open Flow Water Channel Machine in Virtual Reality — demonstration"
                poster={Image.src}
                posterSrcSet={Image.srcSet}
              />
            </div>

            <p>
              My co-op placement at <span className="case-emphasis">Mohawk College</span> presented
              a unique challenge: transforming a space-consuming{' '}
              <span className="case-emphasis">Open Flow Water Channel Machine</span> into a virtual
              reality experience. This project was not only about{' '}
              <span className="case-emphasis">saving physical space</span> but also about{' '}
              <span className="case-emphasis">enhancing the educational process</span> through
              innovative VR technology.
            </p>

            <img
              loading="lazy"
              decoding="async"
              {...Image}
              sizes="(max-width: 767px) calc(100vw - 44px), 514px"
              alt="Open Flow Water Channel Machine Project Scene layout"
              className="w-full md:max-w-md mx-auto h-auto shadow-lg my-4"
              width="1366"
              height="600"
            />

            <p>
              The VR setup <span className="case-emphasis">revolutionized</span> how students
              conducted experiments, replacing the physical machine with VR headsets. This
              transition was a significant step in{' '}
              <span className="case-emphasis">educational technology</span>, blending practicality
              with immersive learning.
            </p>
          </div>

          <div className="case-column">
            <img
              loading="lazy"
              decoding="async"
              src={Image2}
              alt="Close-up shot of the machine"
              className="w-full md:max-w-md mx-auto h-auto shadow-lg my-4"
              width="2232"
              height="985"
            />

            <h2>Tackling the Complexities of Water Simulation</h2>

            <p>
              One of the most complex aspects of this project was developing a{' '}
              <span className="case-emphasis">realistic water simulation</span> in VR. I delved into
              the intricacies of <span className="case-emphasis">fluid dynamics</span>, exploring
              Eulerian and Lagrangian methods to accurately represent and simulate fluid behavior.
              This was crucial for ensuring the authenticity of the lab experiments in the virtual
              environment.
            </p>

            <img
              loading="lazy"
              decoding="async"
              src={Image3}
              alt="Tools the users can use for completing their labs"
              className="w-full md:max-w-md mx-auto h-auto shadow-lg my-4"
              width="2232"
              height="989"
            />

            <p>
              The success of this project was a testament to the{' '}
              <span className="case-emphasis">power of VR in education</span>. It demonstrated how
              complex simulations, when executed well, can significantly enhance the learning
              experience. This endeavor at Mohawk College was not just a technical achievement but
              also a valuable learning experience in applying theoretical knowledge to practical
              challenges.
            </p>

            <p>
              This journey honed my skills in simulation, VR, and programming, highlighting the
              importance of practical application in education and the transformative potential of
              technology.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
};

export default OpenFlowMachinePortfolio;
