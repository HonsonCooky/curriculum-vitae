import { Suspense } from "react";
import Loading from "../_components/loading/loading";
import { prisma } from "../api/globals";
import BlogTag from "./_components/blog-tag";

async function TagsList() {
  const tags = await prisma.tag.findMany();

  // No tags?
  if (tags.length == 0)
    return (
      <div className="flex flex-wrap justify-start gap-[min(2vh,2vw)] text-lg xl:text-xl">
        Oh no, you&apos;re early. There is nothing to explore right now, but
        watch this space, they&apos;re coming.
      </div>
    );

  return (
    <div className="flex flex-wrap justify-start gap-[min(2vh,2vw)]">
      {tags
        ? tags.map((tag) => <BlogTag tag={tag} key={tag.id} />)
        : "Unable to retrieve tags"}
    </div>
  );
}

export default async function BlogHome() {
  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="flex w-[80vw] flex-col break-words py-[min(25vh,25vw)] xl:w-[65vw] xl:py-[min(5vh,5vw)]">
        <div className="flex flex-col py-[min(2vh,2vw)]">
          <h1 className="text-5xl font-bold text-light-mauve dark:text-dark-lavender xl:text-8xl">
            Blogs
          </h1>
          <h2 className="text-3xl xl:text-6xl">Ideas Worth Ignoring</h2>
        </div>
        <div className="flex flex-col">
          <p className="py-[min(4vh,4vw)] text-justify text-xl font-light xl:text-2xl">
            <span className="font-bold text-light-red dark:text-dark-red">
              Warning:
            </span>{" "}
            You are about to enter the world of bias and opinions from a very
            specific set of experiences. Posts are more akin to that of a
            journal entry; A casual documentation of my thoughts. In
            anticipation of alternative views, an anonymous comment section is
            provided on each topic. I&apos;m always open to new ideas and would
            love to have mine challenged.
          </p>
          <div className="py-[min(4vh,4vw)]">
            <h3 className="text-2xl font-bold xl:text-4xl">
              Explore By Topic:
            </h3>
            <p className="mb-[min(2vh,2vw)] text-sm font-light xl:text-2xl">
              *Select a tag to see posts that relate to this topic*
            </p>
            <Suspense
              fallback={
                <Loading
                  className="my-[min(2vh,2vw)] text-xl"
                  dotSize="0.2rem"
                />
              }
            >
              <TagsList />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
