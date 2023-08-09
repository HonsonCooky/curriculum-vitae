import { Comment } from "@prisma/client";
import CommentContent from "./comment-content";

export default function Comments(params: { comments: Comment[] | undefined }) {
  const comments = params.comments?.sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );
  return (
    <div className="mt-[min(5vh,5vw)]">
      {comments?.map(async (comment) => {
        return (
          <div
            key={comment.id}
            className="my-[min(2vh,2vw)] break-all rounded-xl px-[min(4vh,4vw)] py-[min(2vh,2vw)] nm-flat-light-base dark:nm-flat-dark-base"
          >
            <div className="flex w-full justify-between">
              <h1 className="text-2xl">{comment.alias}:</h1>
              <h3 className="text-right font-medium text-light-overlay0 dark:text-dark-overlay0 ">
                {new Date(comment.date)
                  .toISOString()
                  .replace(/T/, " ")
                  .replace(/\..+/, "")}
              </h3>
            </div>
            <CommentContent comment={comment} />
          </div>
        );
      })}
    </div>
  );
}
