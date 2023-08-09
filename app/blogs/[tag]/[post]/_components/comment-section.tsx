"use client";
import { Comment, Post } from "@prisma/client";
import { CustomComment } from "../page";
import Comments from "./comments";
import UserComment from "./user-comment";

export default function CommentSection(params: {
  post: Post;
  comments: Comment[];
  addComment: (comment: CustomComment) => void;
}) {
  return [
    <UserComment
      key="UserComment"
      postId={params.post.id}
      addComment={params.addComment}
    />,
    <Comments comments={params.comments} key="Comments" />,
  ];
}
