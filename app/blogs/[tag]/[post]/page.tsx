"use client";
import HcIcon from "@/app/_components/hc-icon";
import { getPost } from "@/app/_utils/api-calls";
import Loading from "@/app/loading";
import { Post } from "@prisma/client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { remark } from "remark";
import html from "remark-html";
import ContentHtml from "./_components/content";

export default function PostPage() {
  const [post, setPost] = useState<Post | undefined>(undefined);
  const [content, setContent] = useState<any | undefined>(undefined);
  const id = useParams().post;

  if (!post)
    getPost(id).then(async (post) => {
      if (post?.content) {
        const content = await remark().use(html).process(post.content);
        setContent(content.toString());
      }
      setPost(post);
    });

  if (!post) return <Loading />;
  return (
    <div className="flex w-screen flex-col items-center">
      <div className="flex w-[50vw] flex-col py-[min(10vh,10vw)]">
        <h1 className="mb-[min(1vh,1vw)] text-center text-[min(7vh,7vw)] font-bold leading-[min(9vh,9vw)] text-light-mauve dark:text-dark-lavender">
          {post.title}.
        </h1>
        <h2 className="mb-[min(2vh,2vw)] text-center text-[min(4vh,4vw)]">
          {post.description}.
        </h2>
        <div className="mb-[min(4vh,4vw)] flex flex-row items-center">
          <div className="h-[0.5vh] w-full rounded-full bg-light-crust dark:bg-dark-crust" />
          <HcIcon className="mx-[min(2vh,2vw)] h-[10vh]" />
          <div className="h-[0.5vh] w-full rounded-full bg-light-crust dark:bg-dark-crust" />
        </div>
        <ContentHtml content={content} />
      </div>
    </div>
  );
}
