"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HcIcon from "../../hc-icon";

export default function HomeBtn() {
  const pathname = usePathname();

  return (
    <Link href="/" className="inline-flex h-full">
      <motion.div
        aria-selected={pathname == "/"}
        whileTap={{ scale: 0.9 }}
        whileFocus={{ scale: 1.0 }}
        whileHover={{ scale: pathname == "/" ? 1.0 : 1.05 }}
        className="flex items-center fill-light-text  hover:fill-light-mauve dark:fill-dark-text hover:dark:fill-dark-mauve"
      >
        <HcIcon className="h-[min(8vh,8vw)]" />
      </motion.div>
    </Link>
  );
}
