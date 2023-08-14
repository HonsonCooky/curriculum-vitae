import ProjectTile from "./project-tile";
import { projects } from "./projects";

export default function ProjectList() {
  return (
    <div>
      {projects.map((project) => (
        <ProjectTile key={project.title} project={project} />
      ))}
    </div>
  );
}
