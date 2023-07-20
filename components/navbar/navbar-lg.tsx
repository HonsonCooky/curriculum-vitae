import HomeIcon from "@/assets/home-icon";
import Link from "next/link";
import NavLink from "./nav-link";
import DownloadCsvButton from "./download-csv-btn";

export default function NavBar() {
  const divider = <div className="text-light-text dark:text-dark-text">|</div>;

  return (
    <nav className="fixed top-0 z-50 flex h-20 w-screen items-center px-2 py-2">
      <Link className="inline-flex h-20" href="/">
        <HomeIcon className="fill-light-text hover:fill-light-yellow dark:fill-dark-text hover:dark:fill-dark-yellow" />
      </Link>
      <div className="flex flex-1 items-center justify-end">
        <NavLink href="/about" />
        {divider}
        <NavLink href="/projects" />
        {divider}
        <NavLink href="/blog" />
        {divider}
        <NavLink href="/links" />
        <DownloadCsvButton />
      </div>
    </nav>
  );
}
