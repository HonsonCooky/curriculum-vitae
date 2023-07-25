"use client";
import MenuIcon from "@/app/_dynamic-assets/menu-icon";
import { Variants, motion, useCycle } from "framer-motion";
import { RefObject, useEffect, useRef } from "react";
import { Navigation } from "./navigation";

const useDimensions = (ref: RefObject<any>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  });

  return dimensions.current;
};

const pos = 20;
const sidebar: Variants = {
  open: {
    top: 0,
    left: 0,
    padding: pos,
    height: "100%",
    width: "25vw",
    borderRadius: "2%",
    transition: {
      type: "spring",
      bounce: 0.1,
      restDelta: 0.005,
      damping: 8,
    },
  },
  closed: {
    top: pos,
    left: pos,
    padding: 0,
    height: 50,
    width: 50,
    borderRadius: "50%",
    transition: {
      delay: 0.5,
      ease: "linear",
      duration: 0.2,
    },
  },
};

export const NavMenu = (params: {
  pages: string[];
  className?: React.ComponentProps<"div">["className"];
}) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={`fixed z-50 h-full w-72 ${params.className}`}
    >
      <motion.div
        className="relative w-full p-2 nm-flat-light-base dark:nm-flat-dark-base"
        layout
        variants={sidebar}
        onClick={() => toggleOpen()}
      >
        <div
          className={`max-h-[50px] max-w-[50px] flex-1 stroke-light-text stroke-2 hover:stroke-light-mauve dark:stroke-dark-text hover:dark:stroke-dark-mauve`}
        >
          <MenuIcon />
        </div>
        <Navigation />
      </motion.div>
    </motion.nav>
  );
};
