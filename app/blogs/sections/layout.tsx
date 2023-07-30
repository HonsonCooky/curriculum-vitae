"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BlogTitle from "../_components/blog-title";

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const split = path.slice(1).split("/");
  const uiPath = split
    .filter((dir) => dir != "sections" || dir.length == 0)
    .map((dir) => dir.charAt(0).toUpperCase() + dir.slice(1).toLowerCase());

  return (
    <div className="flex flex-1 flex-col items-center pt-[15vh]">
      <BlogTitle className="mb-[3vh] flex w-[35vw] flex-row items-end justify-between" />
      <div className="flex w-[40vw] flex-row items-center">
        {uiPath.map((dir) => {
          const href = `/${split
            .slice(0, split.indexOf(dir.toLowerCase()) + 1)
            .join("/")}`;

          return (
            <div>
              <text className="mx-[0.5vw]">{">"}</text>
              <Link className="hover:text-light-blue" href={href} key={href}>
                {dir}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}
