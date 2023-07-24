import HomeBtn from "./home-btn";
import NavBtn from "./nav-btn";

export default function NavBar() {
  const pages = ["/about", "/projects", "/blog", "/links"];

  return (
    <nav className="fixed top-0 z-50 flex h-28 w-screen items-end pl-40 pr-20 pt-4">
      <HomeBtn />
      <div className="flex flex-1 items-center justify-end">
        {pages.map((href) => (
          <NavBtn key={href} href={href} />
        ))}
      </div>
    </nav>
  );
}
