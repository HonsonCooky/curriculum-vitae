"use client";
export default function Blogs() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="mb-2 text-[10vh] font-bold leading-[10vh] text-light-maroon dark:text-dark-maroon">
        Blogs
      </h1>
      <h2 className="mb-[2vh] text-[3vh] leading-[3vh]">
        Ideas Worth Ignoring
      </h2>
      <p className="px-[20vw] text-justify text-[2vh] font-light">
        <span className="text-bold text-light-red dark:text-dark-red">
          Warning:
        </span>{" "}
        You are about to enter the world of bais and opinions. Posts are more
        akin to that of a journal entry; A casual documenation of my thoughts,
        that enables me to clarify opinions and feelings swirling in my head. In
        anticipation of alternative views, an anonymous comment section is
        provided on each topic. I'm always open to new ideas, and would love to
        hear about what I've missed.
      </p>
    </div>
  );
}
