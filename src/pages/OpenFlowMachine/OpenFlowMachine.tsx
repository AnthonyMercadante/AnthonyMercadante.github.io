import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from '../../assets/images/openflowmachine.png';
import Image2 from '../../assets/images/closeupwatermachine.png';
import Image3 from '../../assets/images/Toolsforuse.png';
import LandscapeOverlay from '../../components/LandscapeOverlay';

const OpenFlowMachinePortfolio = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center bg-black text-white py-6">
      <button onClick={handleBack} className="absolute top-5 left-5 z-10 text-white">
        <ArrowBackIcon />
      </button>

      <div className="container mx-auto px-4 lg:px-16 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gradient"><br></br>
          Open Flow Water Channel Machine in Virtual Reality
          <br></br>
        </h1>

        <div className="md:flex md:flex-row md:justify-center">
          <div className="md:w-1/2 text-left px-4 mb-6">
            <div className="max-w-md mx-auto mb-6">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/Hc-zFQL8nQQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-lg md:text-xl leading-relaxed mb-6">
              My co-op placement at <span className="text-blue-400 font-semibold">Mohawk College</span> presented a unique challenge: transforming a space-consuming <span className="text-green-400 font-semibold">Open Flow Water Channel Machine</span> into a virtual reality experience. This project was not only about <span className="text-red-400 font-semibold">saving physical space</span> but also about <span className="text-purple-400 font-semibold">enhancing the educational process</span> through innovative VR technology.
            </p>

            <img src={Image} alt="Open Flow Water Channel Machine Project Scene layout" className="w-full md:max-w-md mx-auto h-auto shadow-lg my-4" />
          

          
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              The VR setup <span className="text-yellow-400 font-semibold">revolutionized</span> how students conducted experiments, replacing the physical machine with VR headsets. This transition was a significant step in <span className="text-pink-400 font-semibold">educational technology</span>, blending practicality with immersive learning.
            </p>
          </div>

          <div className="md:w-1/2 text-left px-4">
            <img src={Image2} alt="Close-up shot of the machine" className="w-full md:max-w-md mx-auto h-auto shadow-lg my-4" />

            <h2 className="text-3xl font-semibold mb-6 text-gradient">
              Tackling the Complexities of Water Simulation
            </h2>

            <p className="text-lg md:text-xl leading-relaxed mb-6">
              One of the most complex aspects of this project was developing a <span className="text-indigo-400 font-semibold">realistic water simulation</span> in VR. I delved into the intricacies of <span className="text-cyan-400 font-semibold">fluid dynamics</span>, exploring Eulerian and Lagrangian methods to accurately represent and simulate fluid behavior. This was crucial for ensuring the authenticity of the lab experiments in the virtual environment.
            </p>

            <img src={Image3} alt="Tools the users can use for completing their labs" className="w-full md:max-w-md mx-auto h-auto shadow-lg my-4" />

            <p className="text-lg md:text-xl leading-relaxed">
              The success of this project was a testament to the <span className="text-orange-400 font-semibold">power of VR in education</span>. It demonstrated how complex simulations, when executed well, can significantly enhance the learning experience. This endeavor at Mohawk College was not just a technical achievement but also a valuable learning experience in applying theoretical knowledge to practical challenges.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6">
              This journey honed my skills in simulation, VR, and programming, highlighting the importance of practical application in education and the transformative potential of technology.
            </p>
          </div>
        </div>
      </div>
      <LandscapeOverlay />
    </div>
  );
};

export default OpenFlowMachinePortfolio;
