import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import NavBar from "./_components/navbar/navbar";
import "./globals.css";

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
        <main className="min-w-screen flex min-h-screen flex-col items-stretch overflow-clip bg-light-base dark:bg-dark-base">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
