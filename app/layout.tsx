import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mellisa Goodwin | Actress",
  description: "Official website of Mellisa Goodwin - Actress known for Law & Order, Law & Order: SVU, and We Never Sleep. Los Angeles based talent.",
  keywords: ["Mellisa Goodwin", "actress", "Law and Order", "SVU", "Los Angeles", "film", "television"],
  openGraph: {
    title: "Mellisa Goodwin | Actress",
    description: "Official website of Mellisa Goodwin - Actress known for Law & Order, Law & Order: SVU, and We Never Sleep.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
