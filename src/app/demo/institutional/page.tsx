import React from "react";
import type { Metadata } from "next";
import { institutionalConfig } from "@/config/firms/institutional";
import InstitutionalLandingPage from "@/components/archetypes/institutional/InstitutionalLandingPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${institutionalConfig.name} — Prestigious Institutional & Statutory Audit Archetype`,
    description: institutionalConfig.hero.subtext,
    alternates: {
      canonical: "/demo/institutional",
    },
    openGraph: {
      title: `${institutionalConfig.name} · Approved Statutory Auditors Malaysia`,
      description: institutionalConfig.hero.subtext,
      type: "website",
      siteName: institutionalConfig.shortName,
    },
  };
}

export default function InstitutionalDemoPage() {
  return <InstitutionalLandingPage />;
}
