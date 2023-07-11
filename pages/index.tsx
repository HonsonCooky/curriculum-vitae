import NavBar from "@/components/navbar";
import { Oswald } from "next/font/google";

const font = Oswald({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className={`flex min-h-full min-w-full ${font.className}`}>
      <div className="absolute h-full w-full bg-light-base dark:bg-dark-base">
        <NavBar />
      </div>
    </main>
  );
}
