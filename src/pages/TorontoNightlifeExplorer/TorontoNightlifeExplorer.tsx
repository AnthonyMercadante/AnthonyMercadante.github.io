import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DownloadIcon from '@mui/icons-material/Download'; // Material UI Download Icon
import Button from '@mui/material/Button'; // Material UI Button
import LandscapeOverlay from '../../components/LandscapeOverlay';

const TorontoNightlifeExplorer = () => {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gradient"><br></br><br></br>
          Toronto Nightlife Explorer: Discover the City's Vibrant Nightlife
        </h1>

        <iframe
          className="w-full md:max-w-3xl mx-auto aspect-video mb-6"
          src="https://www.youtube.com/embed/ux_hegEjP9s?si=OCZc5g_SeGPG7Ku5" 
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <a href="https://drive.google.com/file/d/1Y_E-ye0HN7NRk-d5Gg7DcbRVdVBA4hnI/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <Button variant="contained" startIcon={<DownloadIcon />} sx={{ backgroundColor: '#333', marginBottom: '2rem' }}>
            Download App
          </Button>
        </a>

        <div className="md:flex md:flex-row md:justify-center">
          <div className="md:w-1/2 text-left px-4 mb-6">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              The <span className="text-purple-400 font-semibold">Toronto Nightlife Explorer</span> app is a unique proof of concept prototype connects users with the best clubs, restaurants, venues, and festivals in Toronto. It utilizes web API calls to Google to fetch real-time data about nightlife spots.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              Incorporating a <span className="text-blue-400 font-semibold">user-friendly interface</span> and a curated search function, the app enhances the search for nightlife experience by providing personalized recommendations based on user preferences.
            </p>
          </div>

          <div className="md:w-1/2 text-left px-4">
            <h2 className="text-3xl font-semibold mb-6 text-gradient">
              Interactive Features and Dynamic Data Retrieval
            </h2>

            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Key features include dynamic searches based on user input, comprehensive listings, and a sleek layout using <span className="text-green-400 font-semibold">React Native</span> and <span className="text-yellow-500 font-semibold">Flexbox</span> for layout optimization.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              This project highlights my capabilities in integrating web services and developing responsive mobile applications, demonstrating my ability to creating engaging user experiences and leveraging technology in innovative ways.
            </p>
          </div>
        </div>
      </div>
      <LandscapeOverlay />
    </div>
  );
};

export default TorontoNightlifeExplorer;
