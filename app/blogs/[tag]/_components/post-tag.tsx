"use client";
import { Tag } from "@prisma/client";
import { motion } from "framer-motion";
import Link from "next/link";
import { PostTagType } from "../page";

export default function PostTag(params: { tag: Tag; post: PostTagType }) {
  return (
    <Link href={`/blogs/${params.tag.id}/${params.post.id}`}>
      <motion.li
        whileTap={{ scale: 0.9 }}
        whileFocus={{ scale: 1.0 }}
        layout
        transition={{
          type: "spring",
          damping: 25,
          duration: 0.2,
        }}
        className="group mb-[min(2vh,2vw)] grid grid-cols-4 items-center gap-[min(2vh,2vw)] rounded  py-[min(1vh,1vw)] text-base nm-flat-light-base hover:text-light-mauve dark:nm-flat-dark-base dark:hover:text-dark-mauve"
      >
        <h3 className="col-span-1 break-all px-[min(2vh,2vw)] text-left font-bold">
          {params.post.title}
        </h3>
        <h3 className="col-span-2 break-words px-[min(2vh,2vw)] text-left">
          {params.post.description}
        </h3>
        <h3 className="col-span-1 break-all px-[min(2vh,2vw)] text-right font-medium text-light-overlay0 group-hover:text-light-red dark:text-dark-overlay0 dark:group-hover:text-dark-red">
          {new Date(params.post.date).toDateString()}
        </h3>
      </motion.li>
    </Link>
  );
}
