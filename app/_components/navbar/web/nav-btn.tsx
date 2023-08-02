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
      <div className="px-[0.5vw]">
        <motion.div
          aria-selected={pathname.startsWith(params.href)}
          whileTap={{ scale: 0.9 }}
          whileFocus={{ scale: 1.0 }}
          whileHover={{ scale: pathname.startsWith(params.href) ? 1.0 : 1.1 }}
          className="rounded px-[2vh] py-[1vh] font-mono text-[min(3vh,3vw)] nm-flat-light-base-sm hover:text-light-mauve aria-selected:nm-inset-light-base-sm dark:nm-flat-dark-base-sm dark:hover:text-dark-mauve aria-selected:dark:nm-inset-dark-base-sm"
        >
          {title()}
        </motion.div>
      </div>
    </Link>
  );
}
