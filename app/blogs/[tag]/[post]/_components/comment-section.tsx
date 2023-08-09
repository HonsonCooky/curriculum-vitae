"use client";
import { getComments, postComment } from "@/app/_utils/api-calls";
import { Comment } from "@prisma/client";
import { useEffect, useState } from "react";
import Comments from "./comments";
import UserComment from "./user-comment";

export default function CommentSection(params: { postId: string }) {
  const [comments, setComments] = useState<Comment[] | undefined>(undefined);

  useEffect(() => {
    getComments(params.postId).then((comments) => setComments(comments));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleCommentPost(comment: string, alias: string) {
    const commentObj = {
      content: Buffer.from(comment),
      alias: alias,
      postId: params.postId,
      date: new Date(),
    };
    const res = await postComment(commentObj);
    if (!res.ok) throw Error("Unable to post comment");
    setComments([...comments!, { ...commentObj, id: Date.now().toString() }]);
  }

  return [
    <UserComment key="UserComment" handleCommentPost={handleCommentPost} />,
    <Comments comments={comments} key="Comments" />,
  ];
}
