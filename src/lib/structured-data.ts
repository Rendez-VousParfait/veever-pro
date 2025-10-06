export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Veever Pro",
  "description": "Veever Pro organise vos événements d'entreprise à Bordeaux : onboarding, cohésion, QVT, célébrations. Des expériences clés en main pour renforcer votre marque employeur.",
  "url": "https://veeverpro.fr",
  "logo": "https://veeverpro.fr/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33-5-56-XX-XX-XX",
    "contactType": "customer service",
    "email": "contact@veeverpro.fr",
    "areaServed": "FR",
    "availableLanguage": "French"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bordeaux",
    "addressCountry": "FR"
  },
  "sameAs": [
    "https://linkedin.com/company/veever-pro",
    "https://instagram.com/veeverpro"
  ],
  "service": [
    {
      "@type": "Service",
      "name": "Événements d'entreprise",
      "description": "Organisation d'événements d'entreprise clés en main à Bordeaux",
      "provider": {
        "@type": "Organization",
        "name": "Veever Pro"
      },
      "areaServed": {
        "@type": "City",
        "name": "Bordeaux"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "Essentiel - Demi-journée",
          "description": "1 activité locale + moment convivial + livret digital",
          "price": "40-70",
          "priceCurrency": "EUR",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "40-70",
            "priceCurrency": "EUR",
            "unitText": "par personne"
          }
        },
        {
          "@type": "Offer",
          "name": "Immersion - Journée complète",
          "description": "2 activités combinées + déjeuner/dîner + livret digital enrichi",
          "price": "100-150",
          "priceCurrency": "EUR",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "100-150",
            "priceCurrency": "EUR",
            "unitText": "par personne"
          }
        },
        {
          "@type": "Offer",
          "name": "Premium - Pack annuel",
          "description": "4 événements par an + planification + livret personnalisé",
          "price": "10000-30000",
          "priceCurrency": "EUR",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "10000-30000",
            "priceCurrency": "EUR",
            "unitText": "par an"
          }
        }
      ]
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "200",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quels types d'événements propose Veever Pro ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous concevons des expériences pour l'onboarding, les célébrations, la cohésion d'équipe et la QVT, adaptées aux PME, startups et collectivités bordelaises."
      }
    },
    {
      "@type": "Question",
      "name": "Comment Veever renforce-t-il la marque employeur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En transformant chaque occasion en expérience authentique, qui crée du lien, de la fierté et un storytelling valorisable en interne et en externe."
      }
    },
    {
      "@type": "Question",
      "name": "Proposez-vous différents formats ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui : demi-journée (Essentiel), journée complète (Immersion), ou pack annuel (Premium)."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on personnaliser un événement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolument. Nous adaptons les activités, le rythme et les attentions selon vos valeurs et vos besoins RH."
      }
    },
    {
      "@type": "Question",
      "name": "À qui s'adresse Veever Pro ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aux PME, startups, ETI et collectivités de Bordeaux et sa région, soucieuses d'engager et fidéliser leurs talents."
      }
    }
  ]
};
