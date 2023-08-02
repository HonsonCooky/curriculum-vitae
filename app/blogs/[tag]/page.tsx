"use client";

import LoadingDots from "@/app/_components/loading-dots";
import { getPosts, getTags } from "@/app/_utils/prisma";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Post, Tag } from "@prisma/client";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function TagPage() {
  const [tag, setTag] = useState<Tag | undefined>(undefined);
  const [posts, setPosts] = useState<Post[] | undefined>(undefined);
  const id = useParams().tag;

  if (!posts)
    getPosts(id)
      .then((posts) => setPosts(posts))
      .catch((_) => setPosts([]));

  if (!tag)
    getTags()
      .then((tags) => tags.filter((tag) => tag.id == id)[0])
      .then((tag) => setTag(tag))
      .catch((_) => setTag({ name: "Server Loading Error" } as any));

  return (
    <div className="mt-[20vh] flex flex-1 items-baseline justify-center">
      <CurrencyDollarIcon className="fixed left-[2vw] top-[20vh] hidden h-[min(20vh,20vw)] lg:flex" />
      <h1 className="text-[max(6vh,4vw)] font-bold leading-[max(6vh,4vw)] text-light-maroon dark:text-dark-maroon">
        {tag && posts ? (
          tag.name
        ) : (
          <LoadingDots className="bg-light-maroon dark:bg-dark-maroon" />
        )}
      </h1>
    </div>
  );
}
