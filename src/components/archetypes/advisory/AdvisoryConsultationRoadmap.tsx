"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Layers, FileText, Users } from "lucide-react";

export default function AdvisoryConsultationRoadmap() {
  const phases = [
    {
      step: "01",
      name: "Diagnostic Discovery & Valuation Audit",
      timeline: "Weeks 1 – 2",
      description:
        "Comprehensive balance sheet stress-testing, historical earnings quality (QoE) verification, and confidential enterprise valuation benchmarking against ASEAN market multiples.",
      deliverable: "Diagnostic Roadmap & Valuation Memo",
    },
    {
      step: "02",
      name: "Transaction Structuring & Deal Modeling",
      timeline: "Weeks 3 – 5",
      description:
        "Designing optimal debt-equity capitalization structures, cross-border tax efficiencies, holding company reorganizations, and governance covenants for directors.",
      deliverable: "Definitive Term Sheet & Structure Memorandum",
    },
    {
      step: "03",
      name: "Capital Syndication & Counterparty Matchmaking",
      timeline: "Weeks 6 – 10",
      description:
        "Confidential outreach to vetted institutional sponsors, mezzanine funds, banking syndicates, and strategic buyers across Kuala Lumpur, Singapore, and Jakarta.",
      deliverable: "Confidential Information Pack & Buyer Bids",
    },
    {
      step: "04",
      name: "Post-Deal Governance & Generational Stewardship",
      timeline: "Ongoing Retainer",
      description:
        "Long-term fiduciary oversight, multi-generational family office constitution management, and post-merger synergy integration monitoring for sustainable wealth creation.",
      deliverable: "Quarterly Board Review & Portfolio Stewardship",
    },
  ];

  return (
    <section id="roadmap" className="py-20 lg:py-28 bg-white border-b border-gray-200/80">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f2f5f1] border border-emerald-900/10 text-xs font-semibold text-[#063633] mb-3">
            <span className="text-[#063633]">✦</span>
            <span>4-Phase Execution Framework</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#181818] tracking-tight leading-[1.18] font-sans mb-4">
            How We Guide High-Stakes Corporate Mandates
          </h2>

          <p className="text-[#6c6c6c] text-sm sm:text-base leading-relaxed font-sans">
            From initial confidential audit to multi-generational capital preservation, our structured methodology ensures zero surprises and maximum stakeholder certainty.
          </p>
        </div>

        {/* 4 Phases Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {phases.map((phase, idx) => (
            <div
              key={phase.step}
              className="bg-[#f2f5f1]/60 rounded-[24px] p-7 border border-emerald-950/10 flex flex-col justify-between hover:bg-white hover:shadow-xl hover:border-emerald-600/30 transition-all duration-300 group relative"
            >
              {/* Step Pill */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-12 h-12 rounded-2xl bg-[#063633] text-[#c8f8a9] flex items-center justify-center font-mono font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
                    {phase.step}
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-emerald-800 bg-emerald-100/60 px-2.5 py-1 rounded-full">
                    {phase.timeline}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#181818] tracking-tight mb-3 font-sans leading-snug">
                  {phase.name}
                </h3>

                <p className="text-xs text-[#6c6c6c] leading-relaxed font-sans mb-5">
                  {phase.description}
                </p>
              </div>

              {/* Deliverable Badge */}
              <div className="pt-4 border-t border-emerald-950/10 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold block">
                  Phase Milestone Deliverable:
                </span>
                <span className="text-xs font-semibold text-[#181818] flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>{phase.deliverable}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#063633] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-xs sm:text-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c8f8a9] shrink-0" />
            <span>All mandates conducted under strictly bilateral Non-Disclosure Agreements (NDAs).</span>
          </div>

          <Link
            href="#contact"
            className="group inline-flex items-center pl-5 pr-1.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-md shrink-0"
            style={{ backgroundColor: "#c8f8a9", color: "#063633" }}
          >
            <span>Request NDA & Consultation</span>
            <span className="ml-3 w-6 h-6 rounded-lg bg-[#063633] text-[#c8f8a9] flex items-center justify-center font-bold text-xs transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="w-3 h-3 stroke-[2.5]" />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
