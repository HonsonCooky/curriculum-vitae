"use client";
import { useRef, useState } from "react";

export default function UserComment() {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    setValue(val);
  };

  return (
    <div
      className="sticky bottom-[min(1vh,1vw)] flex max-h-[30vh] w-[50vw] flex-col self-center rounded-xl 
      px-[min(4vh,4vw)] py-[min(2vh,2vw)] nm-flat-light-base dark:nm-flat-dark-base"
    >
      <label className="mb-[min(1vh,1vw)] text-2xl">Comment:</label>
      <textarea
        id="review-text"
        onChange={handleChange}
        placeholder="Let me know your thoughts..."
        ref={textAreaRef}
        rows={1}
        value={value}
        className="rounded-xl border-2 border-light-sapphire px-[min(2vh,2vw)] py-[min(1vh,1vw)] text-xl font-light 
        nm-inset-light-base dark:border-dark-sapphire dark:nm-inset-dark-base"
      />
    </div>
  );
}
