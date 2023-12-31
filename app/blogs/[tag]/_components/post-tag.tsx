"use client";
import { Tag } from "@prisma/client";
import { motion } from "framer-motion";
import Link from "next/link";
import { PostTagType } from "../page";

export default function PostTag(params: { tag: Tag; post: PostTagType }) {
  return (
    <Link href={`/blogs/${params.tag.id}/${params.post.id}`}>
      <motion.li
        whileTap={{ scale: 0.95 }}
        whileFocus={{ scale: 1.0 }}
        layout
        className="group mb-[min(2vh,2vw)] grid grid-cols-4 items-center gap-[min(2vh,2vw)] rounded  py-[min(1vh,1vw)] 
        text-sm hover:text-light-mauve dark:hover:text-dark-mauve xl:text-xl"
      >
        <h3 className="col-span-1 break-words px-[min(2vh,2vw)] text-left font-bold">
          {params.post.title}
        </h3>
        <h3 className="col-span-2 break-words px-[min(2vh,2vw)] text-left">
          {params.post.description}
        </h3>
        <h3
          className="col-span-1 break-all px-[min(2vh,2vw)] text-right font-medium text-light-overlay0 
          group-hover:text-light-red dark:text-dark-overlay0 dark:group-hover:text-dark-red"
        >
          {new Date(params.post.date).toDateString()}
        </h3>
      </motion.li>
    </Link>
  );
}
