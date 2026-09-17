import { FirmConfig } from "@/types/firm";

export const advisoryConfig: FirmConfig = {
  name: "Apex Growth Partners & Advisory",
  shortName: "Apex Advisory",
  brandMonogram: "A.",
  slug: "advisory",
  archetype: "advisory",
  taglineBadge: "M&A, Private Wealth & Growth Advisory",
  registration: {
    legalForm: "Strategic Corporate Consulting & Investment Advisory",
    establishedYear: 2008,
  },
  logo: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/logo-fincia-dark.png",
  contact: {
    phone: "+60 3-2788 8900",
    phoneSecondary: "+60 12-389 7721",
    email: "advisory@apexgrowth.my",
    whatsapp: "+60 12-389 7721",
  },
  locations: {
    headquarters: {
      label: "Kuala Lumpur Flagship Office",
      suite: "Level 38, Menara Ilham",
      street: "No. 8, Jalan Binjai, KLCC",
      postcode: "50450",
      city: "Kuala Lumpur",
      state: "Wilayah Persekutuan",
      country: "Malaysia",
    },
    branch: {
      label: "Regional Advisory Hub",
      firmName: "Apex Capital Singapore Pte. Ltd.",
      city: "Marina Bay Financial Centre",
      state: "Tower 2",
      country: "Singapore",
    },
  },
  colors: {
    dark: "#063633",        // Deep Emerald
    accent: "#c8f8a9",      // Vibrant Accent Lime
    accentHover: "#b6f592", // Light Lime Glow
    surface: "#f2f5f1",     // Soft Sage Surface
    cardBg: "#ffffff",
    muted: "#6c6c6c",
    border: "#e5e7eb",
  },
  hero: {
    tagline: "High-Impact Corporate Advisory",
    headline: "Where Strategic Ambitions Accelerate Into Enterprise Scale",
    subtext:
      "We partner with high-growth Malaysian founders, family offices, and mid-market enterprises—delivering cross-border M&A advisory, capital structuring, and private wealth stewardship.",
    primaryCta: {
      label: "Explore Advisory Mandates",
      href: "#services",
    },
    secondaryCta: {
      label: "Schedule Private Consultation",
      href: "#contact",
    },
    bgImage: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/Slider1-home1.jpg",
  },
  credibilityMetrics: [
    { value: "RM380M+", label: "Capital Advised", detail: "Active corporate deals & wealth portfolios" },
    { value: "18+ Years", label: "Market Leadership", detail: "Ex-tier-1 investment bankers & strategists" },
    { value: "98.6%", label: "Client Retention", detail: "Multi-year retainers across ASEAN" },
    { value: "450+", label: "Completed Mandates", detail: "Corporate restructurings & growth financings" },
  ],
  founder: {
    name: "Austin Parker",
    title: "Chief Investment Officer & Managing Partner",
    credentials: "CFA, MBA (Wharton)",
    pedigreeBadge: "22+ Years Cross-Border Capital & Advisory Leadership",
    summary:
      "Former Head of Corporate Strategy at regional tier-1 investment bank. Architect of 40+ ASEAN mergers, acquisitions, and family office restructurings totaling over RM2.4 billion in asset transfers.",
    image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/about-section-home1.jpg",
  },
  advisors: [
    {
      id: "austin-parker",
      name: "Austin Parker",
      position: "Managing Partner & CIO",
      credentials: "CFA, MBA",
      specialty: "Capital Allocation & M&A",
      image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/team-2-413x480.jpg",
    },
    {
      id: "elena-vance",
      name: "Elena Vance",
      position: "Partner, M&A & Private Equity",
      credentials: "BFin, CA",
      specialty: "Cross-Border Transactions",
      image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/team-1-413x480.jpg",
    },
    {
      id: "marcus-lim",
      name: "Marcus Lim",
      position: "Executive Director, Debt & Equity",
      credentials: "FCCA, CFA",
      specialty: "Syndicated Financing",
      image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/team-4-413x480.jpg",
    },
    {
      id: "melody-turner",
      name: "Melody Turner",
      position: "Head of Family Office Services",
      credentials: "TEP, CFP",
      specialty: "Wealth Preservation & Succession",
      image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/team-5-413x480.jpg",
    },
    {
      id: "julian-carter",
      name: "Julian Carter",
      position: "Audit & Assurance Director",
      credentials: "C.A.(M), CPA",
      specialty: "Due Diligence & Valuation",
      image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/team-3-413x480.jpg",
    },
    {
      id: "olivio-bennett",
      name: "Olivio Bennett",
      position: "Asset Strategy Lead",
      credentials: "MSc Finance",
      specialty: "Portfolio Modeling",
      image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/team-6-413x480.jpg",
    },
  ],
  services: [
    {
      id: "ma-capital-advisory",
      title: "M&A & Strategic Capital Advisory",
      tagline: "Enterprise Value Acceleration",
      description:
        "Comprehensive sell-side and buy-side representation, commercial due diligence, and capital structuring for mid-market Malaysian growth enterprises.",
      keyDeliverables: [
        "Confidential valuation and divestment memoranda",
        "Target screening and cross-border buyer matchmaking",
        "Negotiation strategy and definitive transaction documentation",
        "Post-merger integration governance frameworks",
      ],
      icon: "TrendingUp",
      image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/services-home1-img2.jpg",
    },
    {
      id: "private-wealth-family-office",
      title: "Private Wealth & Family Office",
      tagline: "Preservation Across Generations",
      description:
        "Fiduciary wealth governance, bespoke family constitution drafting, and discretionary portfolio management for prominent business owners.",
      keyDeliverables: [
        "Multi-jurisdictional asset protection trust structures",
        "Risk-adjusted global private equity & debt allocations",
        "Generational succession roadmaps & family councils",
        "Quarterly macro strategy briefings & performance reviews",
      ],
      icon: "ShieldCheck",
      image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/services-home1-img1.jpg",
    },
    {
      id: "corporate-transformation",
      title: "Corporate Turnaround & Restructuring",
      tagline: "Operational & Balance Sheet Resilience",
      description:
        "Senior interim financial guidance, working capital release, and stakeholder debt reorganization for distressed and transitioning businesses.",
      keyDeliverables: [
        "13-week rolling liquidity stress testing",
        "Consortium banking negotiation & standstill covenants",
        "Division-level unit economic optimization",
        "Balance sheet recapitalization roadmaps",
      ],
      icon: "BarChart3",
      image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/services-home1-img3.jpg",
    },
    {
      id: "business-growth",
      title: "Venture Expansion & Market Scaling",
      tagline: "Regional ASEAN Footprint",
      description:
        "Strategic market entry, regulatory licensing support, and cross-border holding company setup across Singapore, Malaysia, and Indonesia.",
      keyDeliverables: [
        "Bespoke market entry financial feasibility models",
        "Transfer pricing & double tax treaty structuring",
        "Executive management hiring & incentive pool design",
        "Series B/C growth financing readiness audits",
      ],
      icon: "Briefcase",
      image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/services-home1-img4.jpg",
    },
  ],
  industryFocus: [
    "Renewable Energy & Infrastructure",
    "Digital Health & Biotechnology",
    "Advanced Manufacturing & Logistics",
    "Fintech & Payment Infrastructure",
    "Real Estate Investment Trusts (REITs)",
    "ASEAN Multi-Brand FMCG Conglomerates",
  ],
  footer: {
    legalNotice:
      "Apex Growth Partners & Advisory is an independent management consulting and financial advisory practice. Advisory engagements are conducted in strict compliance with Malaysian corporate law and professional fiduciary ethics.",
    copyright: "© 2008 – 2026 Apex Growth Partners & Advisory. All Rights Reserved.",
  },
};
