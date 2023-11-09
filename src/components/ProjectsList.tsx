import { IProject } from '../utils/interfaces'
import data from '../data/projectsList.json';
import ProjectCard from './ProjectCard';

const projectsList: IProject[] = data.projects;

export default function ProjectsList() {
  return (
    <div className='grid xl:grid-cols-2 2xl:grid-cols-3 gap-4 w-2/3 xl:w-full'>
        {
          projectsList.map(project => <ProjectCard project={project} key={project.id} />)
        }
    </div>
  )
}
