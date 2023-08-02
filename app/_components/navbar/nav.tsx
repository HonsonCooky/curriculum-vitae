import NavBar from "./web/navbar";

export default function Navigation() {
  const pages = ["/about", "/projects", "/blogs", "/links"];

  return (
    <nav>
      <NavBar className="z-50 flex" pages={pages} />
    </nav>
  );
}
