"use client";
import MenuIcon from "@/app/_icons/menu-icon";
import { Variants, motion, useCycle } from "framer-motion";
import { NavBtns } from "./nav-btns";

const pos = "4vh";
const size = "6vh";
const sidebar: Variants = {
  open: {
    top: 0,
    left: 0,
    padding: pos,
    height: "100%",
    width: "max(30vh,30vw)",
    borderRadius: "0 4vh 4vh 0",
    transition: {
      type: "spring",
      bounce: 0.1,
      damping: 8,
    },
  },
  closed: {
    top: pos,
    left: pos,
    padding: 0,
    height: size,
    width: size,
    borderRadius: "1vh",
    transition: {
      ease: "linear",
      delay: 0.2,
      duration: 0.2,
    },
  },
};

const iconVariants: Variants = {
  open: {
    height: size,
    width: size,
  },
  closed: {
    height: size,
    width: size,
  },
};

export const NavMenu = (params: {
  pages: string[];
  className?: React.ComponentProps<"div">["className"];
}) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      className={`fixed z-40 flex flex-col nm-flat-light-base-sm dark:nm-flat-dark-base-sm ${params.className}`}
      layout
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={sidebar}
      onClick={() => toggleOpen()}
    >
      <motion.div variants={iconVariants}>
        <MenuIcon className={`stroke-light-text dark:stroke-dark-text`} />
      </motion.div>
      <NavBtns pages={params.pages} />
    </motion.nav>
  );
};
