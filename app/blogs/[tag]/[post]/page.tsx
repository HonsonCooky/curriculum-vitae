"use client";
import BackBtn from "@/app/_components/back-btn";
import HcIcon from "@/app/_components/hc-icon";
import ScrollToTopButton from "@/app/_components/scroll-top-btn";
import { getPost } from "@/app/_utils/api-calls";
import Loading from "@/app/loading";
import { Post } from "@prisma/client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { remark } from "remark";
import html from "remark-html";
import Comments from "./_components/comments";
import ContentHtml from "./_components/content";
import UserComment from "./_components/user-comment";

export default function PostPage() {
  const [post, setPost] = useState<Post | undefined>(undefined);
  const [content, setContent] = useState<any | undefined>(undefined);
  const id = useParams().post;

  useEffect(() => {
    if (!post)
      getPost(id).then(async (post) => {
        if (post?.content) {
          const content = await remark().use(html).process(post.content);
          setContent(content.toString());
        }
        setPost(post);
      });
  });

  if (!post) return <Loading />;
  return (
    <div className="flex flex-col items-center break-words">
      <BackBtn />
      <ScrollToTopButton />
      <div className="flex w-[65vw] flex-col pb-[min(8vh,8vw)]">
        <h1 className="mb-[min(1vh,1vw)] text-center text-8xl font-bold text-light-mauve dark:text-dark-lavender">
          {post.title}
        </h1>
        <h2 className="mb-[min(2vh,2vw)] text-center text-4xl">
          {post.description}
        </h2>
        <div className="flex flex-row items-center">
          <div className="h-[0.35rem] w-full rounded-full bg-light-overlay2 dark:bg-dark-overlay2" />
          <HcIcon className="mx-[min(2vh,2vw)] h-[10rem] fill-light-overlay2 dark:fill-dark-overlay2" />
          <div className="h-[0.35rem] w-full rounded-full bg-light-overlay2 dark:bg-dark-overlay2" />
        </div>
        <ContentHtml content={content} />
        <div className="h-[min(10vh,10vw)]" />
        <UserComment post={post} />
        <Comments post={post} />
      </div>
    </div>
  );
}
