import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Événements d'entreprise à Bordeaux | Team building & Marque Employeur | Veever Pro",
  description: "Veever Pro organise vos événements d'entreprise à Bordeaux: onboarding, cohésion, QVT, célébrations. Des expériences locales clés en main qui renforcent votre marque employeur.",
  keywords: "team building Bordeaux, événements d'entreprise Bordeaux, sortie entreprise Bordeaux, renforcer la marque employeur, onboarding collaborateurs, journée QVT, cohésion équipe, célébration entreprise",
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
        
        {/* Schema JSON-LD pour SEO local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Veever Pro - Événements d'entreprise à Bordeaux",
              "areaServed": "Bordeaux, Métropole de Bordeaux",
              "serviceType": ["Team building", "Onboarding", "Célébration", "QVT"],
              "provider": {
                "@type": "LocalBusiness",
                "name": "Veever",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Bordeaux",
                  "addressCountry": "FR"
                }
              }
            })
          }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased font-inter">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
} 