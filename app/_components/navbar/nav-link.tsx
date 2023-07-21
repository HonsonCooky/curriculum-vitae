import Link from "next/link";

export default function NavLink(params: { href: string }) {
  function capitalizedRef() {
    const name = params.href.replaceAll("/", "");
    const firstChar = name.charAt(0).toUpperCase();
    const rest = name.slice(1).toLowerCase();
    return firstChar + rest;
  }

  return (
    <Link
      href={params.href}
      className="flex px-4 text-3xl font-thin hover:text-light-green dark:hover:text-dark-green"
    >
      {capitalizedRef()}
    </Link>
  );
}
