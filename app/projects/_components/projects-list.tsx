import Loading from "@/app/_components/loading/loading";
import { QrCodeIcon } from "@heroicons/react/24/outline";
import { Suspense } from "react";
import ProjectContent from "./project-content";
import ProjectLinks from "./project-links";
import ProjectTags from "./project-tags";
import "./project.css";
import { projects } from "./projects";

export default function ProjectList() {
  projects.sort((a, b) => a.title.localeCompare(b.title));

  // No projects?
  if (projects.length == 0)
    return (
      <div className="flex flex-1 items-center justify-center text-2xl font-light">
        Failed to load projects. Try reloading the page?
      </div>
    );

  return (
    <div className="mb-[min(10vh,10vw)] grid grid-cols-1 gap-14 2xl:grid-cols-3">
      {projects.map((project) => {
        const ProjectIcon = project.icon ?? QrCodeIcon;
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
            <Suspense
              fallback={
                <Loading
                  className="my-[min(2vh,2vw)] text-xl"
                  dotSize="0.2rem"
                />
              }
            >
              <ProjectContent project={project} />
            </Suspense>
            <ProjectLinks project={project} />
          </div>
        );
      })}
    </div>
  );
}
