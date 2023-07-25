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

let delay = 0.5;
let count = -1;
const increment = 0.1;
export default function ProficiencyProfile(params: { params: paramsType }) {
  const parameters = params.params;
  delay += (count++ % 2) * increment;

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
        delay: delay,
        min: 0,
        max: 100,
        bounceStiffness: 300,
        restDelta: 0.005,
        bounceDamping: 8,
      }}
      className="group absolute -translate-x-[50%] -translate-y-[50%]  rounded-full nm-flat-light-base dark:nm-flat-dark-base"
    >
      <Image
        className="block h-10 w-10 overflow-clip rounded-full object-contain p-2 group-hover:w-28 xl:h-24 xl:w-24 xl:group-hover:h-28"
        src={`/${parameters.imgRef}-logo.png`}
        alt={parameters.imgRef}
        height={100}
        width={100}
      />
      <div className="invisible absolute -bottom-2 w-full rounded px-1 text-center nm-flat-light-base group-hover:visible dark:nm-flat-dark-base">
        {parameters.imgRef.charAt(0).toUpperCase() +
          parameters.imgRef
            .slice(1)
            .toLowerCase()
            .replace("script", "Script")
            .replace("sharp", "# | DotNet")}
      </div>
    </motion.div>
  );
}
