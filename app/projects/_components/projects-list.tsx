import { QrCodeIcon } from "@heroicons/react/24/outline";
import { remark } from "remark";
import html from "remark-html";
import ProjectLinks from "./project-links";
import ProjectTags from "./project-tags";
import "./project.css";
import { projects } from "./projects";

export default async function ProjectList() {
  projects.sort((a, b) => a.title.localeCompare(b.title));
  return (
    <div className="mb-[min(10vh,10vw)] grid grid-cols-1 gap-14 2xl:grid-cols-3">
      {projects.map(async (project) => {
        const ProjectIcon = project.icon ?? QrCodeIcon;
        const content = await remark()
          .use(html)
          .process(project.description)
          .then((file) => file.toString());

        return (
          <div
            key={project.title}
            className="col-span-1 mb-[min(3vh,3vw)] flex flex-col "
          >
            <div className="flex flex-row items-center">
              <ProjectIcon className="mr-[min(1vh,1vw)] h-[2.5rem]" />
              <h1 className="text-3xl">{project.title}:</h1>
            </div>
            <ProjectTags project={project} />
            <div
              className="project h-full"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <ProjectLinks project={project} />
          </div>
        );
      })}
    </div>
  );
}
