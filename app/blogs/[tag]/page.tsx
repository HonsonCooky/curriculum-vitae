"use client";

import { getPosts, getTags } from "@/app/_utils/api-calls";
import Loading from "@/app/loading";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Post, Tag } from "@prisma/client";
import { useParams } from "next/navigation";
import { useState } from "react";
import PostList from "./post-list";

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

  if (!(tag && posts)) return <Loading />;
  return (
    <div className="flex flex-1 flex-col items-center">
      <CurrencyDollarIcon className="fixed left-[min(10vh,10vw)] top-[min(20vh,20vw)] h-[min(20vh,20vw)]" />
      <div className="w-[50vw]">
        <div className="flex flex-col">
          <h1 className="text-[min(8vh,8vw)] font-bold text-light-mauve dark:text-dark-lavender">
            {tag.name}
          </h1>
          <h2 className="mb-[min(4vh,4vw)] text-[min(4vh,4vw)]">
            {tag.description}
          </h2>
        </div>
        <div className="flex max-h-[60vh]">
          <PostList tagId={tag.id} posts={posts} />
        </div>
      </div>
    </div>
  );
}
