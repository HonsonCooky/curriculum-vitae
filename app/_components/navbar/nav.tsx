import { NavMenu } from "./mobile/navmenu";
import NavBar from "./web/navbar";

export default function Navigation() {
  const pages = ["/about", "/projects", "/blogs"];

  return (
    <nav>
      <NavBar className="z-50 hidden xl:flex" pages={pages} />
      <NavMenu className="z-50 flex xl:hidden" pages={pages} />
    </nav>
  );
}
