import BackBtn from "@/app/_components/back-btn";
import HcIcon from "@/app/_components/navbar/web/hc-icon";
import { prisma } from "@/app/api/globals";
import { Comment } from "@prisma/client";
import { remark } from "remark";
import html from "remark-html";
import CommentSection from "./_components/comment-section";
import ContentHtml from "./_components/content";

export type CustomComment = Omit<Comment, "id">;
export default async function PostPage({
  params: { post },
}: {
  params: { post: string };
}) {
  const postObj = await prisma.post.findUnique({ where: { id: post } });
  if (!postObj) throw Error("Unable to retrieve post");
  const content = await remark()
    .use(html)
    .process(postObj.content)
    .then((file) => file.toString());

  return (
    <div className="flex flex-col items-center break-words">
      <BackBtn />
      <div className="flex w-[80vw] flex-col py-[min(25vh,25vw)] pb-[min(8vh,8vw)] xl:w-[65vw] xl:py-0">
        <h1 className="mb-[min(1vh,1vw)] text-center text-5xl font-bold text-light-mauve dark:text-dark-lavender xl:text-8xl">
          {postObj.title}
        </h1>
        <h2 className="mb-[min(2vh,2vw)] text-center text-2xl xl:text-4xl">
          {postObj.description}
        </h2>
        <div className="flex flex-row items-center">
          <div className="h-[0.35rem] w-full rounded-full bg-light-overlay2 dark:bg-dark-overlay2" />
          <HcIcon className="mx-[min(2vh,2vw)] h-[10rem] fill-light-overlay2 dark:fill-dark-overlay2" />
          <div className="h-[0.35rem] w-full rounded-full bg-light-overlay2 dark:bg-dark-overlay2" />
        </div>
        <ContentHtml content={content.toString()} />
        <div className="h-[min(10vh,10vw)]" />
        <CommentSection postId={post} />
      </div>
    </div>
  );
}
