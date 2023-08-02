import ChatBubbleLeftEllipsisIcon from "@heroicons/react/24/outline/ChatBubbleLeftEllipsisIcon";
import { getTags } from "../_utils/api-calls";
import BlogTag from "./_components/blog-tag";

export default async function BlogHome() {
  const tags = await getTags();
  return (
    <div className="flex flex-1 flex-col items-center justify-center overflow-auto">
      <ChatBubbleLeftEllipsisIcon className="fixed left-[2vw] top-[20vh] hidden h-[min(20vh,20vw)] lg:flex" />
      <div className="mb-[2vh] flex flex-col items-center lg:mb-[10vh] lg:flex-row lg:items-baseline">
        <h1 className="text-[max(6vh,4vw)] font-bold leading-[max(6vh,4vw)] text-light-maroon dark:text-dark-maroon">
          Blogs
        </h1>
        <h2 className="pl-[max(3vh,2vw)] text-[max(3vh,2vw)] leading-[max(3vh,1.5vw)]">
          Ideas Worth Ignoring
        </h2>
      </div>
      <div className="mb-[5vh] w-[80vw] lg:w-[60vw]">
        <p className="mb-[4vh] text-justify text-[max(2vh,1vw)] font-light">
          <span className="font-bold text-light-red dark:text-dark-red">
            Warning:
          </span>{" "}
          You are about to enter the world of bais and opinions from a very
          specific set of experiences. Posts are more akin to that of a journal
          entry; A casual documenation of my thoughts. In anticipation of
          alternative views, an anonymous comment section is provided on each
          topic. I&apos;m always open to new ideas, and would love to have mine
          challenged.
        </p>
        <div className="rounded px-[2vw] py-[1vh] text-justify nm-flat-light-base dark:nm-flat-dark-base">
          <p className="text-[max(2vh,1vw)] font-light">
            <span className="font-bold text-light-peach dark:text-dark-peach">
              Note:
            </span>{" "}
            Comment sections may be moderated and altered to ensure
            conversations are digestable.
          </p>
        </div>
      </div>
      <h3 className="mt-[1vh] text-[max(3vh,2vw)] font-bold lg:w-[60vw] lg:py-[3vh]">
        Explore Tags:
      </h3>
      <div className="flex flex-wrap justify-center rounded px-[1vw] py-[2vh] lg:w-[60vw] lg:justify-start lg:nm-inset-light-base-sm lg:dark:nm-inset-dark-base-sm">
        {tags.map((tag) => (
          <BlogTag tag={tag} key={tag.id} />
        ))}
      </div>
    </div>
  );
}
