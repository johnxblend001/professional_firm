"use client";

import React from "react";
import AdvisoryNavbar from "./AdvisoryNavbar";
import AdvisoryHero from "./AdvisoryHero";
import AdvisoryLogosMarquee from "./AdvisoryLogosMarquee";
import AdvisoryServices from "./AdvisoryServices";
import AdvisoryConsultationRoadmap from "./AdvisoryConsultationRoadmap";
import AdvisoryAdvisorCarousel from "./AdvisoryAdvisorCarousel";
import AdvisoryCaseStudies from "./AdvisoryCaseStudies";
import AdvisoryGlassmorphicContact from "./AdvisoryGlassmorphicContact";
import AdvisoryFooter from "./AdvisoryFooter";
import DemoSwitcherDock from "@/components/demo/DemoSwitcherDock";
import { FirmConfig } from "@/types/firm";
import { advisoryConfig } from "@/config/firms/advisory";

interface AdvisoryLandingPageProps {
  config?: FirmConfig;
}

export default function AdvisoryLandingPage({ config: propConfig }: AdvisoryLandingPageProps) {
  const config = propConfig || advisoryConfig;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: config.name,
    legalName: config.name,
    telephone: config.contact.phone,
    email: config.contact.email,
    url: "/demo/advisory",
    address: {
      "@type": "PostalAddress",
      streetAddress: config.locations.headquarters.street || config.locations.headquarters.suite,
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
          "--brand-dark-hover": "#0a4642",
          "--brand-accent": config.colors.accent,
          "--brand-accent-hover": config.colors.accentHover,
          "--brand-surface": config.colors.surface,
          "--brand-card-bg": config.colors.cardBg || "#ffffff",
          "--brand-muted": config.colors.muted,
          "--brand-border": config.colors.border,
        } as React.CSSProperties
      }
      className="flex min-h-screen flex-col bg-white text-[#181818]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <AdvisoryNavbar config={config} />
      <main className="flex-1">
        <AdvisoryHero config={config} />
        <AdvisoryLogosMarquee />
        <AdvisoryServices config={config} />
        <AdvisoryConsultationRoadmap />
        <AdvisoryAdvisorCarousel config={config} />
        <AdvisoryCaseStudies />
        <AdvisoryGlassmorphicContact config={config} />
      </main>
      <AdvisoryFooter config={config} />
      <DemoSwitcherDock />
    </div>
  );
}
