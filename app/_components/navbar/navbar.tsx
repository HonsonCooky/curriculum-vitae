import HomeBtn from "./home-btn";
import NavBtn from "./nav-btn";

export default function NavBar() {
  const pages = ["/about", "/projects", "/blog", "/links"];

  return (
    <nav className="fixed top-0 z-50 flex h-10 w-screen items-end bg-light-mantle py-4 pl-40 pr-20 dark:bg-dark-mantle 2xl:h-32">
      <HomeBtn />
      <div className="flex flex-1 items-center justify-end">
        {pages.map((href) => (
          <NavBtn key={href} href={href} />
        ))}
      </div>
    </nav>
  );
}
