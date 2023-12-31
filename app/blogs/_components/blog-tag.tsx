"use client";
import { Tag } from "@prisma/client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogTag(params: { tag: Tag }) {
  const uri = encodeURI(params.tag.id);
  const href = `/blogs/${uri}`;
  return (
    <Link href={href}>
      <motion.div
        whileTap={{ scale: 0.9 }}
        whileFocus={{ scale: 1.0 }}
        whileHover={{ scale: 1.05 }}
        className="flex flex-row items-center rounded-full px-[2vh] py-[1vh] nm-flat-light-base hover:text-light-mauve 
        dark:nm-flat-dark-base dark:hover:text-dark-mauve"
      >
        <h3 className="xl:text-xl">{params.tag.name}</h3>
      </motion.div>
    </Link>
  );
}
