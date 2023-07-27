"use client";

import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function DownloadBtn() {
  async function download() {
    const response = await fetch("HarrisonCooksCV.pdf");
    const blob = await response.blob();
    window.open(window.URL.createObjectURL(blob));
  }

  return (
    <button
      className="bg-light-overlay0 hover:bg-light-mauve dark:bg-dark-overlay0 hover:dark:bg-dark-mauve rounded"
      onClick={download}
    >
      {/* STROKE */}
      <div className="h-full w-full stroke-light-text dark:stroke-dark-text hover:stroke-light-crust hover:dark:stroke-dark-crust">
        {/* TEXT */}
        <div className="h-full w-full text-light-text dark:text-dark-text hover:text-light-crust hover:dark:text-dark-crust">
          {/* ALIGNMENT */}
          <div className=" h-full w-full  inline-flex items-center py-2 px-4">
            <ArrowDownTrayIcon
              className={`h-6 mr-2 stroke-2`}
            ></ArrowDownTrayIcon>
            <span className="text-2xl">Download CV</span>
          </div>
        </div>
      </div>
    </button>
  );
}
