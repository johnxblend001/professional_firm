import React from "react";
import type { Metadata } from "next";
import { advisoryConfig } from "@/config/firms/advisory";
import AdvisoryLandingPage from "@/components/archetypes/advisory/AdvisoryLandingPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${advisoryConfig.name} — Modern Growth & Advisory Archetype`,
    description: advisoryConfig.hero.subtext,
    alternates: {
      canonical: "/demo/advisory",
    },
    openGraph: {
      title: `${advisoryConfig.name} · Malaysian Corporate Advisory`,
      description: advisoryConfig.hero.subtext,
      type: "website",
      siteName: advisoryConfig.shortName,
    },
  };
}

export default function AdvisoryDemoPage() {
  return <AdvisoryLandingPage config={advisoryConfig} />;
}
