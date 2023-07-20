import HomeIcon from "@/assets/home-icon";
import Link from "next/link";

export default function NavBar() {
  const linkClassName: React.ComponentProps<"div">["className"] =
    "flex text-2xl font-thin px-4 hover:text-light-green dark:hover:text-dark-green";

  return (
    <nav className="fixed top-0 z-50 flex h-[7vh] w-screen items-center px-[10%]">
      <Link className="left-0 inline-flex h-full py-1" href="/">
        <HomeIcon className="fill-light-text hover:fill-light-yellow dark:fill-dark-text hover:dark:fill-dark-yellow" />
      </Link>
      <div className="flex flex-1 items-center justify-center">
        <Link href="/about" className={linkClassName}>
          ./About
        </Link>
        <Link href="/projects" className={linkClassName}>
          ./Projects
        </Link>
        <Link href="/blog" className={linkClassName}>
          ./Blog
        </Link>
        <Link href="/links" className={linkClassName}>
          ./Links
        </Link>
      </div>
      <div className="flex h-full items-center justify-center">
        <button
          className="
          inline-flex 
          items-center 
          rounded 
          bg-light-text
          px-4
          py-2
          font-bold
          hover:bg-light-pink
          dark:bg-dark-text
          hover:dark:bg-dark-pink"
        >
          <svg
            className="mr-2 h-4 w-4 fill-light-crust dark:fill-dark-crust"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span className="text-light-crust dark:text-dark-crust">
            Download CV.pdf
          </span>
        </button>
      </div>
    </nav>
  );
}
