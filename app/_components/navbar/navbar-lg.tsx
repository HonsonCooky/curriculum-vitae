import HcIcon from "@/app/_dynamic-assets/hc-icon";
import Link from "next/link";
import DownloadCsvButton from "./download-csv-btn";
import NavLink from "./nav-link";

export default function NavBar() {
  const divider = <div className="text-light-text dark:text-dark-text">|</div>;

  return (
    <nav className="fixed top-0 z-50 flex h-28 w-screen items-end px-16 pt-4">
      <Link className="inline-flex h-full" href="/">
        <HcIcon className="fill-light-text hover:fill-light-mauve dark:fill-dark-text hover:dark:fill-dark-mauve " />
      </Link>
      <div className="flex flex-1 items-center justify-end">
        <NavLink href="/about" />
        {divider}
        <NavLink href="/projects" />
        {divider}
        <NavLink href="/blog" />
        {divider}
        <NavLink href="/links" />
        <div className="w-10" /> {/* spacer */}
        <DownloadCsvButton />
      </div>
    </nav>
  );
}
