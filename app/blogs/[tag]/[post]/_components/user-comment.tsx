"use client";
import { generateRandomName } from "@/app/_utils/random-name-gen";
import {
  LockClosedIcon,
  LockOpenIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { Comment, Post } from "@prisma/client";
import { Variants, motion, useCycle } from "framer-motion";
import { parseInt } from "lodash";
import { ChangeEvent, useEffect, useRef, useState } from "react";

const randomName = generateRandomName();
export default function UserComment(params: { post: Post }) {
  const [comment, setComment] = useState("");
  const [errComment, setErrComment] = useState<string | undefined>(undefined);
  const [alias, setAlias] = useState("");
  const [errAlias, setErrAlias] = useState<string | undefined>(undefined);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const maxContentLength = parseInt(`${65_535 / 2}`);
  const maxAliasLength = parseInt(`${256 / 2}`);
  const [isStuck, toggleStuck] = useCycle(true, false);

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
      alias: alias ? alias : randomName,
    };
  }

  const variants: Variants = {
    stuck: {
      position: "sticky",
      bottom: "min(2vh,2vw)",
      transition: {
        ease: "linear",
        layout: {
          duration: 1,
        },
      },
    },
    unstuck: {
      position: "static",
      transition: {
        ease: "linear",
        layout: {
          duration: 1,
        },
      },
    },
  };

  return (
    <motion.div
      layout="position"
      animate={isStuck ? "stuck" : "unstuck"}
      variants={variants}
      className="flex w-[50vw] flex-col self-center break-all rounded-xl px-[min(4vh,4vw)] pb-[min(2vh,2vw)] 
      pt-[min(1vh,1vw)] nm-flat-light-base dark:nm-flat-dark-base"
    >
      <div
        className="group mb-[min(1vh,1vw)] flex w-full justify-end"
        onClick={() => toggleStuck()}
      >
        <LockOpenIcon
          data-stuck={isStuck}
          className="hidden h-[1.25rem] group-hover:stroke-light-mauve data-[stuck=true]:flex dark:group-hover:stroke-dark-mauve"
        />
        <LockClosedIcon
          data-stuck={isStuck}
          className="hidden h-[1.25rem] group-hover:stroke-light-mauve data-[stuck=false]:flex dark:group-hover:stroke-dark-mauve"
        />
      </div>
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
        id="comment"
        onChange={updateComment}
        placeholder="Let me know your thoughts..."
        ref={textAreaRef}
        rows={1}
        value={comment}
        className="mb-[min(2vh,2vw)] flex max-h-[15rem] flex-grow resize-none items-center rounded-xl px-[min(2vh,2vw)] 
        pt-[min(1vh,1vw)] text-xl font-light nm-inset-light-base-sm dark:nm-inset-dark-base-sm"
      />
      <div className="flex flex-row items-center justify-end">
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
        <label className="mr-[min(1vh,1vw)] text-2xl">Alias:</label>
        <div className="flex flex-row items-center justify-end">
          <input
            onChange={updateAlias}
            value={alias}
            placeholder={`${randomName}`}
            className="flex w-[12vw] items-center rounded-lg px-[min(2vh,2vw)] py-[min(0.5vh,0.5vw)] text-lg font-light 
            nm-inset-light-base-sm dark:nm-inset-dark-base-sm"
          />
          <a
            className="group ml-[min(1vh,1vw)] flex flex-row items-center rounded-xl p-[min(0.5vh,0.5vw)] 
            nm-flat-light-base-sm hover:scale-[1.05] dark:nm-flat-dark-base-sm"
            onClick={sendComment}
          >
            <h4
              className="select-none px-[min(1vh,1vw)] text-xl group-hover:text-light-mauve 
              dark:group-hover:text-dark-mauve"
            >
              Send
            </h4>
            <PaperAirplaneIcon
              className="h-[1.25rem] pr-[min(1vh,1vw)] group-hover:stroke-light-mauve 
              dark:group-hover:stroke-dark-mauve"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
