"use client";
import { useState } from "react";

export default function WelcomeMsg() {
  const [useAlliteration, setUseAlliteration] = useState(true);

  const alliteration =
    "Here hosts the humble HTTP home of happily hard-working Harrison. A heuristic hands-on happening, harbouring hearty heat hatched from his head. Hooked? Heed high for hyperlinks.";
  const translation =
    "I created this website to share a little about me and to connect with others who share similar interests. If you have any questions or just want to say kia ora, don’t hesitate to reach out. Thank you for stopping by!";

  return (
    <div>
      <p className="mb-2 whitespace-pre-wrap text-justify text-[2.1vh] font-light leading-[2.5vh]">
        {useAlliteration ? alliteration : translation}
      </p>
      <div className="flex w-full items-end justify-end">
        <button
          onClick={() => setUseAlliteration(!useAlliteration)}
          className="text-[2vh] text-light-blue underline dark:text-dark-blue"
        >
          {useAlliteration
            ? "Translate Alliteration"
            : "Alliterate this message!"}
        </button>
      </div>
    </div>
  );
}
