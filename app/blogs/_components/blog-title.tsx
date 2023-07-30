export default function BlogTitle(params: {
  className?: React.ComponentProps<"div">["className"];
}) {
  return (
    <div className={params.className}>
      <h1 className="mb-2 text-[max(10vh,5vw)] font-bold leading-[max(10vh,5vw)] text-light-maroon dark:text-dark-maroon">
        Blogs
      </h1>
      <h2 className="mb-[2vh] text-[max(3vh,1.5vw)] leading-[max(3vh,1.5vw)]">
        Ideas Worth Ignoring
      </h2>
    </div>
  );
}
