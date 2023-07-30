"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SectionDescription(params: {
  chassName?: React.ComponentProps<"div">["className"];
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={params.href}>
      <motion.div
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="mx-[0.5vw] rounded-[0.7vh] px-[2vh] py-[1vh]  nm-flat-light-base hover:text-light-mauve dark:nm-flat-dark-base dark:hover:text-dark-mauve"
      >
        <h3 className="text-[max(2.5vh,1vw)] font-bold">{params.title}</h3>
        <h4 className="text-[max(1.5vh,0.5vw)]">{params.description}</h4>
      </motion.div>
    </Link>
  );
}
