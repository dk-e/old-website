import "./globals.css";
import { inter } from "./fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>zurly.me</title>
        <meta itemProp="thumbnailUrl" content="/logo.png" />
        <meta itemProp="image" content="/logo.png" />
        <meta itemProp="imageUrl" content="/logo.png" />
      </head>
      <body className={`${inter.className} bg-zinc-900 text-zinc-300`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
