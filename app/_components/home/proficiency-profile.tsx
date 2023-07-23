"use client";
import { motion } from "framer-motion";
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
const increment = 0.1;
export default function ProficiencyProfile(params: { params: paramsType }) {
  const parameters = params.params;

  return (
    <motion.div
      key={parameters.imgRef}
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
        delay: (delay += increment),
        min: 0,
        max: 100,
        bounceStiffness: 300,
        restDelta: 0.005,
        bounceDamping: 8,
      }}
      className="absolute -translate-x-[50%] -translate-y-[50%] overflow-clip rounded-full  nm-concave-light-base dark:nm-concave-dark-base"
    >
      <img
        className="block h-24 w-24 rounded-full object-contain p-2"
        src={`/${parameters.imgRef}-logo.png`}
        alt={parameters.imgRef}
      />
    </motion.div>
  );
}
