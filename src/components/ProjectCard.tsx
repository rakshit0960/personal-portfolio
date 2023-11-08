import { FaGithub } from "react-icons/fa6";
import { IProject } from "../data/projectObjectInterface";
import CardWrapper from "./CardWrapper";
import { BsLink45Deg } from "react-icons/bs";

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <CardWrapper name={'Project'}>
        <div className="aspect-video w-full border-2 rounded-lg">
          <img className="object-cover h-full w-full" src={project.preview}/>
        </div>

        <p className="text-2xl leading-relaxed">{project.name}</p>
        <p className="text-lg">{project.description}</p>

        <div className="flex justify-between my-5">
            <a className="border-2 px-10 py-2 rounded-lg flex items-center bg-gray-700 text-white" href={project.repositoryLink} target="_blank">
              <FaGithub size='1.3em'color={'#fff'}/>
              <div className="px-2">GitHub</div>
            </a>
            <a className="border-2 px-10 py-2 rounded-lg flex items-center" href={project.HostedLink} target="_blank">
              <BsLink45Deg size='1.7em'/>
              <div className="px-2">Demo</div>
            </a>
        </div>
    </CardWrapper>
  );
}
