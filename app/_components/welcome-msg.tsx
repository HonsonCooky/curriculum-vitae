"use client";
import { useState } from "react";

export default function WelcomeMsg() {
  const [useAlliteration, setUseAlliteration] = useState(true);

  const alliteration =
    "Here hosts the humble HTTP home of happily hard-working Harrison. A heuristic hands-on happening, harbouring hearty heat hatched from his head. Hooked? Heed high for hyperlinks.";
  const translation =
    "I created this website to share a little about me and to connect with others who share similar interests. If you have any questions or just want to say Kia Ora, don’t hesitate to reach out. Thank you for stopping by!";

  return (
    <div>
      <p className="mb-[2vh] whitespace-pre-wrap text-justify text-3xl font-light">
        {useAlliteration ? alliteration : translation}
      </p>
      <div className="flex w-full items-end justify-end">
        <button
          onClick={() => setUseAlliteration(!useAlliteration)}
          className="rounded-lg p-[min(1vh,1vw)] text-2xl text-light-mauve nm-flat-light-base-sm hover:scale-[1.05] dark:text-dark-mauve dark:nm-flat-dark-base-sm"
        >
          {useAlliteration
            ? "Translate Alliteration"
            : "Alliterate this message!"}
        </button>
      </div>
    </div>
  );
}
