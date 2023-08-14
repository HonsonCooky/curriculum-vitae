import Link from "next/link";
import { Project } from "./projects";

export default function ProjectLinks(params: { project: Project }) {
  return (
    <div className="my-[min(1vh,1vw)]">
      {params.project.links?.map((link) => (
        <div key={link.title} className=" flex flex-row">
          <span className="mr-[min(2vh,2vw)]">-</span>
          <Link
            href={link.href}
            className="text-light-blue underline dark:text-dark-blue"
          >
            {link.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
