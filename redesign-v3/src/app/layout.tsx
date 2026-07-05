import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "True North Automation | AI Systems for Atlantic Canadian Businesses",
  description:
    "We build AI systems that handle calls, content, leads, and reviews for Atlantic Canadian businesses — so you can focus on the work that pays.",
  keywords: [
    "AI automation",
    "Atlantic Canada",
    "business automation",
    "AI call response",
    "review management",
    "lead follow-up",
  ],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <Script
          src="https://ai-media-agent.vercel.app/api/embed/capture"
          data-target-project-id="a1b2c3d4-e5f6-7890-abcd-ef1234567890"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
