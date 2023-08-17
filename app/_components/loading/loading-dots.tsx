"use client";
import { motion } from "framer-motion";
import { Suspense } from "react";

function Dot(params: {
  times: number[];
  dotSize?: string;
  className?: React.ComponentProps<"div">["className"];
}) {
  const size = params.dotSize ?? "max(1vh,0.2vw)";
  return (
    <motion.div
      style={{
        height: size,
        width: size,
      }}
      className={`rounded-full bg-light-text dark:bg-dark-text 
        ${params.className}`}
      initial={{
        y: 0,
      }}
      animate={{
        y: ["0%", "40%", "-40%", "0%"],
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
  dotSize?: string;
}) {
  return (
    <Suspense fallback={<span>...</span>}>
      <motion.div layout className="flex flex-row gap-2">
        <Dot
          times={[0, 0.2, 0.4, 0.6]}
          className={params.className}
          dotSize={params.dotSize}
        />
        <Dot
          times={[0.1, 0.3, 0.5, 0.7]}
          className={params.className}
          dotSize={params.dotSize}
        />
        <Dot
          times={[0.2, 0.4, 0.6, 0.8]}
          className={params.className}
          dotSize={params.dotSize}
        />
      </motion.div>
    </Suspense>
  );
}
