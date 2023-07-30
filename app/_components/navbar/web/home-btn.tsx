"use client";
import HcIcon from "@/app/_icons/hc-icon";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeBtn() {
  const pathname = usePathname();

  return (
    <Link href="/" className="inline-flex h-full">
      <motion.div
        aria-selected={pathname == "/"}
        whileTap={{ scale: 0.9 }}
        whileFocus={{ scale: 1.0 }}
        whileHover={{ scale: pathname == "/" ? 1.0 : 1.1 }}
        className="inline-flex h-full overflow-clip rounded-full fill-light-text p-[max(1.5vh,0.5vw)] nm-flat-light-base-sm hover:fill-light-mauve aria-selected:nm-inset-light-base-sm dark:fill-dark-text dark:nm-flat-dark-base-sm hover:dark:fill-dark-mauve aria-selected:dark:nm-inset-dark-base-sm"
      >
        <HcIcon />
      </motion.div>
    </Link>
  );
}
