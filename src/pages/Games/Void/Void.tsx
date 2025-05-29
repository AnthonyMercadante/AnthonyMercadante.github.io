import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

/**
 * Showcase page for VOID – my original 3D game project (Alpha v0.0.1)
 * Featuring real-time mob animations, performance-focused design,
 * and a custom unit-frame UI inspired by World of Warcraft.
 */
const VoidGame: React.FC = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'rgba(25, 25, 25, 0.80)',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
    marginBottom: '20px',
    color: 'white',
    textAlign: 'left',
  };

  return (
    <div className="flex flex-col items-center bg-black text-white py-6 min-h-screen relative">
      <button onClick={handleBack} className="absolute top-5 left-5 z-10 text-white hover:text-blue-400 transition-colors">
        <ArrowBackIcon />
      </button>

      <div className="container mx-auto px-4 lg:px-16 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gradient">
          VOID
        </h1>

        <div className="flex flex-col md:flex-row md:justify-center">
          <div className="md:w-1/2 text-left px-4 mb-6">
            <div style={cardStyle}>
              <h2 className="text-3xl font-semibold mb-6">
                The <span className="text-blue-400">Vision</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed">
                VOID is a dark, stylized 3D game exploring ambient dread and sci-fi estrangement. Built in Unity, it focuses on performance and immersion—featuring animated mobs, real-time mechanics, and a floating unit frame UI instead of traditional camera-locked health bars.
              </p>
            </div>

            <div style={cardStyle}>
              <h2 className="text-3xl font-semibold mb-6">
                <span className="text-purple-400">Tech Stack</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed">
                VOID is built with Unity using C#. Enemies feature walking animations powered by Animator Controllers. The UI takes inspiration from MMORPGs—unit frames persist onscreen, ensuring minimal camera interference.
              </p>
            </div>

            <div style={cardStyle}>
              <h2 className="text-3xl font-semibold mb-6">
                Design <span className="text-yellow-400">Choices</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed">
                - Health bars are anchored to the UI, not the world space<br/>
                - Designed with performance-first mindset<br/>
                - Modular mob system for easy future expansion
              </p>
            </div>
          </div>

          <div className="md:w-1/2 text-left px-4">
            <div style={cardStyle}>
              <h2 className="text-3xl font-semibold mb-6">
                <span className="text-cyan-400">Demo Video</span>
              </h2>
              <div className="w-full rounded-lg overflow-hidden" style={{ height: '400px' }}>
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/1FKdzQ8HbpU"
                  title="VOID Game Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div style={cardStyle}>
              <h2 className="text-3xl font-semibold mb-6">
                <span className="text-green-400">Current Status</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed">
                VOID is currently in Alpha (v0.0.1). Core gameplay mechanics are in place, including enemy animation loops and a UI system. Next phase includes AI, terrain polish, and music integration.
              </p>
            </div>

            <div style={cardStyle}>
              <h2 className="text-3xl font-semibold mb-6">
                <span className="text-pink-400">What’s Next?</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed">
                - Enemy AI and pathfinding<br/>
                - Procedural level elements<br/>
                - Ambient soundtrack and VFX layering<br/>
                - Steam prototype release
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoidGame;
