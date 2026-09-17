import { FirmConfig } from "@/types/firm";

export const sylvesterAnthonyConfig: FirmConfig = {
  name: "Messrs. Sylvester Anthony & Co.",
  shortName: "Sylvester Anthony & Co.",
  brandMonogram: "SAC",
  slug: "sylvester-anthony-co",
  registration: {
    body: "Malaysian Institute of Accountants (MIA)",
    memberNo: "MIA 4228",
    establishedYear: 1992,
    establishedDate: "1 April 1992",
    legalForm: "Chartered Accountants & Approved Auditors",
  },
  logo: "/firms/sac-logo.svg",
  contact: {
    phone: "+60 3-7804 1736",
    phoneSecondary: "+60 3-7804 1737",
    fax: "+60 3-7804 0968",
    email: "inquiry@sylvesteranthony.com",
    whatsapp: "+60 12-XXXX XXX",
  },
  locations: {
    headquarters: {
      label: "Principal Office — Petaling Jaya",
      suite: "Suite 609, 6th Floor, Block A, Kelana Square",
      street: "17, Jalan SS 7/26, Kelana Jaya",
      postcode: "47301",
      city: "Petaling Jaya",
      state: "Selangor Darul Ehsan",
      country: "Malaysia",
    },
    branch: {
      label: "Associated Practice — East Coast",
      firmName: "Span & Co.",
      city: "Kuantan",
      state: "Pahang",
      country: "Malaysia",
    },
  },
  colors: {
    // British-Malaysian heritage banking tones
    dark: "#0b1a30",       // Deep Sovereign Navy (high-trust, institutional stability)
    accent: "#c5a059",     // Warm Heritage Gold / Champagne (prestige, est. 1992)
    accentHover: "#b38f48",// Rich Deep Bronze
    surface: "#f0ede6",    // Refined Warm Stone / Muted Cream (distinct contrast against pure white #ffffff)
    cardBg: "#ffffff",     // Crisp White for service cards
    muted: "#64748b",      // Slate Grey for regulatory disclaimers and subtext
    border: "#e0dacf",     // Distinct warm hairline border
  },
  hero: {
    tagline: "Chartered Accountants & Approved Auditors · Established 1992",
    headline: "Three Decades of Precision, Trust & Fiscal Integrity",
    subtext:
      "Delivering partner-led statutory audit, corporate tax advisory, and strategic compliance to over 240 Malaysian enterprises from Kelana Square, Petaling Jaya.",
    primaryCta: {
      label: "Request Audit Proposal",
      href: "#contact",
    },
    secondaryCta: {
      label: "Explore Practice Areas",
      href: "#services",
    },
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  },
  credibilityMetrics: [
    { value: "1992", label: "Founded", detail: "32+ Years of Practice" },
    { value: "MIA 4228", label: "Accreditation", detail: "Licensed Audit & Tax Agent" },
    { value: "240+", label: "Active Clients", detail: "SMEs & Corporate Portfolios" },
    { value: "30+", label: "Restructurings", detail: "Liquidations & Striking-Off Handled" },
  ],
  founder: {
    name: "Mr. Sylvester Devaraj Anthony",
    title: "Founder & Managing Partner",
    credentials: "C.A.(M), MIA Member No. 4228",
    pedigreeBadge: "Ex-Ernst & Young (EY) Audit Senior & Corporate Financial Controller",
    summary:
      "Trained at Ernst & Young (EY) handling high-profile audits (Sarawak Shell, Bank of America, Malayan Breweries) and corporate reconstruction before serving as Group Financial Controller. Over 40 years of authoritative accounting and taxation leadership in Malaysia.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
  },
  services: [
    {
      id: "statutory-audit",
      title: "Statutory Audit & Assurance",
      tagline: "MFRS & MPERS Compliant Assurance",
      description:
        "Rigorous, independent statutory audits for active and dormant private limited companies (Sdn Bhd) adhering to the Companies Act 2016 and Malaysian Financial Reporting Standards.",
      keyDeliverables: [
        "Statutory Auditor's Reports & Financial Statement Certification",
        "Internal Accounting Controls & Risk Assessment",
        "Board of Directors & Management Recommendation Letters",
        "SSM Annual MBRS Filing Preparation",
      ],
      icon: "ShieldCheck",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "taxation-advisory",
      title: "Corporate Taxation & LHDN Compliance",
      tagline: "Tax Optimization & Regulatory Defense",
      description:
        "Strategic tax planning and submission to minimize tax exposure while maintaining full compliance with the Inland Revenue Board of Malaysia (LHDN).",
      keyDeliverables: [
        "Corporate Tax Return Filings (Form C, Form e-C, Form PT)",
        "Capital Allowance Computation & Tax Deductions Review",
        "LHDN E-Invoicing (E-Invois) Readiness & Implementation Advisory",
        "SST (Sales & Service Tax) Returns & Tax Audit Representation",
      ],
      icon: "FileSpreadsheet",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "accounting-reporting",
      title: "Financial Accounting & Payroll Management",
      tagline: "Accurate, Timely Management Intelligence",
      description:
        "Full-cycle bookkeeping and computerized management accounts to give company directors transparent visibility into operational cash flows and profitability.",
      keyDeliverables: [
        "Monthly / Quarterly General Ledger, Profit & Loss, Balance Sheet",
        "Computerized Accounting Implementations (AutoCount, SQL, UBS, Xero)",
        "Statutory Payroll Administration (EPF, SOCSO, EIS & Monthly Tax PCB)",
        "Cash Flow Budgeting & Year-End Audit Schedule Preparation",
      ],
      icon: "BarChart3",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "corporate-secretarial",
      title: "Corporate Secretarial & Restructuring",
      tagline: "Statutory Governance & Advisory",
      description:
        "End-to-end corporate governance under the Companies Act 2016, from company incorporation to voluntary liquidation and capital restructuring.",
      keyDeliverables: [
        "New Sdn Bhd Incorporation via SSM (Suruhanjaya Syarikat Malaysia)",
        "Statutory Registers, Board Resolutions & Annual Return Lodgement",
        "Share Allotment (Sec 78) & Share Transfer Execution (Sec 105)",
        "Members' & Creditors' Voluntary Winding-Up / Liquidation",
      ],
      icon: "Building2",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    },
  ],
  industryFocus: [
    "Wholesale & Retail Trading",
    "Fashion & Apparel Houses",
    "Property Development & Construction",
    "Logistics & Marine Dredging",
    "Investment Holding & Asset Management",
    "Professional Services & SME Enterprises",
  ],
  footer: {
    legalNotice:
      "Messrs. Sylvester Anthony & Co. is a firm of Chartered Accountants and Approved Auditors registered with the Malaysian Institute of Accountants (MIA). All professional engagements are governed by the Accountants Act 1967 and Companies Act 2016.",
    copyright: "© 1992 – 2026 Messrs. Sylvester Anthony & Co. All Rights Reserved.",
  },
};
