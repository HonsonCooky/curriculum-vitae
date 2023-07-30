"use client";
import { Tag } from "@prisma/client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogTag(params: {
  chassName?: React.ComponentProps<"div">["className"];
  tag: Tag;
}) {
  return (
    <Link href={`/blogs/${encodeURI(params.tag.name)}`}>
      <motion.div
        whileTap={{ scale: 0.9 }}
        whileFocus={{ scale: 1.0 }}
        whileHover={{ scale: 1.1 }}
        className="mx-[0.5vw] rounded-[0.7vh] px-[2vh] py-[1vh]  nm-flat-light-base hover:text-light-mauve dark:nm-flat-dark-base dark:hover:text-dark-mauve"
      >
        <h3 className="text-[max(2.5vh,1vw)] font-bold">{params.tag.name}</h3>
      </motion.div>
    </Link>
  );
}
