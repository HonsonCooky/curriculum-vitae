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
      className="mx-2 rounded nm-flat-light-base aria-selected:nm-inset-light-base dark:nm-flat-dark-base aria-selected:dark:nm-inset-dark-base"
    >
      <div className="px-4 py-2 text-3xl hover:text-light-mauve dark:hover:text-dark-mauve">
        {capitalizedRef()}
      </div>
    </Link>
  );
}
