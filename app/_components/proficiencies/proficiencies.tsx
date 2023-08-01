"use client";
import { Variants, motion } from "framer-motion";
import { ProficiencyElements } from "./proficiency-elements";
import { proficienciesMobile } from "./proficiency-list-mobile";
import { proficienciesWeb } from "./proficiency-list-web";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Proficiencies() {
  const webProficiencies = proficienciesWeb;
  const mobileProficiences = proficienciesMobile;
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="fixed h-screen w-screen overflow-clip lg:z-0"
    >
      <ProficiencyElements
        params={webProficiencies}
        className="hidden lg:flex"
      />
      <ProficiencyElements
        params={mobileProficiences}
        className="flex lg:hidden"
      />
    </motion.div>
  );
}
