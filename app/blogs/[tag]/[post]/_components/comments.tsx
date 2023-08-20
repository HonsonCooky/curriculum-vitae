"use client";
/* eslint-disable react/display-name */
import { hashStr } from "@/app/_utils/globals";
import twConfig from "@/app/_utils/tailwind-config";
import { Comment } from "@prisma/client";
import { memo } from "react";
import CommentContent from "./comment-content";

const MemoizedItem = memo((params: { comment: Comment }) => {
  const mode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  const colors = twConfig.theme.extend.colors[mode];
  const aliasColors = [
    colors.blue,
    colors.flamingo,
    colors.green,
    colors.lavender,
    colors.maroon,
    colors.mauve,
    colors.peach,
    colors.pink,
    colors.red,
    colors.rosewater,
    colors.sapphire,
    colors.sky,
    colors.teal,
    colors.yellow,
  ];
  const randInt = hashStr(params.comment.alias, aliasColors.length - 1);
  const aliasColor = aliasColors[randInt];
  return (
    <li
      key={params.comment.id}
      className="my-[min(2vh,2vw)] break-all rounded-xl px-[min(4vh,4vw)] py-[min(2vh,2vw)] nm-flat-light-base dark:nm-flat-dark-base"
    >
      <div className="flex w-full justify-between">
        <h1 className="xl:text-2xl" style={{ color: aliasColor }}>
          {params.comment.alias}:
        </h1>
        <h3 className="text-right font-medium text-light-overlay0 dark:text-dark-overlay0 ">
          {new Date(params.comment.date)
            .toISOString()
            .replace(/T/, " ")
            .replace(/\..+/, "")}
        </h3>
      </div>
      <CommentContent comment={params.comment} />
    </li>
  );
});

export default function Comments(params: {
  comments: Comment[] | undefined;
  loadMore: () => Promise<void>;
  hasMore: boolean;
}) {
  return (
    <ul className="mt-[min(4vh,4vw)] flex flex-col self-center xl:w-[50vw]">
      {params.comments?.map((comment) => (
        <MemoizedItem comment={comment} key={comment.id} />
      ))}
      <button
        data-more={params.hasMore}
        onClick={params.loadMore}
        className="font-bold hover:scale-[1.05] hover:text-light-mauve data-[more=false]:hidden dark:hover:text-dark-mauve xl:text-xl"
      >
        Load More...
      </button>
    </ul>
  );
}
