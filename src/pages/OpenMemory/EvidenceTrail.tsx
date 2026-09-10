import { useState } from 'react';

// Entirely fictional records for the public case study; no imported corpus is used.
const examples = [
  {
    label: 'E1',
    provider: 'ChatGPT',
    date: '12 January 2024',
    isoDate: '2024-01-12',
    title: 'A pocket field guide',
    excerpt:
      'For the field guide, start with a pocket-sized list of local birds. It needs to work offline.',
    archive: 'demo-chatgpt-export.zip',
    message: 'demo-message-01',
    conversation: 'demo-conversation-01',
  },
  {
    label: 'E2',
    provider: 'Claude',
    date: '18 May 2024',
    isoDate: '2024-05-18',
    title: 'Maps for the field guide',
    excerpt:
      'The field guide now needs offline maps as well as bird notes. Keep sightings on the device.',
    archive: 'demo-claude-export.zip',
    message: 'demo-message-02',
    conversation: 'demo-conversation-02',
  },
  {
    label: 'E3',
    provider: 'Gemini',
    date: '9 February 2025',
    isoDate: '2025-02-09',
    title: 'Exporting field guide notes',
    excerpt: 'For the field guide, add an export of my notes before I change phones.',
    archive: 'demo-gemini-takeout.zip',
    message: 'demo-message-03',
    conversation: 'demo-activity-03',
  },
];

export default function EvidenceTrail() {
  const [selected, setSelected] = useState(0);
  const evidence = examples[selected];

  const citation = (index: number) => (
    <button
      type="button"
      className="om-citation"
      aria-label={`Inspect synthetic evidence ${examples[index].label} from ${examples[index].provider}`}
      aria-pressed={selected === index}
      aria-controls="om-evidence-record"
      onClick={() => setSelected(index)}
    >
      [{examples[index].label}]
    </button>
  );

  return (
    <div className="om-evidence-demo">
      <div className="om-demo-label">
        <span className="eyebrow">Illustrative walkthrough</span>
        <span>Synthetic conversations · no live query</span>
      </div>
      <div className="om-demo-columns">
        <div className="om-demo-answer">
          <p className="eyebrow">A question across the archive</p>
          <p className="om-question">How did the offline field guide idea develop?</p>
          <div className="om-illustrative-answer">
            <p className="eyebrow">Illustrative answer</p>
            <p>
              An offline bird <span className="om-cited-phrase">list {citation(0)}</span> expands
              into maps and local <span className="om-cited-phrase">sightings {citation(1)}.</span>{' '}
              Later, the notes need an export{' '}
              <span className="om-cited-phrase">path {citation(2)}.</span>
            </p>
          </div>
          <p className="om-demo-instruction">Select a citation to follow it back to source.</p>
          <div className="om-demo-span" aria-hidden="true">
            <span>2024</span>
            <span className="om-span-line" />
            <span>2025</span>
          </div>
        </div>
        <div
          className="om-evidence-record"
          id="om-evidence-record"
          role="region"
          aria-label="Selected synthetic source"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="om-evidence-heading">
            <h3>Evidence {evidence.label}</h3>
            <span className="om-provider-name">{evidence.provider}</span>
          </div>
          <blockquote>{evidence.excerpt}</blockquote>
          <dl className="om-source-details">
            <div>
              <dt>Message</dt>
              <dd>
                User · <time dateTime={evidence.isoDate}>{evidence.date}</time>
                <code>{evidence.message}</code>
              </dd>
            </div>
            <div>
              <dt>{selected === 2 ? 'Activity record' : 'Conversation'}</dt>
              <dd>
                {evidence.title}
                <code>{evidence.conversation}</code>
              </dd>
            </div>
            <div>
              <dt>Provider archive</dt>
              <dd>{evidence.archive}</dd>
            </div>
          </dl>
          <p className="om-record-note">
            {selected === 2
              ? 'Gemini Takeout supplies activity records. A thread is not inferred from their timing.'
              : 'In OpenMemory, the import record also carries the source hash and parser version.'}
          </p>
        </div>
      </div>
    </div>
  );
}
