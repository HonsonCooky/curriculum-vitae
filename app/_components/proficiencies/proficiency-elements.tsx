import { Variants, motion } from "framer-motion";
import Image from "next/image";
import { z } from "zod";

const paramSchema = z.object({
  imgRef: z.string(),
  left: z.string(),
  top: z.string(),
});
const paramsSchema = paramSchema.array();

const child = (content: paramType): Variants => {
  return {
    hidden: {
      opacity: 0,
      left: content.left,
      top: content.top,
      scale: 0,
      translateX: "-50%",
      translateY: "-50%",
    },
    show: {
      opacity: 1,
      left: content.left,
      top: content.top,
      translateX: "-50%",
      translateY: "-50%",
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.75,
        restDelta: 0.005,
        mass: 0.5,
        velocity: 25,
        damping: 5,
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
          className="group fixed rounded-full nm-flat-light-base-sm hover:z-10 dark:nm-flat-dark-base-sm"
        >
          <Image
            className="block h-[min(10vh,10vw)] w-[min(10vh,10vw)] overflow-clip rounded-full object-contain 
            p-[min(1vh,1vw)] group-hover:h-[min(12vh,12vw)] group-hover:w-[min(12vh,12vw)]"
            src={`/${content.imgRef}-logo.png`}
            alt={content.imgRef}
            height={100}
            width={100}
          />
          <div
            className="invisible absolute w-full -translate-y-[80%] rounded px-[0.1vh] text-center 
            text-[min(2vh,2vw)] nm-flat-light-base-sm group-hover:visible group-hover:z-10 dark:nm-flat-dark-base-sm"
          >
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
