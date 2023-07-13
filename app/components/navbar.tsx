import Link from "next/link";

export default function NavBar() {
  const linkClassName: React.ComponentProps<"div">["className"] =
    "flex text-2xl font-thin px-4 hover:text-light-green dark:hover:text-dark-green";

  return (
    <nav className="fixed top-0 z-50 flex h-[5vh] w-screen items-center px-[10%]">
      <div className="flex flex-1 items-center justify-center">
        <Link href="/about" className={linkClassName}>
          About
        </Link>
        <Link href="/projects" className={linkClassName}>
          Projects
        </Link>
        <Link href="/blog" className={linkClassName}>
          Blog
        </Link>
        <Link href="/links" className={linkClassName}>
          Links
        </Link>
      </div>
    </nav>
  );
}
