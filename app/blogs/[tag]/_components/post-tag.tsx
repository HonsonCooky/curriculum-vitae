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
        whileHover={{ scale: 1.05 }}
        layout
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 120,
        }}
        className="group mb-[min(2vh,2vw)] grid grid-cols-12  items-center gap-[min(2vh,2vw)] rounded  py-[min(1vh,1vw)] text-[min(1.7vh,1.7vw)] nm-flat-light-base hover:text-light-mauve dark:nm-flat-dark-base dark:hover:text-dark-mauve"
      >
        <h3 className="col-span-3 px-[min(2vh,2vw)] text-left font-bold">
          {params.post.title}
        </h3>
        <h3 className="col-span-7 px-[min(2vh,2vw)] text-left">
          {params.post.description}
        </h3>
        <h3 className="col-span-2 pr-[min(2vh,2vw)] text-right font-medium text-light-overlay0 group-hover:text-light-red dark:text-dark-overlay0 dark:group-hover:text-dark-red">
          {new Date(params.post.date).toDateString()}
        </h3>
      </motion.li>
    </Link>
  );
}
