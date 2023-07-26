"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBtn(params: { href: string }) {
  function title() {
    const name = params.href.replaceAll("/", "");
    const firstChar = name.charAt(0).toUpperCase();
    const rest = name.slice(1).toLowerCase();
    return firstChar + rest;
  }

  const pathname = usePathname();

  return (
    <Link href={params.href}>
      <motion.div
        aria-selected={pathname.startsWith(params.href)}
        whileTap={{ scale: 0.9 }}
        className="mx-[0.5vw] rounded-[0.7vh] px-[2vh] py-[1vh] text-[2.5vh] nm-flat-light-base-xs hover:text-light-mauve aria-selected:nm-inset-light-base-sm dark:nm-flat-dark-base-sm dark:hover:text-dark-mauve aria-selected:dark:nm-inset-dark-base-sm"
      >
        {title()}
      </motion.div>
    </Link>
  );
}
