import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageShell, { Tags } from '../../components/PageShell';
import MediaEmbed from '../../components/MediaEmbed';
import { nova, novaMedia } from '../../data/nova';
import './Nova.css';

const capabilities = [
  {
    title: 'From domains to qualified leads',
    text: 'Single-domain and CSV intake normalise business data. Gemini research supplies company facts; scoring and a rule engine turn atomic signals into explainable qualification decisions.',
    detail: 'Research → signals → qualification',
  },
  {
    title: 'An assistant inside the meeting',
    text: 'Recall.ai brings Nova into Zoom, Google Meet, or Teams. OpenAI Realtime handles voice, while wake-word activation, speaking locks, and echo suppression help control when the agent responds.',
    detail: 'Live voice + conversation controls',
  },
  {
    title: 'Conversation connected to action',
    text: '38 server-side tools let the model look up leads, inspect evidence, record notes, create follow-ups, and work with opportunities. Post-call reports and lead update suggestions carry the conversation forward.',
    detail: 'Signed HTTP tools + scoped access',
  },
  {
    title: 'Context across business workflows',
    text: 'Slack events are matched to team-visible leads and become evidence, notes, and progress suggestions. Pipeline and progress boards bring opportunities, tasks, and blockers into the same application.',
    detail: 'Slack → evidence → reviewed actions',
  },
];

const decisions = [
  {
    title: 'Modular services, one application',
    text: 'A Laravel monolith shares models while separating lead intake, research, meetings, Slack, and pipeline services. Enrichment and scoring sit behind interfaces, allowing deterministic offline enrichment and interchangeable scoring. The main tool controller remains a refactoring target: a per-tool registry would make schemas and handlers easier to maintain.',
  },
  {
    title: 'Authorise the user and the agent',
    text: 'Laravel policies enforce lead visibility, with invitation-and-accept team membership. The headless meeting bot uses expiring, bot-bound signed URLs and rate-limited token and tool endpoints. It receives short-lived OpenAI client secrets; tool results stay within the meeting owner’s permitted data.',
  },
  {
    title: 'Keep consequential AI writes reviewable',
    text: 'Model-generated forecast changes wait for human approval. High-confidence progress items can apply automatically, while post-call lead updates remain suggestions. Transcripts and webhook payloads are redacted for PII and payment data before storage or LLM processing; Slack bot tokens are encrypted at rest.',
  },
  {
    title: 'Make asynchronous work recoverable',
    text: 'Recall and Slack webhooks use signature verification and replay protection. Recall event IDs prevent duplicate processing; deep-research and Slack jobs retry with backoff. Request correlation IDs, structured Cloud Logging, vendor canaries, and database/Redis readiness checks make failures easier to diagnose.',
  },
  {
    title: 'Balance cloud cost with responsiveness',
    text: 'Docker and Terraform support separate web, worker, and janitor roles on Cloud Run, with one shared image. The worker scales to zero; a scheduled queue drain recovers pending work, with up to about one minute of cold queue latency. Secret Manager injects credentials, while connectors provide Cloud SQL and Redis access.',
  },
  {
    title: 'Test integrations without paid services',
    text: 'The documented suite includes 1,700+ PHPUnit tests, Laravel Dusk browser tests, signed fake webhook events, and mocked HTTP clients. A stray-request guard fails tests that make unfaked outbound calls. CI also runs Pint, dependency audits, and Gitleaks. CSV import is currently synchronous; queued import with deduplication and progress is a next step.',
  },
];

function Architecture() {
  return (
    <figure className="nova-architecture" aria-labelledby="nova-architecture-caption">
      <div className="nova-architecture-lanes">
        <div className="nova-architecture-lane">
          <p className="eyebrow">01 / Clients & events</p>
          <div className="nova-node">
            <h3>Sales workspace</h3>
            <p>Vue 3 · Inertia.js · JavaScript</p>
            <span>
              Requests to Laravel <span aria-hidden="true">→</span>
            </span>
          </div>
          <div className="nova-node">
            <h3>Recall.ai meeting bot</h3>
            <p>Headless browser ↔ OpenAI Realtime</p>
            <span>
              Signed tools + webhooks <span aria-hidden="true">→</span>
            </span>
          </div>
          <div className="nova-node">
            <h3>Slack Events API</h3>
            <p>Tracked channel activity</p>
            <span>
              Signed events <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>
        <div className="nova-architecture-lane nova-architecture-core">
          <p className="eyebrow">02 / Laravel on Cloud Run</p>
          <div className="nova-node">
            <h3>Web</h3>
            <p>UI · policies · tools · webhooks</p>
          </div>
          <div className="nova-node">
            <h3>Worker</h3>
            <p>Research · reports · Slack ingest</p>
          </div>
          <div className="nova-node">
            <h3>Janitor</h3>
            <p>Scheduler · canaries · queue drain</p>
          </div>
          <p className="nova-architecture-note">One Docker image · distinct runtime roles</p>
        </div>
        <div className="nova-architecture-lane">
          <p className="eyebrow">03 / Data & providers</p>
          <div className="nova-node">
            <h3>Cloud SQL + Memorystore</h3>
            <p>MySQL records · Redis queues, cache, and session state</p>
          </div>
          <div className="nova-node">
            <h3>Research & speech</h3>
            <p>Gemini research · OpenAI Responses and web search · ElevenLabs TTS</p>
          </div>
          <div className="nova-node">
            <h3>Infrastructure</h3>
            <p>Terraform · Secret Manager · service connectors</p>
          </div>
        </div>
      </div>
      <figcaption id="nova-architecture-caption">
        Simplified system map. Laravel services read and write application data and call external
        providers; Redis carries background jobs. Live audio connects the bot’s browser directly to
        OpenAI Realtime, keeping long-lived audio sockets off the application servers.
      </figcaption>
    </figure>
  );
}

