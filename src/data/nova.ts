/** Public-facing copy verified against the sanitized Nova-Portfolio documentation. */
export const nova = {
  name: 'Nova',
  route: '/Nova',
  subtitle: 'AI Lead Intelligence & Meeting Automation',
  summary:
    'A full-stack AI platform connecting lead qualification, real-time meeting assistance, and tool-driven business workflows on Google Cloud.',
  tags: ['AI orchestration', 'Business automation', 'Cloud Run'],
};

interface NovaMedia {
  demoVideo: { embedUrl: string; title: string; poster?: string } | null;
  screenshots: { src: string; alt: string; caption: string }[];
}

/** Add reviewed, synthetic-data captures here. See README.md for the media workflow. */
export const novaMedia: NovaMedia = {
  demoVideo: null,
  screenshots: [],
};
