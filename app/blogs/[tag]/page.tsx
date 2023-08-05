"use client";

import { getPosts, getTags } from "@/app/_utils/api-calls";
import Loading from "@/app/loading";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Post, Tag } from "@prisma/client";
import { useParams } from "next/navigation";
import { useState } from "react";
import GridTitle from "./_components/grid-title";
import PostTag from "./_components/post-tag";
import { SortStateSchema, SortStateType } from "./_components/sort-arrows";

export type PostTag = Omit<Post, "content">;
export default function TagPage() {
  const [tag, setTag] = useState<Tag | undefined>(undefined);
  const [posts, setPosts] = useState<PostTag[] | undefined>(undefined);
  const [nameSort, setNameSort] = useState<SortStateType>(
    SortStateSchema.enum.none
  );
  const [descSort, setDescSort] = useState<SortStateType>(
    SortStateSchema.enum.none
  );
  const [dateSort, setDateSort] = useState<SortStateType>(
    SortStateSchema.enum.none
  );

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
      <div className="w-[50vw] pt-[min(2vh,2vw)]">
        <div className="flex flex-col">
          <h1 className="text-[min(8vh,8vw)] font-bold text-light-mauve dark:text-dark-lavender">
            {tag.name}
          </h1>
          <h2 className="mb-[min(4vh,4vw)] text-[min(4vh,4vw)]">
            {tag.description}
          </h2>
        </div>
        <div className="group mb-[min(2vh,2vw)] grid grid-cols-12  items-center gap-0 rounded  py-[min(1vh,1vw)] text-[min(2vh,2vw)] font-light">
          <GridTitle
            colSpan={3}
            title="Name"
            state={nameSort}
            setState={setNameSort}
          />
          <GridTitle
            colSpan={7}
            title="Description"
            state={descSort}
            setState={setDescSort}
          />
          <GridTitle
            colSpan={2}
            title="Date"
            state={dateSort}
            setState={setDateSort}
          />
        </div>
        <div className="flex max-h-[60vh] flex-col">
          {posts.map((post) => (
            <PostTag tag={tag} post={post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
