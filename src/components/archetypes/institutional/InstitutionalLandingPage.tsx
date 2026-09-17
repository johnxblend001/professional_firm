"use client";

import React from "react";
import InstitutionalNavbar from "./InstitutionalNavbar";
import InstitutionalHero from "./InstitutionalHero";
import InstitutionalRegulatoryBar from "./InstitutionalRegulatoryBar";
import InstitutionalAuditBreakdown from "./InstitutionalAuditBreakdown";
import InstitutionalPartnerPedigree from "./InstitutionalPartnerPedigree";
import InstitutionalTrackRecord from "./InstitutionalTrackRecord";
import InstitutionalProposalIntake from "./InstitutionalProposalIntake";
import InstitutionalFooter from "./InstitutionalFooter";
import DemoSwitcherDock from "@/components/demo/DemoSwitcherDock";
import { FirmConfig } from "@/types/firm";
import { institutionalConfig } from "@/config/firms/institutional";

interface InstitutionalLandingPageProps {
  config?: FirmConfig;
}

export default function InstitutionalLandingPage({ config: propConfig }: InstitutionalLandingPageProps) {
  const config = propConfig || institutionalConfig;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: config.name,
    legalName: config.name,
    telephone: config.contact.phone,
    email: config.contact.email,
    url: "/demo/institutional",
    address: {
      "@type": "PostalAddress",
      streetAddress: config.locations.headquarters.suite,
      addressLocality: config.locations.headquarters.city,
      addressRegion: config.locations.headquarters.state,
      postalCode: config.locations.headquarters.postcode,
      addressCountry: config.locations.headquarters.country,
    },
    founder: config.founder
      ? {
          "@type": "Person",
          name: config.founder.name,
          jobTitle: config.founder.title,
        }
      : undefined,
  };

  return (
    <div
      style={
        {
          "--brand-dark": config.colors.dark,
          "--brand-accent": config.colors.accent,
          "--brand-accent-hover": config.colors.accentHover,
          "--brand-surface": config.colors.surface,
          "--brand-card-bg": config.colors.cardBg || "#ffffff",
          "--brand-muted": config.colors.muted,
          "--brand-border": config.colors.border,
        } as React.CSSProperties
      }
      className="flex min-h-screen flex-col bg-white text-slate-800"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <InstitutionalNavbar config={config} />
      <main className="flex-1">
        <InstitutionalHero />
        <InstitutionalRegulatoryBar />
        <InstitutionalAuditBreakdown />
        <InstitutionalPartnerPedigree />
        <InstitutionalTrackRecord />
        <InstitutionalProposalIntake />
      </main>
      <InstitutionalFooter />
      <DemoSwitcherDock />
    </div>
  );
}
