"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, CheckCircle2, ArrowRight, ShieldCheck, DollarSign } from "lucide-react";

export default function AdvisoryCaseStudies() {
  const cases = [
    {
      id: "cross-border-ma",
      title: "Cross-Border M&A: RM85M Strategic Acquisition of Regional Logistics Platform",
      category: "M&A Advisory · Buy-Side Representation",
      dealSize: "RM 85,000,000",
      description:
        "Advised a leading Malaysian supply chain group on acquiring a Singapore-headquartered cold-chain logistics provider with operations across Johor and Klang Valley.",
      deliverables: [
        "Quality of Earnings (QoE) and adjusted EBITDA commercial due diligence",
        "Cross-border holding company structuring across Labuan and Singapore",
        "Negotiated 18% seller earn-out mechanism tied to 24-month retention milestones",
      ],
      outcome: "Seamless completion within 16 weeks, expanding client revenue footprint by 44%.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "family-office-succession",
      title: "Generational Wealth Preservation: RM120M Family Office Constitution & Asset Trust",
      category: "Private Wealth · Family Office Governance",
      dealSize: "RM 120,000,000",
      description:
        "Retained by 2nd-generation founders of a prominent Malaysian manufacturing conglomerate to structure a multi-generational family constitution and offshore asset protection trust.",
      deliverables: [
        "Drafted bespoke family constitution covering voting covenants and dividend rules",
        "Established irrevocable private trust structures mitigating estate stamp duties",
        "Created independent Family Investment Committee charter with quarterly governance",
      ],
      outcome: "Guaranteed conflict-free generational wealth transfer across 14 family beneficiaries.",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "growth-capital",
      title: "Growth Capital Financing: RM45M Syndicated Mezzanine Facility for Renewable Energy",
      category: "Debt & Equity Syndication · Infrastructure",
      dealSize: "RM 45,000,000",
      description:
        "Structured and closed a bespoke mezzanine debt and convertible equity facility for a solar EPC contractor scaling grid-scale industrial rooftop projects across Peninsular Malaysia.",
      deliverables: [
        "Built dynamic 10-year project finance financial model with debt-service sensitivity",
        "Secured consortium term sheet from regional development finance institutions",
        "Structured subordinated debt notes with warrant-based equity kicker",
      ],
      outcome: "Reduced weighted average cost of capital (WACC) by 260 basis points.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const activeCase = cases[activeTab];

  return (
    <section id="cases" className="py-20 lg:py-28 bg-[#f2f5f1] border-b border-emerald-950/10">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-900/10 text-xs font-semibold text-[#063633] mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-800" />
              <span>Proven Deal Execution</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#181818] tracking-tight leading-[1.18] font-sans">
              Representative Corporate Transactions
            </h2>
          </div>

          {/* Deal Selector Tabs */}
          <div className="flex items-center space-x-2 bg-white p-1.5 rounded-2xl border border-gray-200">
            {cases.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-sans transition-all ${
                  activeTab === idx
                    ? "bg-[#063633] text-[#c8f8a9] shadow-sm"
                    : "text-[#6c6c6c] hover:text-[#181818]"
                }`}
              >
                Deal {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Deal Dossier Card */}
        <div className="bg-white rounded-[28px] border border-gray-200/90 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-[#063633] text-[#c8f8a9] text-xs font-mono font-bold uppercase tracking-wider">
                  {activeCase.category}
                </span>
                <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Deal Value: {activeCase.dealSize}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#181818] leading-snug font-sans">
                {activeCase.title}
              </h3>

              <p className="text-[#6c6c6c] text-sm leading-relaxed font-sans">
                {activeCase.description}
              </p>

              {/* Deliverables */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#063633] font-sans">
                  Advisory Interventions & Governance:
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#181818] font-sans">
                  {activeCase.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome Box */}
              <div className="p-4 rounded-2xl bg-[#f2f5f1] border border-emerald-950/10 text-xs font-sans space-y-1">
                <span className="text-emerald-800 font-bold uppercase tracking-wider block">
                  Mandate Outcome:
                </span>
                <span className="text-[#181818] font-medium">{activeCase.outcome}</span>
              </div>

              <div className="pt-2">
                <Link
                  href="#contact"
                  className="group inline-flex items-center pl-6 pr-2 py-2 rounded-full text-white text-xs font-bold transition-all duration-300 shadow-md hover:shadow-lg"
                  style={{ backgroundColor: "#063633" }}
                >
                  <span>Inquire on Similar Transaction Structure</span>
                  <span
                    className="ml-3 w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs transition-transform group-hover:translate-x-0.5"
                    style={{ backgroundColor: "#c8f8a9", color: "#063633" }}
                  >
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src={activeCase.image}
                  alt={activeCase.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#063633]/60 via-transparent to-transparent" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
