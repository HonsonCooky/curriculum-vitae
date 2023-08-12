"use client";
import { getComments, postComment } from "@/app/_utils/api-calls";
import { Comment } from "@prisma/client";
import { useCallback, useEffect, useState } from "react";
import Comments from "./comments";
import UserComment from "./user-comment";

export default function CommentSection(params: { postId: string }) {
  const [comments, setComments] = useState<Comment[] | undefined>(undefined);
  const [hasMoreComments, setHasMoreComments] = useState(true);

  useEffect(() => {
    getComments(params.postId).then((comments) => setComments(comments));
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
    [comments, params.postId]
  );

  const handleLoadMore = useCallback(async () => {
    if (!comments) return;
    const skip = Math.round(comments?.length / 10) * 10;
    const take = skip + 20;
    const moreComments = await getComments(params.postId, { skip, take });
    if (moreComments.length == 0) {
      setHasMoreComments(false);
      return;
    }
    setComments([...comments, ...moreComments]);
  }, [comments, params.postId]);

  return [
    <UserComment key="UserComment" handleCommentPost={handleCommentPost} />,
    <Comments
      key="Comments"
      comments={comments}
      loadMore={handleLoadMore}
      hasMore={hasMoreComments}
    />,
  ];
}
