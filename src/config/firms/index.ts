import { FirmConfig } from "@/types/firm";
import { finciaConfig } from "./fincia";
import { sylvesterAnthonyConfig } from "./sylvesterAnthony";
import { advisoryConfig } from "./advisory";
import { institutionalConfig } from "./institutional";
import { digitalConfig } from "./digital";

export const firmsRegistry: Record<string, FirmConfig> = {
  // Primary 3 Archetypes
  [advisoryConfig.slug]: advisoryConfig,
  [institutionalConfig.slug]: institutionalConfig,
  [digitalConfig.slug]: digitalConfig,

  // Legacy & specific firm configs
  [finciaConfig.slug]: finciaConfig,
  [sylvesterAnthonyConfig.slug]: sylvesterAnthonyConfig,

  // Convenience aliases for clean URLs
  "sylvester": sylvesterAnthonyConfig,
  "sac": sylvesterAnthonyConfig,
  "pulse": digitalConfig,
  "ledgerpulse": digitalConfig,
  "apex": advisoryConfig,
};

export const defaultFirmSlug =
  process.env.NEXT_PUBLIC_FIRM_ID || sylvesterAnthonyConfig.slug;

export function getFirmConfig(slug?: string): FirmConfig {
  if (!slug) {
    return firmsRegistry[defaultFirmSlug] || sylvesterAnthonyConfig;
  }
  const normalized = slug.toLowerCase().trim();
  return firmsRegistry[normalized] || firmsRegistry[defaultFirmSlug] || sylvesterAnthonyConfig;
}

export function getAllFirmSlugs(): string[] {
  return [
    advisoryConfig.slug,
    institutionalConfig.slug,
    digitalConfig.slug,
    finciaConfig.slug,
    sylvesterAnthonyConfig.slug,
  ];
}

export {
  advisoryConfig,
  institutionalConfig,
  digitalConfig,
  finciaConfig,
  sylvesterAnthonyConfig,
};
