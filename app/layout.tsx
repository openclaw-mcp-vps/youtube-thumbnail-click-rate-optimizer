import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ThumbnailCTR – A/B Test YouTube Thumbnails to Maximize Click Rates",
  description: "Rotate different thumbnails for the same video and track which gets the highest CTR. Built for YouTube creators and agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="24532184-f4ae-4c38-8479-6aa4ddb665fe"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
