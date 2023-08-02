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
    <div className="flex h-screen flex-1 flex-col items-center overflow-clip pt-[20vh]">
      <CurrencyDollarIcon className="fixed left-[2vw] top-[20vh] flex h-[min(20vh,20vw)]" />
      <h1 className="mb-[6vh] px-0 pl-[10vh] pr-[10vw] text-center text-[max(6vh,4vw)] font-bold text-light-maroon dark:text-dark-maroon">
        {tag.name}{" "}
      </h1>
      <PostList tagId={tag.id} posts={posts} />
    </div>
  );
}
