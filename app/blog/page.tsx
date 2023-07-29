import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import SectionDescription from "./_components/section-desc";
export default function Blogs() {
  return (
    <div className="flex flex-1 flex-col items-center lg:justify-center">
      <ChatBubbleLeftEllipsisIcon className="fixed left-[2vw] top-[20vh] hidden h-[min(20vh,20vw)] lg:flex" />
      <h1 className="mb-2 mt-[4vh] text-[10vh] font-bold leading-[10vh] text-light-maroon dark:text-dark-maroon">
        Blogs
      </h1>
      <h2 className="mb-[2vh] text-[3vh] leading-[3vh]">
        Ideas Worth Ignoring
      </h2>
      <div className="mx-[20vw] mb-[5vh]">
        <p className="mb-[4vh] text-justify text-[2vh] font-light">
          <span className="font-bold text-light-red dark:text-dark-red">
            Warning:
          </span>{" "}
          You are about to enter the world of bais and opinions from a very
          specific set of experiences. Posts are more akin to that of a journal
          entry; A casual documenation of my thoughts. In anticipation of
          alternative views, an anonymous comment section is provided on each
          topic. I'm always open to new ideas, and would love to have mine
          challenged.
        </p>
        <div className="rounded-2xl bg-light-peach px-[5vw] py-[1vh] text-light-crust dark:bg-dark-peach dark:text-dark-base">
          <p className="text-[2vh] font-light">
            <span className="font-bold">Note:</span> Comment sections may be
            moderated and altered to ensure conversations are digestable (and
            appropriate).
          </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-evenly px-[10vw] py-[2vh]">
        <SectionDescription title="Life & Style" description="Content about " />
        <SectionDescription title="Life & Style" description="Content about " />
        <SectionDescription title="Life & Style" description="Content about " />
      </div>
    </div>
  );
}
