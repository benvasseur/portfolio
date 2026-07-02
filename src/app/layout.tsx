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

const title = "Benjamin Vasseur - Full-Stack Software Engineer";
const description =
  "Full-stack software engineer, 14+ years building REST APIs, microservices, and data-heavy React apps in Node.js and Python for medical and financial clients.";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title,
    description,
  },
  twitter: {
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
        {children}
      </body>
    </html>
  );
}
