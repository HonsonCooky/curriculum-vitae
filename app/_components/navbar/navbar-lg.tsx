import DownloadBtn from "./download-btn";
import HomeBtn from "./home-btn";
import NavBtn from "./nav-btn";

export default function NavBar() {
  const divider = (
    <div className="text-light-text dark:text-dark-text mx-4">|</div>
  );

  return (
    <nav className="fixed top-0 z-50 flex h-28 w-screen items-end px-16 pt-4">
      <HomeBtn />
      <div className="flex flex-1 items-center justify-end">
        <NavBtn href="/about" />
        {divider}
        <NavBtn href="/proficiencies" />
        {divider}
        <NavBtn href="/projects" />
        {divider}
        <NavBtn href="/blog" />
        {divider}
        <NavBtn href="/links" />
        <div className="w-10" /> {/* spacer */}
        <DownloadBtn />
      </div>
    </nav>
  );
}
