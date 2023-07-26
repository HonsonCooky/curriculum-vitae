import HomeBtn from "./home-btn";
import NavBtn from "./nav-btn";

export default function NavBar(params: {
  pages: string[];
  className?: React.ComponentProps<"div">["className"];
}) {
  return (
    <div
      className={`fixed top-0 z-50 h-[7vw] w-screen items-end px-[10vw] py-[1vh] ${params.className}`}
    >
      <HomeBtn />
      <div className="mb-[1vh] flex flex-1 items-end justify-end">
        {params.pages.map((href) => (
          <NavBtn key={href} href={href} />
        ))}
      </div>
    </div>
  );
}
