import ProjectIconImage from '../assets/images/VRProjectsIcon.png';
import ProjectIconImage2 from '../assets/images/BotProjects.png';
import ProjectIconImage3 from '../assets/images/ReactProjectIcon.png';
import ProjectIconImage4 from '../assets/images/Machine Learning.webp';
import ProjectIconImage6 from '../assets/images/video-games-projects.png';
import { openMemory } from './openMemory';

export const featuredProjects = [
  {
    name: openMemory.name,
    lang: 'Laravel / Vue',
    tags: openMemory.tags,
    url: openMemory.repository,
    studio: true,
    chapter: 'raethexn',
  },
  {
    name: 'AircraftIdentificationAI',
    lang: 'Python',
    tags: ['PyTorch', 'CNN', 'RCAF Partnership'],
    url: 'https://github.com/AnthonyMercadante/AircraftIdentificationAI',
    studio: false,
    chapter: 'research',
  },
  {
    name: 'FlowChannel-XR',
    lang: 'C#',
    tags: ['Unity', 'XR', 'Simulation'],
    url: 'https://github.com/AnthonyMercadante/FlowChannel-XR',
    studio: false,
    chapter: 'xr-lab',
  },
  {
    name: 'nl2sql-poc',
    lang: 'Python',
    tags: ['NLP', 'LLM', 'SQL'],
    url: 'https://github.com/AnthonyMercadante/nl2sql-poc',
    studio: false,
  },
  {
    name: 'StockPeek',
    lang: 'Python',
    tags: ['CLI', 'Finance'],
    url: 'https://github.com/AnthonyMercadante/StockPeek',
    studio: false,
    // The markets became an interest in the same lockdown that sent me back to software.
    chapter: 'back-to-software',
  },
];

export const archiveCategories = [
  {
    title: 'Game Projects',
    route: '/Games/Void',
    imageUrl: ProjectIconImage6,
    chapter: 'the-lean-year',
  },
  { title: 'VR Projects', route: '/XRDeveloper', imageUrl: ProjectIconImage, chapter: 'xr-lab' },
  { title: 'Bot Projects', route: '/Bots', imageUrl: ProjectIconImage2, chapter: 'the-bot' },
  {
    title: 'React Native Projects',
    route: '/ReactProjects',
    imageUrl: ProjectIconImage3,
    chapter: 'the-hand-coded-years',
  },
  {
    title: 'Machine Learning Projects',
    route: '/MachineLearningProjects',
    imageUrl: ProjectIconImage4,
    chapter: 'research',
  },
];
