"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProficiencyProfile(params: {
  imgRef: string;
  left: { start: string | number; end: string | number };
  top: { start: string | number; end: string | number };
}) {
  function getAlt() {
    return params.imgRef.replace("-logo.png", "");
  }

  return (
    <motion.div
      initial={{ left: params.left.start, top: params.top.start, opacity: 0 }}
      animate={{ left: params.left.end, top: params.top.end, opacity: 1 }}
      transition={{
        duration: 1,
        delay: 2,
        type: "spring",
        damping: 7,
        stiffness: 50,
        restDelta: 0.001,
      }}
      className="absolute overflow-clip rounded-full dark:nm-flat-dark-base"
    >
      <Image src={params.imgRef} alt={getAlt()} width={100} height={100} />
    </motion.div>
  );
}
