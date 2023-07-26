import { TableOfContentsType } from "../_components/common/table-of-contents";

export default function About() {
  const contents: TableOfContentsType = [
    {
      title: "History",
      href: "#history",
    },
  ];
  return <div className="flex h-full flex-col lg:flex-row"></div>;
}
