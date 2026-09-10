import { useEffect, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell';
import { openMemory, openMemorySource } from '../../data/openMemory';
import EvidenceTrail from './EvidenceTrail';
import './OpenMemory.css';

const productViews = [
  {
    name: 'Ask',
    detail:
      'Question the imported history. Retrieve message excerpts across providers, with an optional generated answer and citations you can inspect.',
  },
  {
    name: 'Explore',
    detail:
      'Filter by provider, title, and date. Read messages in context, including edited-away branches, attachment metadata, and the separately accessible original source.',
  },
  {
    name: 'Timeline',
    detail:
      'Count mentions of a subject by month and provider, without a model. These are deterministic term counts, not inferred interests; capped scans are labelled as lower bounds.',
  },
  {
    name: 'Imports',
    detail:
      'Inspect what was new, changed, or already known. Each run records its parser version, statistics, and warnings. File imports also carry a source hash.',
  },
];

const provenance = [
  ['Answer', 'A cited statement'],
  ['Excerpt', 'The selected passage'],
  ['Message', 'Role and timestamp'],
  ['Conversation', 'Provider context'],
  ['Archive', 'Source hash and parser'],
];

function SourceLink({ path, children }: { path: string; children: ReactNode }) {
  return (
    <a
      className="om-source-link"
      href={openMemorySource(path)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children} <span aria-hidden="true">↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function OpenMemory() {
  useEffect(() => {
    const values: Record<string, string> = {
      'meta[name="description"]': openMemory.summary,
      'meta[property="og:title"]': 'OpenMemory — Anthony Mercadante',
      'meta[property="og:description"]': openMemory.summary,
      'meta[property="og:url"]': `https://anthonymercadante.github.io${openMemory.route}`,
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
      title="OpenMemory"
      eyebrow="Raethexn Technologies / Product & systems research"
      className="om-page"
      parent={{ to: '/Projects', label: 'Projects' }}
    >
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareSourceCode',
          name: openMemory.name,
          description: openMemory.summary,
          url: `https://anthonymercadante.github.io${openMemory.route}`,
          codeRepository: openMemory.repository,
          programmingLanguage: ['PHP', 'JavaScript', 'Motoko'],
          publisher: { '@type': 'Organization', name: 'Raethexn Technologies' },
        })}
      </script>

      <div className="om-introduction">
        <div className="om-intro-copy">
          <p className="om-thesis">
            Your AI history,
            <br />
            in one memory.
          </p>
          <p className="om-lede">
            The conversation belongs to the same person even when the model changes.
          </p>
          <p>
            An idea starts in ChatGPT, develops in Claude, and turns up again in Gemini. Each
            provider holds a piece. OpenMemory brings those exports into a local history the user
            can question, inspect, and keep.
          </p>
          <div className="om-actions">
            <a
              className="action-link"
              href={openMemory.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore the repository <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a className="text-link" href="#evidence">
              Follow the evidence <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <figure className="om-convergence">
          <figcaption className="eyebrow">Different providers. The same person.</figcaption>
          <ul className="om-provider-streams">
            <li>
              <span>ChatGPT</span>
              <span className="om-stream" aria-hidden="true" />
              <small>Archive</small>
            </li>
            <li>
              <span>Claude</span>
              <span className="om-stream" aria-hidden="true" />
              <small>Archive</small>
            </li>
            <li>
              <span>Gemini</span>
              <span className="om-stream" aria-hidden="true" />
              <small>Takeout</small>
            </li>
          </ul>
          <div className="om-convergence-join" aria-hidden="true">
            <span />↓
          </div>
          <div className="om-owned-corpus">
            <span className="eyebrow">OpenMemory</span>
            <strong>One user-controlled history</strong>
            <span>Normalized messages · original sources</span>
          </div>
          <p className="om-convergence-caption">
            Provider identity stays attached to every record.
          </p>
        </figure>
      </div>

      <div className="om-project-meta">
        <span>
          <span className="status-dot" aria-hidden="true" /> Working prototype / in development
        </span>
        <span>Laravel · Vue · PostgreSQL / SQLite</span>
      </div>
      <nav className="om-section-nav" aria-label="OpenMemory case study sections">
        <a href="#product">
          01 <span>Product</span>
        </a>
        <a href="#evidence">
          02 <span>Evidence</span>
        </a>
        <a href="#architecture">
          03 <span>Architecture</span>
        </a>
        <a href="#privacy">
          04 <span>Privacy</span>
        </a>
        <a href="#research">
          05 <span>Research</span>
        </a>
        <a href="#frontier">
          06 <span>Frontier</span>
        </a>
      </nav>

      <section id="product" className="om-section" aria-labelledby="om-product-title">
        <div className="om-section-heading">
          <p className="eyebrow">01 / The product today</p>
          <h2 id="om-product-title">History you can return to.</h2>
          <p>
            OpenMemory is a memory layer beneath the assistants someone uses. The new
            <code> /history </code> surface brings imported conversations together without making
            one provider the keeper of all the others.
          </p>
        </div>
        <div className="om-views">
          {productViews.map(({ name, detail }, i) => (
            <article key={name}>
              <span className="entry-number" aria-hidden="true">
                0{i + 1}
              </span>
              <h3>{name}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
        <p className="om-section-note">
          Import starts from a local command, not a browser upload. ChatGPT and Claude archives are
          supported, alongside Gemini Takeout activity exported as JSON.{' '}
          <SourceLink path="README.md#importing-your-ai-history">The import workflow</SourceLink>
        </p>
      </section>

      <section id="evidence" className="om-section" aria-labelledby="om-evidence-title">
        <div className="om-section-heading">
          <p className="eyebrow">02 / Ask your history</p>
          <h2 id="om-evidence-title">
            One question.
            <br />
            More than one provider.
          </h2>
          <p>
            A question can retrieve passages from conversations that never shared a context window.
            The useful part is being able to read what supports the answer.
          </p>
        </div>
        <EvidenceTrail />
        <ol className="om-provenance" aria-label="How an answer leads back to its source">
          {provenance.map(([title, detail], i) => (
            <li key={title}>
              <span className="om-chain-number" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <strong>{title}</strong>
              <span>{detail}</span>
            </li>
          ))}
        </ol>
        <div className="om-evidence-limit">
          <h3>A citation is a route back, not a guarantee.</h3>
          <p>
            Ask checks that citation labels refer to supplied excerpts and marks invented labels as
            unresolved. It does not verify that every sentence is supported, or that the model
            interpreted a source correctly. Retrieval is lexical today; a selection of matches is
            not the whole history.
          </p>
          <SourceLink path="app/app/Services/Conversations/ConversationAskService.php">
            Answer and citation handling
          </SourceLink>
        </div>
      </section>

      <section id="architecture" className="om-section" aria-labelledby="om-architecture-title">
        <div className="om-section-heading">
          <p className="eyebrow">03 / The corpus model</p>
          <h2 id="om-architecture-title">
            A common model.
            <br />A past kept intact.
          </h2>
          <p>
            Provider formats change. The archive needs to survive a better parser, a changed
            redaction policy, and a second import of mostly the same conversations.
          </p>
        </div>
        <figure className="om-pipeline">
          <figcaption className="eyebrow">Local ingestion / no model call</figcaption>
          <ol className="om-ingest-steps">
            <li>
              <span>01 / Read</span>
              <strong>Provider export</strong>
              <small>ZIP, folder, or JSON</small>
            </li>
            <li>
              <span>02 / Normalize</span>
              <strong>Provider adapter</strong>
              <small>Versioned, streamed records</small>
            </li>
            <li>
              <span>03 / Preserve</span>
              <strong>Local corpus</strong>
              <small>Owner-scoped storage</small>
            </li>
          </ol>
          <div className="om-projection-lanes">
            <div>
              <p className="eyebrow">Working projection</p>
              <strong>Redacted message text</strong>
              <p>Browse → retrieve → selected evidence</p>
            </div>
            <div>
              <p className="eyebrow">Preserved source</p>
              <strong>Original provider JSON</strong>
              <p>Separate raw-record access; excluded from retrieval</p>
            </div>
          </div>
        </figure>
        <div className="om-engineering-decisions">
          <article>
            <h3>Re-import should converge.</h3>
            <p>
              Provider identifiers, deterministic fallback IDs, and SHA-256 content hashes separate
              a changed record from a familiar one. Each conversation commits in its own
              transaction. Messages absent from a later export are retained and reported.
            </p>
            <SourceLink path="app/app/Services/Conversations/ConversationImportService.php">
              Import and merge decisions
            </SourceLink>
          </article>
          <article>
            <h3>A new provider should stay local to its adapter.</h3>
            <p>
              <code>ConversationArchiveAdapter</code> handles detection and yields normalized
              conversations. Parsing streams one JSON record at a time. ZIP limits bound entry size,
              total size, count, and compression ratio; unsafe paths are refused.
            </p>
            <SourceLink path="app/app/Services/Conversations/Adapters/ConversationArchiveAdapter.php">
              The adapter contract
            </SourceLink>
          </article>
        </div>
        <div className="om-provider-decisions">
          <h3>Normalization has to respect what the provider actually recorded.</h3>
          <dl>
            <div>
              <dt>ChatGPT</dt>
              <dd>
                The active branch is reconstructed; edited-away branches survive. Retrieval uses the
                active path by default.
              </dd>
            </div>
            <div>
              <dt>Claude</dt>
              <dd>
                Message roles and content blocks are normalized. Thinking and tool blocks are
                recorded structurally rather than mixed into the transcript.
              </dd>
            </div>
            <div>
              <dt>Gemini</dt>
              <dd>
                Takeout supplies activity records without reliable thread identifiers. OpenMemory
                preserves that grain instead of inventing a conversation.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="privacy" className="om-section" aria-labelledby="om-privacy-title">
        <div className="om-section-heading">
          <p className="eyebrow">04 / Privacy is part of the architecture</p>
          <h2 id="om-privacy-title">
            A small, explicit
            <br />
            model boundary.
          </h2>
          <p>
            An export can contain years of private conversation. Sending it to one provider in the
            past is not blanket consent to send it to another now.
          </p>
        </div>
        <div className="om-model-boundary">
          <div className="om-local-side">
            <span className="eyebrow">Local processing</span>
            <h3>Import, review, retrieve.</h3>
            <p>
              Parsing, hashing, normalization, redaction, and timeline counts need no model call.
            </p>
          </div>
          <div className="om-boundary-crossing">
            <span aria-hidden="true">→</span>
            <p>
              The question +<br />
              bounded, redacted excerpts
            </p>
          </div>
          <div className="om-model-side">
            <span className="eyebrow">Optional generation</span>
            <h3>A configured model.</h3>
            <p>
              With generation disabled, Ask still returns evidence. No archive is sent for
              ingestion.
            </p>
          </div>
        </div>
        <div className="om-privacy-rules">
          <article>
            <h3>Private by default</h3>
            <p>
              History routes resolve a corpus owner. Imported conversations stay outside public
              graph recall and MCP responses; a connected agent cannot search this archive through
              MCP.
            </p>
          </article>
          <article>
            <h3>Source and projection are separate</h3>
            <p>
              Ordinary message browsing and retrieval read redacted text. Original JSON has a
              separate, owner-scoped access path. Preserving it does not mean including it in every
              prompt.
            </p>
          </article>
          <article>
            <h3>Historical text is untrusted</h3>
            <p>
              Excerpts are delimited and labelled by origin, with instructions to treat their
              contents as historical data. Gemini HTML becomes plain text. These are safeguards, not
              proof against prompt injection.
            </p>
          </article>
        </div>
        <p className="om-section-note">
          The local application remains a trust boundary. Pattern-based redaction is not a guarantee
          that every sensitive detail is removed, and local owner scoping is not a hosted multi-user
          authentication system. <SourceLink path="SECURITY.md">Security boundaries</SourceLink>
        </p>
      </section>

      <section id="research" className="om-section" aria-labelledby="om-research-title">
        <div className="om-section-heading">
          <p className="eyebrow">05 / The research underneath</p>
          <h2 id="om-research-title">
            The archive grew out of
            <br />a deeper memory problem.
          </h2>
          <p>
            OpenMemory began with carrying useful project context between AI tools. That work still
            matters: shared recall, source-backed retrieval, and control over who can read or write
            a memory. The history product gives those questions a larger scope.
          </p>
        </div>
        <div className="om-memory-layers">
          <div>
            <span className="eyebrow">Historical corpus / implemented</span>
            <h3>Imported conversations</h3>
            <p>Private source records → lexical evidence → History</p>
          </div>
          <p className="om-layer-gap">
            <span aria-hidden="true">⋮</span> Derivation into graph memory is future work
          </p>
          <div>
            <span className="eyebrow">Live memory & research / implemented</span>
            <h3>Durable records and typed graph</h3>
            <p>Public, scoped recall → MCP clients and chat</p>
          </div>
        </div>
        <div className="om-research-rows">
          <article>
            <h3>MCP across tools</h3>
            <p>
              Store a durable project decision in one connected coding agent and recall relevant
              public records from another. <code>search_memories</code> selects a small,
              query-ranked set rather than the whole corpus. Codex, Claude Code, and Gemini CLI
              belong to this live-memory pathway; their session-log imports are still roadmap work.
            </p>
          </article>
          <article>
            <h3>Physarum-inspired graph dynamics</h3>
            <p>
              Typed memories connect to people, projects, concepts, and goals. Co-access reinforces
              edges; unused paths decay. Consolidation experiments compress clusters while keeping
              links to their source nodes. These mechanisms operate on the existing memory graph,
              not automatically on imported history.
            </p>
          </article>
          <article>
            <h3>Retrieval, evidence, evaluation</h3>
            <p>
              Query-aware selection, graph expansion, and grounded document QA are separate
              experiments. Document evidence carries source references and quote spans. The
              synthetic retrieval benchmark has not established a benefit for graph traversal over
              the lexical control; answer-level evaluation remains an active frontier.
            </p>
          </article>
          <article>
            <h3>ICP ownership experiments</h3>
            <p>
              Browser-signed writes and canister-level access checks explore ownership outside an
              application database. The live browser and terminal paths use different identities.
              ICP remains part of the research, while local conversation import works without a
              canister.
            </p>
          </article>
        </div>
        <aside className="om-research-observation">
          <p>
            A stronger edge shows that two memories were accessed together. It does not show that
            they made the answer better.
          </p>
          <SourceLink path="VISION.md#what-this-does-not-prove">The observation gap</SourceLink>
        </aside>
      </section>

      <section id="frontier" className="om-section" aria-labelledby="om-frontier-title">
        <div className="om-section-heading">
          <p className="eyebrow">06 / The current frontier</p>
          <h2 id="om-frontier-title">
            What can a history reveal
            <br />
            without inventing a person?
          </h2>
          <p>
            The long-term question is what becomes visible when an idea returns across months,
            providers, and different words. Finding a matching passage is a start. Explaining
            changing priorities or persistent goals needs a derived layer that can be checked.
          </p>
        </div>
        <div className="om-frontier-questions">
          <article>
            <h3>What should become a memory?</h3>
            <p>
              Entities, goals, decisions, recurring questions, and contradictions are not yet
              derived from imported history. The next layer must keep pointers to the messages
              behind each claim.
            </p>
          </article>
          <article>
            <h3>Can retrieval follow an idea as its language changes?</h3>
            <p>
              Current conversation retrieval uses lexical matches and a bounded candidate pool.
              Semantic retrieval, temporal operators, and tests against a known longitudinal corpus
              are next research steps.
            </p>
          </article>
          <article>
            <h3>Can the user leave OpenMemory, too?</h3>
            <p>
              A portable corpus export format and broader deletion controls remain roadmap work. So
              does a simpler install experience. Ownership has to include a practical way out.
            </p>
          </article>
        </div>
        <div className="om-current-limits">
          <h3>Other limits of the current implementation</h3>
          <p>
            Imports run synchronously. Attachment metadata can survive without importing file bytes.
            The archive does not feed <code>memory_nodes</code> automatically. Higher-order
            conclusions about a person are not a shipped feature.
          </p>
        </div>
        <SourceLink path="ROADMAP.md">Read the current research direction</SourceLink>
      </section>

      <footer className="om-case-footer">
        <div>
          <p className="eyebrow">Open source / Raethexn Technologies</p>
          <h2>Follow the implementation.</h2>
          <p>The product is changing. The source should be able to support the story.</p>
          <a
            className="action-link"
            href={openMemory.repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenMemory on GitHub <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <div className="om-source-note">
          <p>
            Implementation reviewed{' '}
            <time dateTime={openMemory.reviewedDate}>10 September 2026</time>.
          </p>
          <SourceLink path="README.md">
            Source snapshot {openMemory.reviewedRevision.slice(0, 7)}
          </SourceLink>
          <p>
            Technical references point to that revision. The repository link opens the project’s
            current main branch.
          </p>
          <Link to="/story#raethexn" className="text-link">
            Where Raethexn began <span aria-hidden="true">→</span>
          </Link>
        </div>
      </footer>
    </PageShell>
  );
}
