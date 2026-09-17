"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Minus, Zap, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { digitalConfig } from "@/config/firms/digital";

export default function DigitalPricingMatrix() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const tiers = digitalConfig.complianceTiers || [];

  const matrixFeatures = [
    {
      category: "Accounting & Bookkeeping",
      items: [
        { name: "General Ledger Software (Xero Platinum / AutoCount)", t1: true, t2: true, t3: true },
        { name: "AI Receipt Extraction (Dext / Hubdoc)", t1: "Up to 30 / mo", t2: "Unlimited", t3: "Unlimited" },
        { name: "Bank Feeds & Reconciliation Frequency", t1: "Monthly", t2: "Daily (<24h)", t3: "Real-Time / Daily" },
        { name: "Monthly Management Accounts (P&L & Balance Sheet)", t1: false, t2: "By Day 10", t3: "By Day 5" },
      ],
    },
    {
      category: "Tax & LHDN Compliance",
      items: [
        { name: "LHDN MyInvois API Gateway Integration", t1: "Self-service setup", t2: "Full Managed API", t3: "Custom ERP Bridge" },
        { name: "Buyer TIN & BRN Validation System", t1: false, t2: true, t3: true },
        { name: "Annual Corporate Tax Return (Form C & e-C)", t1: true, t2: true, t3: true },
        { name: "CP204 Monthly Tax Installment Revisions", t1: false, t2: true, t3: true },
        { name: "Bi-Monthly SST (Sales & Service Tax) Lodgement", t1: false, t2: true, t3: true },
      ],
    },
    {
      category: "Secretarial, Payroll & Advisory",
      items: [
        { name: "Named Company Secretary & Registered Address", t1: true, t2: true, t3: true },
        { name: "Statutory Payroll Administration (EPF, SOCSO, PCB)", t1: false, t2: "Up to 15 staff", t3: "Up to 50 staff" },
        { name: "13-Week Rolling Cash Flow Forecasting", t1: false, t2: false, t3: true },
        { name: "Direct Board Meeting Attendance by C.A.(M)", t1: false, t2: false, t3: "Monthly Session" },
        { name: "Support Turnaround SLA", t1: "24-Hr Email", t2: "4-Hr WhatsApp", t3: "1-Hr Priority Hotline" },
      ],
    },
  ];

  return (
    <section id="pricing-tiers" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-semibold mb-3">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>Transparent Monthly Tiers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight font-sans mb-4">
            Predictable Fixed-Fee Plans Engineered for Your Growth Phase
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans mb-8">
            No surprise billing or hourly rates. All plans include certified Malaysian Chartered Accountants and complete cloud software subscriptions.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center p-1.5 rounded-xl bg-slate-200/70 border border-slate-300 font-sans text-xs font-semibold">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-lg transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-4 py-2 rounded-lg transition-all flex items-center space-x-1.5 ${
                billingCycle === "annual"
                  ? "bg-[#2563EB] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Annual Commitment</span>
              <span className="px-1.5 py-0.2 text-[10px] bg-blue-100 text-blue-800 rounded font-mono font-bold">
                Save 10%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Top Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          {tiers.map((tier) => {
            const isHighlighted = tier.highlighted;
            const price = billingCycle === "monthly" ? tier.priceMonthly : tier.priceAnnual;
            const period = billingCycle === "monthly" ? "/ month" : "/ year";

            return (
              <div
                key={tier.id}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isHighlighted
                    ? "bg-white border-2 border-blue-600 shadow-xl ring-4 ring-blue-600/10 lg:-translate-y-2"
                    : "bg-white border border-slate-200 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Highlight Badge */}
                {isHighlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full bg-[#2563EB] text-white text-[11px] font-bold uppercase tracking-wider font-sans shadow-md flex items-center space-x-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{tier.badge}</span>
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="border-b border-slate-100 pb-5 mb-5">
                    <h3 className="text-xl font-bold text-slate-900 font-sans tracking-tight">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-sans mt-1">
                      {tier.tagline}
                    </p>

                    <div className="mt-4 flex items-baseline space-x-1 font-mono">
                      <span className="text-3xl sm:text-4xl font-bold text-slate-900">
                        {price}
                      </span>
                      <span className="text-xs text-slate-500 font-sans font-normal">
                        {period}
                      </span>
                    </div>

                    <div className="mt-2 text-[11px] text-blue-600 font-mono font-medium">
                      {tier.turnoverRange}
                    </div>
                  </div>

                  {/* Key Deliverables list */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                      Plan Inclusions:
                    </span>
                    <ul className="space-y-2.5 text-xs text-slate-700 font-sans">
                      {tier.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start space-x-2.5">
                          <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 stroke-[2.5]" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA & SLA */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Guaranteed SLA:</span>
                    <span className="text-slate-900 font-bold">{tier.sla}</span>
                  </div>

                  <Link
                    href="#digital-booking"
                    className={`w-full inline-flex items-center justify-center space-x-2 py-3 rounded-xl text-xs font-bold font-sans uppercase tracking-wider transition ${
                      isHighlighted
                        ? "bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-md shadow-blue-500/20"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                    }`}
                  >
                    <span>Select {tier.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {/* Tabular Comparison Matrix */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
            <div>
              <h4 className="font-bold text-lg font-sans">
                Detailed Side-by-Side Feature Matrix
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Complete comparison of deliverables, integrations, and response SLAs across all 3 tiers.
              </p>
            </div>
            <span className="text-xs font-mono text-blue-400 hidden sm:inline">
              MFRS & LHDN Compliant
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-3.5 px-6">Service Scope</th>
                  <th className="py-3.5 px-4 text-center">Statutory Essentials</th>
                  <th className="py-3.5 px-4 text-center bg-blue-50/50 text-blue-900">Cloud Growth (Most Popular)</th>
                  <th className="py-3.5 px-4 text-center">Virtual CFO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {matrixFeatures.map((cat, cIdx) => (
                  <React.Fragment key={cIdx}>
                    <tr className="bg-slate-100/70 text-slate-900 font-bold text-[11px] font-mono">
                      <td colSpan={4} className="py-2.5 px-6">
                        {cat.category}
                      </td>
                    </tr>
                    {cat.items.map((item, iIdx) => (
                      <tr key={iIdx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3 px-6 text-slate-800 font-medium">
                          {item.name}
                        </td>
                        <td className="py-3 px-4 text-center text-slate-600">
                          {typeof item.t1 === "boolean" ? (
                            item.t1 ? (
                              <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                            ) : (
                              <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-mono text-[11px]">{item.t1}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center font-semibold bg-blue-50/30 text-blue-900">
                          {typeof item.t2 === "boolean" ? (
                            item.t2 ? (
                              <Check className="w-4 h-4 text-blue-600 mx-auto stroke-[2.5]" />
                            ) : (
                              <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-mono text-[11px] text-blue-700 font-bold">{item.t2}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center text-slate-800 font-medium">
                          {typeof item.t3 === "boolean" ? (
                            item.t3 ? (
                              <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                            ) : (
                              <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-mono text-[11px] font-bold text-slate-900">{item.t3}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
