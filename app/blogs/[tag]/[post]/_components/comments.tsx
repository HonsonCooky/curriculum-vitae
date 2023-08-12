"use client";
/* eslint-disable react/display-name */
import { Comment } from "@prisma/client";
import { memo } from "react";
import CommentContent from "./comment-content";

const MemoizedItem = memo((params: { comment: Comment }) => (
  <li
    key={params.comment.id}
    className="my-[min(2vh,2vw)] break-all rounded-xl px-[min(4vh,4vw)] py-[min(2vh,2vw)] nm-flat-light-base dark:nm-flat-dark-base"
  >
    <div className="flex w-full justify-between">
      <h1 className="text-2xl">{params.comment.alias}:</h1>
      <h3 className="text-right font-medium text-light-overlay0 dark:text-dark-overlay0 ">
        {new Date(params.comment.date)
          .toISOString()
          .replace(/T/, " ")
          .replace(/\..+/, "")}
      </h3>
    </div>
    <CommentContent comment={params.comment} />
  </li>
));

export default function Comments(params: { comments: Comment[] | undefined }) {
  return (
    <ul className="mt-[min(4vh,4vw)] flex w-[50vw] flex-col self-center">
      {params.comments?.map((comment) => (
        <MemoizedItem comment={comment} key={comment.id} />
      ))}
    </ul>
  );
}
