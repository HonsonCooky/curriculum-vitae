import Link from "next/link";

export default function NavLink(params: { title: string; href: string }) {
  return (
    <Link
      href={params.href}
      className="flex px-4 text-3xl font-thin hover:text-light-green dark:hover:text-dark-green"
    >
      {params.title}
    </Link>
  );
}
