import { ProjectObj } from "../data/projectObjectInterface";

export default function ProjectCard({ project }: { project: ProjectObj }) {
  return (
    <div className="border-2 p-6">
      <code className="text-2xl">{"<project>"}</code>
      
      <div className="mx-6 my-4">  
        <div className="aspect-16/11 w-full border-2">
          <img src={project.preview}/>
        </div>

        <p className="text-2xl leading-relaxed">{project.name}</p>
        <p className="text-lg">{project.description}</p>

        <div className="flex justify-between my-5">
            <a className="border-2 px-4 py-2" href={project.repositoryLink}>GitHub</a>
            <a className="border-2 px-4 py-2" href={project.HostedLink}>Demo</a>
        </div>

      </div>

      <code className="text-2xl">{"</project>"}</code>
    </div>
  );
}
