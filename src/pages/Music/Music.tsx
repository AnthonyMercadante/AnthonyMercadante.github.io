import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell';
import MediaEmbed from '../../components/MediaEmbed';
import TrackList from '../../components/TrackList';
import coverPhoto from '../../assets/images/coverfinal.jpg';
import { tracks } from '../Story/storyData';

const featuredRecordings = tracks.slice(0, 2);

const mixes = [
  { name: 'Radio Show #002', id: '1928549981' },
  { name: 'Radio Show #001', id: '1798062109' },
];

export default function Music() {
  return (
    <PageShell
      title="Music"
      eyebrow="The other kind of engineering"
      description="Studio recordings, DJ mixes, and the years spent learning to listen."
      className="music-page"
    >
      <section className="music-archive" aria-labelledby="recordings-heading">
        <div>
          <p className="eyebrow">2016–2020 / The studio years</p>
          <h2 id="recordings-heading">
            What survived
            <br />
            the hard drives.
          </h2>
          <p>
            {tracks.length} recordings, alongside the photographs and stories of the rooms they were
            made in. Original titles and attribution, wherever the evidence supports them.
          </p>
          <Link className="text-link" to="/story#metalworks">
            Explore all recordings & their stories <span aria-hidden="true">→</span>
          </Link>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/story/photos/thumb/metalworks-studio-6.jpg`}
          alt="Metalworks Studio 6, from the personal archive"
          width="640"
          height="480"
          loading="lazy"
        />
      </section>
      <section className="music-recordings" aria-labelledby="featured-recordings-heading">
        <div className="section-heading">
          <h2 className="eyebrow" id="featured-recordings-heading">
            Two recordings from the archive
          </h2>
          <span>Press play</span>
        </div>
        <TrackList tracks={featuredRecordings} />
      </section>
      <section aria-labelledby="mix-heading">
        <div className="section-heading">
          <h2 id="mix-heading" className="eyebrow">
            From the decks
          </h2>
          <span>Mix archive</span>
        </div>
        <p className="mix-availability">
          The original SoundCloud uploads are currently unavailable. Their archive entries and
          original players are kept here.
        </p>
        <div className="mix-grid">
          {mixes.map((mix) => (
            <article key={mix.id}>
              <MediaEmbed
                title={mix.name}
                provider="SoundCloud"
                availabilityNote="Original upload unavailable · Check SoundCloud"
                src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${mix.id}&color=%23c5dfaa&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=true`}
              />
              <div className="mix-caption">
                <h3>{mix.name}</h3>
                <span>Anthony Mercadante</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="music-event" aria-labelledby="event-heading">
        <div>
          <p className="eyebrow">Event archive</p>
          <h2 id="event-heading">Behind the decks</h2>
          <a
            className="text-link"
            href="https://www.eventbrite.com/e/the-brunch-therapy-unlimited-alcohol-and-food-tickets-885912055807"
            target="_blank"
            rel="noopener noreferrer"
          >
            Original event listing <span aria-hidden="true">↗</span>
          </a>
        </div>
        <img
          src={coverPhoto}
          alt="The Brunch Therapy event artwork"
          loading="lazy"
          width="2700"
          height="1350"
        />
      </section>
    </PageShell>
  );
}
