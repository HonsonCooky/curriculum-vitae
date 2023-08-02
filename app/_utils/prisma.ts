import { TagSchema } from "@/prisma/generated/zod";

export async function getTags() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/tags`).then(
    (res) => (res.ok ? res.json() : ["Oh no"])
  );
  return TagSchema.array().parse(res);
}

export async function getPosts(tagId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/posts`, {
    method: "GET",
    body: JSON.stringify({ id: tagId }),
  }).then((res) => (res.ok ? res.json() : ["Oh no"]));
  return TagSchema.array().parse(res);
}
