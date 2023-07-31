"use client";
import { PrismaClient } from "@prisma/client";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function TagPage() {
  const [blogs, setBlogs] = useState([]);
  const title = decodeURI(useParams().tag).replace("%26", "&");
  const prisma = new PrismaClient();
  const posts = prisma.post.findMany({
    where: {
      tags: {
        some: {
          name: {
            contains: title,
          },
        },
      },
    },
  });

  console.log(JSON.stringify(posts));

  return (
    <div className="mt-[20vh] flex flex-1 justify-center">
      <h1 className="mb-2 text-[max(10vh,5vw)] font-bold leading-[max(10vh,5vw)] text-light-maroon dark:text-dark-maroon">
        {title}
      </h1>
    </div>
  );
}
