"use client";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import {
  Variants,
  motion,
  useAnimationControls,
  useScroll,
} from "framer-motion";
import { useEffect } from "react";

const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0, y: 100, transition: { ease: "linear", duration: 0.2 } },
  show: { opacity: 1, y: 0 },
};

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function ScrollToTopButton() {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.2 && latestValue < 1) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.button
      className="fixed bottom-0 right-0 p-10"
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}
    >
      <div
        className="group flex w-min translate-x-[-50%] flex-row items-center rounded-full p-[min(1vh,1vw)] 
        nm-flat-light-base hover:scale-[1.1] dark:nm-flat-dark-base"
      >
        <ArrowUpIcon
          className="h-[2.5rem] stroke-light-text group-hover:stroke-light-mauve dark:stroke-dark-text 
          dark:group-hover:stroke-dark-mauve"
        />
      </div>
    </motion.button>
  );
}
