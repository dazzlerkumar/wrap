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
  title: {
    default: "Deepak Kumar | 2025 Career Wrap",
    template: "%s | Deepak Kumar"
  },
  description: "A retrospective of my engineering journey, projects, and growth in 2025.",
  keywords: ["Software Engineer", "Frontend Developer", "Next.js", "React", "2025 Wrap", "Lucknow", "India", "WidgetLab"],
  authors: [{ name: "Deepak Kumar" }],
  creator: "Deepak Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wrap25.vercel.app/",
    siteName: "Deepak Kumar 2025 Wrap",
    title: "Deepak Kumar | 2025 Career Wrap",
    description: "A retrospective of my engineering journey, projects, and growth in 2025.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Kumar | 2025 Career Wrap",
    description: "A retrospective of my engineering journey, projects, and growth in 2025.",
    creator: "@dazzlerkumar",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#6366f1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
