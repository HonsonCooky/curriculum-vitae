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
    <Link href={params.href} className="flex h-full -translate-y-4">
      <motion.div
        aria-selected={pathname.startsWith(params.href)}
        whileTap={{ scale: 0.9 }}
        whileFocus={{ scale: 1.0 }}
        whileHover={{ scale: pathname.startsWith(params.href) ? 1.0 : 1.1 }}
        className="flex h-full w-[10rem] items-end justify-center rounded-b-lg px-[2vh] pb-2 text-4xl font-light nm-flat-light-base-xs 
          hover:text-light-mauve aria-selected:nm-inset-light-base-sm dark:nm-flat-dark-base-xs 
          dark:hover:text-dark-mauve aria-selected:dark:nm-inset-dark-base-sm"
      >
        {title()}
      </motion.div>
    </Link>
  );
}
