import { Project, ProjectTag } from "./projects";

export default function ProjectTags(params: { project: Project }) {
  return (
    <div className="my-[min(1vh,1vw)] flex flex-row">
      {params.project.tags.map((tag) => (
        <div
          className=" mr-[min(1vh,1vw)] rounded-full px-[min(1vh,1vw)] nm-flat-light-base dark:nm-flat-dark-base"
          key={tag.toString()}
        >
          {ProjectTag[tag].replaceAll("_", " ")}
        </div>
      ))}
    </div>
  );
}
