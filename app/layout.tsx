import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ChatWindow from "@/components/chat/ChatWindow";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sarthi — Your Career Guide",
  description:
    "Sarthi is an India-first career discovery companion for students. Explore careers, exams, colleges, and scholarships tailored to your class, state, and budget.",
  keywords: [
    "career guidance India",
    "Indian scholarships",
    "careers after class 12",
    "NDA NEET JEE",
    "UPSC CA NIFT",
  ],
  authors: [{ name: "Sarthi" }],
  openGraph: {
    title: "Sarthi — Your Career Guide",
    description:
      "India-first career discovery for students — careers, exams, colleges, and scholarships in one place.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-display antialiased bg-sarthi-cream text-sarthi-ink min-h-screen">
        {children}
        <ChatWindow />
      </body>
    </html>
  );
}