function Demonstration() {
  const { demoVideo, screenshots } = novaMedia;
  return (
    <section id="nova-demo" className="nova-section" aria-labelledby="nova-demo-title">
      <div className="nova-section-heading">
        <p className="eyebrow">05 / Demonstration</p>
        <h2 id="nova-demo-title">Follow a lead through the system.</h2>
      </div>
      <div className="nova-demo-layout">
        {demoVideo ? (
          <MediaEmbed src={demoVideo.embedUrl} title={demoVideo.title} poster={demoVideo.poster} />
        ) : (
          <div className="nova-demo-pending glass-edge">
            <p className="eyebrow">Guided walkthrough / Recording pending</p>
            <p className="nova-demo-statement">
              Research. Qualify.
              <br />
              <em>Act on the context.</em>
            </p>
            <p>
              A short walkthrough of lead intake, qualification evidence, and the meeting agent’s
              tool layer.
            </p>
            <span className="mono">Synthetic data · planned 2–3 minute demo</span>
          </div>
        )}
        <div className="nova-demo-outline">
          <ol>
            <li>
              <span className="entry-number">01</span>
              <div>
                <h3>Ingest & qualify</h3>
                <p>Validate a CSV and inspect a lead’s score, research, and evidence.</p>
              </div>
            </li>
            <li>
              <span className="entry-number">02</span>
              <div>
                <h3>Exercise the agent’s tools</h3>
                <p>Replay a simulated discovery call through the real signed tool endpoint.</p>
              </div>
            </li>
            <li>
              <span className="entry-number">03</span>
              <div>
                <h3>Inspect the follow-through</h3>
                <p>
                  Find the resulting opportunity and follow-up on the pipeline and progress boards.
                </p>
              </div>
            </li>
          </ol>
          <p className="nova-demo-note">
            The offline demo uses deterministic enrichment and synthetic companies. Live meeting
            voice requires Recall.ai and OpenAI credentials.
          </p>
        </div>
      </div>
      {screenshots.length > 0 ? (
        <div className="nova-screenshots">
          {screenshots.map(({ src, alt, caption }) => (
            <figure key={src}>
              <a href={src} aria-label={`View full-size image: ${caption}`}>
                <img src={src} alt={alt} loading="lazy" />
              </a>
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className="nova-capture-plan" aria-label="Planned screenshots">
          {['Lead qualification & evidence', 'Opportunity pipeline', 'Progress & follow-ups'].map(
            (title) => (
              <div key={title}>
                <span className="eyebrow">Capture pending</span>
                <p>{title}</p>
              </div>
            ),
          )}
        </div>
      )}
    </section>
  );
}

export default function Nova() {
  useEffect(() => {
    const values: Record<string, string> = {
      'meta[name="description"]': nova.summary,
      'meta[property="og:title"]': `${nova.name} — ${nova.subtitle} | Anthony Mercadante`,
      'meta[property="og:description"]': nova.summary,
      'meta[property="og:url"]': `https://anthonymercadante.github.io${nova.route}`,
    };
    const originals = Object.entries(values).map(([selector, value]) => {
      const element = document.querySelector(selector);
      const previous = element?.getAttribute('content') ?? '';
      element?.setAttribute('content', value);
      return { element, previous };
    });
    return () =>
      originals.forEach(({ element, previous }) => element?.setAttribute('content', previous));
  }, []);

  return (
    <PageShell
      title={nova.name}
      eyebrow="Featured engineering / AI · Automation · Cloud"
      description={nova.subtitle}
      parent={{ to: '/Projects', label: 'Projects' }}
      className="nova-page"
    >
      <div className="nova-introduction">
        <div>
          <p className="nova-thesis">
            From business data
            <br />
            to <em>useful action.</em>
          </p>
          <p className="nova-lede">
            I built Nova to connect intelligent lead processing, real-time conversational AI, and
            business workflows in one full-stack application. It helps B2B sales teams research
            prospects, qualify opportunities, and act on context during and after a meeting.
          </p>
          <div className="nova-actions">
            <a className="action-link" href="#nova-architecture">
              Explore the architecture <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="#nova-demo">
              Demonstration <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <aside className="nova-at-a-glance glass-edge" aria-label="Project at a glance">
          <p className="eyebrow">Across the stack</p>
          <dl>
            <div>
              <dt>Application</dt>
              <dd>Laravel + Vue 3</dd>
            </div>
            <div>
              <dt>Agent interface</dt>
              <dd>38 server-side tools</dd>
            </div>
            <div>
              <dt>Infrastructure</dt>
              <dd>Google Cloud Run</dd>
            </div>
            <div>
              <dt>My role</dt>
              <dd>Full-stack & AI engineering</dd>
            </div>
          </dl>
          <Tags items={['PHP', 'JavaScript', 'Inertia.js', 'MySQL', 'Terraform']} />
        </aside>
      </div>

      <nav className="nova-section-nav" aria-label="Nova case study sections">
        {[
          ['nova-contributions', 'The work'],
          ['nova-capabilities', 'Capabilities'],
          ['nova-architecture', 'Architecture'],
          ['nova-decisions', 'Decisions'],
          ['nova-demo', 'Demo'],
        ].map(([id, label]) => (
          <a key={id} href={`#${id}`}>
            {label}
            <span aria-hidden="true">↓</span>
          </a>
        ))}
      </nav>

      <section
        id="nova-contributions"
        className="nova-section nova-context"
        aria-labelledby="nova-challenge-title"
      >
        <div>
          <p className="eyebrow">01 / The engineering challenge</p>
          <h2 id="nova-challenge-title">
            One system.
            <br />
            Many moving parts.
          </h2>
          <p>
            Business records, asynchronous AI research, live audio, and external events all move at
            different speeds. The challenge was to connect them while keeping access scoped,
            background work recoverable, and model-generated changes reviewable.
          </p>
        </div>
        <div>
          <h3>My engineering contributions</h3>
          <p>
            I designed and built Nova across the application architecture, Laravel backend,
            Vue/Inertia workspace, AI and API integrations, and cloud infrastructure. The
            application began as a consulting engagement; I later independently revived and
            modernised it as a portfolio project.
          </p>
          <p>
            That work spans the lead-processing pipeline, meeting-agent tools, business automation,
            deployment roles, and the testing and security controls around them.
          </p>
          <p className="nova-source-note">
            This case study draws on sanitized project documentation. The original development
            repository remains private.
          </p>
        </div>
      </section>

      <section
        id="nova-capabilities"
        className="nova-section"
        aria-labelledby="nova-capabilities-title"
      >
        <div className="nova-section-heading">
          <p className="eyebrow">02 / Core capabilities</p>
          <h2 id="nova-capabilities-title">Intelligence with somewhere to go.</h2>
        </div>
        <div className="nova-capabilities">
          {capabilities.map(({ title, text, detail }, i) => (
            <article key={title}>
              <span className="entry-number" aria-hidden="true">
                0{i + 1}
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="nova-capability-detail mono">{detail}</span>
            </article>
          ))}
        </div>
      </section>

      <section
        id="nova-architecture"
        className="nova-section"
        aria-labelledby="nova-architecture-title"
      >
        <div className="nova-section-heading">
          <p className="eyebrow">03 / Architecture & technology</p>
          <h2 id="nova-architecture-title">Shared domain. Separate responsibilities.</h2>
          <p>
            Vue and Inertia provide the workspace; Laravel owns business rules, authorisation, and
            integrations. A shared container runs as distinct web, worker, and scheduler services,
            backed by managed MySQL and Redis.
          </p>
        </div>
        <Architecture />
      </section>

      <section id="nova-decisions" className="nova-section" aria-labelledby="nova-decisions-title">
        <div className="nova-section-heading">
          <p className="eyebrow">04 / Engineering decisions</p>
          <h2 id="nova-decisions-title">The boundaries matter as much as the features.</h2>
          <p>
            Access control, model behaviour, and cloud operations shape the design. Open a decision
            for the implementation and its trade-offs.
          </p>
        </div>
        <div className="nova-decisions">
          {decisions.map(({ title, text }) => (
            <details key={title}>
              <summary>
                {title}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{text}</p>
            </details>
          ))}
        </div>
      </section>

      <Demonstration />

      <nav className="nova-case-footer" aria-label="More engineering projects">
        <Link className="text-link" to="/Projects">
          <span aria-hidden="true">←</span> All projects
        </Link>
        <Link className="text-link" to="/OpenMemory">
          Next: OpenMemory <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </PageShell>
  );
}
