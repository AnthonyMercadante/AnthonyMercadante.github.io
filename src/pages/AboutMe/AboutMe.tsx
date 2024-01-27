import React from 'react';
import { useNavigate } from 'react-router-dom';
import profileImage from '../../assets/images/professional-photo.jpg';
import LandscapeOverlay from '../../components/LandscapeOverlay';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';

const AboutMe = () => {
  const navigate = useNavigate();

  const navigateToSkills = () => {
    navigate('/skills');
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen min-w-full bg-black text-gray-300 flex flex-col justify-center p-4">
      <button onClick={handleBack} className="text-white absolute top-5 left-5 flex items-center">
        <ArrowBackIcon /> {/* Material-UI Icon */}
      </button>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start">
        <div className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 mb-4 sm:mb-0">
          <img
            src={profileImage}
            alt="Profile"
            className="max-w-full h-auto rounded-full shadow-lg"
          />
        </div>
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 text-center sm:text-left p-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Hello! I'm Anthony Mercadante</h1>
          <div className="space-y-4">
            <div className="space-y-4">
              <p className="transition duration-300 ease-in-out hover:text-gray-100 hover:shadow-md">
                <span className="font-bold">I'm a software developer</span> with a love for technology that has been with me since my earliest days.
                Currently in my 3rd year at <span className="italic text-blue-400">Mohawk College</span>, I am pursuing an advanced diploma in Software Development.
              </p>
              <p className="transition duration-300 ease-in-out hover:text-gray-100 hover:shadow-md">
                My journey with technology began at the age of 14, when I started <span className="font-bold">programming as a hobby</span>.
              </p>
              <p className="transition duration-300 ease-in-out hover:text-gray-100 hover:shadow-md">
                Back then, <span className="underline">coding was a personal pursuit</span>, driven by curiosity and the joy of creating things.
              </p>
              <p className="transition duration-300 ease-in-out hover:text-gray-100 hover:shadow-md">
                What sets me apart in my educational and professional journey is my <span className="text-yellow-300">love for coding and technology</span>.
                While many see it as a means to an end, for me, it's a pursuit of passion.
              </p>
              <p className="transition duration-300 ease-in-out hover:text-gray-100 hover:shadow-md">
                My enthusiasm extends beyond the classroom and the workplace; I like to immerse myself in coding, discussing industry trends, and
                constantly learning, even in my leisure time. This enthusiasm, I've realized, is <span className="italic">somewhat rare</span>.
              </p>
              <p className="transition duration-300 ease-in-out hover:text-gray-100 hover:shadow-md">
                In essence, <span className="font-bold text-green-400">I am not just a software developer</span>; I am someone who lives and breathes technology.
                Every line of code I write is a step towards getting better, a testament to my commitment to growth,
                and an opportunity to contribute positively to the world. Welcome to my journey.
              </p>
            </div>

          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={navigateToSkills}
            sx={{ marginTop: 2, backgroundColor: '#333', ':hover': { backgroundColor: '#555' } }}
          >
            View My Skills
          </Button>
        </div>
      </div>
      <LandscapeOverlay />
    </div>
  );
};

export default AboutMe;