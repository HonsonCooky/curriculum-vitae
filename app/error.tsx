"use client";

import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="w-[65vw] break-words">
        <div className="flex flex-col py-[min(2vh,2vw)]">
          <h1 className="text-8xl font-bold text-light-red dark:text-dark-red">
            Oh No!
          </h1>
          <h2 className="text-6xl">Something went wrong</h2>
        </div>
        <div className="flex h-full items-center justify-center">
          <button
            className="flex flex-row items-center gap-4 rounded-full fill-light-text 
          px-[min(2vh,2vw)] py-[min(0.5vh,0.5vw)] nm-flat-light-base-sm hover:scale-[1.1] 
          hover:fill-light-mauve hover:text-light-mauve dark:fill-dark-text dark:nm-flat-dark-base-sm 
          dark:hover:fill-dark-mauve dark:hover:text-dark-mauve"
            onClick={() => reset()}
          >
            <ArrowPathIcon className="h-[1.25rem]" />
            <span className="text-xl">Try again</span>
          </button>
        </div>
      </div>
    </div>
  );
}
