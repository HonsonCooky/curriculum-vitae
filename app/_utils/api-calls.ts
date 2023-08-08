import { CommentSchema, PostSchema, TagSchema } from "@/prisma/generated/zod";
import { Comment } from "@prisma/client";

export async function getTags() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/tags`, {
    next: { revalidate: 0 },
  });
  if (res.ok) return TagSchema.array().parse(await res.json());
  return undefined;
}

export async function getPosts(tagId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/posts/${tagId}`,
    { next: { revalidate: 0 } }
  );
  if (res.ok)
    return PostSchema.partial({ content: true })
      .array()
      .parse(await res.json());
  return undefined;
}

export async function getPost(postId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/post/${postId}`,
    { next: { revalidate: 0 } }
  );
  if (res.ok) {
    const post = await res.json();
    post.content = Buffer.from(post.content);
    return PostSchema.parse(post);
  }
  return undefined;
}

export async function getComments(postId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/comments/${postId}`,
    { next: { revalidate: 0 } }
  );
  if (res.ok) {
    let comments = (await res.json()) as Comment[];
    for (let comment of comments) {
      comment.content = Buffer.from(comment.content);
    }
    return CommentSchema.array().parse(comments);
  }
  return undefined;
}

export async function postComment(comment: Omit<Comment, "id">) {
  return await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/comment`, {
    method: "POST",
    body: JSON.stringify(comment),
    next: { revalidate: 0 },
  });
}
