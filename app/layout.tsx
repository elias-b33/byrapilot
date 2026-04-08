import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://byrapilot.se"),
  title: {
    default: "ByråPilot | Automation för redovisnings- och lönebyråer",
    template: "%s | ByråPilot",
  },
  description:
    "Minska intern admin, jaga in underlag snabbare och få bättre ordning på kundkommunikationen. ByråPilot hjälper redovisnings- och lönebyråer med trygg automation, AI-sammanfattningar och automatiska påminnelser — utan systembyten.",
  keywords: [
    "automation redovisningsbyrå",
    "automation lönebyrå",
    "byråautomation",
    "minska admin byrå",
    "AI redovisning",
    "automatiska påminnelser byrå",
    "digitalisering redovisningsbyrå",
    "effektivisera byrå",
    "onboarding kunder byrå",
    "intake flöde byrå",
    "ByråPilot",
    "byrapilot",
    "redovisningsbyrå automation Sverige",
    "lönebyrå effektivisering",
    "minska manuell administration",
    "AI-stöd för byråer",
    "automatisera kundkommunikation",
    "underlag påminnelser automation",
  ],
  authors: [{ name: "ByråPilot" }],
  creator: "ByråPilot",
  publisher: "ByråPilot",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://byrapilot.se",
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://byrapilot.se",
    siteName: "ByråPilot",
    title: "ByråPilot | Mindre admin. Bättre byråflöde.",
    description:
      "Vi hjälper redovisnings- och lönebyråer att minska intern admin, jaga in underlag snabbare och skapa tydligare flöden med trygg automation och AI-stöd.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ByråPilot | Automation för redovisnings- och lönebyråer",
    description:
      "Minska intern admin och få bättre ordning på kundkommunikationen med trygg automation och AI-stöd.",
  },
  category: "technology",
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
