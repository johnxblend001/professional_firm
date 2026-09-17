export const siteConfig = {
  name: "Fincia",
  title: "Finance Consulting WordPress Theme – Best Fincia Business Theme",
  description:
    "Discover Fincia, a modern finance consulting platform built for advisors, agencies, and corporate businesses with Elementor, SEO optimization, and responsive design.",
  url: "https://fincia-demo.themetechmount.com/home-1/",
  ogImage: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/about-section-home1.jpg",
  telephone: "+1800-200-123",
  email: "maininfo@business.com",
  address: {
    street: "774 Satterfield Motorway",
    city: "New Antonetta",
    region: "BC",
    postalCode: "K3L6",
    country: "US",
  },
};

export function generateStructuredData() {
  const financialServiceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${siteConfig.url}#financial-service`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/logo-fincia-dark.png",
    image: siteConfig.ogImage,
    description: siteConfig.description,
    telephone: siteConfig.telephone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
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
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "08:00",
        closes: "18:30",
      },
    ],
    priceRange: "$$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "6800",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does the consultation process work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Find detailed answers about our plans, financial advisory process, and how we help you achieve your goals.",
        },
      },
      {
        "@type": "Question",
        name: "Is my financial information kept confidential?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Your financial information is kept strictly confidential and protected using secure systems and privacy protocols.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with international clients?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we work with international clients on virtual consultations, making it easy to manage finances regardless of location.",
        },
      },
      {
        "@type": "Question",
        name: "How much do your advisory services cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our advisory fees depend on the scope and complexity of the services you need and are structured to reflect the value delivered. All costs are clearly explained, no hidden charges.",
        },
      },
    ],
  };

  return { financialServiceSchema, faqSchema };
}
