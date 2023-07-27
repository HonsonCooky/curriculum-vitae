"use client";
import { proficienciesMobile } from "@/app/_utils/proficiency-list-mobile";
import { proficienciesWeb } from "@/app/_utils/proficiency-list-web";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import { z } from "zod";

const paramPosSchema = z.object({
  start: z.union([z.string(), z.number()]),
  end: z.union([z.string(), z.number()]),
});
const paramSchema = z.object({
  imgRef: z.string(),
  left: paramPosSchema,
  top: paramPosSchema,
});
const paramsSchema = paramSchema.array();

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const child = (content: paramType): Variants => {
  return {
    hidden: {
      opacity: 0,
      left: content.left.start,
      top: content.top.start,
    },
    show: {
      opacity: 1,
      left: content.left.end,
      top: content.top.end,
      transition: {
        type: "inertia",
        velocity: 400,
        min: 0,
        max: 100,
        bounceStiffness: 300,
        restDelta: 0.005,
        bounceDamping: 8,
      },
    },
  };
};

export type paramsType = z.infer<typeof paramsSchema>;
export type paramType = z.infer<typeof paramSchema>;

function Proficiency(params: {
  params: paramsType;
  className?: React.ComponentProps<"div">["className"];
}) {
  const contents = paramsSchema.parse(params.params);
  return (
    <div className={params.className}>
      {contents.map((content) => (
        <motion.div
          key={content.imgRef}
          variants={child(content)}
          className="group absolute -translate-x-[50%] -translate-y-[50%]  rounded-full nm-flat-light-base-sm dark:nm-flat-dark-base-sm"
        >
          <Image
            className="block h-[max(7vh,8vw)] w-[max(7vh,8vw)] overflow-clip rounded-full object-contain p-[max(0.5vh,0.5vw)] lg:h-[10vh] lg:w-[10vh] lg:group-hover:h-[12vh] lg:group-hover:w-[12vh] lg:group-hover:nm-flat-light-base lg:group-hover:dark:nm-flat-dark-base"
            src={`/${content.imgRef}-logo.png`}
            alt={content.imgRef}
            height={100}
            width={100}
          />
          <div className="invisible absolute -bottom-[2vh] w-full rounded px-[0.1vh] text-center text-[2vh] nm-flat-light-base-sm group-hover:visible dark:nm-flat-dark-base-sm">
            {content.imgRef.charAt(0).toUpperCase() +
              content.imgRef
                .slice(1)
                .toLowerCase()
                .replace("script", "Script")
                .replace("sharp", "# | DotNet")}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Proficiencies() {
  const webProficiencies = proficienciesWeb;
  const mobileProficiences = proficienciesMobile;
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="fixed h-screen w-screen overflow-clip"
    >
      <Proficiency params={webProficiencies} className="hidden lg:flex" />
      <Proficiency params={mobileProficiences} className="flex lg:hidden" />
    </motion.div>
  );
}
