import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mille880.github.io"),
  title: "Tommy Miller — AI, creativity & building in public",
  description:
    "Tommy Miller's home for exploring practical AI, creative technology, and a return to video storytelling.",
  openGraph: {
    title: "Tommy Miller — AI, creativity & building in public",
    description:
      "Exploring practical AI, creative technology, and a return to video storytelling.",
    url: "https://mille880.github.io",
    siteName: "Tommy Miller",
    images: [{ url: "/og.png", width: 1734, height: 907 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tommy Miller — AI, creativity & building in public",
    description:
      "Exploring practical AI, creative technology, and a return to video storytelling.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
