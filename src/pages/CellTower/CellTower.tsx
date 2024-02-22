import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from '../../assets/images/arieltower.png';
import Image2 from '../../assets/images/GroundCellTower.png';
import Image3 from '../../assets/images/celltowerfromabove.png';
import LandscapeOverlay from '../../components/LandscapeOverlay';
import PreloadImages from '../../components/PreloadImages';

const CellTowerTrainingPortfolio = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <PreloadImages>
      <div className="flex flex-col items-center bg-black text-white py-6">
        <button onClick={handleBack} className="absolute top-5 left-5 z-10 text-white">
          <ArrowBackIcon />
        </button>

        <div className="container mx-auto px-4 lg:px-16 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gradient"><br></br>
            Cell Tower Repair Training in Virtual Reality <br></br>
          </h1>

          <div className="md:flex md:flex-row md:justify-center">
            <div className="md:w-1/2 text-left px-4 mb-6">
              <div className="max-w-md mx-auto mb-6">
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/_Mib3DmiEb8?si=Y7BYzzK8RZHZzDzs"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <p className="text-lg md:text-xl leading-relaxed mb-6">
                My experience at <span className="text-blue-400 font-semibold">Mohawk College's XR Innovation Studio</span> was incredibly engaging, particularly my involvement in developing a cell tower training/repair simulation.
                This project was aligned with Mohawk's upcoming credential for an <span className="text-green-400 font-semibold">aerial tower and communications repair specialist</span>, a field experiencing high demand.
                The simulation aimed not just to attract individuals to this profession but also to identify those who might be deterred by a <span className="text-red-400 font-semibold">fear of heights</span>.
              </p>

              <img src={Image} alt="Aerial View of Tower" className="w-full md:max-w-md mx-auto h-auto shadow-lg my-4" />



              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Key challenges in this project included mapping a harness to a virtual body, enabling the <span className="text-yellow-400 font-semibold">climbing of the tower</span>, and integrating industry-standard <span className="text-pink-400 font-semibold">safety protocols</span> into the user experience.
                I also took on the task of creating all the <span className="text-purple-400 font-semibold">audio elements</span>, adding to the realism of the simulation.
              </p>
            </div>

            <div className="md:w-1/2 text-left px-4">

              <img src={Image2} alt="View from Tower Height" className="w-full md:max-w-md mx-auto h-auto shadow-lg my-4" />

              <h2 className="text-3xl font-semibold mb-6 text-gradient">
                Overcoming the Climbing Mechanic Challenge
              </h2>

              <p className="text-lg md:text-xl leading-relaxed mb-6">
                A significant hurdle was developing a <span className="text-indigo-400 font-semibold">realistic climbing mechanic</span>.
                Initially, it was challenging to prevent the user's hands from clipping through the tower during climbing.
                After extensive research, I found a solution using <span className="text-cyan-400 font-semibold">AI-enhanced hand packages</span> that allowed hands to wrap around objects convincingly, significantly enhancing the sense of realism.
              </p>

              <img src={Image3} alt="Close-Up View of Climbing Action" className="w-full md:max-w-md mx-auto h-auto shadow-lg my-4" />

              <p className="text-lg md:text-xl leading-relaxed">
                This project at <span className="text-orange-400 font-semibold">Mohawk College</span> was not just a technical triumph but also a profound learning journey.
                It honed my skills in VR, simulation, and programming, and underscored the importance of <span className="text-yellow-500 font-semibold">practical application</span> in education and the transformative potential of technology in specialized fields.
              </p>

              <p className="text-lg md:text-xl leading-relaxed mb-6">
                The success of this cell tower training/repair simulation demonstrated the extensive capabilities of VR in <span className="text-green-500 font-semibold">educational</span> and <span className="text-blue-500 font-semibold">professional training contexts</span>, particularly in specialized and high-demand fields like aerial tower and communications repair.
              </p>
            </div>
          </div>
        </div>
        <LandscapeOverlay />
      </div>
    </PreloadImages>
  );
};

export default CellTowerTrainingPortfolio;
