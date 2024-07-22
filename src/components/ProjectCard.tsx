import { FaGithub } from "react-icons/fa6";
import { IProject } from "../utils/interfaces";
import CardWrapper from "./CardWrapper";
import { BsLink45Deg } from "react-icons/bs";

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <CardWrapper name={'Project'}>
        <div className="aspect-video w-full border-2 rounded-lg overflow-hidden ">
          <img className="object-cover h-full w-full" src={project.preview}/>
        </div>

        <div className="py-6">
          <h3 className="text-lg md:text-2xl leading-loose my-3">{project.name}</h3>
          <p className="text-sm md:text-lg h-min-[120px] md:h-[200px]">{project.description}</p>
        </div>

        <div className="flex justify-between my-5 flex-col 2xl:flex-row">
            <a className="mb-2 2xl:mb-0 border-[1px] border-black dark:border-white px-4 sm:px-6 py-2 sm:py-2 rounded-lg flex items-center bg-gray-700 dark:bg-transparent text-white hover:bg-black hover:border-black dark:hover:bg-white dark:hover:text-black" href={project.repositoryLink} target="_blank">
              <FaGithub size='1.3em'/>
              <div className="px-2">GitHub</div>
            </a>
            <a className="border-[1px] border-black dark:border-white px-4 sm:px-6 py-2 sm:py-2 rounded-lg flex items-center hover:border-black dark:hover:bg-white dark:hover:text-black" href={project.HostedLink} target="_blank">
              <BsLink45Deg size='1.7em'/>
              <div className="px-2">Demo</div>
            </a>  
        </div>
    </CardWrapper>
  );
}
