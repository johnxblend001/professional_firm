import React from "react";
import type { Metadata } from "next";
import { digitalConfig } from "@/config/firms/digital";
import DigitalLandingPage from "@/components/archetypes/digital/DigitalLandingPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${digitalConfig.name} — Minimalist Precision & Cloud Accounting Archetype`,
    description: digitalConfig.hero.subtext,
    alternates: {
      canonical: "/demo/digital",
    },
    openGraph: {
      title: `${digitalConfig.name} · Modern Tech & e-Invoicing Compliance Malaysia`,
      description: digitalConfig.hero.subtext,
      type: "website",
      siteName: digitalConfig.shortName,
    },
  };
}

export default function DigitalDemoPage() {
  return <DigitalLandingPage />;
}
