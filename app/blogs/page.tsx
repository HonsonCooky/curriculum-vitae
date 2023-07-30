import ChatBubbleLeftEllipsisIcon from "@heroicons/react/24/outline/ChatBubbleLeftEllipsisIcon";
import BlogTitle from "./_components/blog-title";
import SectionDescription from "./_components/section-desc";
export default function BlogsHome() {
  return (
    <div className="flex flex-1 flex-col items-center lg:justify-center">
      <ChatBubbleLeftEllipsisIcon className="fixed left-[2vw] top-[20vh] hidden h-[min(20vh,20vw)] lg:flex" />
      <BlogTitle />
      <div className="mx-[20vw] mb-[5vh]">
        <p className="mb-[4vh] text-justify text-[max(2vh,1vw)] font-light">
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
        <div className="rounded px-[2vw] py-[1vh] nm-flat-light-base dark:nm-flat-dark-base">
          <p className="text-[max(2vh,1vw)] font-light">
            <span className="font-bold text-light-peach dark:text-dark-peach">
              Note:
            </span>{" "}
            Comment sections may be moderated and altered to ensure
            conversations are digestable.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-evenly px-[10vw] py-[2vh] lg:flex-row">
        <SectionDescription
          title="Life & Style"
          description="The world encapsulating the programming"
          href="/blogs/sections/life-and-style"
        />
        <SectionDescription
          title="Programming"
          description="Lines of code, and alternative thinkings"
          href="/blogs/sections/programming"
        />
        <SectionDescription
          title="Business | Hobbies"
          description="Understanding the effect of your code"
          href="/blogs/sections/business-and-hobbies"
        />
      </div>
    </div>
  );
}
