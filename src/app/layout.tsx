import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Veever - Team Building & Séminaires à Bordeaux | Réservation en 3 clics",
  description: "Organisez vos team buildings et séminaires à Bordeaux en petits groupes. Plateforme digitale simple, prestataires locaux authentiques, réservation instantanée.",
  keywords: "team building Bordeaux, séminaire Bordeaux, événement entreprise, team building petits groupes, réservation team building, activités corporate Bordeaux",
  openGraph: {
    title: "Veever - Réinventez vos team buildings à Bordeaux",
    description: "La solution digitale pour créer des moments de cohésion authentiques, réservables en 3 clics.",
    type: "website",
    locale: "fr_FR",
    siteName: "Veever"
  },
  twitter: {
    card: "summary_large_image",
    title: "Veever - Team Building & Séminaires à Bordeaux",
    description: "Organisez vos team buildings en petits groupes avec des prestataires bordelais authentiques."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
} 