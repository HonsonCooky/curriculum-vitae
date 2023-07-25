"use client";
import { motion } from "framer-motion";
import { MenuItem } from "./menu-item";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

function title(href: string) {
  const name = href.replaceAll("/", "");
  const firstChar = name.charAt(0).toUpperCase();
  const rest = name.slice(1).toLowerCase();
  return firstChar + rest;
}
export const Navigation = (params: { pages: string[] }) => (
  <motion.ul variants={variants}>
    <MenuItem page={{ href: "/", title: "Home" }} key={"Home"} />
    {params.pages.map((href) => (
      <MenuItem page={{ href: href, title: title(href) }} key={href} />
    ))}
  </motion.ul>
);
