"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { z } from "zod";

const paramsPosSchema = z.object({
  start: z.union([z.string(), z.number()]),
  end: z.union([z.string(), z.number()]),
});
const paramsScheme = z.object({
  imgRef: z.string(),
  left: paramsPosSchema,
  top: paramsPosSchema,
});

export type paramsType = z.infer<typeof paramsScheme>;

let delay = 0.1;
export default function ProficiencyProfile(params: { params: paramsType }) {
  const parameters = params.params;

  return (
    <motion.div
      initial={{
        left: parameters.left.start,
        top: parameters.top.start,
        opacity: 0,
      }}
      animate={{
        left: parameters.left.end,
        top: parameters.top.end,
        opacity: 1,
      }}
      transition={{
        type: "inertia",
        velocity: 400,
        delay: (delay += 0.1),
        min: 0,
        max: 100,
        bounceStiffness: 300,
        restDelta: 0.005,
        bounceDamping: 8,
      }}
      className={`absolute h-28 w-28 overflow-clip rounded-full dark:nm-flat-dark-base`}
    >
      <Image
        src={`/${parameters.imgRef}-logo.png`}
        alt={parameters.imgRef}
        fill
      />
    </motion.div>
  );
}
