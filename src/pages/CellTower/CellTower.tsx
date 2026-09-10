import { projectImage } from '../../data/projectMedia';
import PageShell from '../../components/PageShell';
import MediaEmbed from '../../components/MediaEmbed';
import React from 'react';
import Image2 from '../../assets/images/GroundCellTower.png';
import Image3 from '../../assets/images/celltowerfromabove.png';
import StoryLink from '../../components/StoryLink';

const Image = projectImage('cell-tower');

const CellTowerTrainingPortfolio = () => {
  return (
    <PageShell
      title="Cell Tower Repair Training in Virtual Reality"
      eyebrow="XR / Training simulation"
      parent={{ to: '/XRDeveloper', label: 'XR projects' }}
      className="case-study"
    >
      <div className="case-content">
        <div className="case-origin">
          <StoryLink chapter="cell-tower" label="They recommended we climb a real one first" />
        </div>

        <div className="case-columns">
          <div className="case-column">
            <div className="max-w-md mx-auto mb-6">
              <MediaEmbed
                src="https://www.youtube.com/embed/_Mib3DmiEb8?si=Y7BYzzK8RZHZzDzs"
                title="Cell Tower Repair Training in Virtual Reality — demonstration"
                poster={Image.src}
                posterSrcSet={Image.srcSet}
              />
            </div>

            <p>
              My experience at{' '}
              <span className="case-emphasis">Mohawk College's XR Innovation Studio</span> was
              incredibly engaging, particularly my involvement in developing a cell tower
              training/repair simulation. This project was aligned with Mohawk's upcoming credential
              for an{' '}
              <span className="case-emphasis">
                aerial tower and communications repair specialist
              </span>
              , a field experiencing high demand. The simulation aimed not just to attract
              individuals to this profession but also to identify those who might be deterred by a{' '}
              <span className="case-emphasis">fear of heights</span>.
            </p>

            <img
              loading="lazy"
              decoding="async"
              {...Image}
              sizes="(max-width: 767px) calc(100vw - 44px), 514px"
              alt="Aerial View of Tower"
              className="w-full md:max-w-md mx-auto h-auto shadow-lg my-4"
              width="2552"
              height="1238"
            />

            <p>
              Key challenges in this project included mapping a harness to a virtual body, enabling
              the <span className="case-emphasis">climbing of the tower</span>, and integrating
              industry-standard <span className="case-emphasis">safety protocols</span> into the
              user experience. I also took on the task of creating all the{' '}
              <span className="case-emphasis">audio elements</span>, adding to the realism of the
              simulation.
            </p>
          </div>

          <div className="case-column">
            <img
              loading="lazy"
              decoding="async"
              src={Image2}
              alt="View from Tower Height"
              className="w-full md:max-w-md mx-auto h-auto shadow-lg my-4"
              width="2557"
              height="1245"
            />

            <h2>Overcoming the Climbing Mechanic Challenge</h2>

            <p>
              A significant hurdle was developing a{' '}
              <span className="case-emphasis">realistic climbing mechanic</span>. Initially, it was
              challenging to prevent the user's hands from clipping through the tower during
              climbing. After extensive research, I found a solution using{' '}
              <span className="case-emphasis">AI-enhanced hand packages</span> that allowed hands to
              wrap around objects convincingly, significantly enhancing the sense of realism.
            </p>

            <img
              loading="lazy"
              decoding="async"
              src={Image3}
              alt="Close-Up View of Climbing Action"
              className="w-full md:max-w-md mx-auto h-auto shadow-lg my-4"
              width="1860"
              height="907"
            />

            <p>
              This project at <span className="case-emphasis">Mohawk College</span> was not just a
              technical triumph but also a profound learning journey. It honed my skills in VR,
              simulation, and programming, and underscored the importance of{' '}
              <span className="case-emphasis">practical application</span> in education and the
              transformative potential of technology in specialized fields.
            </p>

            <p>
              The success of this cell tower training/repair simulation demonstrated the extensive
              capabilities of VR in <span className="case-emphasis">educational</span> and{' '}
              <span className="case-emphasis">professional training contexts</span>, particularly in
              specialized and high-demand fields like aerial tower and communications repair.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
};

export default CellTowerTrainingPortfolio;
