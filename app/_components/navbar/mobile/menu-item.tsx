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
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <h6
          aria-selected={
            (pathname.startsWith(params.page.href) &&
              params.page.href != "/") ||
            pathname == params.page.href
          }
          className="p-2 text-2xl text-light-text aria-selected:text-light-mauve dark:text-dark-text aria-selected:dark:text-dark-mauve"
        >
          {params.page.title}
        </h6>
      </motion.li>
    </Link>
  );
};
