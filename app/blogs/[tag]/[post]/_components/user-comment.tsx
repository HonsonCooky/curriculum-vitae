"use client";
import { useEffect, useRef, useState } from "react";

export default function UserComment() {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const maxTextLength = 65_535;

  useEffect(() => {
    const curTextArea = textAreaRef.current;
    if (curTextArea) {
      curTextArea.style.height = "0px";
      const scrollHeight = curTextArea.scrollHeight;
      curTextArea.style.height = "calc(min(1vh,1vw) + " + scrollHeight + "px)";
    }
  }, [textAreaRef, value]);

  return (
    <div
      className="sticky bottom-[min(2vh,2vw)] flex max-h-[30vh] w-[55vw] flex-col self-center rounded-xl 
      px-[min(4vh,4vw)] py-[min(2vh,2vw)] nm-flat-light-base dark:nm-flat-dark-base"
    >
      <div className="flex w-full justify-between">
        <label className="mb-[min(1vh,1vw)] text-2xl">Comment:</label>
        <label className="mb-[min(1vh,1vw)] text-2xl">
          {value.length}/{maxTextLength}
        </label>
      </div>
      <textarea
        id="review-text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Let me know your thoughts..."
        ref={textAreaRef}
        rows={1}
        value={value}
        className="flex resize-none items-center rounded-xl border-2 border-light-sapphire px-[min(2vh,2vw)] 
        py-[min(1vh,1vw)] text-xl font-light nm-inset-light-base dark:border-dark-sapphire dark:nm-inset-dark-base"
      />
    </div>
  );
}
