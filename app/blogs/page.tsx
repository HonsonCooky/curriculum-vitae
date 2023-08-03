import ChatBubbleLeftEllipsisIcon from "@heroicons/react/24/outline/ChatBubbleLeftEllipsisIcon";
import { getTags } from "../_utils/api-calls";
import BlogTag from "./_components/blog-tag";

export default async function BlogHome() {
  const tags = await getTags();
  return (
    <div className="flex flex-1 flex-col items-center">
      <ChatBubbleLeftEllipsisIcon className="fixed left-[min(10vh,10vw)] top-[min(20vh,20vw)] h-[min(20vh,20vw)]" />
      <div className="w-[50vw]">
        <div className="flex flex-col">
          <h1 className="text-[min(8vh,8vw)] font-bold text-light-mauve dark:text-dark-lavender">
            Blogs
          </h1>
          <h2 className="text-[min(4vh,4vw)]">Ideas Worth Ignoring</h2>
        </div>
        <div className="flex h-[65vh] flex-col justify-evenly">
          <p className="mb-[min(2vh,2vw)] text-justify text-[min(2.4vh,2.4vw)] font-light">
            <span className="font-bold text-light-red dark:text-dark-red">
              Warning:
            </span>{" "}
            You are about to enter the world of bais and opinions from a very
            specific set of experiences. Posts are more akin to that of a
            journal entry; A casual documenation of my thoughts. In anticipation
            of alternative views, an anonymous comment section is provided on
            each topic. I&apos;m always open to new ideas, and would love to
            have mine challenged.
            <br />
            <br />
            <span className="text-[min(2.4vh,2.4vw)] font-bold italic text-light-sky dark:text-dark-sky">
              Note:
            </span>{" "}
            Comment sections may be moderated and altered to ensure
            conversations are digestable.
          </p>
          <div>
            <h3 className="text-[min(3vh,3vw)] font-bold">Explore Tags:</h3>
            <div className="flex flex-wrap justify-start rounded px-[1vw] py-[2vh] nm-inset-light-base-sm dark:nm-inset-dark-base-sm">
              {tags
                ? tags.map((tag) => <BlogTag tag={tag} key={tag.id} />)
                : "Unable to retrieve tags"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
