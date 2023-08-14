import ProjectLinks from "./project-links";
import ProjectTags from "./project-tags";
import { Project } from "./projects";

export default function ProjectTile(params: { project: Project }) {
  return (
    <div className="my-[min(2vh,2vw)] grid grid-cols-3 break-words rounded-xl px-[min(4vh,4vw)] py-[min(2vh,2vw)]">
      <div className="col-span-1">
        <h1 className="text-2xl">{params.project.title}:</h1>
        <ProjectTags project={params.project} />
        <ProjectLinks project={params.project} />
      </div>
      <div className="col-span-2 text-xl font-light">
        {params.project.description}
      </div>
    </div>
  );
}
