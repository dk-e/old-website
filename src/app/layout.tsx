import "./globals.css";
import { inter } from "./fonts";
import { Analytics } from "@vercel/analytics/react";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>zurly.lol &bull; moani.ng</title>
        <meta itemProp="thumbnailUrl" content="/logo.png" />
        <meta itemProp="image" content="/logo.png" />
        <meta itemProp="imageUrl" content="/logo.png" />
      </head>
      <body className={`${inter.className} bg-zinc-900 text-zinc-300`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
