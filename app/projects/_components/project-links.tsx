import Link from "next/link";
import { Project } from "./projects";

export default function ProjectLinks(params: { project: Project }) {
  return (
    <div className="mt-[min(2vh,2vw)] flex justify-end">
      {params.project.links?.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className="px-[min(1vh,1vw)] text-light-blue underline dark:text-dark-blue"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
