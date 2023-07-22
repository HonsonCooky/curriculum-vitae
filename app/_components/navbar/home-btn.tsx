import HcIcon from "@/app/_dynamic-assets/hc-icon";
import Link from "next/link";

export default function HomeBtn() {
  return (
    <Link className="inline-flex h-full" href="/">
      <HcIcon className="fill-light-text hover:fill-light-mauve dark:fill-dark-text hover:dark:fill-dark-mauve" />
    </Link>
  );
}
