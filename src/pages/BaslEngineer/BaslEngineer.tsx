import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LandscapeOverlay from '../../components/LandscapeOverlay';

/**
 * Detail page for my Software Engineer Internship at BASL.ai (May–Sept 2024)
 * Follows the same layout aesthetic as other work‑experience pages.
 */
const BaslEngineer: React.FC = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'rgba(25,25,25,0.80)',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
    marginBottom: '20px',
    color: 'white',
    textAlign: 'left',
  };

  return (
    <div className="flex flex-col items-center bg-black text-white py-6 min-h-screen relative">
      {/* Back button */}
      <button onClick={handleBack} className="absolute top-5 left-5 z-10 text-white hover:text-blue-400 transition-colors">
        <ArrowBackIcon />
      </button>

      <div className="container mx-auto px-4 lg:px-16 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gradient">
          Software Engineer Intern @ BASL.ai
        </h1>

        <div className="md:flex md:flex-row md:justify-center">
          {/* Left column */}
          <div className="md:w-1/2 text-left px-4 mb-6">
            {/* Challenge */}
            <div style={cardStyle}>
              <h2 className="text-3xl font-semibold mb-6">
                The <span className="text-blue-400">Challenge</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                BASL.ai is a <span className="text-green-400">knowledge‑management SaaS</span> for real‑estate brokerages. Agents were drowning in siloed CRMs, manual data entry, and disjointed communications tools.
              </p>
            </div>

            {/* Approach */}
            <div style={cardStyle}>
              <h2 className="text-3xl font-semibold mb-6">
                My <span className="text-yellow-400">Approach</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed">
                Delivered end‑to‑end features with <span className="text-teal-300">Vue 3 + Inertia.js</span>, a <span className="text-pink-300">Laravel API</span>, and <span className="text-indigo-300">TailwindCSS</span>. I shipped production PRs weekly, pairing with senior engineers for code review and rapid iteration.
              </p>
            </div>

            {/* Responsibilities */}
            <div style={cardStyle}>
              <h2 className="text-3xl font-semibold mb-6">
                Key <span className="text-purple-400">Responsibilities</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed">
                <strong>Data Pipeline:</strong> Built a spreadsheet‑upload flow that auto‑mapped heterogeneous MLS/CRM exports, validated rows server‑side, and processed <span className="text-emerald-400">10 k‑row files in under 30 s</span>.<br/><br/>
                <strong>Programmable Comms:</strong> Integrated <span className="text-red-400">Twilio Voice/SMS</span> for in‑browser calling, SMS, call routing, voicemail transcription, and auto‑logging to client records.<br/><br/>
                <strong>CI/CD & Quality:</strong> Authored PHPUnit tests, leveraged GitHub Actions, and containerized services with Docker for parity across dev/stage/prod.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="md:w-1/2 text-left px-4">
            {/* Outcomes */}
            <div style={cardStyle}>
              <h2 className="text-3xl font-semibold mb-6">
                <span className="text-cyan-400">Outcomes</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                <strong>Zero Manual Entry:</strong> Agents now upload data once and work inside a unified dashboard.<br/><br/>
                <strong>Tool Consolidation:</strong> One Vue interface replaced <span className="text-orange-300">three legacy apps</span> (dialer, SMS portal, CRM).<br/><br/>
                <strong>Performance:</strong> Large imports dropped from hours to seconds; voice/SMS actions log instantly for a real‑time client timeline.
              </p>
            </div>

            {/* Conclusion */}
            <div style={cardStyle}>
              <h2 className="text-3xl font-semibold mb-6">
                <span className="text-orange-400">Reflection</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed">
                The internship sharpened my ability to <span className="text-lime-300">ship full‑stack features fast</span>, weave third‑party APIs into seamless UX, and speak business value in demos with stakeholders. It’s a playbook I carry into every product I build.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient landscape overlay */}
      <LandscapeOverlay />
    </div>
  );
};

export default BaslEngineer;
