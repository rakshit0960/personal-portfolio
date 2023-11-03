import { IProject } from "../data/projectObjectInterface";
import CardWrapper from "./CardWrapper";

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <CardWrapper name={'Project'}>
        <div className="aspect-16/11 w-full border-2">
          <img src={project.preview}/>
        </div>

        <p className="text-2xl leading-relaxed">{project.name}</p>
        <p className="text-lg">{project.description}</p>

        <div className="flex justify-between my-5">
            <a className="border-2 px-4 py-2" href={project.repositoryLink}>GitHub</a>
            <a className="border-2 px-4 py-2" href={project.HostedLink}>Demo</a>
        </div>
    </CardWrapper>
  );
}
