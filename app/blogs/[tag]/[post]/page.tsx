"use client";
import { getPost } from "@/app/_utils/api-calls";
import Loading from "@/app/loading";
import { Post } from "@prisma/client";
import { useParams } from "next/navigation";
import { ReactNode, useState } from "react";

export default function PostPage() {
  const [post, setPost] = useState<Post | undefined>(undefined);
  const [content, setContent] = useState<ReactNode | undefined>(undefined);
  const id = useParams().post;

  if (!post)
    getPost(id).then(async (post) => {
      setPost(post);
    });

  if (!post) return <Loading />;
  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="w-[50vw]">
        <div className="flex flex-col">
          <h1 className="text-[min(8vh,8vw)] font-bold text-light-mauve dark:text-dark-lavender">
            {post.title}
          </h1>
          <h2 className="mb-[min(4vh,4vw)] text-[min(4vh,4vw)]">
            {post.description}
          </h2>
        </div>
        <div className="flex max-h-[60vh]">
          <div className="mb-[5vh] w-[60vw] flex-1 overflow-y-auto overflow-x-clip rounded-[2vh] px-[min(6vh,6vw)] pt-[min(2vh,2vw)] nm-inset-light-base dark:nm-inset-dark-base">
            {content ?? <div></div>}
          </div>
        </div>
      </div>
    </div>
  );
}
