import tailwindcss from "@/tailwind.config";
import { cache } from "react";
import { z } from "zod";

const tailwindThemeSchema = z.object({
  rosewater: z.string(),
  flamingo: z.string(),
  pink: z.string(),
  mauve: z.string(),
  red: z.string(),
  maroon: z.string(),
  peach: z.string(),
  yellow: z.string(),
  green: z.string(),
  teal: z.string(),
  sky: z.string(),
  sapphire: z.string(),
  blue: z.string(),
  lavender: z.string(),
  text: z.string(),
  subtext1: z.string(),
  subtext0: z.string(),
  overlay2: z.string(),
  overlay1: z.string(),
  overlay0: z.string(),
  surface2: z.string(),
  surface1: z.string(),
  surface0: z.string(),
  base: z.string(),
  mantle: z.string(),
  crust: z.string(),
});

const tailwindSchema = z.object({
  theme: z.object({
    extend: z.object({
      colors: z.object({
        light: tailwindThemeSchema,
        dark: tailwindThemeSchema,
      }),
    }),
  }),
});

let cached: z.infer<typeof tailwindSchema> | undefined;
export default function TailwindColors() {
  if (!cached) {
    cached = tailwindSchema.parse(tailwindcss);
  }
  return cached.theme.extend.colors;
}
