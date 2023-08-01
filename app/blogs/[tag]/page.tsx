"use client";

import { getTags } from "@/app/_utils/prisma";
import { Tag } from "@prisma/client";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function TagPage() {
  const [tag, setTag] = useState<Tag | undefined>(undefined);
  const id = useParams().tag;
  getTags()
    .then((tags) => tags.filter((tag) => tag.name == id)[0])
    .then((tag) => setTag(tag))
    .catch((e) => {
      console.log(e);
      setTag({ name: "Server Loading Error" } as any);
    });
  console.log(tag);

  return (
    <div className="mt-[20vh] flex flex-1 justify-center">
      <h1 className="mb-2 text-[max(10vh,5vw)] font-bold leading-[max(10vh,5vw)] text-light-maroon dark:text-dark-maroon">
        {tag ? tag.name : "..."}
      </h1>
    </div>
  );
}
