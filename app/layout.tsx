import "./globals.css";
import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import NavBar from "./components/navbar";

const font = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About | Harrion Cook",
  description: "A CV and blog developed by Harrison Cook",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main className="flex h-screen w-screen flex-col items-stretch bg-light-base dark:bg-dark-base">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
