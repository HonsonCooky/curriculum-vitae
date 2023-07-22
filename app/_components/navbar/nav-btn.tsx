"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBtn(params: { href: string }) {
  function capitalizedRef() {
    const name = params.href.replaceAll("/", "");
    const firstChar = name.charAt(0).toUpperCase();
    const rest = name.slice(1).toLowerCase();
    return firstChar + rest;
  }

  const pathname = usePathname();

  return (
    <Link
      aria-selected={pathname.startsWith(params.href)}
      href={params.href}
      className="nm-flat-light-base dark:nm-flat-dark-base rounded aria-selected:nm-inset-light-base aria-selected:dark:nm-inset-dark-base mx-2"
    >
      <div className="text-3xl py-2 px-4 font-thin hover:text-light-mauve dark:hover:text-dark-mauve">
        {capitalizedRef()}
      </div>
    </Link>
  );
}
