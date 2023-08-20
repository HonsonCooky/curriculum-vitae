"use client";
import { generateRandomName } from "@/app/_utils/random-name-gen";
import {
  ChevronDownIcon,
  LockClosedIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { Variants, motion, useCycle } from "framer-motion";
import { parseInt } from "lodash";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export default function UserComment(params: {
  handleCommentPost: (comment: string, alias: string) => Promise<void>;
}) {
  const [comment, setComment] = useState("");
  const [errComment, setErrComment] = useState<string | undefined>(undefined);
  const [alias, setAlias] = useState("");
  const [errAlias, setErrAlias] = useState<string | undefined>(undefined);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const maxContentLength = parseInt(`${65_535 / 2}`);
  const maxAliasLength = parseInt(`${256 / 2}`);
  const [isStuck, toggleStuck] = useCycle(true, false);
  const [randomName, setRandomName] = useState("");

  useEffect(() => {
    if (!randomName) setRandomName(generateRandomName());
    const curTextArea = textAreaRef.current;
    if (curTextArea) {
      curTextArea.style.height = "0px";
      const scrollHeight = curTextArea.scrollHeight;
      curTextArea.style.height = "calc(min(1vh,1vw) + " + scrollHeight + "px)";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    if (errAlias) setErrAlias(undefined);
    setAlias(e.target.value);
  }

  async function sendComment() {
    if (comment.length == 0) {
      setErrComment("Missing Comment");
      return;
    }

    try {
      await params.handleCommentPost(
        comment,
        alias.length > 0 ? alias : randomName
      );
      if (errComment) setErrComment(undefined);
      if (errAlias) setErrAlias(undefined);
      setComment("");
    } catch (e) {
      setErrComment(
        (e as any).message ?? "Unable to send comment at this time"
      );
    }
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
      className="flex w-full flex-col self-center break-all rounded-xl px-[min(4vh,4vw)] pb-[min(2vh,2vw)] 
      pt-[min(1vh,1vw)] nm-flat-light-base dark:nm-flat-dark-base xl:w-[50vw]"
    >
      <div
        className="group mb-[min(1vh,1vw)] flex w-full justify-end"
        onClick={() => toggleStuck()}
      >
        <ChevronDownIcon
          data-stuck={isStuck}
          className="hidden h-[1.25rem] group-hover:stroke-light-mauve data-[stuck=true]:flex dark:group-hover:stroke-dark-mauve"
        />
        <LockClosedIcon
          data-stuck={isStuck}
          className="hidden h-[1.25rem] group-hover:stroke-light-mauve data-[stuck=false]:flex dark:group-hover:stroke-dark-mauve"
        />
      </div>
      <div className="flex w-full justify-between">
        <label className="mb-[min(1vh,1vw)] text-xl xl:text-2xl">
          Comment:
        </label>
        <label className="mb-[min(1vh,1vw)] hidden text-xl font-light italic text-light-overlay2 dark:text-dark-overlay2 xl:flex">
          markdown compatable
        </label>
        <label className="mb-[min(1vh,1vw)] text-xl xl:text-2xl">
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
        pt-[min(1vh,1vw)] font-light nm-inset-light-base-sm dark:nm-inset-dark-base-sm xl:text-xl"
      />
      <div className="flex flex-col items-center justify-end xl:flex-row">
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
        <div className="flex w-full flex-row xl:w-fit">
          <label className="mr-[min(1vh,1vw)] text-lg xl:text-2xl">
            Alias:
          </label>
          <div className="flex flex-row items-center justify-end">
            <input
              onChange={updateAlias}
              value={alias}
              placeholder={randomName}
              className="flex w-full items-center rounded-lg px-[min(2vh,2vw)] py-[min(0.5vh,0.5vw)] font-light nm-inset-light-base-sm dark:nm-inset-dark-base-sm 
            xl:w-[12vw] xl:text-lg"
            />
            <a
              className="group ml-[min(1vh,1vw)] flex flex-row items-center hover:scale-[1.05] xl:rounded-xl 
            xl:p-[min(0.5vh,0.5vw)] xl:nm-flat-light-base-sm xl:dark:nm-flat-dark-base-sm"
              onClick={sendComment}
            >
              <h4
                className="hidden select-none px-[min(1vh,1vw)] text-xl group-hover:text-light-mauve dark:group-hover:text-dark-mauve 
              xl:flex"
              >
                Send
              </h4>
              <PaperAirplaneIcon
                className="h-[1.25rem] group-hover:stroke-light-mauve dark:group-hover:stroke-dark-mauve 
              xl:pr-[min(1vh,1vw)]"
              />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
