"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Award } from "lucide-react";
import { FirmConfig } from "@/types/firm";
import { getFirmConfig } from "@/config/firms";

export default function Hero({ config: propConfig }: { config?: FirmConfig }) {
  const config = propConfig || getFirmConfig();
  const isFincia = config.slug === "fincia" || config.slug === "advisory" || config.archetype === "advisory";

  const defaultSlides = isFincia
    ? [
        {
          id: 1,
          tagline: config.hero.tagline,
          title: config.hero.headline,
          description: config.hero.subtext,
          bgImage: config.hero.bgImage || "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/Slider1-home1.jpg",
          badgeText: config.taglineBadge || "RM380M+ Capital Advised",
        },
        {
          id: 2,
          tagline: "Guidance You Can Trust",
          title: "Where Growth Capital Meets Precision Strategy",
          description: "We offer deeply personalized corporate advisory, cross-border M&A governance, and multi-generational family office preservation.",
          bgImage: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/Slider2-home1.jpg",
          badgeText: "Private Wealth & M&A",
        },
      ]
    : [
        {
          id: 1,
          tagline: config.hero.tagline,
          title: config.hero.headline,
          description: config.hero.subtext,
          bgImage: config.hero.bgImage || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
          badgeText: `${config.registration?.memberNo || "MIA 4228"} · Approved Auditors`,
        },
        {
          id: 2,
          tagline: "Partner-Led Statutory Assurance",
          title: "Rigorous MFRS & MPERS Audit Compliance",
          description: "Direct supervision by Ex-Ernst & Young (EY) Audit Leadership for private limited companies (Sdn Bhd) across Malaysia.",
          bgImage: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1600&q=80",
          badgeText: "Established 1 April 1992",
        },
      ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % defaultSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + defaultSlides.length) % defaultSlides.length);
  };

  const slide = defaultSlides[currentSlide];

  return (
    <section className="relative min-h-[680px] lg:min-h-[780px] bg-slate-900 text-white overflow-hidden flex items-center">
      {/* Background Image with adaptive vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src={slide.bgImage}
          alt={slide.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transition-opacity duration-700 ease-in-out"
        />
        {/* Controlled gradient overlay for contrast while preserving architectural photography */}
        <div
          className="absolute inset-0 transition-colors duration-500"
          style={{
            background: `linear-gradient(to right, ${config.colors.dark}f5 0%, ${config.colors.dark}b0 55%, transparent 100%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          
          {/* Eyebrow Sparkle Tag */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs font-semibold text-white mb-6">
            <span style={{ color: config.colors.accent }}>✦</span>
            <span className="tracking-wide">{slide.tagline}</span>
          </div>

          {/* Hero Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-[66px] font-bold leading-[1.08] tracking-tight text-white mb-6 drop-shadow-sm">
            {slide.title}
          </h1>

          {/* Description Copy */}
          <p className="text-gray-200 text-base sm:text-lg max-w-2xl font-normal leading-relaxed mb-8 drop-shadow-xs">
            {slide.description}
          </p>

          {/* Action Row: CTA Button + Credibility Badge */}
          <div className="flex flex-wrap items-center gap-5">
            {/* Primary Pill Button with Accent Arrow Container */}
            <Link
              href={config.hero.primaryCta.href}
              className="group inline-flex items-center pl-7 pr-2 py-2 rounded-full text-sm font-bold transition-all duration-300 hover:shadow-xl hover:brightness-105"
              style={{
                backgroundColor: config.colors.accent,
                color: config.colors.dark,
              }}
            >
              <span>{config.hero.primaryCta.label}</span>
              <span
                className="ml-4 w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm transition-transform duration-300 group-hover:translate-x-1"
                style={{
                  backgroundColor: config.colors.dark,
                  color: config.colors.accent,
                }}
              >
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </span>
            </Link>

            {/* Secondary CTA Button */}
            <Link
              href={config.hero.secondaryCta.href}
              className="inline-flex items-center px-6 py-3.5 rounded-full border border-white/40 text-white text-sm font-semibold backdrop-blur-xs hover:bg-white/10 transition-colors"
            >
              {config.hero.secondaryCta.label}
            </Link>

            {/* Credibility Status Pill */}
            {slide.badgeText && (
              <div className="flex items-center space-x-2.5 bg-black/40 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-md">
                <Award className="w-4 h-4" style={{ color: config.colors.accent }} />
                <span className="text-xs font-semibold text-white tracking-tight">
                  {slide.badgeText}
                </span>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center space-x-2.5">
        <button
          onClick={prevSlide}
          className="w-11 h-11 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
        </button>
        <button
          onClick={nextSlide}
          className="w-11 h-11 rounded-xl flex items-center justify-center font-bold transition active:scale-95 shadow-md"
          style={{
            backgroundColor: config.colors.accent,
            color: config.colors.dark,
          }}
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>
    </section>
  );
}
