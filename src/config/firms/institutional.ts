import { FirmConfig } from "@/types/firm";

export const institutionalConfig: FirmConfig = {
  name: "Messrs. Sylvester Anthony & Co.",
  shortName: "Sylvester Anthony & Co.",
  brandMonogram: "SAC",
  slug: "institutional",
  archetype: "institutional",
  taglineBadge: "Approved Statutory Auditors · Companies Act 2016",
  registration: {
    body: "Malaysian Institute of Accountants (MIA)",
    memberNo: "MIA Member Firm No. 4228",
    establishedYear: 1992,
    establishedDate: "1 April 1992",
    legalForm: "Chartered Accountants & Approved Statutory Auditors",
  },
  logo: "/firms/sac-logo.svg",
  contact: {
    phone: "+60 3-7804 1736",
    phoneSecondary: "+60 3-7804 1737",
    fax: "+60 3-7804 0968",
    email: "audit@sylvesteranthony.com",
    whatsapp: "+60 12-298 4736",
  },
  locations: {
    headquarters: {
      label: "Principal Audit Chambers — Petaling Jaya",
      suite: "Suite 609, 6th Floor, Block A, Kelana Square",
      street: "17, Jalan SS 7/26, Kelana Jaya",
      postcode: "47301",
      city: "Petaling Jaya",
      state: "Selangor Darul Ehsan",
      country: "Malaysia",
    },
    branch: {
      label: "Associated Regional Practice — East Coast",
      firmName: "Span & Co. (Chartered Accountants)",
      city: "Kuantan",
      state: "Pahang Darul Makmur",
      country: "Malaysia",
    },
  },
  colors: {
    dark: "#0B1A30",        // Deep Oxford Navy
    accent: "#C5A059",      // Brushed Champagne Gold
    accentHover: "#B38F48", // Deep Heritage Bronze
    surface: "#F5F2EB",     // Warm Stone Surface
    cardBg: "#FFFFFF",
    muted: "#64748B",       // Slate Grey
    border: "#E2D9CC",      // Fine Warm Border
  },
  hero: {
    tagline: "Statutory Audit & Assurance · Inland Revenue Tax Defense · Corporate Governance",
    headline: "Thirty-Two Years of Uncompromising Fiscal Integrity & Audit Authority",
    subtext:
      "Approved Statutory Auditors under Section 263 of the Companies Act 2016. Delivering partner-led audit assurance, MFRS/MPERS compliance, and authoritative corporate tax defense to over 240 Malaysian enterprises.",
    primaryCta: {
      label: "Request Formal Audit Proposal",
      href: "#proposal-intake",
    },
    secondaryCta: {
      label: "Verify Practice Credentials",
      href: "#credentials",
    },
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  },
  credibilityMetrics: [
    { value: "1992", label: "Year Established", detail: "32+ consecutive years in public practice" },
    { value: "MIA 4228", label: "MIA Practice No.", detail: "Registered Chartered Accountants Firm" },
    { value: "240+", label: "Audit Mandates", detail: "Active private corporations & holding groups" },
    { value: "100%", label: "MFRS/MPERS Rigor", detail: "Unblemished SSM & AOB audit inspection record" },
  ],
  founder: {
    name: "Mr. Sylvester Devaraj Anthony",
    title: "Founder & Senior Managing Partner",
    credentials: "C.A.(M), MIA Member No. 4228, Approved Auditor",
    pedigreeBadge: "Ex-Ernst & Young (EY) Audit Senior & Corporate Financial Controller",
    summary:
      "Articled and trained at Ernst & Young (EY), personally directing high-stakes statutory audits for multinational corporations including Sarawak Shell, Bank of America, and Malayan Breweries. Later served as Group Financial Controller for public and private enterprises before founding Messrs. Sylvester Anthony & Co. in 1992. Over 40 years of authoritative accounting, forensic review, and regulatory tax experience in Malaysia.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
  },
  partners: [
    {
      name: "Mr. Sylvester Devaraj Anthony",
      title: "Senior Managing Partner — Statutory Audit & Assurance",
      credentials: "C.A.(M), MIA No. 4228 · Approved Auditor Lic. 1284/05/2026(J)",
      pedigreeBadge: "Ex-Ernst & Young (EY) Audit Senior",
      summary: "Directs statutory audits for commercial, manufacturing, logistics, and property conglomerates across Selangor and Kuala Lumpur.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Dato' Raymond Tan Swee Huat",
      title: "Senior Partner — Corporate Tax Defense & Transfer Pricing",
      credentials: "FCCA, C.A.(M), Fellow Member of CTIM",
      pedigreeBadge: "Former Big-4 Tax Director & Inland Revenue Liaison",
      summary: "Specializes in complex corporate tax controversies, LHDN field audit representation, incentive negotiations, and cross-border transfer pricing defense.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Pn. Hajjah Zulaikha Razak",
      title: "Partner — Corporate Secretarial & Insolvency Practice",
      credentials: "ICSA, C.A.(M), Approved Liquidator under Companies Act 2016",
      pedigreeBadge: "Licensed Insolvency Practitioner & Corporate Governance Counsel",
      summary: "Over 26 years overseeing board secretarial governance, capital restructuring, and court-sanctioned voluntary winding-up procedures.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    },
  ],
  accreditations: [
    {
      name: "Malaysian Institute of Accountants (MIA)",
      subtitle: "Chartered Accountants Firm NF-4228",
      actReference: "Accountants Act 1967",
      verified: true,
      code: "MIA 4228",
    },
    {
      name: "Suruhanjaya Syarikat Malaysia (SSM)",
      subtitle: "Approved Statutory Auditors Registry",
      actReference: "Section 263, Companies Act 2016",
      verified: true,
      code: "SSM Audit Firm Lic.",
    },
    {
      name: "Lembaga Hasil Dalam Negeri (LHDN)",
      subtitle: "Licensed Tax Agent & e-Filing Representative",
      actReference: "Section 153, Income Tax Act 1967",
      verified: true,
      code: "LHDN Agent Ref. TA-0382",
    },
    {
      name: "Malaysian Insolvency Practitioners Association",
      subtitle: "Licensed Court & Voluntary Liquidator",
      actReference: "Insolvency Act 1967 & CA 2016",
      verified: true,
      code: "MIPA Fellow",
    },
  ],
  services: [
    {
      id: "statutory-audit-assurance",
      title: "Statutory Financial Audit & Assurance",
      tagline: "Companies Act 2016 & MFRS/MPERS Certification",
      description:
        "Comprehensive, objective examination and statutory certification of financial statements for Malaysian private limited companies (Sdn Bhd) and public companies.",
      keyDeliverables: [
        "Statutory Independent Auditor's Report & Statement Certification",
        "Rigorous MFRS (Malaysian Financial Reporting Standards) & MPERS compliance",
        "Detailed Management Letter on internal accounting controls and fraud risk",
        "SSM Annual Return & MBRS financial reporting filing readiness",
      ],
      icon: "ShieldCheck",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "corporate-tax-defense",
      title: "Corporate Taxation & LHDN Dispute Defense",
      tagline: "Section 153 ITA Certified Representation",
      description:
        "Authoritative tax compliance, optimization of capital allowances, and representation before the Inland Revenue Board of Malaysia (LHDN) during audit queries.",
      keyDeliverables: [
        "Corporate Tax Return Filings (Form C, Form e-C, Form PT & CP204 estimates)",
        "Capital Allowance computations, reinvestment allowances & tax incentives",
        "LHDN audit controversy defense, penalty mitigation & dispute appeals",
        "SST (Sales & Service Tax) bi-monthly returns & exemption reviews",
      ],
      icon: "FileSpreadsheet",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "due-diligence-forensics",
      title: "Financial Due Diligence & Forensic Review",
      tagline: "Independent Verification for Acquisitions & Lending",
      description:
        "Rigorous verification of historical earnings, asset quality, hidden liabilities, and forensic transaction tracing for buyers, sellers, and commercial lenders.",
      keyDeliverables: [
        "Quality of Earnings (QoE) and adjusted EBITDA verification reports",
        "Working capital baseline analysis and debt-like item identification",
        "Forensic bank statement and internal control vulnerability assessments",
        "Statutory completion account audits under Sale & Purchase Agreements (SPA)",
      ],
      icon: "BarChart3",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "restructuring-liquidation",
      title: "Corporate Recovery, Winding-Up & Secretarial",
      tagline: "Companies Act 2016 Statutory Governance",
      description:
        "Licensed liquidator services for solvent and insolvent winding-up, striking-off applications (Section 549), and comprehensive corporate secretarial maintenance.",
      keyDeliverables: [
        "Members' Voluntary Liquidation (MVL) for surplus asset distribution",
        "Creditors' Voluntary Liquidation (CVL) & insolvency administration",
        "Statutory striking-off compliance under SSM guidelines",
        "Corporate secretarial lodgements, statutory registers & share allotments",
      ],
      icon: "Building2",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    },
  ],
  industryFocus: [
    "Commercial Real Estate & Property Development",
    "Heavy Engineering & Infrastructure Construction",
    "Wholesale Distribution & Maritime Logistics",
    "Automotive, Assembly & Industrial Components",
    "Investment Holdings & Multi-Tier Family Trusts",
    "Healthcare Chains & Specialized Medical Centres",
  ],
  footer: {
    legalNotice:
      "Messrs. Sylvester Anthony & Co. (Firm Registration No. NF 4228) is a firm of Chartered Accountants and Approved Statutory Auditors registered under the Malaysian Institute of Accountants (MIA) and the Accountants Act 1967. All audit and assurance services are conducted in strict accordance with International Standards on Auditing (ISA) as adopted by the MIA.",
    copyright: "© 1992 – 2026 Messrs. Sylvester Anthony & Co. All Rights Reserved.",
  },
};
