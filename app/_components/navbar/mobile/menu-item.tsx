"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = (params: { page: { title: string; href: string } }) => {
  const pathname = usePathname();

  return (
    <Link href={params.page.href}>
      <motion.li
        variants={variants}
        whileTap={{ scale: 0.95 }}
        aria-selected={
          (pathname.startsWith(params.page.href) && params.page.href != "/") ||
          pathname == params.page.href
        }
        className="flex p-[2vw] text-[max(3vh,3vw)] text-light-text aria-selected:text-light-mauve dark:text-dark-text 
        aria-selected:dark:text-dark-mauve"
      >
        {params.page.title}
      </motion.li>
    </Link>
  );
};
