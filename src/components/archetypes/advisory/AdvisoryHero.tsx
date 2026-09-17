"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Award, TrendingUp, Sparkles, ShieldCheck } from "lucide-react";
import { FirmConfig } from "@/types/firm";
import { advisoryConfig } from "@/config/firms/advisory";

export default function AdvisoryHero({ config: propConfig }: { config?: FirmConfig }) {
  const config = propConfig || advisoryConfig;

  const slides = [
    {
      id: 1,
      tagline: config.hero.tagline || "High-Impact Corporate Advisory",
      headline: config.hero.headline || "Where Strategic Ambitions Accelerate Into Enterprise Scale",
      description:
        config.hero.subtext ||
        "We partner with high-growth Malaysian founders, family offices, and mid-market enterprises—delivering cross-border M&A advisory, capital structuring, and private wealth stewardship.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      badge: config.taglineBadge || "RM380M+ Capital Advised",
    },
    {
      id: 2,
      tagline: "Cross-Border Wealth Preservation",
      headline: "Where Growth Capital Meets Multi-Generational Strategy",
      description:
        "Bespoke private wealth governance, international holding structures, and M&A execution engineered for prominent Malaysian and ASEAN business families.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80",
      badge: "Family Office & M&A Retainers",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const active = slides[currentSlide];

  return (
    <section className="relative min-h-[700px] lg:min-h-[780px] bg-[#063633] text-white overflow-hidden flex items-center">
      {/* Background Architectural Visual with Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src={active.image}
          alt={active.headline}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transition-opacity duration-700 ease-in-out"
        />
        {/* Layered Deep Emerald Gradient for dramatic contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#063633]/98 via-[#063633]/90 to-[#063633]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#063633] via-transparent to-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Eyebrow Sparkle Pill */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs font-semibold text-white mb-6">
            <span style={{ color: config.colors.accent }}>✦</span>
            <span className="tracking-wide">{active.tagline}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-bold leading-[1.08] tracking-tight text-white mb-6 drop-shadow-sm font-sans">
            {active.headline}
          </h1>

          {/* Description */}
          <p className="text-emerald-100/90 text-base sm:text-lg max-w-2xl font-normal leading-relaxed mb-8">
            {active.description}
          </p>

          {/* Signature Action Buttons with Lime Arrow Squares */}
          <div className="flex flex-wrap items-center gap-5">
            {/* Primary Pill Button with Lime Arrow Square */}
            <Link
              href="#services"
              className="group inline-flex items-center pl-7 pr-2 py-2 rounded-full text-sm font-bold transition-all duration-300 hover:shadow-2xl hover:brightness-105"
              style={{
                backgroundColor: config.colors.accent,
                color: config.colors.dark,
              }}
            >
              <span>Explore Advisory Mandates</span>
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

            {/* Secondary Pill Button */}
            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-3.5 rounded-full border border-white/30 text-white text-sm font-semibold backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <span>Schedule Private Consultation</span>
            </Link>

            {/* Credibility Status Badge */}
            {active.badge && (
              <div className="flex items-center space-x-2.5 bg-black/40 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-md">
                <Award className="w-4 h-4" style={{ color: config.colors.accent }} />
                <span className="text-xs font-semibold text-white tracking-tight">
                  {active.badge}
                </span>
              </div>
            )}
          </div>

          {/* 4 Credibility Metric Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/15">
            {config.credibilityMetrics.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <div
                  className="text-2xl sm:text-3xl font-bold font-mono tracking-tight"
                  style={{ color: config.colors.accent }}
                >
                  {metric.value}
                </div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  {metric.label}
                </div>
                <div className="text-[11px] text-emerald-100/70 font-light leading-tight">
                  {metric.detail}
                </div>
              </div>
            ))}
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
          className="w-11 h-11 rounded-xl flex items-center justify-center font-bold transition active:scale-95 shadow-lg"
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
