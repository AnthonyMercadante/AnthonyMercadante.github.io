import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import LandscapeOverlay from '../../components/LandscapeOverlay';

const AutomationAssistant = () => {
  const navigate = useNavigate();

  const sections = [
    {
      label: 'The Challenge',
      accent: 'text-cyan-400',
      content: (
        <>
          The research department's funding proposals manager needed to produce grant proposals
          repeatedly across different funding bodies — each with slightly different requirements.
          The process was manual, time-consuming, and error-prone. The goal was to automate
          template selection, content generation, and proposal formatting into a single desktop
          workflow.
        </>
      ),
    },
    {
      label: 'Approach',
      accent: 'text-violet-400',
      content: (
        <>
          Built a Python desktop application using{' '}
          <span className="text-white font-medium">Qt 6</span> for the UI, integrated with{' '}
          <span className="text-white font-medium">OpenAI</span> for draft generation from
          structured prompts, and SQLite for proposal history and template management. httpx handled
          async API calls to keep the interface responsive during generation.
        </>
      ),
    },
    {
      label: 'Key Responsibilities',
      accent: 'text-orange-400',
      content: (
        <>
          <strong className="text-white">Template System:</strong> Designed a parameterized
          template engine that adapted proposal structure based on funding body requirements.
          <br />
          <br />
          <strong className="text-white">AI Integration:</strong> Wired OpenAI API to generate
          proposal sections from structured form data — first practical use of LLMs in production
          tooling.
          <br />
          <br />
          <strong className="text-white">Staff Onboarding:</strong> Delivered training sessions
          and documentation so the research team could operate the tool independently.
        </>
      ),
    },
    {
      label: 'Outcomes',
      accent: 'text-emerald-400',
      content: (
        <>
          <strong className="text-white">Time Reduction:</strong> Proposal drafting time cut
          significantly — what previously took hours of manual writing became a guided 20-minute
          workflow.
          <br />
          <br />
          <strong className="text-white">Accuracy:</strong> Automated templates and form
          validation reduced structural errors in submitted proposals.
          <br />
          <br />
          <strong className="text-white">Adoption:</strong> The department transitioned to the
          tool without disrupting ongoing grant cycles.
        </>
      ),
    },
    {
      label: 'Reflection',
      accent: 'text-zinc-400',
      content: (
        <>
          This was my first production integration of language models into real institutional
          software. It shaped how I think about{' '}
          <span className="text-white font-medium">LLMs as workflow infrastructure</span> — not
          chatbots, but systems that do specific, bounded tasks with user-controlled inputs. A
          principle I've carried into every AI project since.
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
            Automation Assistant
          </h1>
          <p className="text-sm font-mono text-cyan-400">Mohawk College Research Dept. · Sep 2022 – Dec 2022</p>
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

export default AutomationAssistant;
