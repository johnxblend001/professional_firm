"use client";

import React from "react";
import DigitalNavbar from "./DigitalNavbar";
import DigitalHero from "./DigitalHero";
import DigitalBentoGrid from "./DigitalBentoGrid";
import DigitalScorecard from "./DigitalScorecard";
import DigitalPricingMatrix from "./DigitalPricingMatrix";
import DigitalTechStack from "./DigitalTechStack";
import DigitalBooking from "./DigitalBooking";
import DigitalFooter from "./DigitalFooter";
import DemoSwitcherDock from "@/components/demo/DemoSwitcherDock";
import { FirmConfig } from "@/types/firm";
import { digitalConfig } from "@/config/firms/digital";

interface DigitalLandingPageProps {
  config?: FirmConfig;
}

export default function DigitalLandingPage({ config: propConfig }: DigitalLandingPageProps) {
  const config = propConfig || digitalConfig;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: config.name,
    legalName: config.name,
    telephone: config.contact.phone,
    email: config.contact.email,
    url: "/demo/digital",
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
      <DigitalNavbar config={config} />
      <main className="flex-1">
        <DigitalHero />
        <DigitalBentoGrid />
        <DigitalScorecard />
        <DigitalPricingMatrix />
        <DigitalTechStack />
        <DigitalBooking />
      </main>
      <DigitalFooter />
      <DemoSwitcherDock />
    </div>
  );
}
