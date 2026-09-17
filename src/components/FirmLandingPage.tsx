"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import MetricsStrip from "@/components/sections/MetricsStrip";
import AboutFirm from "@/components/sections/AboutFirm";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ConsultationPhases from "@/components/sections/ConsultationPhases";
import StrategicAdviceBanner from "@/components/sections/StrategicAdviceBanner";
import CaseStudies from "@/components/sections/CaseStudies";
import TeamGrid from "@/components/sections/TeamGrid";
import BlogSection from "@/components/sections/BlogSection";
import FaqContact from "@/components/sections/FaqContact";
import Footer from "@/components/layout/Footer";
import { FirmConfig } from "@/types/firm";

interface FirmLandingPageProps {
  config: FirmConfig;
}

export default function FirmLandingPage({ config }: FirmLandingPageProps) {
  // Generate structured data for this specific firm
  const structuredData = {
    "@context": "https://schema.org",
    "@type": config.slug === "fincia" ? "FinancialService" : "AccountingService",
    name: config.name,
    legalName: config.name,
    telephone: config.contact.phone,
    email: config.contact.email,
    url: `/${config.slug}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: config.locations.headquarters.street || config.locations.headquarters.suite,
      addressLocality: config.locations.headquarters.city,
      addressRegion: config.locations.headquarters.state,
      postalCode: config.locations.headquarters.postcode,
      addressCountry: config.locations.headquarters.country,
    },
    founder: config.founder ? {
      "@type": "Person",
      name: config.founder.name,
      jobTitle: config.founder.title,
    } : undefined,
  };

  return (
    <div
      style={
        {
          "--brand-dark": config.colors.dark,
          "--brand-dark-hover": config.colors.dark === "#0b1a30" ? "#162e52" : "#094743",
          "--brand-accent": config.colors.accent,
          "--brand-accent-hover": config.colors.accentHover,
          "--brand-surface": config.colors.surface,
          "--brand-card-bg": config.colors.cardBg || "#ffffff",
          "--brand-muted": config.colors.muted,
          "--brand-border": config.colors.border,
        } as React.CSSProperties
      }
      className="flex min-h-screen flex-col bg-white"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Navbar config={config} />
      <main className="flex-1">
        <Hero config={config} />
        <MetricsStrip config={config} />
        <AboutFirm config={config} />
        <ServicesGrid config={config} />
        <ConsultationPhases config={config} />
        <StrategicAdviceBanner config={config} />
        <CaseStudies config={config} />
        <TeamGrid config={config} />
        <BlogSection />
        <FaqContact config={config} />
      </main>
      <Footer config={config} />
    </div>
  );
}
