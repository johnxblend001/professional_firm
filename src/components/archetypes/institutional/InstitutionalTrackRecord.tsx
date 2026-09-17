import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Scale, CheckCircle2, ArrowRight, ShieldCheck, FileText } from "lucide-react";

export default function InstitutionalTrackRecord() {
  const cases = [
    {
      id: "statutory-mfrs",
      category: "Statutory Audit & MFRS Compliance",
      code: "AUD-1049/2025",
      title: "Statutory Financial Audit & Stock Valuation for Multi-State Retail Conglomerate",
      context:
        "Retained by a premier Malaysian consumer retail enterprise operating 42 stores across Peninsular Malaysia to conduct statutory financial audits under the Companies Act 2016.",
      findings: [
        "Identified unrecorded shrinkage and obsolete inventory provisions under MFRS 102",
        "Assisted board with restructuring supplier consignment liabilities",
        "Rendered clean unqualified independent auditor's report submitted seamlessly to SSM MBRS",
      ],
      impact: "Zero SSM compliance queries and preserved RM35M revolving banking credit facilities.",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "lhdn-defense",
      category: "Corporate Tax Defense & Dispute Resolution",
      code: "TAX-0842/2024",
      title: "LHDN Field Audit Controversy Representation & Capital Allowance Reconstruction",
      context:
        "Defended an industrial plastics manufacturing Sdn Bhd against an aggressive RM4.2M tax assessment and proposed Section 140 penalty investigation by the Inland Revenue Board.",
      findings: [
        "Reconstructed 5 years of historical plant & machinery capital allowance claims under Schedule 3",
        "Conducted detailed technical dispute meetings with LHDN Senior Audit Officers in Cyberjaya",
        "Proved commercial validity of inter-company management service fees under Malaysian Transfer Pricing rules",
      ],
      impact: "Mitigated proposed assessment from RM4.2M down to RM380K, waiving 100% of punitive penalties.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "voluntary-winding-up",
      category: "Corporate Restructuring & Liquidation",
      code: "LIQ-0312/2024",
      title: "Members' Voluntary Liquidation (MVL) & Surplus Asset Distribution (RM85M)",
      context:
        "Appointed by shareholders as Approved Liquidators under Section 439 of the Companies Act 2016 to conduct the solvent winding-up of a legacy investment holding group.",
      findings: [
        "Formally lodged Declaration of Solvency with the Companies Commission of Malaysia (SSM)",
        "Obtained comprehensive tax clearance certificates from LHDN, Kastam, and EPF",
        "Executed orderly distribution in specie of high-value commercial properties to surviving beneficiaries",
      ],
      impact: "Successfully dissolved 4 dormant entities within 9 months, saving over RM180,000 in annual secretarial and compliance fees.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const activeCase = cases[activeTab];

  return (
    <section id="track-record" className="py-20 lg:py-28 bg-white border-b border-[#E2D9CC]">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#F5F2EB] border border-[#E2D9CC] text-xs font-semibold text-[#0B1A30] uppercase tracking-wider mb-3">
              <Scale className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Authoritative Practice Records</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0B1A30] tracking-tight leading-[1.2]">
              Representative Audit Engagements & Inquests
            </h2>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center space-x-2 bg-[#F5F2EB] p-1.5 rounded-xl border border-[#E2D9CC]">
            {cases.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setActiveTab(idx)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold font-sans transition-all ${
                  activeTab === idx
                    ? "bg-[#0B1A30] text-[#C5A059] shadow-sm"
                    : "text-slate-600 hover:text-[#0B1A30]"
                }`}
              >
                Inquest {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Case Inquest Card */}
        <div className="bg-[#FAF8F5] rounded-2xl border border-[#E2D9CC] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded bg-[#0B1A30] text-[#C5A059] text-xs font-bold uppercase tracking-wider font-sans">
                  {activeCase.category}
                </span>
                <span className="font-mono text-xs text-slate-500">
                  Case Docket: {activeCase.code}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1A30] leading-snug">
                {activeCase.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                {activeCase.context}
              </p>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold text-[#0B1A30] uppercase tracking-wider font-sans">
                  Auditor Findings & Actions:
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-sans">
                  {activeCase.findings.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact Callout */}
              <div className="p-4 rounded-xl bg-white border border-[#C5A059]/40 text-xs text-[#0B1A30] font-sans">
                <strong className="text-[#C5A059] uppercase tracking-wider block mb-1">
                  Statutory Outcome:
                </strong>
                <span>{activeCase.impact}</span>
              </div>

              <div className="pt-2">
                <Link
                  href="#proposal-intake"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-[#0B1A30] hover:bg-[#132847] text-[#C5A059] text-xs font-bold uppercase tracking-wider transition shadow-md"
                >
                  <span>Request Similar Engagement Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg border-2 border-[#E2D9CC]">
                <Image
                  src={activeCase.image}
                  alt={activeCase.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A30]/60 via-transparent to-transparent" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
