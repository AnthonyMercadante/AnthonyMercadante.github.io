import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";
import cursorImage from "../../assets/images/arrow.png";
import LandscapeOverlay from "../../components/LandscapeOverlay";

const HomePage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      const height = window.innerHeight;
      setShow(position > height * 0.75);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Inline Style Tag */}
      <style>
        {`
          .fade-in-section {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 1s ease-out, transform 1s ease-out;
          }
          .fade-in-section.scrolled {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>
      {/* First Screen */}
      <div className="min-h-screen flex flex-col justify-center items-center text-center text-white p-5 bg-transparent relative">
        <div className="absolute inset-0 z-[-1]">
          <LandscapeOverlay />
        </div>
        <div className="z-10">
          <img src={cursorImage} alt="Cursor" className="floating-cursor" />
          <h1 className="text-6xl mb-3">
            <Link to="/about-me" className="text-white no-underline">
              Anthony Mercadante
            </Link>
          </h1>
          <p className="max-w-prose mb-5">
            I'm a full-stack software developer. Here you can find my portfolio,
            a small glimpse of recently worked on projects using various programming
            languages.
          </p>
          <Link
            to="/portfolio"
            className="inline-block bg-gray-800 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
          >
            View My Work
          </Link>
        </div>
      </div>
      
      {/* Second Screen */}
      <div className="min-h-screen flex flex-col justify-center items-center text-center text-white p-5 bg-black relative">
        <div className="z-10">
          <h2 className="text-5xl mb-3">DJ / Music Producer</h2>
          <p className="max-w-prose mb-5">
            Aside from coding, I have a passionate interest in DJing and music production. Explore my music projects and DJ mixes.
          </p>
          <Link
            to="/music"
            className="inline-block bg-gray-800 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50"
          >
            Explore My Music
          </Link>
        </div>
        <div className="absolute inset-0 z-[-1] opacity-75">
          {/* Optionally add a background or overlay that suits the music theme */}
          <LandscapeOverlay />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
