"use client";

import { useEffect, useState } from "react";
import getColors from "@/assets/tailwind-colors";

export default function PCIdeasIcon(params: { className?: string }) {
  const [isDark, setIsDark] = useState<boolean>();

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        setIsDark(event.matches);
      });
    setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  let colors = getColors().theme.extend.colors[isDark ? "dark" : "light"];

  return (
    <svg
      id="ePQt7BJnOTK1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      className={params.className}
    >
      <defs>
        <filter id="f1" x="0" y="0">
          <feGaussianBlur in="SourceGraphic" stdDeviation=".2" />
        </filter>
      </defs>
      <g>
        <path
          id="ePQt7BJnOTK3"
          d="M71.998978,80c0-3,6.887199-9,6.5-19-.329053-8.498302-18.275775-17-27.275111-21s-2.224889-22-11.224889-30-35.249157-2-48.249157-6q0,67.865337,0,84.693114c0,6.635189,24.410837-7.773843,32.91051,0s23.704454,3.617132,26.563536-2.879949s14.275111-3.813165,18.775111-3.813165s2,1,2-2Z"
          transform="translate(2.250179 0)"
          fill={colors.overlay0}
          filter="url(#f1)"
        />

        <g>
          <ellipse
            rx="4.5"
            ry="0.860802"
            transform="translate(80.5 93.139198)"
            fill={colors.yellow}
            strokeWidth="0"
          />
          <rect
            width="1"
            height="4.139198"
            rx="0.5"
            ry="0.5"
            transform="translate(80 89)"
            fill={colors.yellow}
            stroke={colors.base}
            strokeWidth="0.5"
            strokeLinejoin="miter"
          />
          <rect
            width="21"
            height="9"
            rx="0"
            ry="0"
            transform="translate(70 80)"
            fill={colors.base}
            stroke={colors.yellow}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="-4.25"
            y1="0"
            x2="4.25"
            y2="0"
            transform="translate(76.25 83)"
            fill="none"
            stroke={colors.yellow}
            strokeWidth="0.5"
            strokeLinecap="round"
          />
          <line
            x1="-4.5"
            y1="0"
            x2="4.5"
            y2="0"
            transform="translate(78.5 84)"
            fill="none"
            stroke={colors.yellow}
            strokeWidth="0.5"
            strokeLinecap="round"
          />
          <line
            x1="-3"
            y1="0"
            x2="3"
            y2="0"
            transform="translate(77 85)"
            fill="none"
            stroke={colors.yellow}
            strokeWidth="0.5"
            strokeLinecap="round"
          />
          <line
            x1="-1.5"
            y1="0"
            x2="1.5"
            y2="0"
            transform="translate(73.5 86)"
            fill="none"
            stroke={colors.yellow}
            strokeWidth="0.5"
            strokeLinecap="round"
          />
          <line
            x1="-2.5"
            y1="0"
            x2="2.5"
            y2="0"
            transform="translate(74.5 82)"
            fill="none"
            stroke={colors.yellow}
            strokeWidth="0.5"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  );
}
