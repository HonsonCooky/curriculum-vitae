import { CommentSchema, PostSchema, TagSchema } from "@/prisma/generated/zod";
import { Comment } from "@prisma/client";
import { PaginationType } from "../api/globals";

const revalidationTime = 3600;

export async function getTags() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/tags`, {
    next: { revalidate: revalidationTime },
  });
  return TagSchema.array().parse(await res.json());
}

export async function getPosts(tagId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/posts/${tagId}`,
    { next: { revalidate: revalidationTime } }
  );
  return PostSchema.partial({ content: true })
    .array()
    .parse(await res.json());
}

export async function getComments(postId: string, pagination?: PaginationType) {
  const pagi: PaginationType = pagination ?? { skip: 0, take: 20 };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/comments/${postId}`,
    {
      method: "POST",
      body: JSON.stringify(pagi),
      next: { revalidate: revalidationTime },
    }
  );
  let comments = (await res.json()) as Comment[];
  for (let comment of comments) {
    comment.content = Buffer.from(comment.content);
  }
  return CommentSchema.array().parse(comments);
}

export async function postComment(comment: Omit<Comment, "id">) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/comment`, {
    method: "POST",
    body: JSON.stringify(comment),
    next: { revalidate: revalidationTime },
  });
  if (!res.ok) throw Error("Failed to post comment");
  return await res.json();
}
