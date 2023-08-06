"use client";

import { getPosts, getTags } from "@/app/_utils/api-calls";
import Loading from "@/app/loading";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Post, Tag } from "@prisma/client";
import { useParams } from "next/navigation";
import { useState } from "react";
import GridTitle from "./_components/grid-title";
import PostsList from "./_components/posts-list";
import { SortStateSchema, SortStateType } from "./_components/sort-arrows";

export type PostTagType = Omit<Post, "content">;
export default function TagPage() {
  const [tag, setTag] = useState<Tag | undefined>(undefined);
  const [posts, setPosts] = useState<PostTagType[] | undefined>(undefined);
  const [nameSort, setNameSort] = useState<SortStateType>(
    SortStateSchema.enum.none
  );
  const [dateSort, setDateSort] = useState<SortStateType>(
    SortStateSchema.enum.descend
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
    <div className="flex flex-1 flex-col items-center break-words">
      <CurrencyDollarIcon className="fixed left-[min(10vh,10vw)] top-[min(20vh,20vw)] h-[min(20vh,20vw)]" />
      <div className="w-[50vw] pt-[min(2vh,2vw)]">
        <div className="flex flex-col">
          <h1 className="text-8xl font-bold text-light-mauve dark:text-dark-lavender">
            {tag.name}
          </h1>
          <h2 className="mb-[min(4vh,4vw)] text-6xl">{tag.description}</h2>
        </div>
        <div className="group mb-[min(2vh,2vw)] grid auto-rows-[1fr] grid-cols-4 items-center rounded text-2xl font-light">
          <GridTitle
            colSpan={1}
            title="Name"
            sortable={{
              state: nameSort,
              setState: setNameSort,
            }}
          />
          <GridTitle colSpan={2} title="Description" />
          <GridTitle
            colSpan={1}
            title="Date"
            sortable={{
              state: dateSort,
              setState: setDateSort,
            }}
          />
        </div>
        <PostsList
          tag={tag}
          posts={posts}
          nameState={nameSort}
          dateState={dateSort}
        />
      </div>
    </div>
  );
}
