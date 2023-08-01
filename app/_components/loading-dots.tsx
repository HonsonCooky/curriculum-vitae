import { motion } from "framer-motion";

export default function LoadingDots() {
  return (
    <div>
      <motion.span className="relative top-0 h-[1vh] bg-white">.</motion.span>
      <motion.span className="relative">.</motion.span>
      <motion.span className="relative">.</motion.span>
    </div>
  );
}
