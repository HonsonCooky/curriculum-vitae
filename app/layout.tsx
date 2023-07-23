import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import NavBar from "./_components/navbar/navbar-lg";
import "./globals.css";

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
      <body
        className={`text-light-text dark:text-dark-text  ${font.className}`}
      >
        <main className="flex min-h-screen min-w-screen flex-col items-stretch bg-light-base dark:bg-dark-base">
          <div className="invisible lg:visible">
            <NavBar />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
