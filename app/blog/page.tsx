import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
export default function Blogs() {
  return (
    <div className="flex flex-1 flex-col items-center lg:justify-center">
      <ChatBubbleLeftEllipsisIcon className="fixed right-[20%] top-[20vh] hidden h-[20vh] lg:flex" />
      <h1 className="mb-2 mt-[4vh] text-[10vh] font-bold leading-[10vh] text-light-maroon dark:text-dark-maroon">
        Blogs
      </h1>
      <h2 className="mb-[2vh] text-[3vh] leading-[3vh]">
        Ideas Worth Ignoring
      </h2>
      <div className="mx-[15vw] rounded-2xl px-[5vw] py-[2vh] nm-inset-light-base dark:nm-inset-dark-base">
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
        <div className="">
          <p className="text-justify text-[2vh] font-light">
            <span className="text-light-yellow dark:text-dark-yellow">
              Note:
            </span>{" "}
            Comment sections may be moderated and altered to ensure
            conversations are digestable (and appropriate).
          </p>
        </div>
      </div>
    </div>
  );
}
