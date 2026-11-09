import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Benjamin Vasseur - Senior Full-Stack Software Engineer";
const description =
  "Senior full-stack software engineer, 14+ years building REST APIs, microservices, and data-heavy React apps in Node.js and Python for medical and financial clients.";

export const metadata: Metadata = {
  metadataBase: new URL("https://benjaminvasseur.dev"),
  title,
  description,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Benjamin Vasseur",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="b152d8a1-ae1f-4cb5-982b-8641f601a950" />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
