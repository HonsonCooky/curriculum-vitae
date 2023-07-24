"use client";

import { createRef } from "react";

export default function GeneratePair(params: {
  className?: React.ComponentProps<"div">["className"];
  title: string;
}) {
  const ref = createRef<HTMLParagraphElement>();
  return {
    ref,
    component: (
      <p className={params.className} ref={ref}>
        {params.title}
      </p>
    ),
  };
}
