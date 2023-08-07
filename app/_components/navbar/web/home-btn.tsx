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
        className="flex items-center overflow-clip rounded fill-light-text p-[min(1vh,1vw)] nm-flat-light-base-sm 
        hover:fill-light-mauve aria-selected:nm-inset-light-base-sm dark:fill-dark-text dark:nm-flat-dark-base-sm 
        hover:dark:fill-dark-mauve aria-selected:dark:nm-inset-dark-base-sm"
      >
        <HcIcon className="h-[min(8vh,8vw)]" />
      </motion.div>
    </Link>
  );
}
