"use client";
import twConfig from "@/app/_utils/tailwind-config";
import { z } from "zod";

const StateSchema = z.enum(["none", "ascend", "descend"]);
type StateType = z.infer<typeof StateSchema>;

export default function SortArrows(params: {
  className?: React.ComponentProps<"div">["className"];
  state?: StateType;
}) {
  const state = params.state
    ? StateSchema.parse(params.state)
    : StateSchema.enum.none;
  const mode =
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const offColor = twConfig.theme.extend.colors[mode].text;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={params.className}
    >
      <path
        stroke={state == StateSchema.enum.ascend ? "current" : offColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 3 7.5 L 7.5 3 M 7.5 3 L 12 7.5 M 7.5 3 V 16.5 "
      />
      <path
        stroke={state == StateSchema.enum.descend ? "current" : offColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 21 16.5 L 16.5 21 M 16.5 21 L 12 16.5 M 16.5 21 V 7.5"
      />
    </svg>
  );
}
