"use client";
import { Variants, motion } from "framer-motion";
import { ProficiencyElements } from "./proficiency-elements";
import { proficienciesWeb } from "./proficiency-list-web";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Proficiencies() {
  const webProficiencies = proficienciesWeb;
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <ProficiencyElements params={webProficiencies} className="flex" />
    </motion.div>
  );
}
