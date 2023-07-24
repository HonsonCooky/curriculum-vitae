"use client";

import { createRef } from "react";

export default function generatePair(
  title: string,
  className?: React.ComponentProps<"div">["className"]
) {
  const ref = createRef<HTMLParagraphElement>();
  return {
    ref,
    component: (
      <p className={className} ref={ref}>
        {title}
      </p>
    ),
  };
}
