import BlogTitle from "../_components/blog-title";
import BlogUrl from "../_components/blog-url";

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col items-center pt-[15vh]">
      <BlogTitle />
      <BlogUrl />
      <div className="flex flex-1 flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}
