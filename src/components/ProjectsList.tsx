import { ProjectObj } from '../data/projectObjectInterface'
import data from '../data/projectsList.json';
import ProjectCard from './ProjectCard';

const projectsList: ProjectObj[] = data.projects;

export default function ProjectsList() {
  return (
    <div className='grid grid-cols-3 gap-4'>
        {
          projectsList.map(projectObj => <ProjectCard project={projectObj} key={projectObj.id} />)
        }
    </div>
  )
}
