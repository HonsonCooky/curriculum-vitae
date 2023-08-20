"use client";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function BackBtn() {
  const router = useRouter();
  return (
    <div
      onClick={router.back}
      className="sticky top-[min(10vh,10vw)] hidden w-full px-[min(10vh,10vw)] xl:flex"
    >
      <div
        className="group flex w-min translate-x-[-50%] flex-row items-center rounded-full p-[min(1vh,1vw)] 
        nm-flat-light-base hover:scale-[1.1] dark:nm-flat-dark-base"
      >
        <ArrowSmallLeftIcon
          className="h-[2.5rem] stroke-light-text group-hover:stroke-light-mauve dark:stroke-dark-text 
          dark:group-hover:stroke-dark-mauve"
        />
      </div>
    </div>
  );
}
