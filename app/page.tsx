import { Oswald } from "next/font/google";
import NavBar from "./components/navbar";

const font = Oswald({ subsets: ["latin"] });
export default function Home() {
  return (
    <div>
      <main
        className={`min-h-screen w-screen items-stretch dark:bg-dark-base ${font.className}`}
      >
        <NavBar />
      </main>
    </div>
  );
}
