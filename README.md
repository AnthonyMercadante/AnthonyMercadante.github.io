# Anthony Mercadante - Portfolio

This is the source for [Anthony Mercadante's portfolio](https://AnthonyMercadante.github.io/), a personal-brand site for software engineering, applied AI, XR development, and the work built along the way.

The site is designed as a small, narrative portfolio rather than a conventional project index. It brings together current work, professional experience, technical skills, and a long-form archive of the experiences that led back to software.

## What is here

- **Personal-brand hub** — The landing page introduces the site and points into the main portfolio sections.
- **Work and experience** — Background, professional roles, and work across AI, XR, full-stack engineering, and automation.
- **Projects** — Featured repositories and project collections covering applied AI, bots, React applications, XR simulations, games, and creative tools.
- **Skills and stack** — Languages, frameworks, AI tooling, cloud, frontend, and XR technologies.
- **Life archive** — The [`/story`](https://AnthonyMercadante.github.io/story) route tells the origin story through 11 chapters spanning 2009 onward, with 34 recovered photographs, 11 surviving tracks, and selected video clips.

The portfolio leads with [OpenMemory](https://github.com/Raethexn-Technologies/OpenMemory), a Raethexn Technologies project bringing AI history across providers into a user-controlled memory layer. Its [case study](https://anthonymercadante.github.io/OpenMemory) follows local conversation imports, evidence and provenance, and the separate live-memory and research layers: MCP, retrieval, Physarum-inspired graph dynamics, and ICP ownership experiments. Implemented functionality is distinguished from the roadmap; the illustrative evidence trail uses entirely synthetic content.

The case study is based on the pushed OpenMemory implementation at [`6c52e01`](https://github.com/Raethexn-Technologies/OpenMemory/tree/6c52e01aa180556b6424b367093668e4addc1ef1), reviewed September 10, 2026. Shared positioning and pinned source references live in `src/data/openMemory.ts`.

## Technology

- React 18 and TypeScript
- React Router for client-side routes
- Tailwind CSS and Material UI for the visual system
- Framer Motion for page transitions and interaction
- GitHub Pages for deployment

The story archive keeps its media in `public/story/` and references those assets by URL so large photos, audio files, and video clips do not get bundled into the JavaScript application.

## Run locally

```bash
git clone https://github.com/AnthonyMercadante/AnthonyMercadante.github.io.git
cd AnthonyMercadante.github.io
npm install --legacy-peer-deps
npm start
```

The development server runs at [http://localhost:3000](http://localhost:3000).

The `--legacy-peer-deps` flag is required because one existing dependency declares an older React peer range.

## Build and deploy

Create a production build with:

```bash
npm run build
```

The project is configured for GitHub Pages. The package scripts also include:

```bash
npm run deploy
```

This builds the site and publishes the `build/` directory to the `gh-pages` branch.

## Project structure

```text
src/
  components/       Shared visual and interaction components
  pages/            Portfolio sections and project pages
  assets/           Images used by the application bundle
  App.tsx           Router and application shell
public/story/       Optimized photos, audio, and video for the life archive
```

The archive's chapters, captions, track catalogue, and metadata live in [`src/pages/Story/storyData.ts`](src/pages/Story/storyData.ts).

## License and contributions

This repository is the source for a personal portfolio. You are welcome to explore the code, but please open an issue before proposing changes or reusing the site's content and media.
