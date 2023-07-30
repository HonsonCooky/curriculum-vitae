import { PrismaClient } from "@prisma/client";
import BlogTag from "./blog-tag";

export default async function BlogTags() {
  const prisma = new PrismaClient();
  const tags = await prisma.tag.findMany();

  return (
    <div className="flex w-full flex-col items-center justify-evenly px-[10vw] py-[2vh] lg:flex-row">
      {tags.map((tag) => (
        <BlogTag tag={tag} key={tag.name} />
      ))}
    </div>
  );
}
