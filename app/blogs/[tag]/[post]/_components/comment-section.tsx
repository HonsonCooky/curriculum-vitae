"use client";
import { getComments, postComment } from "@/app/_utils/api-calls";
import { Comment } from "@prisma/client";
import { useCallback, useEffect, useState } from "react";
import Comments from "./comments";
import UserComment from "./user-comment";

export default function CommentSection(params: { postId: string }) {
  const [comments, setComments] = useState<Comment[] | undefined>(undefined);

  useEffect(() => {
    getComments(params.postId, true).then((comments) => setComments(comments));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCommentPost = useCallback(
    async (comment: string, alias: string) => {
      const commentObj = {
        content: Buffer.from(comment),
        alias: alias,
        postId: params.postId,
        date: new Date(),
      };
      await postComment(commentObj);
      setComments([{ ...commentObj, id: Date.now().toString() }, ...comments!]);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [comments]
  );

  return [
    <UserComment key="UserComment" handleCommentPost={handleCommentPost} />,
    <Comments comments={comments} key="Comments" />,
  ];
}
