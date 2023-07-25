"use client";
import HcIcon from "@/app/_dynamic-assets/hc-icon";
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
        className=" inline-flex h-full translate-x-1 overflow-clip rounded-full fill-light-text p-4 nm-flat-light-base hover:fill-light-mauve aria-selected:nm-inset-light-base dark:fill-dark-text dark:nm-flat-dark-base hover:dark:fill-dark-mauve aria-selected:dark:nm-inset-dark-base"
      >
        <HcIcon />
      </motion.div>
    </Link>
  );
}
