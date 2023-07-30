"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BlogUrl() {
  const path = usePathname();
  const split = path.slice(1).split("/");
  const uiPath = split
    .filter((dir) => dir != "sections" || dir.length == 0)
    .map((dir) => dir.charAt(0).toUpperCase() + dir.slice(1).toLowerCase());

  return (
    <div className="flex h-[max(4vh,3vw)] w-[40vw] flex-row items-center">
      {uiPath.map((dir) => {
        const href = `/${split
          .slice(0, split.indexOf(dir.toLowerCase()) + 1)
          .join("/")}`;

        return (
          <div>
            <text className="mx-[1vw] h-[max(4vh,3vw)]">{">"}</text>
            <Link
              className="text-[max(2vh,1vw)] hover:text-light-blue hover:dark:text-dark-blue"
              href={href}
              key={href}
            >
              {dir}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
