import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: "VEEVER PRO | Événements d'entreprise à Bordeaux - Marque Employeur",
    template: "%s | VEEVER PRO"
  },
  description: "Veever Pro organise vos événements d'entreprise à Bordeaux : onboarding, cohésion, QVT, célébrations. Des expériences clés en main pour renforcer votre marque employeur.",
  keywords: [
    "événement entreprise Bordeaux",
    "team building Bordeaux", 
    "marque employeur",
    "onboarding entreprise",
    "cohésion équipe",
    "QVT",
    "célébration entreprise",
    "sortie entreprise Bordeaux",
    "événement RH",
    "team building",
    "cohésion d'équipe",
    "bien-être au travail"
  ],
  authors: [{ name: "Veever Pro" }],
  creator: "Veever Pro",
  publisher: "Veever Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://veeverpro.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "VEEVER PRO | Événements d'entreprise à Bordeaux",
    description: "Transformez vos moments collectifs en expériences clés en main pour renforcer votre marque employeur à Bordeaux.",
    url: 'https://veeverpro.fr',
    siteName: 'Veever Pro',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Veever Pro - Événements d\'entreprise à Bordeaux',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "VEEVER PRO | Événements d'entreprise à Bordeaux",
    description: "Transformez vos moments collectifs en expériences clés en main pour renforcer votre marque employeur.",
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};
