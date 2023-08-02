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
    <div className="flex flex-1 flex-col items-center pt-[5vh] lg:h-screen lg:overflow-clip lg:pt-[20vh]">
      <CurrencyDollarIcon className="fixed left-[2vw] top-[20vh] hidden h-[min(20vh,20vw)] lg:flex" />
      <h1 className="mb-[6vh] px-[5vw] text-right text-[max(6vh,4vw)] font-bold leading-[max(6vh,4vw)] text-light-maroon dark:text-dark-maroon lg:text-center">
        {tag.name}{" "}
      </h1>
      <PostList tagId={tag.id} posts={posts} />
    </div>
  );
}
