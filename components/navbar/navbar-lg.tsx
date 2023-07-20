import HomeIcon from "@/assets/home-icon";
import Link from "next/link";
import NavLink from "./nav-link";
import DownloadCsvButton from "./download-csv-btn";

export default function NavBar() {
  const divider = <div className="text-light-text dark:text-dark-text">|</div>;

  return (
    <nav className="fixed top-0 z-50 flex h-20 w-screen items-center px-[10%] py-2">
      <Link className="inline-flex h-20" href="/">
        <HomeIcon className="fill-light-text hover:fill-light-yellow dark:fill-dark-text hover:dark:fill-dark-yellow" />
      </Link>
      <div className="flex w-[80%] items-center justify-center">
        <NavLink title="About" href="/about" />
        {divider}
        <NavLink title="Projects" href="/projects" />
        {divider}
        <NavLink title="Blog" href="/blog" />
        {divider}
        <NavLink title="Links" href="/links" />
        {divider}
      </div>
      <div className="flex h-full items-center justify-center">
        <DownloadCsvButton
          btnClassName="inline-flex items-center"
          svgClassName="mr-2 h-10 fill-light-crust dark:fill-dark-crust"
          textClassName="text-3xl text-light-crust dark:text-dark-crust"
        />
      </div>
    </nav>
  );
}
