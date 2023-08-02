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

export function ProficiencyElements(params: {
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
          className="group absolute -translate-x-[50%] -translate-y-[50%] rounded-full nm-flat-light-base-sm hover:z-10 dark:nm-flat-dark-base-sm"
        >
          <Image
            className="block h-[max(6vh,5vw)] w-[max(6vh,5vw)] overflow-clip rounded-full object-contain group-hover:h-[max(7vh,6vw)] group-hover:w-[max(7vh,6vw)] lg:h-[max(10vh,4vw)] lg:w-[max(10vh,4vw)] lg:p-[max(1vh,0.5vw)] lg:group-hover:h-[max(11vh,6vw)] lg:group-hover:w-[max(11vh,6vw)]"
            src={`/${content.imgRef}-logo.png`}
            alt={content.imgRef}
            height={100}
            width={100}
          />
          <div className="invisible absolute w-full -translate-y-[80%] rounded px-[0.1vh] text-center nm-flat-light-base-sm group-hover:visible group-hover:z-10 dark:nm-flat-dark-base-sm lg:text-[max(2vh,1vw)]">
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
