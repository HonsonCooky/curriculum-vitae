import ChatBubbleLeftEllipsisIcon from "@heroicons/react/24/outline/ChatBubbleLeftEllipsisIcon";
import { getTags } from "../_utils/api-calls";
import BlogTag from "./_components/blog-tag";

export default async function BlogHome() {
  const tags = await getTags();
  return (
    <div className="flex flex-1 flex-col items-center">
      <ChatBubbleLeftEllipsisIcon className="fixed left-[min(10vh,10vw)] top-[min(20vh,20vw)] h-[min(20vh,20vw)]" />
      <div className="w-[50vw] break-words">
        <div className="flex flex-col py-[min(2vh,2vw)]">
          <h1 className="text-8xl font-bold text-light-mauve dark:text-dark-lavender">
            Blogs
          </h1>
          <h2 className="text-6xl">Ideas Worth Ignoring</h2>
        </div>
        <div className="flex flex-col">
          <p className="py-[min(4vh,4vw)] text-justify text-2xl font-light">
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
            <span className="text-light-yellow dark:text-dark-yellow">
              Note:
            </span>{" "}
            Comment sections may be moderated and altered to ensure
            conversations are digestable.
          </p>
          <div className="py-[min(4vh,4vw)]">
            <h3 className="text-4xl font-bold">Explore Topics:</h3>
            <p className="mb-[min(2vh,2vw)] text-2xl font-light">
              *Select a tag to see posts that relate to this topic*
            </p>
            <div className="flex flex-wrap justify-start gap-[min(2vh,2vw)]">
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
