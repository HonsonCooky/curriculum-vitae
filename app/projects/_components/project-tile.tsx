import { Project, ProjectTag } from "./projects";

export default function ProjectTile(params: { project: Project }) {
  return (
    <div className="my-[min(2vh,2vw)] grid grid-cols-3 break-words rounded-xl px-[min(4vh,4vw)] py-[min(2vh,2vw)] nm-flat-light-base dark:nm-flat-dark-base">
      <div className="col-span-1">
        <h1 className="text-2xl">{params.project.title}:</h1>
        <div className="my-[min(1vh,1vw)] flex flex-row">
          {params.project.tags.map(
            (tag, i) =>
              `${ProjectTag[tag].replaceAll("_", " ")}` +
              (i < params.project.tags.length - 1 ? ", " : "")
          )}
        </div>
      </div>
      <div className="col-span-2">{params.project.description}</div>
    </div>
  );
}
