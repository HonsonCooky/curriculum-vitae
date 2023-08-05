"use client";

import { Dispatch } from "react";
import SortArrows, { SortStateType } from "./sort-arrows";

export default function GridTitle(params: {
  colSpan: number;
  title: string;
  state: SortStateType;
  setState: Dispatch<SortStateType>;
}) {
  function toggleSort() {
    switch (params.state) {
      case "none":
        params.setState("ascend");
        break;
      case "ascend":
        params.setState("descend");
        break;
      case "descend":
        params.setState("none");
        break;
      default:
        throw Error("Unhandled SortStateType");
    }
  }
  return (
    <a
      onClick={toggleSort}
      className={`col-span-${params.colSpan} flex flex-row items-center justify-between border-r-2 border-r-light-overlay2 px-[min(2vh,2vw)] hover:text-light-mauve dark:border-r-dark-overlay2 dark:hover:text-dark-mauve`}
    >
      <h3>{params.title}</h3>
      <SortArrows
        className="h-[min(2.3vh,2.3vw)] stroke-light-red stroke-[min(0.2vh,0.2vw)]"
        state={params.state}
      />
    </a>
  );
}
