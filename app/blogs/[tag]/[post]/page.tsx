"use client";
import { getPost } from "@/app/_utils/api-calls";
import Loading from "@/app/loading";
import { Post } from "@prisma/client";
import { useParams } from "next/navigation";
import { useState } from "react";

export default async function PostPage() {
  const [post, setPost] = useState<Post | undefined>(undefined);
  const id = useParams().post;

  if (!post) getPost(id).then((post) => setPost(post));

  if (!post) return <Loading />;
  return (
    <div className="mt-[20vh] flex flex-1 flex-col items-center">
      {post.title}
    </div>
  );
}
