"use client";
import { motion } from "framer-motion";

function Dot(params: {
  times: number[];
  className?: React.ComponentProps<"div">["className"];
}) {
  return (
    <motion.div
      className={`mx-[0.2vw] h-[max(1vh,0.2vw)] w-[max(1vh,0.2vw)] rounded-full bg-light-text dark:bg-dark-text ${params.className}`}
      initial={{
        y: 0,
      }}
      animate={{
        y: [0, 10, -10, 0],
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        times: params.times,
        repeat: Infinity,
        repeatDelay: 0.5,
      }}
    />
  );
}

export default function LoadingDots(params: {
  className?: React.ComponentProps<"div">["className"];
}) {
  return (
    <motion.div layout className="flex flex-row">
      <Dot times={[0, 0.2, 0.4, 0.6]} className={params.className} />
      <Dot times={[0.1, 0.3, 0.5, 0.7]} className={params.className} />
      <Dot times={[0.2, 0.4, 0.6, 0.8]} className={params.className} />
    </motion.div>
  );
}
