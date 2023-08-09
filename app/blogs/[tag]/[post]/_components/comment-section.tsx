"use client";
import { getComments } from "@/app/_utils/api-calls";
import { Comment, Post } from "@prisma/client";
import { useEffect, useState } from "react";
import Comments from "./comments";
import UserComment from "./user-comment";

export default function CommentSection(params: { post: Post }) {
  const [comments, setComments] = useState<Comment[] | undefined>(undefined);

  useEffect(() => {
    if (!comments)
      getComments(params.post.id).then((comments) => setComments(comments));
  });

  function refresh() {
    getComments(params.post.id).then((comments) => setComments(comments));
  }

  return [
    <UserComment post={params.post} key="UserComment" refresh={refresh} />,
    <Comments comments={comments} key="Comments" />,
  ];
}
