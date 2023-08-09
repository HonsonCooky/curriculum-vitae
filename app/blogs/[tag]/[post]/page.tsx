"use client";
import BackBtn from "@/app/_components/back-btn";
import HcIcon from "@/app/_components/hc-icon";
import ScrollToTopButton from "@/app/_components/scroll-top-btn";
import { getComments, getPost, postComment } from "@/app/_utils/api-calls";
import Loading from "@/app/loading";
import { Comment, Post } from "@prisma/client";
import { useEffect, useState } from "react";
import { remark } from "remark";
import html from "remark-html";
import CommentSection from "./_components/comment-section";
import ContentHtml from "./_components/content";

("use strict");

export type CustomComment = Omit<Comment, "id">;
export default function PostPage({
  params: { post },
}: {
  params: { post: string };
}) {
  const [postObj, setPostObj] = useState<Post | undefined>();
  const [content, setContent] = useState<string | undefined>();
  const [comments, setComents] = useState<Comment[] | undefined>();

  useEffect(() => {
    getPost(post).then(async (postObj) => {
      if (!postObj) throw Error("Unable to retrieve post content");
      const content = await remark().use(html).process(postObj.content);
      const comments = await getComments(postObj.id);
      setPostObj(postObj);
      setContent(content.toString());
      setComents(comments);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function addComment(comment: CustomComment) {
    const res = await postComment(comment);
    if (!res.ok) throw Error("Unable to comment at this time");
    setComents([
      ...(comments ?? []),
      {
        id: Date.now().toString(),
        ...comment,
      },
    ]);
  }

  if (!postObj || !content || !comments) return <Loading />;
  return (
    <div className="flex flex-col items-center break-words">
      <BackBtn />
      <ScrollToTopButton />
      <div className="flex w-[65vw] flex-col pb-[min(8vh,8vw)]">
        <h1 className="mb-[min(1vh,1vw)] text-center text-8xl font-bold text-light-mauve dark:text-dark-lavender">
          {postObj.title}
        </h1>
        <h2 className="mb-[min(2vh,2vw)] text-center text-4xl">
          {postObj.description}
        </h2>
        <div className="flex flex-row items-center">
          <div className="h-[0.35rem] w-full rounded-full bg-light-overlay2 dark:bg-dark-overlay2" />
          <HcIcon className="mx-[min(2vh,2vw)] h-[10rem] fill-light-overlay2 dark:fill-dark-overlay2" />
          <div className="h-[0.35rem] w-full rounded-full bg-light-overlay2 dark:bg-dark-overlay2" />
        </div>
        <ContentHtml content={content.toString()} />
        <div className="h-[min(10vh,10vw)]" />
        <CommentSection
          post={postObj}
          comments={comments}
          addComment={addComment}
        />
      </div>
    </div>
  );
}
