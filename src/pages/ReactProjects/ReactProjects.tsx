import ProjectCollection from '../../components/ProjectCollection';
import ReactProjectIconImage2 from '../../assets/images/TorontoNightlifeExplorerIcon.png';
import ReactProjectIconImage from '../../assets/images/EcoChallengeTrackerIcon.png';

const projects = [
  {
    title: 'Eco Challenge Tracker',
    route: '/EcoChallengeTracker',
    imageUrl: ReactProjectIconImage,
    description:
      'React Native mobile app for environmental challenge tracking — users log eco-friendly actions and compete on community leaderboards.',
    tags: ['React Native', 'Expo', 'TypeScript'],
  },
  {
    title: 'Toronto Nightlife Explorer',
    route: '/TorontoNightlifeExplorer',
    imageUrl: ReactProjectIconImage2,
    description:
      'Map-based React Native app for discovering Toronto venues, events, and nightlife — filtering by category, distance, and ratings.',
    tags: ['React Native', 'Google Maps API', 'TypeScript'],
  },
];

export default function Collection() {
  return (
    <ProjectCollection
      title="React Native projects"
      description="Cross-platform mobile applications"
      chapter="the-hand-coded-years"
      storyLabel="Coursework from the remote years, coded by hand"
      projects={projects}
    />
  );
}
