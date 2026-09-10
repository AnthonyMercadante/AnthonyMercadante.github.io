import { Link } from 'react-router-dom';
import PageShell, { TextLink } from '../../components/PageShell';
import profileImage from '../../assets/images/professional-photo.jpg';

export default function AboutMe() {
  return (
    <PageShell
      title="Anthony Mercadante"
      eyebrow="A little context"
      description="Software & AI Engineer · Founder · Canada"
      className="about-page"
    >
      <div className="about-layout">
        <aside className="about-portrait">
          <img src={profileImage} alt="Anthony Mercadante" width="400" height="400" />
          <p className="eyebrow">Engineering is a long-term practice.</p>
          <a
            className="text-link"
            href="https://www.raethexntechnologies.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Raethexn Technologies <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </aside>
        <div className="about-bio">
          <p>
            I'm a software and AI engineer based in Canada, and the founder of{' '}
            <span className="bio-highlight">Raethexn Technologies</span> — an independent
            engineering studio building open-source systems at the intersection of AI, identity,
            memory, and cloud-native infrastructure.
          </p>
          <p>
            I started programming at 14. My current focus is on{' '}
            <span className="bio-highlight">AI agent architectures</span>, LLM integrations, memory
            infrastructure, and natural language interfaces. Recent work includes{' '}
            <span className="bio-highlight">OpenMemory</span> — portable AI memory on ICP with
            Physarum-inspired graph dynamics — and the{' '}
            <span className="bio-highlight">AircraftIdentificationAI</span> project, built in
            partnership with Canada's National Air Force Museum.
          </p>
          <p>
            Beyond AI: XR simulations for engineering education, automated research tooling,
            full-stack SaaS.{' '}
            <span className="bio-highlight">Engineering is a long-term practice.</span>
          </p>

          <Link to="/story" className="about-story">
            <p className="eyebrow">The long version</p>
            <h2>
              How I got here <span aria-hidden="true">↗</span>
            </h2>
            <p>First build at 13, the salvage years, audio engineering — 2009 to 2025.</p>
          </Link>
          <div className="about-links">
            <TextLink to="/skills">Skills & stack</TextLink>
            <TextLink to="/WorkExperience">Work experience</TextLink>
            <TextLink to="/Music">Music & mixes</TextLink>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
