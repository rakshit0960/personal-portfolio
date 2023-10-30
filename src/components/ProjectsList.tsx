import { ProjectObj } from '../data/projectObjectInterface'
import data from '../data/projectsList.json';
import ProjectCard from './ProjectCard';
import SectionWrapper from './SectionWrapper';

const projectsList: ProjectObj[] = data.projects;

export default function ProjectsList() {
  return (
    <div className='grid grid-cols-3 gap-4 mx-20 my-9'>
        {
          projectsList.map(projectObj => <ProjectCard project={projectObj} key={projectObj.id} />)
        }
    </div>
  )
}
