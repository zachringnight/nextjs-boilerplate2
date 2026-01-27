import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mellisa Goodwin | Actress - Los Angeles",
  description: "Official website of Mellisa Goodwin - Professional actress based in Los Angeles. Known for Law & Order, Law & Order: SVU, We Never Sleep. Available for film, television, and commercial work.",
  keywords: ["Mellisa Goodwin", "actress", "Los Angeles actress", "Law and Order", "SVU", "film", "television", "casting", "talent"],
  authors: [{ name: "Mellisa Goodwin" }],
  openGraph: {
    title: "Mellisa Goodwin | Actress",
    description: "Professional actress based in Los Angeles. Known for Law & Order, Law & Order: SVU, and We Never Sleep.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mellisa Goodwin | Actress",
    description: "Professional actress based in Los Angeles.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
