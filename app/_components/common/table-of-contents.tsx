"use client";
import { z } from "zod";

const TableItemSchema = z.object({
  title: z.string(),
  href: z.string().startsWith("#"),
});

const TableOfContentsInfoSchema = TableItemSchema.array();

export type TableItemType = z.infer<typeof TableItemSchema>;
export type TableOfContentsType = z.infer<typeof TableOfContentsInfoSchema>;

function TableItem(params: {
  liClassName?: React.ComponentProps<"div">["className"];
  obj: TableItemType;
}) {
  return (
    <a href={params.obj.href}>
      <li key={`TOC: ${params.obj.title}`} className={params.liClassName}>
        {params.obj.title}
      </li>
    </a>
  );
}

export default function TableOfContents(params: {
  className?: React.ComponentProps<"div">["className"];
  liClassName?: React.ComponentProps<"div">["className"];
  contents: TableOfContentsType;
}) {
  return (
    <ul className={params.className}>
      {params.contents.map((obj) => {
        return <TableItem obj={obj} liClassName={params.liClassName} />;
      })}
    </ul>
  );
}
