import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { DM_Serif_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const sans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jonathan N. De Jesus | Portfolio",
  description:
    "Portfolio of Jonathan N. De Jesus, a business development and key account leader with 30 years of experience in building materials, project sales, and commercial growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
