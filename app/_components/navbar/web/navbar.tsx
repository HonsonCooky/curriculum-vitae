import HomeBtn from "./home-btn";
import NavBtn from "./nav-btn";

export default function NavBar(params: {
  pages: string[];
  className?: React.ComponentProps<"div">["className"];
}) {
  return (
    <div
      className={`h-[min(15vh,15vw)] w-full items-end px-[10vw] py-[1vh] ${params.className}`}
    >
      <div className="mb-[1vh] flex flex-1 items-end justify-start">
        <HomeBtn />
      </div>
      <div className="mb-[1vh] flex flex-1 items-end justify-end">
        {params.pages.map((href) => (
          <NavBtn key={href} href={href} />
        ))}
      </div>
    </div>
  );
}
