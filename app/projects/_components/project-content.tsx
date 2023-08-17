import { remark } from "remark";
import html from "remark-html";
import { Project } from "./projects";

export default async function ProjectContent(params: { project: Project }) {
  const content = await remark()
    .use(html)
    .process(params.project.description)
    .then((file) => file.toString());
  return (
    <div
      className="project h-full"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
