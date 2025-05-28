import React from 'react';
import { useNavigate } from 'react-router-dom';
import profileImage from '../../assets/images/professional-photo.jpg';
import LandscapeOverlay from '../../components/LandscapeOverlay';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import PreloadImages from '../../components/PreloadImages';

const AboutMe = () => {
  const navigate = useNavigate();

  const navigateToSkills = () => {
    navigate('/skills');
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <PreloadImages>
      <div className="min-h-screen min-w-full bg-black text-gray-300 flex flex-col justify-center p-4">
        <button onClick={handleBack} className="text-white absolute top-5 left-5 flex items-center">
          <ArrowBackIcon />
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
              <p className="transition duration-300 ease-in-out hover:text-gray-100 hover:shadow-md">
                <span className="font-bold">I'm a software developer</span> with a deep passion for building and creating. I recently graduated with an advanced diploma in Software Development from <span className="italic text-blue-400">Mohawk College</span>.
              </p>
              <p className="transition duration-300 ease-in-out hover:text-gray-100 hover:shadow-md">
                I began programming at 14, initially just for fun. Over time, it grew into a lifelong pursuit and a professional path.
              </p>
              <p className="transition duration-300 ease-in-out hover:text-gray-100 hover:shadow-md">
                Whether it's developing games like <span className="text-purple-400">Void</span> under my brand <span className="text-red-400">Raethexn Technologies</span>, or experimenting with AI, machine learning, or creative media, I constantly seek to merge art and engineering.
              </p>
              <p className="transition duration-300 ease-in-out hover:text-gray-100 hover:shadow-md">
                My interests range from full-stack development to visual design, music production, and even running a virtual influencer project called <span className="text-pink-400">Raethexn</span>—a fusion of cyberpunk and post-human themes.
              </p>
              <p className="transition duration-300 ease-in-out hover:text-gray-100 hover:shadow-md">
                I thrive on learning, improving, and creating. For me, every project is a chance to refine my craft, inspire others, and explore new dimensions of technology and creativity.
              </p>
              <p className="transition duration-300 ease-in-out hover:text-gray-100 hover:shadow-md">
                <span className="font-bold text-green-400">Technology is more than a career—it's a calling.</span> Welcome to my world.
              </p>
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
    </PreloadImages>
  );
};

export default AboutMe;
