import HomeIcon from "@/assets/home-icon";
import { ImageResponse } from "next/server";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 256,
  height: 256,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    <HomeIcon className="fill-black stroke-light-text dark:stroke-dark-text" />,
    {
      ...size,
    }
  );
}
