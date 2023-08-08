import { getComments } from "@/app/_utils/api-calls";
import { Comment, Post } from "@prisma/client";
import { useEffect, useState } from "react";
import CommentContent from "./comment-content";

export default function Comment(params: { post: Post }) {
  const [comments, setComments] = useState<Comment[] | undefined>(undefined);

  useEffect(() => {
    if (!comments)
      getComments(params.post.id).then((comments) => setComments(comments));
  });

  return (
    <div className="mt-[min(10vh,10vw)]">
      {comments?.map(async (comment) => {
        return (
          <div
            key={comment.id}
            className="my-[min(2vh,2vw)] rounded-xl px-[min(4vh,4vw)] py-[min(2vh,2vw)] nm-flat-light-base dark:nm-flat-dark-base"
          >
            <h1 className="text-2xl">{comment.alias}:</h1>
            <CommentContent comment={comment} />
          </div>
        );
      })}
    </div>
  );
}
