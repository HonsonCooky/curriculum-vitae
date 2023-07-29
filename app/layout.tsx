import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import { Suspense } from "react";
import Navigation from "./_components/navbar/nav";
import "./globals.css";
import Loading from "./loading";

const font = Fira_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

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
        <main className="flex min-h-screen w-screen bg-light-base dark:bg-dark-base">
          <Navigation />
          <Suspense fallback={<Loading />} />
          {children}
        </main>
      </body>
    </html>
  );
}
