import type { Metadata } from "next";
import { Geist, Playfair_Display, Work_Sans } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-label",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roots of Grace - A Memoir by Dawit Gebremichael Habte",
  description:
    "A memoir by Dawit Gebremichael Habte about family, community, and the untold story of Eritrea.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
        className={`${geist.variable} ${playfair.variable} ${workSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
