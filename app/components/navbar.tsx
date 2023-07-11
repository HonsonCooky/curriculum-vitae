import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 flex h-[5vh] w-screen items-center justify-end px-[10%] dark:bg-dark-surface0">
      <Link
        href="/about"
        className="flex rounded text-2xl font-thin dark:hover:text-dark-green"
      >
        About
      </Link>
    </nav>
  );
}
