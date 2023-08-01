import { TagSchema } from "@/prisma/generated/zod";

export async function getTags() {
  const res = await fetch(`${process.env.API_ENDPOINT}/tags`).then((res) =>
    res.ok ? res.json() : ["Oh no"]
  );
  return TagSchema.array().parse(res);
}
