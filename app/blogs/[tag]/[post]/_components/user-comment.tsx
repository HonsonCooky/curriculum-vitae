"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Comment, Post } from "@prisma/client";
import { parseInt } from "lodash";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export default function UserComment(params: { post: Post }) {
  const [comment, setComment] = useState("");
  const [errComment, setErrComment] = useState<string | undefined>(undefined);
  const [alias, setAlias] = useState("");
  const [errAlias, setErrAlias] = useState<string | undefined>(undefined);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const maxContentLength = parseInt(`${65_535 / 2}`);
  const maxAliasLength = parseInt(`${256 / 2}`);

  useEffect(() => {
    const curTextArea = textAreaRef.current;
    if (curTextArea) {
      curTextArea.style.height = "0px";
      const scrollHeight = curTextArea.scrollHeight;
      curTextArea.style.height = "calc(min(1vh,1vw) + " + scrollHeight + "px)";
    }
  }, [textAreaRef, comment]);

  function updateComment(e: ChangeEvent<HTMLTextAreaElement>) {
    if (e.target.value.length > maxContentLength) {
      setErrComment("Comment Too Long");
      return;
    }
    if (errComment) setErrComment(undefined);
    setComment(e.target.value);
  }

  function updateAlias(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length > maxAliasLength) {
      setErrAlias("Alias Too Long");
      return;
    }
    if (errComment) setErrAlias(undefined);
    setAlias(e.target.value);
  }

  async function sendComment() {
    if (comment.length == 0) {
      setErrComment("Missing Comment");
      return;
    }
    const cmtObj: Omit<Comment, "id"> = {
      date: new Date(),
      content: Buffer.from(comment),
      postId: params.post.id,
      alias: alias ? alias : null,
    };
  }

  return (
    <div
      className="sticky bottom-[min(2vh,2vw)] flex w-[55vw] flex-col self-center break-all rounded-xl 
      px-[min(4vh,4vw)] py-[min(2vh,2vw)] nm-flat-light-base dark:nm-flat-dark-base"
    >
      <div className="flex w-full justify-between">
        <label className="mb-[min(1vh,1vw)] text-2xl">Comment:</label>
        <label className="mb-[min(1vh,1vw)] text-xl font-light italic text-light-overlay2 dark:text-dark-overlay2">
          markdown compatable
        </label>
        <label className="mb-[min(1vh,1vw)] text-2xl">
          {comment.length}/{maxContentLength}
        </label>
      </div>
      <textarea
        id="review-text"
        onChange={updateComment}
        placeholder="Let me know your thoughts..."
        ref={textAreaRef}
        rows={1}
        value={comment}
        className="mb-[min(2vh,2vw)] flex max-h-[15rem] flex-grow resize-none  items-center rounded-xl border-2 
        border-light-sapphire px-[min(2vh,2vw)] pb-[min(0.5vh,0.5vw)] pt-[min(1vh,1vw)] text-xl font-light 
        nm-inset-light-base dark:border-dark-sapphire dark:nm-inset-dark-base"
      />
      <div className="flex flex-row items-end justify-end">
        <div className="flex h-full flex-1 items-center font-bold text-light-red dark:text-dark-red">
          <label
            aria-hidden={errComment ? true : false}
            className="px-[min(2vh,2vw)] aria-hidden:flex"
          >
            {errComment}
          </label>
          <label
            aria-hidden={errAlias ? true : false}
            className="px-[min(2vh,2vw)] aria-hidden:flex"
          >
            {errAlias}
          </label>
        </div>
        <input
          onChange={updateAlias}
          value={alias}
          placeholder="Signature (Optional)"
          className="flex w-min resize-none items-center rounded-xl border-2 border-light-blue 
          px-[min(2vh,2vw)] pb-[min(0.5vh,0.5vw)] pt-[min(1vh,1vw)] text-lg font-light nm-inset-light-base 
          dark:border-dark-blue dark:nm-inset-dark-base"
        />
        <a
          className="mb-[min(0.5vh,0.5vw)] ml-[min(1vh,1vw)] flex flex-row items-center rounded-full p-[min(0.5vh,0.5vw)] 
          nm-flat-light-base hover:scale-[1.05] dark:nm-flat-dark-base"
          onClick={sendComment}
        >
          <h4 className="select-none px-[min(1vh,1vw)] text-xl">Send</h4>
          <PaperAirplaneIcon className=" h-[1.25rem] " />
        </a>
      </div>
    </div>
  );
}
