import ProjectCollection from '../../components/ProjectCollection';
import MachineLearningProjectIconImage from '../../assets/images/AircraftIdentificationAI.webp';

const projects = [
  {
    title: 'Aircraft Identification AI',
    route: '/AircraftIdentifierAI',
    imageUrl: MachineLearningProjectIconImage,
    description:
      "CNN-based aircraft classifier trained on imagery from Canada's National Air Force Museum. Identifies aircraft type from photos with high accuracy.",
    tags: ['Python', 'PyTorch', 'CNN', 'Computer Vision'],
  },
];

export default function Collection() {
  return (
    <ProjectCollection
      title="Machine learning"
      description="Computer vision and applied ML"
      chapter="research"
      storyLabel="Where the AI work started properly"
      projects={projects}
    />
  );
}
