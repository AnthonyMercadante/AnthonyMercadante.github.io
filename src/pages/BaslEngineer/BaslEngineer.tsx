import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import LandscapeOverlay from '../../components/LandscapeOverlay';

const BaslEngineer: React.FC = () => {
  const navigate = useNavigate();

  const sections = [
    {
      label: 'The Challenge',
      accent: 'text-cyan-400',
      content: (
        <>
          BASL.ai is a <span className="text-white font-medium">knowledge-management SaaS</span> for
          real-estate brokerages. Agents were drowning in siloed CRMs, manual data entry, and
          disjointed communications tools — a dialer here, an SMS portal there, a legacy CRM
          somewhere else. The goal was to consolidate them into one unified platform.
        </>
      ),
    },
    {
      label: 'Approach',
      accent: 'text-violet-400',
      content: (
        <>
          Delivered end-to-end features with{' '}
          <span className="text-white font-medium">Vue 3 + Inertia.js</span>, a Laravel API, and
          TailwindCSS. I shipped production PRs weekly, pairing with senior engineers for code
          review and rapid iteration. Everything went through GitHub Actions and Docker for
          dev/stage/prod parity.
        </>
      ),
    },
    {
      label: 'Key Responsibilities',
      accent: 'text-orange-400',
      content: (
        <>
          <strong className="text-white">Data Pipeline:</strong> Built a spreadsheet-upload flow
          that auto-mapped heterogeneous MLS/CRM exports, validated rows server-side, and processed{' '}
          <span className="text-white font-medium">10k-row files in under 30 seconds</span>.
          <br />
          <br />
          <strong className="text-white">Programmable Comms:</strong> Integrated Twilio Voice/SMS
          for in-browser calling, SMS, call routing, voicemail transcription, and auto-logging to
          client records.
          <br />
          <br />
          <strong className="text-white">CI/CD & Quality:</strong> Authored PHPUnit tests,
          leveraged GitHub Actions, and containerized services with Docker.
        </>
      ),
    },
    {
      label: 'Outcomes',
      accent: 'text-emerald-400',
      content: (
        <>
          <strong className="text-white">Zero Manual Entry:</strong> Agents upload data once and
          work inside a unified dashboard.
          <br />
          <br />
          <strong className="text-white">Tool Consolidation:</strong> One Vue interface replaced
          three legacy apps — dialer, SMS portal, and CRM.
          <br />
          <br />
          <strong className="text-white">Performance:</strong> Large imports dropped from hours to
          seconds; voice/SMS actions log instantly for a real-time client timeline.
        </>
      ),
    },
    {
      label: 'Reflection',
      accent: 'text-zinc-400',
      content: (
        <>
          The internship sharpened my ability to{' '}
          <span className="text-white font-medium">ship full-stack features fast</span>, weave
          third-party APIs into seamless UX, and communicate business value clearly in stakeholder
          demos. It's a pattern I carry into every product I build now.
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-300 px-6 py-16">
      <IconButton
        onClick={() => navigate(-1)}
        sx={{ position: 'absolute', top: 20, left: 20, color: 'rgba(255,255,255,0.4)', '&:hover': { color: '#fff' } }}
      >
        <ArrowBackIcon />
      </IconButton>

      <div className="max-w-3xl mx-auto space-y-10">
        <div className="space-y-1">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Software Engineer Intern
          </h1>
          <p className="text-sm font-mono text-cyan-400">BASL.ai · May 2024 – Sep 2024</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {sections.map(({ label, accent, content }) => (
            <div
              key={label}
              className="border border-zinc-800 rounded-xl p-5 bg-zinc-900/30 space-y-3"
            >
              <h2 className={`text-xs font-mono font-medium uppercase tracking-widest ${accent}`}>
                {label}
              </h2>
              <p className="text-sm leading-relaxed">{content}</p>
            </div>
          ))}
        </div>
      </div>

      <LandscapeOverlay />
    </div>
  );
};

export default BaslEngineer;
