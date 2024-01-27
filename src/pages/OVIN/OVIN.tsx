import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from '../../assets/images/OVINMenu.png';
import Image2 from '../../assets/images/OVINFormulaCar.png';
import LandscapeOverlay from '../../components/LandscapeOverlay';

const OVIN = () => {
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
          Ontario Vehicle Innovation Network: VR in Automotive Education<br></br>
        </h1>

        <div className="md:flex md:flex-row md:justify-center">
          <div className="md:w-1/2 text-left px-4 mb-6">
            <iframe
              className="max-w-md mx-auto w-full aspect-video mb-6"
              src="https://www.youtube.com/embed/tafaUV6LheQ?si=vCzON4Kc9-5p8ggE"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>

            <p className="text-lg md:text-xl leading-relaxed mb-6">
              At <span className="text-blue-400 font-semibold">Mohawk College's XR Innovation Studio</span>, I engaged in a project for the <span className="text-green-400 font-semibold">Ontario Vehicle Innovation Network</span>, developing a VR game to ignite student interest in automotive technology.
            </p>

            <img src={Image} alt="OVIN Menu" className="w-full md:max-w-md mx-auto h-auto shadow-lg my-4" />



            <h2 className="text-3xl font-semibold mb-6 text-gradient">
              Realistic VR Driving Experience
            </h2>

            <p className="text-lg md:text-xl leading-relaxed mb-6">
              My role was to create a <span className="text-yellow-400 font-semibold">realistic driving experience</span>, simulating the nuances of driving and making every action, from turning to accelerating, feel lifelike and authentic for the users.
            </p>
          </div>

          <div className="md:w-1/2 text-left px-4">
            <img src={Image2} alt="Formula Car" className="w-full md:max-w-md mx-auto h-auto shadow-lg my-4" />

            <h2 className="text-3xl font-semibold mb-6 text-gradient">
              Engaging and Educating
            </h2>

            <p className="text-lg md:text-xl leading-relaxed mb-6">
              The project balanced <span className="text-pink-400 font-semibold">education with entertainment</span>, aiming to deliver a comprehensive understanding of the automotive world to young minds. Incentives like driving a custom-built car and an intuitive tutorial system were crucial in maintaining engagement and ensuring a smooth learning curve.
            </p>

            <h2 className="text-3xl font-semibold mb-6 text-gradient">
              Technical Optimization
            </h2>

            <p className="text-lg md:text-xl leading-relaxed">
              A significant challenge was optimizing the VR experience for high-poly car models. Through research and application of various <span className="text-cyan-400 font-semibold">optimization techniques</span>, I achieved a balance between high visual fidelity and smooth gameplay, showcasing VR's potential in immersive education.
            </p>
          </div>
        </div>
      </div>
      <LandscapeOverlay />
    </div>
  );
};

export default OVIN;
