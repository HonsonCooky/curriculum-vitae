"use client";

import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { MouseEventHandler, ReactNode } from "react";
import GitHubIcon from "./icons/github";
import LinkedInIcon from "./icons/linkedin";
import RedditIcon from "./icons/reddit";
import StackOverflowIcon from "./icons/stackoverflow";

function LinkBtn(params: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  children: ReactNode;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileFocus={{ scale: 1.0 }}
      whileHover={{ scale: 1.05 }}
      onClick={params.onClick}
      className="flex flex-row items-center gap-4 rounded-full fill-light-text 
      px-[min(2vh,2vw)] py-[min(0.5vh,0.5vw)] nm-flat-light-base-sm hover:fill-light-mauve 
      hover:text-light-mauve dark:fill-dark-text dark:nm-flat-dark-base-sm dark:hover:fill-dark-mauve 
      dark:hover:text-dark-mauve"
    >
      {params.children}
    </motion.button>
  );
}

export default function LinkSection() {
  async function downloadCv() {
    const response = await fetch("HarrisonCooksCV.pdf");
    const blob = await response.blob();
    window.open(window.URL.createObjectURL(blob));
  }

  return (
    <div className="my-[min(2vh,2vw)]">
      <h3 className="mb-[min(2vh,2vw)] text-4xl font-bold">More...</h3>
      <div className="flex flex-wrap gap-[min(2vh,2vw)]">
        <LinkBtn onClick={() => window.open("https://github.com/HonsonCooky")}>
          <GitHubIcon className="h-[2rem]" />
          <p className="text-xl">GitHub</p>
        </LinkBtn>
        <LinkBtn
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/harrison-cook-software-engineer/"
            )
          }
        >
          <LinkedInIcon className="h-[2rem]" />
          <p className="text-xl">LinkedIn</p>
        </LinkBtn>
        <LinkBtn
          onClick={() => window.open("https://www.reddit.com/user/HonsonCooky")}
        >
          <RedditIcon className="h-[2rem]" />
          <p className="text-xl">Reddit</p>
        </LinkBtn>
        <LinkBtn
          onClick={() =>
            window.open(
              "https://stackoverflow.com/users/19093612/harrison-cook"
            )
          }
        >
          <StackOverflowIcon className="h-[2rem]" />
          <p className="text-xl">Stack Overflow</p>
        </LinkBtn>
        <LinkBtn onClick={downloadCv}>
          <ArrowDownTrayIcon className="h-[2rem]" />
          <p className="text-xl">Download CV</p>
        </LinkBtn>
      </div>
    </div>
  );
}
