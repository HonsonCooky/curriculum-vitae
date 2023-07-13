"use client";

import tailwindConfigJs from "../../tailwind.config.js";
import { z } from "zod";
import { useEffect, useState } from "react";

const tailwindSchema = z.object({
  theme: z
    .object({
      extend: z
        .object({
          colors: z.object({ light: z.any(), dark: z.any() }).required(),
        })
        .required(),
    })
    .required(),
});

export default function CurvedLine(params: { className: string }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", ({ matches }) => {
        setIsDarkMode(matches);
      });
  });

  const localTheme = isDarkMode ? "dark" : "light";
  const tailwindConf = tailwindSchema.parse(tailwindConfigJs);
  const themes = tailwindConf.theme.extend.colors;
  const darkColA = themes[localTheme]["lavender"];
  const darkColB = themes[localTheme]["base"];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="current"
      viewBox="0 0 100 100"
      className={`${params.className}`}
    >
      <defs>
        <linearGradient id="curvedGradient" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor={darkColA} />
          <stop offset="100%" stopColor={darkColB} />
        </linearGradient>
      </defs>
      <path
        d="M 0 0 Q 100 50 20 100 Q 90 50 0 10 Z"
        fill="url(#curvedGradient)"
      />
    </svg>
  );
}
