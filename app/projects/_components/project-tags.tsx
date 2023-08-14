import { Project, ProjectTag } from "./projects";

export default function ProjectTags(params: { project: Project }) {
  return (
    <div className="my-[min(1vh,1vw)] flex flex-row">
      {params.project.tags.map(
        (tag, i) =>
          `${ProjectTag[tag].replaceAll("_", " ")}` +
          (i < params.project.tags.length - 1 ? ", " : "")
      )}
    </div>
  );
}
