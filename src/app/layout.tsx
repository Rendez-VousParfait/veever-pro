import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Valentin Levraud | Sound Designer & Audio Engineer",
  description: "Valentin Levraud, Sound Designer & Audio Engineer. Créateur d'expériences sonores immersives et d'identités sonores uniques.",
  keywords: "sound design, audio engineer, sound designer, audio, musique, cinéma, télévision, animation, identité sonore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className="antialiased font-inter">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
} 