"use client";
import HcIcon from "@/app/_dynamic-assets/hc-icon";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeBtn() {
  const pathname = usePathname();
  console.log();

  return (
    <Link
      className="inline-flex h-full overflow-clip rounded-full nm-flat-light-base aria-selected:nm-inset-light-base dark:nm-flat-dark-base aria-selected:dark:nm-inset-dark-base"
      href="/"
      aria-selected={pathname == "/"}
    >
      <div className="inline-flex h-full translate-x-1 fill-light-text p-4 hover:fill-light-mauve dark:fill-dark-text hover:dark:fill-dark-mauve">
        <HcIcon />
      </div>
    </Link>
  );
}
