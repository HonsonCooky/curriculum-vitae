import { CommentSchema, PostSchema, TagSchema } from "@/prisma/generated/zod";
import { Comment } from "@prisma/client";
import { PaginationType } from "../api/globals";

const revalidationTime = 3600;

async function processError(res: Response, e: unknown) {
  let json = await res.json();
  let message = json.message;
  if (!message && (e as any).message) message = (e as any).message;
  return { message };
}

export async function getTags() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/tags`, {
    next: { revalidate: revalidationTime },
  });

  try {
    return TagSchema.array().parse(await res.json());
  } catch (e) {
    throw await processError(res, e);
  }
}

export async function getPosts(tagId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/posts/${tagId}`,
    { next: { revalidate: revalidationTime } }
  );

  try {
    return PostSchema.partial({ content: true })
      .array()
      .parse(await res.json());
  } catch (e) {
    throw await processError(res, e);
  }
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

  try {
    let comments = (await res.json()) as Comment[];
    for (let comment of comments) {
      comment.content = Buffer.from(comment.content);
    }
    return CommentSchema.array().parse(comments);
  } catch (e) {
    throw await processError(res, e);
  }
}

export async function postComment(comment: Omit<Comment, "id">) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/comment`, {
    method: "POST",
    body: JSON.stringify(comment),
    next: { revalidate: revalidationTime },
  });

  try {
    if (!res.ok) throw Error();
    return await res.json();
  } catch (e) {
    throw await processError(res, e);
  }
}
