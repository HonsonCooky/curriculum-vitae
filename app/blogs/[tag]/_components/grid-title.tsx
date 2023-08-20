"use client";

import { Dispatch } from "react";
import SortArrows, { SortStateType } from "./sort-arrows";

export default function GridTitle(params: {
  colSpan: number;
  title: string;
  sortable?: {
    state: SortStateType;
    setState: Dispatch<SortStateType>;
  };
}) {
  function toggleSort() {
    switch (params.sortable?.state) {
      case "none":
        params.sortable.setState("ascend");
        break;
      case "ascend":
        params.sortable.setState("descend");
        break;
      case "descend":
        params.sortable.setState("none");
        break;
      default:
        throw Error("Unhandled SortStateType");
    }
  }

  if (!params.sortable)
    return (
      <div
        className={`col-span-${params.colSpan} flex h-full flex-row items-center justify-between border-r-2 
        border-r-light-overlay2 px-[min(2vh,2vw)] dark:border-r-dark-overlay2`}
      >
        <h3 className="select-none break-all">{params.title}</h3>
      </div>
    );

  return (
    <a
      onClick={toggleSort}
      className={`col-span-${params.colSpan} flex h-full flex-row items-center justify-between border-r-2 
      border-r-light-overlay2 px-[min(2vh,2vw)] hover:text-light-mauve dark:border-r-dark-overlay2 
      dark:hover:text-dark-mauve`}
    >
      <h3 className="select-none break-all">{params.title}</h3>
      <SortArrows
        className="h-[1rem] min-w-[1rem] stroke-light-red stroke-[min(0.2vh,0.2vw)] xl:h-[1.5rem] xl:min-w-[1.5rem]"
        state={params.sortable.state}
      />
    </a>
  );
}
