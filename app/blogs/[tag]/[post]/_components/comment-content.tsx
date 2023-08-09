"use client";
import { Comment } from "@prisma/client";
import { useEffect, useState } from "react";
import { remark } from "remark";
import html from "remark-html";
import "./comment.css";

export default function CommentContent(params: { comment: Comment }) {
  const [content, setContent] = useState<any | undefined>(undefined);

  useEffect(() => {
    if (!content)
      remark()
        .use(html)
        .process(params.comment.content)
        .then((content) => setContent(content.toString()));
  });

  return (
    <div
      className="comment mb-[min(2vh,2vw)] ml-[min(2vh,2vw)]"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
