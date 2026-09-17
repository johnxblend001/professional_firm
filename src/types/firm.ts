export interface FirmRegistration {
  body?: string;
  memberNo?: string;
  establishedYear?: number;
  establishedDate?: string;
  legalForm?: string;
}

export interface FirmLocation {
  label: string;
  suite?: string;
  street?: string;
  postcode?: string;
  city: string;
  state: string;
  country: string;
  firmName?: string;
}

export interface FirmContact {
  phone: string;
  phoneSecondary?: string;
  fax?: string;
  email: string;
  whatsapp?: string;
}

export interface FirmColors {
  dark: string;
  accent: string;
  accentHover: string;
  surface: string;
  cardBg?: string;
  muted: string;
  border: string;
}

export interface FirmCta {
  label: string;
  href: string;
}

export interface FirmHero {
  tagline: string;
  headline: string;
  subtext: string;
  primaryCta: FirmCta;
  secondaryCta: FirmCta;
  bgImage?: string;
}

export interface CredibilityMetric {
  value: string;
  label: string;
  detail: string;
}

export interface FirmFounder {
  name: string;
  title: string;
  credentials: string;
  pedigreeBadge?: string;
  summary: string;
  image?: string;
}

export interface FirmService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  keyDeliverables: string[];
  icon?: string;
  image?: string;
}

export interface FirmFooter {
  legalNotice: string;
  copyright: string;
}

export type ArchetypeId = "advisory" | "institutional" | "digital";

export interface FirmComplianceTier {
  id: string;
  name: string;
  tagline: string;
  priceMonthly?: string;
  priceAnnual?: string;
  turnoverRange: string;
  highlighted?: boolean;
  badge?: string;
  deliverables: string[];
  sla: string;
  idealFor: string;
}

export interface ComplianceChecklistItem {
  id: string;
  label: string;
  deadline: string;
  points: number;
  category: "e-Invoicing" | "Statutory SSM" | "Tax LHDN" | "Payroll";
  description: string;
}

export interface AccreditationBadge {
  name: string;
  subtitle: string;
  actReference?: string;
  verified?: boolean;
  code?: string;
}

export interface TechStackItem {
  name: string;
  category: string;
  tier: string;
  status: string;
  description: string;
}

export interface AdvisorProfile {
  id: string;
  name: string;
  position: string;
  credentials?: string;
  specialty?: string;
  image: string;
  bio?: string;
}

export interface FirmConfig {
  name: string;
  shortName: string;
  brandMonogram?: string;
  slug: string;
  archetype?: ArchetypeId;
  taglineBadge?: string;
  registration?: FirmRegistration;
  logo?: string;
  contact: FirmContact;
  locations: {
    headquarters: FirmLocation;
    branch?: FirmLocation;
  };
  colors: FirmColors;
  hero: FirmHero;
  credibilityMetrics: CredibilityMetric[];
  founder?: FirmFounder;
  partners?: FirmFounder[];
  advisors?: AdvisorProfile[];
  services: FirmService[];
  industryFocus?: string[];
  accreditations?: AccreditationBadge[];
  complianceTiers?: FirmComplianceTier[];
  checklistItems?: ComplianceChecklistItem[];
  techStack?: TechStackItem[];
  footer: FirmFooter;
}

