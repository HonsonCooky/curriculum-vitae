import { Bars3Icon } from "@heroicons/react/24/outline";
import HomeBtn from "./home-btn";
import NavBtn from "./nav-btn";

export default function NavBar() {
  const pages = ["/about", "/projects", "/blog", "/links"];

  return (
    <nav>
      {/* WEB */}
      <div className="fixed top-0 z-50 hidden h-28 w-screen items-end px-40 py-1 xl:flex">
        <HomeBtn />
        <div className="mb-4 flex flex-1 items-center justify-center xl:justify-end">
          {pages.map((href) => (
            <NavBtn key={href} href={href} />
          ))}
        </div>
      </div>

      {/* MOBILE */}
      <div className="fixed left-10 top-10 z-50 flex h-10 rounded-full p-2 nm-concave-light-base xl:hidden">
        <Bars3Icon className="h-full" />
      </div>
    </nav>
  );
}
