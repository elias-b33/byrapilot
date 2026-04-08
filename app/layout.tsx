import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ByråPilot | Automation för redovisnings- och lönebyråer",
  description:
    "Minska intern admin, jaga in underlag snabbare och få bättre ordning på kundkommunikationen med trygg automation och AI-stöd.",
  openGraph: {
    title: "ByråPilot | Automation för redovisnings- och lönebyråer",
    description:
      "Minska intern admin, jaga in underlag snabbare och få bättre ordning på kundkommunikationen med trygg automation och AI-stöd.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
