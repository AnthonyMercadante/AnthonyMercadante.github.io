export function normalizePathname(pathname: string) {
  return pathname.replace(/\/+$/, '').toLowerCase() || '/';
}

export const routeInfo: Record<string, { title: string; parent: string; parentLabel: string }> = {
  '/': { title: 'Anthony Mercadante', parent: '/', parentLabel: 'Home' },
  '/portfolio': { title: 'The work', parent: '/', parentLabel: 'Home' },
  '/about-me': { title: 'About', parent: '/portfolio', parentLabel: 'The work' },
  '/story': { title: 'How I got here', parent: '/portfolio', parentLabel: 'The work' },
  '/skills': { title: 'Skills & stack', parent: '/portfolio', parentLabel: 'The work' },
  '/workexperience': { title: 'Work experience', parent: '/portfolio', parentLabel: 'The work' },
  '/projects': { title: 'Projects', parent: '/portfolio', parentLabel: 'The work' },
  '/openmemory': { title: 'OpenMemory', parent: '/Projects', parentLabel: 'Projects' },
  '/xrdeveloper': { title: 'XR projects', parent: '/Projects', parentLabel: 'Projects' },
  '/automationassistant': {
    title: 'Automation Assistant',
    parent: '/WorkExperience',
    parentLabel: 'Experience',
  },
  '/baslengineer': {
    title: 'Software Engineer at BASL.ai',
    parent: '/WorkExperience',
    parentLabel: 'Experience',
  },
  '/openflowmachine': {
    title: 'Open Flow Water Channel Machine',
    parent: '/XRDeveloper',
    parentLabel: 'XR projects',
  },
  '/celltower': {
    title: 'Cell Tower Simulator',
    parent: '/XRDeveloper',
    parentLabel: 'XR projects',
  },
  '/ovin': { title: 'OVIN', parent: '/XRDeveloper', parentLabel: 'XR projects' },
  '/realestatebot': { title: 'Real Estate Bot', parent: '/Bots', parentLabel: 'Bot projects' },
  '/botinteraction': {
    title: 'Real Estate Bot demo',
    parent: '/RealEstateBot',
    parentLabel: 'Real Estate Bot',
  },
  '/battleshipbot': {
    title: 'Battleship Strategy Bot',
    parent: '/Bots',
    parentLabel: 'Bot projects',
  },
  '/bots': { title: 'Bot projects', parent: '/Projects', parentLabel: 'Projects' },
  '/reactprojects': {
    title: 'React Native projects',
    parent: '/Projects',
    parentLabel: 'Projects',
  },
  '/ecochallengetracker': {
    title: 'Eco Challenge Tracker',
    parent: '/ReactProjects',
    parentLabel: 'React Native projects',
  },
  '/torontonightlifeexplorer': {
    title: 'Toronto Nightlife Explorer',
    parent: '/ReactProjects',
    parentLabel: 'React Native projects',
  },
  '/machinelearningprojects': {
    title: 'Machine learning',
    parent: '/Projects',
    parentLabel: 'Projects',
  },
  '/aircraftidentifierai': {
    title: 'Aircraft Identification AI',
    parent: '/MachineLearningProjects',
    parentLabel: 'Machine learning',
  },
  '/games/void': { title: 'VOID', parent: '/Projects', parentLabel: 'Projects' },
  '/music': { title: 'Music', parent: '/portfolio', parentLabel: 'The work' },
  '/water': { title: 'Water study', parent: '/', parentLabel: 'Home' },
};
