export function buildRoofingContractorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: "Couverture Vasseur",
    image: "https://www.couverture-vasseur.fr/logo-couverture-vasseur%20(1).png",
    url: "https://www.couverture-vasseur.fr",
    telephone: "+33241873412",
    description:
      "Couvreur à Angers spécialisé dans la réfection de toiture en ardoise naturelle, la zinguerie, l’isolation de combles et la gestion des interventions urgentes.",
    areaServed: [
      { "@type": "City", name: "Angers" },
      { "@type": "AdministrativeArea", name: "Maine-et-Loire" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Angers",
      addressRegion: "Maine-et-Loire",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "47.478419",
      longitude: "-0.563166",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prestations de couverture",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Réfection complète de toiture" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Réparation et recherche de fuite" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Couverture ardoise" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Zinguerie et gouttières" } },
      ],
    },
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Réfection de toiture en ardoise à Angers" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Traitement hydrofuge et démoussage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Isolation de combles" } },
    ],
  };
}

export function buildFAQSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
