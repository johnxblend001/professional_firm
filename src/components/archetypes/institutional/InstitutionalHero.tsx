"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, ChevronLeft, ChevronRight, Scale, BookOpen } from "lucide-react";
import { institutionalConfig } from "@/config/firms/institutional";

export default function InstitutionalHero() {
  const slides = [
    {
      eyebrow: "MIA Member Firm No. 4228 · Established 1 April 1992",
      headline: "Thirty-Two Years of Uncompromising Fiscal Integrity & Statutory Audit Authority",
      subtext:
        "Approved Statutory Auditors under Section 263 of the Companies Act 2016. Providing partner-led statutory audits, MFRS/MPERS compliance certification, and corporate tax defense to over 240 Malaysian enterprises from Petaling Jaya.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      pill: "Ex-Ernst & Young (EY) Senior Leadership",
    },
    {
      eyebrow: "Direct Partner Supervision · Companies Act 2016",
      headline: "Defensible Audit Assurance & Authoritative Corporate Tax Defense",
      subtext:
        "Every engagement is directed by licensed Malaysian Chartered Accountants with extensive Big-4 tenure. Protecting directors and shareholder value across commercial, construction, and holding groups throughout Malaysia.",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1600&q=80",
      pill: "Over 240 Active Sdn Bhd Mandates",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const current = slides[activeSlide];

  return (
    <section className="relative min-h-[680px] lg:min-h-[760px] bg-[#0B1A30] text-white overflow-hidden flex items-center">
      {/* Background Image with Deep Oxford Navy Duotone Filter */}
      <div className="absolute inset-0 z-0">
        <Image
          src={current.image}
          alt={current.headline}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transition-opacity duration-700"
        />
        {/* Layered Heritage Navy Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071224]/98 via-[#0B1A30]/90 to-[#0B1A30]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A30] via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          
          {/* Eyebrow Seal Badge */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-md bg-[#071224]/90 border border-[#C5A059]/40 text-xs text-[#E2D9CC] mb-6 backdrop-blur-md shadow-sm">
            <Scale className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="font-serif tracking-wider font-semibold text-[#C5A059] uppercase text-[11px]">
              {current.eyebrow}
            </span>
          </div>

          {/* Headline in Playfair Serif */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[56px] font-bold leading-[1.12] text-white tracking-tight mb-6 drop-shadow-md">
            {current.headline}
          </h1>

          {/* Description Copy */}
          <p className="font-sans text-[#E2D9CC]/90 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-light">
            {current.subtext}
          </p>

          {/* Call to Action Row */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#proposal-intake"
              className="group inline-flex items-center space-x-3 px-7 py-3.5 rounded-lg bg-gradient-to-r from-[#C5A059] to-[#D4B36F] hover:from-[#D4B36F] hover:to-[#E5C378] text-[#0B1A30] text-sm font-bold font-sans tracking-wide uppercase shadow-xl transition-all duration-200 active:scale-95"
            >
              <span>Request Formal Audit Proposal</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#credentials"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-lg border border-[#C5A059]/50 text-[#E2D9CC] hover:text-white hover:bg-white/5 hover:border-[#C5A059] transition text-sm font-medium font-sans backdrop-blur-xs"
            >
              <BookOpen className="w-4 h-4 text-[#C5A059]" />
              <span>Verify Practice Credentials</span>
            </Link>

            <div className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#071224]/80 border border-white/10 text-xs text-slate-300 font-sans">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>{current.pill}</span>
            </div>
          </div>

          {/* Stat Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10">
            {institutionalConfig.credibilityMetrics.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#C5A059]">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                  {metric.label}
                </div>
                <div className="text-[11px] text-[#E2D9CC]/70 font-light leading-tight">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center space-x-2">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-lg bg-[#071224]/80 hover:bg-[#071224] border border-[#C5A059]/30 text-white flex items-center justify-center transition active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-lg bg-[#C5A059] hover:bg-[#D4B36F] text-[#0B1A30] font-bold flex items-center justify-center transition active:scale-95 shadow-md"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
