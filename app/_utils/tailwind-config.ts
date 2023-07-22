import tailwindCustom from "@/tailwind.config";
import { merge } from "lodash";
import tailwindDefaults from "tailwindcss/defaultConfig";
import { z } from "zod";

// Custom Colors in tsconfig: Theme = Catppucin
const tailwindThemeModeSchema = z.object({
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

// Only 'used' components exist here
// Further reading if needed: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js
const tailwindSchema = z.object({
  theme: z.object({
    fontSize: z.object({
      xs: z.tuple([z.string(), z.object({ lineHeight: z.string() })]),
      sm: z.tuple([z.string(), z.object({ lineHeight: z.string() })]),
      base: z.tuple([z.string(), z.object({ lineHeight: z.string() })]),
      lg: z.tuple([z.string(), z.object({ lineHeight: z.string() })]),
      xl: z.tuple([z.string(), z.object({ lineHeight: z.string() })]),
      "2xl": z.tuple([z.string(), z.object({ lineHeight: z.string() })]),
      "3xl": z.tuple([z.string(), z.object({ lineHeight: z.string() })]),
      "4xl": z.tuple([z.string(), z.object({ lineHeight: z.string() })]),
      "5xl": z.tuple([z.string(), z.object({ lineHeight: z.string() })]),
      "6xl": z.tuple([z.string(), z.object({ lineHeight: z.string() })]),
      "7xl": z.tuple([z.string(), z.object({ lineHeight: z.string() })]),
      "8xl": z.tuple([z.string(), z.object({ lineHeight: z.string() })]),
      "9xl": z.tuple([z.string(), z.object({ lineHeight: z.string() })]),
    }),
    extend: z.object({
      colors: z.object({
        light: tailwindThemeModeSchema,
        dark: tailwindThemeModeSchema,
      }),
    }),
  }),
});

const tailwindJson = merge(tailwindDefaults, tailwindCustom);
const twConfig = tailwindSchema.parse(tailwindJson);
export default twConfig;
