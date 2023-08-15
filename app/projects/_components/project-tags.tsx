import { Project, ProjectTag } from "./projects";

export default function ProjectTags(params: { project: Project }) {
  params.project.tags.sort((a, b) => a.valueOf() - b.valueOf());
  return (
    <div className="mt-[min(2vh,2vw)] flex flex-wrap justify-start gap-[min(2vh,2vw)]">
      {params.project.tags.map((tag) => (
        <div
          className="flex select-none flex-row items-center rounded-full px-[1vw] py-[0.5vh] nm-flat-light-base dark:nm-flat-dark-base"
          key={tag.toString()}
        >
          {ProjectTag[tag].replaceAll("_", " ")}
        </div>
      ))}
    </div>
  );
}
