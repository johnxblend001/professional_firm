import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFirmConfig, firmsRegistry } from "@/config/firms";
import InstitutionalLandingPage from "@/components/archetypes/institutional/InstitutionalLandingPage";
import DigitalLandingPage from "@/components/archetypes/digital/DigitalLandingPage";
import AdvisoryLandingPage from "@/components/archetypes/advisory/AdvisoryLandingPage";
import FirmLandingPage from "@/components/FirmLandingPage";
import DemoSwitcherDock from "@/components/demo/DemoSwitcherDock";

interface PageProps {
  params: {
    firm: string;
  };
}

export async function generateStaticParams() {
  const slugs = Object.keys(firmsRegistry);
  return slugs.map((slug) => ({
    firm: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const config = getFirmConfig(params.firm);

  return {
    title: `${config.name} — ${config.registration?.legalForm || "Professional Practice"}`,
    description: `${config.hero.headline}. ${config.hero.subtext}`,
    alternates: {
      canonical: `/${config.slug}`,
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

export default function DynamicFirmPage({ params }: PageProps) {
  const config = getFirmConfig(params.firm);

  if (!config) {
    notFound();
  }

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
