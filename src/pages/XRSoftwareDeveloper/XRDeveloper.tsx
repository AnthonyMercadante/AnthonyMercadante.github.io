import { projectImage } from '../../data/projectMedia';
import ProjectCollection from '../../components/ProjectCollection';

const projects = [
  {
    title: 'Water Machine',
    route: '/OpenFlowMachine',
    imageUrl: projectImage('water-machine').src,
    imageSrcSet: projectImage('water-machine').srcSet,
    description:
      'XR simulation of open-channel water flow dynamics, built for fluid dynamics engineering education at Mohawk College.',
    tags: ['Unity', 'C#', 'Simulation'],
  },
  {
    title: 'Cell Tower Simulator',
    route: '/CellTower',
    imageUrl: projectImage('cell-tower').src,
    imageSrcSet: projectImage('cell-tower').srcSet,
    description:
      'VR tower inspection and safety training simulator, enabling trainees to practice procedures in a risk-free environment.',
    tags: ['Unity', 'C#', 'VR Training'],
  },
  {
    title: 'OVIN Exhibit',
    route: '/OVIN',
    imageUrl: projectImage('ovin').src,
    imageSrcSet: projectImage('ovin').srcSet,
    description:
      'Interactive automotive industry exhibit for the Ontario VR Innovation Network — immersive EV manufacturing exploration.',
    tags: ['Unreal Engine', 'C++', 'XR'],
  },
];

export default function Collection() {
  return (
    <ProjectCollection
      title="XR Projects"
      description="Virtual reality simulations for engineering and industry education"
      chapter="xr-lab"
      storyLabel="Nobody was teaching this yet, which was the point"
      projects={projects}
    />
  );
}
