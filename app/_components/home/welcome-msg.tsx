"use client";
import { useState } from "react";

export default function WelcomeMsg() {
  const [useAlliteration, setUseAlliteration] = useState(true);

  const alliteration =
    "Welcome to the humble HTTP home of happily hardworking " +
    " Harrison. A heuristic hands-on happening, hosting hearty heat" +
    " hatched from his head. Hooked? Heed high for hyperlinks.\n\n";

  const translation =
    "I created this website to share a little about me and to" +
    " connect with others who share similar interests. If you have" +
    " any questions or just want to say Kia Ora, don’t hesitate" +
    " to reach out. Thank you for stopping by!";

  return (
    <div>
      <p className="mb-2 w-[30rem] whitespace-pre-wrap text-justify text-2xl font-thin">
        {useAlliteration ? alliteration : translation}
      </p>
      <div className="flex w-full items-end justify-end">
        <button
          onClick={() => setUseAlliteration(!useAlliteration)}
          className="text-light-blue underline dark:text-dark-blue"
        >
          Translate Alliteration
        </button>
      </div>
    </div>
  );
}
