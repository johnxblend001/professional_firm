"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, ShieldCheck, BarChart3, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";
import { FirmConfig } from "@/types/firm";
import { advisoryConfig } from "@/config/firms/advisory";

export default function AdvisoryServices({ config: propConfig }: { config?: FirmConfig }) {
  const config = propConfig || advisoryConfig;

  const iconMap: Record<string, React.ElementType> = {
    TrendingUp,
    ShieldCheck,
    BarChart3,
    Briefcase,
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#f2f5f1] border-b border-emerald-950/10">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-900/10 text-xs font-semibold text-[#063633] mb-3 shadow-xs">
            <span className="text-[#063633]">✦</span>
            <span className="tracking-wide">Core Advisory Mandates</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#181818] tracking-tight leading-[1.15] mb-4 font-sans">
            Strategic Financial Architecture for Enterprise Scale
          </h2>

          <p className="text-[#6c6c6c] text-sm sm:text-base leading-relaxed font-sans">
            We operate beyond routine compliance. Our seasoned partners lead cross-border M&A transactions, capital restructuring, and generational wealth preservation with strict fiduciary responsibility.
          </p>
        </div>

        {/* 4 Rounded Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {config.services.map((service, idx) => {
            const IconComponent = iconMap[service.icon || "TrendingUp"] || TrendingUp;

            return (
              <div
                key={service.id}
                className="bg-white rounded-[28px] p-7 sm:p-9 border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Top Row: Icon + Tagline */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#063633] text-[#c8f8a9] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <IconComponent className="w-7 h-7 stroke-[2]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      Phase 0{idx + 1} Mandate
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-sans">
                      {service.tagline}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#181818] tracking-tight font-sans">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#6c6c6c] leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>

                  {/* Deliverables Box */}
                  <div className="bg-[#f2f5f1]/70 rounded-2xl p-5 border border-emerald-900/10 mb-6 space-y-2.5">
                    <div className="text-[11px] font-bold text-[#063633] uppercase tracking-wider font-sans border-b border-emerald-950/10 pb-2">
                      Key Mandate Deliverables
                    </div>
                    <ul className="space-y-2 text-xs text-slate-700 font-sans">
                      {service.keyDeliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start space-x-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pill Button CTA with Lime Arrow Square */}
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] text-[#6c6c6c] font-sans">
                    Confidential Engagement
                  </span>
                  <Link
                    href="#contact"
                    className="group/btn inline-flex items-center pl-5 pr-1.5 py-1.5 rounded-full text-white text-xs font-bold transition-all duration-300 shadow-sm hover:shadow-md"
                    style={{ backgroundColor: config.colors.dark }}
                  >
                    <span>Request Retainer Terms</span>
                    <span
                      className="ml-3 w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs transition-transform duration-300 group-hover/btn:translate-x-0.5"
                      style={{
                        backgroundColor: config.colors.accent,
                        color: config.colors.dark,
                      }}
                    >
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Target Industry Sectors */}
        <div className="mt-14 p-8 rounded-[28px] bg-[#063633] text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8f8a9]">
                Enterprise Domains
              </span>
              <h4 className="text-2xl font-bold text-white font-sans">
                Proven Advisory Footprint Across ASEAN High-Growth Sectors
              </h4>
              <p className="text-xs text-emerald-100/80 font-sans leading-relaxed">
                Our partners carry extensive sector relationships with sovereign wealth funds, commercial banks, and private equity sponsors across the region.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {config.industryFocus?.map((industry, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/10 border border-white/10 text-xs font-medium text-white hover:border-[#c8f8a9]/50 hover:bg-white/15 transition flex items-center space-x-2"
                >
                  <span className="text-[#c8f8a9] font-bold">✦</span>
                  <span>{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
