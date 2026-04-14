import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Benjamin Vasseur — Full-Stack Developer",
  description:
    "Full-stack developer with 10+ years of experience, specializing in high-performance rendering and data-intensive web applications.",
  icons: {
    icon: "/favicon.svg",
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
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="b152d8a1-ae1f-4cb5-982b-8641f601a950" />
        {children}
      </body>
    </html>
  );
}
