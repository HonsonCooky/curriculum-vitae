"use client";

import LoadingDots from "@/app/_components/loading-dots";
import { getTags } from "@/app/_utils/prisma";
import { Tag } from "@prisma/client";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function TagPage() {
  const [tag, setTag] = useState<Tag | undefined>(undefined);
  const id = useParams().tag;
  getTags()
    .then((tags) => tags.filter((tag) => tag.id == id)[0])
    .then((tag) => {
      setTag(tag);
    })
    .catch((_) => {
      setTag({ name: "Server Loading Error" } as any);
    });

  return (
    <div className="mt-[20vh] flex flex-1 items-baseline justify-center">
      <h1 className="mb-2 text-[max(10vh,5vw)] font-bold leading-[max(10vh,5vw)] text-light-maroon dark:text-dark-maroon">
        {tag ? (
          tag.name
        ) : (
          <LoadingDots className="bg-light-maroon dark:bg-dark-maroon" />
        )}
      </h1>
    </div>
  );
}
