import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, FileSpreadsheet, BarChart3, Building2, CheckCircle2, ArrowRight, BookOpen } from "lucide-react";
import { institutionalConfig } from "@/config/firms/institutional";

export default function InstitutionalAuditBreakdown() {
  const iconMap: Record<string, React.ElementType> = {
    ShieldCheck,
    FileSpreadsheet,
    BarChart3,
    Building2,
  };

  return (
    <section id="assurance-breakdown" className="py-20 lg:py-28 bg-white border-b border-[#E2D9CC]">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#F5F2EB] border border-[#E2D9CC] text-xs font-semibold text-[#0B1A30] font-sans uppercase tracking-wider mb-3">
            <span className="text-[#C5A059]">✦</span>
            <span>Statutory Audit Assurance & Practice Areas</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B1A30] leading-[1.18] tracking-tight mb-4">
            Structured Assurance Framework for Malaysian Enterprises
          </h2>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            Independent statutory examinations governed by the International Standards on Auditing (ISA) as adopted by the MIA. Delivering transparency, legal compliance, and stakeholder assurance across all stages of the corporate lifecycle.
          </p>
        </div>

        {/* 4 Structured Practice Columns/Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {institutionalConfig.services.map((service, idx) => {
            const IconComponent = iconMap[service.icon || "ShieldCheck"] || ShieldCheck;

            return (
              <div
                key={service.id}
                className="bg-[#FAF8F5] rounded-2xl border border-[#E2D9CC] p-7 sm:p-9 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle Pillar Roman Numeral */}
                <span className="absolute top-6 right-7 font-serif text-3xl font-bold text-[#C5A059]/20 pointer-events-none select-none">
                  {idx === 0 ? "I" : idx === 1 ? "II" : idx === 2 ? "III" : "IV"}
                </span>

                <div>
                  {/* Header Row */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0B1A30] text-[#C5A059] flex items-center justify-center shadow-md">
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider block">
                        {service.tagline}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1A30] leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>

                  {/* Formal Deliverables Breakdown */}
                  <div className="bg-white rounded-xl p-5 border border-[#E2D9CC]/70 mb-6 space-y-2.5">
                    <div className="text-[11px] font-bold text-[#0B1A30] uppercase tracking-wider font-sans border-b border-slate-100 pb-2 flex items-center justify-between">
                      <span>Statutory Deliverables & Verification</span>
                      <span className="text-[#C5A059] font-mono">ISA / CA 2016</span>
                    </div>

                    <ul className="space-y-2 text-xs text-slate-700 font-sans">
                      {service.keyDeliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start space-x-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-2 border-t border-[#E2D9CC]/70 flex items-center justify-between">
                  <span className="text-[11px] text-[#64748B] font-sans">
                    Governed by MIA By-Laws & Companies Act
                  </span>
                  <Link
                    href="#proposal-intake"
                    className="inline-flex items-center space-x-2 text-xs font-bold text-[#0B1A30] hover:text-[#C5A059] transition uppercase tracking-wider font-sans"
                  >
                    <span>Request Audit Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {/* Industry Sector Breakdown Box */}
        <div className="mt-14 p-8 rounded-2xl bg-[#0B1A30] text-white border border-[#C5A059]/30 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] font-sans">
                Sector Expertise
              </span>
              <h4 className="font-serif text-2xl font-bold text-white">
                Authorized Statutory Audits Across Malaysian Industry Sectors
              </h4>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                Our senior audit teams possess deep domain knowledge in Malaysian accounting treatments for complex revenue recognition, property development inventories, and construction contracts under MFRS 15 and MFRS 116.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {institutionalConfig.industryFocus?.map((industry, iIdx) => (
                <div
                  key={iIdx}
                  className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-200 hover:border-[#C5A059]/50 hover:bg-white/10 transition"
                >
                  <span className="text-[#C5A059] mr-1.5 font-bold">§</span>
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
