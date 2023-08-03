"use client";

import { getPosts, getTags } from "@/app/_utils/api-calls";
import Loading from "@/app/loading";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Post, Tag } from "@prisma/client";
import { useParams } from "next/navigation";
import { useState } from "react";
import PostTag from "./_components/post-tag";

export default function TagPage() {
  const [tag, setTag] = useState<Tag | undefined>(undefined);
  const [posts, setPosts] = useState<Post[] | undefined>(undefined);
  const id = useParams().tag;
  const tagFallBack = {
    name: "Server Error",
    description: "This tag may no longer be valid",
  } as Tag;

  if (!posts)
    getPosts(id)
      .then((posts) => setPosts(posts))
      .catch((_) => setPosts([]));

  if (!tag)
    getTags()
      .then((tags) => tags?.filter((tag) => tag.id == id)[0])
      .then((tag) => setTag(tag ?? tagFallBack))
      .catch((_) => setTag(tagFallBack));

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
          <div className="mb-[5vh] w-[60vw] flex-1 overflow-y-auto overflow-x-clip rounded-[2vh] px-[min(6vh,6vw)] pt-[min(2vh,2vw)] nm-inset-light-base dark:nm-inset-dark-base">
            {posts.map((post) => (
              <PostTag tag={tag} post={post} key={post.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
