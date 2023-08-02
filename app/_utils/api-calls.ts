import { PostSchema, TagSchema } from "@/prisma/generated/zod";

export async function getTags() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/tags`, {
    next: { revalidate: 0 },
  }).then((res) => (res.ok ? res.json() : ["Oh no"]));
  return TagSchema.array().parse(res);
}

export async function getPosts(tagId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/posts/${tagId}`,
    { next: { revalidate: 0 } }
  ).then((res) => (res.ok ? res.json() : ["Oh no"]));
  return res;
}

export async function getPost(postId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/post/${postId}`,
    { next: { revalidate: 0 } }
  ).then((res) => (res.ok ? res.json() : "Oh no"));
  return PostSchema.parse(res);
}
