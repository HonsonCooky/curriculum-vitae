import { TagSchema } from "@/prisma/generated/zod";

export async function getTags() {
  const res = await fetch(`${process.env.API_ENDPOINT!}/tags`).then((res) =>
    res.json()
  );
  return TagSchema.array().parse(res);
}
