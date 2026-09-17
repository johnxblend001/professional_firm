import React from "react";
import type { Metadata } from "next";
import { getFirmConfig } from "@/config/firms";
import InstitutionalLandingPage from "@/components/archetypes/institutional/InstitutionalLandingPage";
import DigitalLandingPage from "@/components/archetypes/digital/DigitalLandingPage";
import AdvisoryLandingPage from "@/components/archetypes/advisory/AdvisoryLandingPage";
import FirmLandingPage from "@/components/FirmLandingPage";
import DemoSwitcherDock from "@/components/demo/DemoSwitcherDock";

export async function generateMetadata(): Promise<Metadata> {
  const config = getFirmConfig();

  return {
    title: `${config.name} — ${config.registration?.legalForm || "Chartered Accountants & Approved Auditors"}`,
    description: `${config.hero.headline}. ${config.hero.subtext}`,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: `${config.name} — ${config.registration?.legalForm || "Chartered Accountants"}`,
      description: config.hero.subtext,
      type: "website",
      siteName: config.shortName,
    },
    twitter: {
      card: "summary_large_image",
      title: config.name,
      description: config.hero.subtext,
    },
  };
}

export default function HomePage() {
  const config = getFirmConfig();

  if (config.archetype === "institutional") {
    return <InstitutionalLandingPage config={config} />;
  }

  if (config.archetype === "digital") {
    return <DigitalLandingPage config={config} />;
  }

  if (config.archetype === "advisory") {
    return <AdvisoryLandingPage config={config} />;
  }

  return (
    <>
      <FirmLandingPage config={config} />
      <DemoSwitcherDock />
    </>
  );
}
