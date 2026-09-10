import ProjectCollection from '../../components/ProjectCollection';
import ProjectImage from '../../assets/images/RealEstateBot.png';
import ProjectImage2 from '../../assets/images/BattleShipBot.png';

const projects = [
  {
    title: 'Real Estate Bot',
    route: '/RealEstateBot',
    imageUrl: ProjectImage,
    description:
      'GPT-powered knowledge assistant for real estate agents — answers property, listing, and market questions via natural language.',
    tags: ['Python', 'OpenAI', 'GPT'],
  },
  {
    title: 'BattleShip Bot',
    route: '/BattleShipBot',
    imageUrl: ProjectImage2,
    description:
      'AI opponent for Battleship using probabilistic targeting and hunt/destroy strategy logic.',
    tags: ['Python', 'Game AI', 'Algorithms'],
  },
];

export default function Collection() {
  return (
    <ProjectCollection
      title="Bot projects"
      description="AI-powered automation and game agents"
      chapter="the-bot"
      storyLabel="One of these started as a joke and turned into a job"
      projects={projects}
    />
  );
}
