import { Comment } from "@prisma/client";
import CommentContent from "./comment-content";

export default function Comments(params: { comments: Comment[] | undefined }) {
  return (
    <div className="mt-[min(5vh,5vw)]">
      {params.comments?.map(async (comment) => {
        return (
          <div
            key={comment.id}
            className="my-[min(2vh,2vw)] rounded-xl px-[min(4vh,4vw)] py-[min(2vh,2vw)] nm-flat-light-base dark:nm-flat-dark-base"
          >
            <h1 className="text-2xl">{comment.alias}:</h1>
            <CommentContent comment={comment} />
          </div>
        );
      })}
    </div>
  );
}
