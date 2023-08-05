"use client";
import { Tag } from "@prisma/client";
import { motion } from "framer-motion";
import Link from "next/link";
import { PostTag } from "../page";

export default function PostTag(params: { tag: Tag; post: PostTag }) {
  return (
    <Link href={`/blogs/${params.tag.id}/${params.post.id}`}>
      <motion.div
        whileTap={{ scale: 0.9 }}
        whileFocus={{ scale: 1.0 }}
        whileHover={{ scale: 1.05 }}
        className="group mb-[min(2vh,2vw)] grid grid-cols-12 items-center gap-0 rounded px-[min(2vh,2vw)] py-[min(1vh,1vw)] nm-flat-light-base hover:text-light-mauve dark:nm-flat-dark-base dark:hover:text-dark-mauve"
      >
        <h3 className="col-span-3 text-left font-bold">{params.post.title}</h3>
        <h3 className="col-span-7 px-[min(1vh,1vw)] text-left">
          {params.post.description}
        </h3>
        <h3 className="col-span-2 text-right font-medium text-light-overlay0 group-hover:text-light-red dark:text-dark-overlay0 dark:group-hover:text-dark-red">
          {new Date(params.post.date).toDateString()}
        </h3>
      </motion.div>
    </Link>
  );
}
