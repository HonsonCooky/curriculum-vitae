"use client";
import { Post, Tag } from "@prisma/client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PostTag(params: { tag: Tag; post: Post }) {
  return (
    <Link href={`/blogs/${params.tag.id}/${params.post.id}`}>
      <motion.div
        whileTap={{ scale: 0.9 }}
        whileFocus={{ scale: 1.0 }}
        whileHover={{ scale: 1.1 }}
        className="mb-[min(2vh,2vw)] flex flex-row rounded px-[2vh] py-[1vh] nm-flat-light-base hover:text-light-mauve dark:nm-flat-dark-base dark:hover:text-dark-mauve"
      >
        <h3 className="pr-[min(2vh,2vw)]">{params.post.title}</h3>
        <h3 className="flex-grow text-center">{params.post.description}</h3>
        <h3 className="pl-[min(2vh,2vw)] text-right">
          {new Date(params.post.date).toDateString()}
        </h3>
      </motion.div>
    </Link>
  );
}
