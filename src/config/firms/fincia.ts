import { FirmConfig } from "@/types/firm";

export const finciaConfig: FirmConfig = {
  name: "Fincia Finance Consulting",
  shortName: "Fincia.",
  brandMonogram: "F.",
  slug: "fincia",
  registration: {
    legalForm: "Finance Consulting & Investment Advisory",
    establishedYear: 2001,
  },
  logo: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/logo-fincia-dark.png",
  contact: {
    phone: "+ 1800-200-123",
    email: "info@fincia-finance.com",
  },
  locations: {
    headquarters: {
      label: "Global Headquarters",
      street: "1200 Wall Street",
      city: "New York",
      state: "NY",
      country: "United States",
    },
  },
  colors: {
    dark: "#063633",
    accent: "#c8f8a9",
    accentHover: "#b6f592",
    surface: "#f2f5f1",
    cardBg: "#ffffff",
    muted: "#6c6c6c",
    border: "#e5e7eb",
  },
  hero: {
    tagline: "Confident planning",
    headline: "Where Financial Goals Turn Into Reality",
    subtext:
      "We offer deeply personalized approaches, providing strategic advice, seamless wealth management, and exclusive growth advisory.",
    primaryCta: {
      label: "Explore Services",
      href: "#services",
    },
    secondaryCta: {
      label: "Get Consultation",
      href: "#contact",
    },
    bgImage: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/Slider1-home1.jpg",
  },
  credibilityMetrics: [
    { value: "$75M+", label: "Investment managed", detail: "Global assets under supervision" },
    { value: "15+", label: "Years experience", detail: "Industry veterans & partners" },
    { value: "98%", label: "Client retention", detail: "Multi-generational trust" },
    { value: "1,500+", label: "Projects completed", detail: "Corporate & private advisory" },
  ],
  founder: {
    name: "Austin Parker",
    title: "Chief Investment Officer & Managing Director",
    credentials: "CFA, MBA",
    pedigreeBadge: "25+ Years Global Asset Leadership",
    summary:
      "Committed to your financial growth in every step of the way. Providing objective and customized advice, seamless wealth management and exclusive access to private investments.",
    image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/about-section-home1.jpg",
  },
  services: [
    {
      id: "wealth-management",
      title: "Wealth management",
      tagline: "Preservation & Growth",
      description:
        "Comprehensive wealth preservation and growth strategies tailored for private business owners and family estates.",
      keyDeliverables: [
        "Diversified portfolios for growth",
        "Personalized wealth strategies",
        "Regular performance checks",
        "Quarterly asset rebalancing",
      ],
      icon: "ShieldCheck",
      image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/services-home1-img1.jpg",
    },
    {
      id: "corporate-consulting",
      title: "Corporate consulting",
      tagline: "Strategic Clarity",
      description:
        "End-to-end strategic advisory to unlock operational efficiencies and scalable corporate growth.",
      keyDeliverables: [
        "Operational clarity through advisory",
        "End-to-end support functionality",
        "Strategic business planning",
        "Executive leadership roadmaps",
      ],
      icon: "Briefcase",
      image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/services-home1-img2.jpg",
    },
    {
      id: "investment-planning",
      title: "Investment planning",
      tagline: "Capital Optimization",
      description:
        "Disciplined, risk-adjusted capital allocation across global fixed income, equities, and private equity.",
      keyDeliverables: [
        "Strategic investment portfolio growth",
        "Customized planning for goals",
        "Track progress regularly",
        "Risk-adjusted allocation benchmarks",
      ],
      icon: "BarChart3",
      image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/services-home1-img3.jpg",
    },
    {
      id: "business-growth",
      title: "Business growth",
      tagline: "Sustainable Scalability",
      description:
        "Market expansion, capital restructuring, and M&A advisory for ambitious medium-market firms.",
      keyDeliverables: [
        "Tailored plans for consistent growth",
        "Strategies to boost your business",
        "Track results efficiently",
        "Capital readiness audits",
      ],
      icon: "TrendingUp",
      image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/services-home1-img4.jpg",
    },
  ],
  industryFocus: [
    "Corporate & Institutional Finance",
    "Private Equity & Asset Management",
    "Commercial Real Estate",
    "Tech & Life Sciences",
    "Cross-Border Trade & Logistics",
  ],
  footer: {
    legalNotice:
      "Fincia Finance is an independent advisory practice. All investment management services are strictly governed by fiduciary standards.",
    copyright: "© 2026 Fincia Finance. All Rights Reserved.",
  },
};
