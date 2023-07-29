import { NavMenu } from "./mobile/navmenu";
import NavBar from "./web/navbar";

export default function Navigation() {
  const pages = ["/about", "/projects", "/blog", "/links"];

  return (
    <nav>
      {/* WEB */}
      <NavBar className="hidden lg:flex" pages={pages} />

      {/* MOBILE */}
      <NavMenu className="flex lg:hidden" pages={pages} />
    </nav>
  );
}
