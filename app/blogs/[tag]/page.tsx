"use client";

import { getTags } from "@/app/_utils/prisma";
import { useParams } from "next/navigation";

export default function TagPage() {
  const id = useParams().tag;
  const tags = getTags()
    .then()
    .catch((_) => ["Server Error"]);
  const tag = tags.filter((tag) => tag.id == id)[0];
  return (
    <div className="mt-[20vh] flex flex-1 justify-center">
      <h1 className="mb-2 text-[max(10vh,5vw)] font-bold leading-[max(10vh,5vw)] text-light-maroon dark:text-dark-maroon">
        {tag.name}
      </h1>
    </div>
  );
}
