import HomeBtn from "./home-btn";
import NavBtn from "./nav-btn";

export default function NavBar(params: {
  pages: string[];
  className?: React.ComponentProps<"div">["className"];
}) {
  return (
    <div className={`h-[min(15vh,15vw)] w-full px-[10vw] ${params.className}`}>
      <div className="flex items-center justify-start">
        <HomeBtn />
      </div>
      <div className="flex h-[70%] flex-1 items-center justify-end gap-8">
        {params.pages.map((href) => (
          <NavBtn key={href} href={href} />
        ))}
      </div>
    </div>
  );
}
