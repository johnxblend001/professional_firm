"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckSquare, Square, AlertTriangle, CheckCircle2, ArrowRight, Activity, HelpCircle } from "lucide-react";
import { digitalConfig } from "@/config/firms/digital";

export default function DigitalScorecard() {
  const checklist = digitalConfig.checklistItems || [];

  // Default some checked to demonstrate interactive state
  const [checkedIds, setCheckedIds] = useState<string[]>([
    "bank-sync",
    "paperless-sec",
  ]);

  const toggleItem = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculate score
  const totalPoints = checklist.reduce((acc, item) => acc + item.points, 0);
  const currentScore = checklist
    .filter((item) => checkedIds.includes(item.id))
    .reduce((acc, item) => acc + item.points, 0);

  const percentage = Math.round((currentScore / totalPoints) * 100);

  // Status computation
  let statusBadge = {
    label: "Critical Compliance Risk",
    color: "text-red-600 bg-red-50 border-red-200",
    description: "Your business faces severe regulatory audit risk and potential LHDN Section 120 e-invoicing non-compliance fines.",
  };

  if (percentage >= 80) {
    statusBadge = {
      label: "Audit-Ready · Cloud Excellence",
      color: "text-emerald-700 bg-emerald-50 border-emerald-200",
      description: "Your accounting workflows meet top-tier standards. Ready for high-growth scaling and institutional audits.",
    };
  } else if (percentage >= 45) {
    statusBadge = {
      label: "Partial Compliance · Action Needed",
      color: "text-amber-700 bg-amber-50 border-amber-200",
      description: "Foundational bookkeeping is in place, but urgent gaps exist in LHDN e-Invoicing API integration or month-end close speed.",
    };
  }

  return (
    <section id="scorecard" className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-semibold mb-3">
            <Activity className="w-3.5 h-3.5 text-blue-600" />
            <span>Interactive Audit & Compliance Assessment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight font-sans mb-4">
            Malaysian SME Compliance Readiness Scorecard
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            Check off the systems currently active in your Sdn Bhd to calculate your real-time compliance score and identify exposure to LHDN and SSM statutory penalties.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Checkbox List (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {checklist.map((item) => {
              const isChecked = checkedIds.includes(item.id);

              return (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer select-none flex items-start space-x-4 ${
                    isChecked
                      ? "bg-blue-50/60 border-blue-300 shadow-xs"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="pt-0.5 shrink-0 text-blue-600">
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 fill-blue-600 text-white" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-400" />
                    )}
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className={`text-sm font-bold font-sans ${isChecked ? "text-blue-900" : "text-slate-900"}`}>
                        {item.label}
                      </h4>
                      <span className="font-mono text-xs font-bold text-blue-600 shrink-0">
                        +{item.points} pts
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 font-sans leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center space-x-3 text-[11px] pt-1">
                      <span className="font-mono text-slate-500">
                        Target: {item.deadline}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium font-sans">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Scorecard Calculation Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-[#0F172A] text-white rounded-2xl border border-slate-800 p-8 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Live Assessment Engine
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-xs">
                  {checkedIds.length} of {checklist.length} Passed
                </span>
              </div>

              {/* Big Score Display */}
              <div className="text-center py-2 space-y-2">
                <div className="font-mono text-6xl sm:text-7xl font-bold tracking-tight text-white flex items-baseline justify-center">
                  <span>{percentage}</span>
                  <span className="text-3xl text-slate-500 font-normal">/100</span>
                </div>

                <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`h-2.5 rounded-full transition-all duration-500 ${
                      percentage >= 80 ? "bg-emerald-500" : percentage >= 45 ? "bg-blue-500" : "bg-amber-500"
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>

              {/* Status Badge */}
              <div className="space-y-2">
                <div className={`p-3.5 rounded-xl border text-center font-bold text-xs uppercase tracking-wider font-mono ${statusBadge.color}`}>
                  {statusBadge.label}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans text-center">
                  {statusBadge.description}
                </p>
              </div>

              {/* Breakdown Items */}
              <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 text-xs font-mono space-y-2">
                <div className="text-slate-400 font-bold uppercase text-[10px]">
                  Immediate Action Items:
                </div>
                {checklist
                  .filter((item) => !checkedIds.includes(item.id))
                  .slice(0, 2)
                  .map((missing, mIdx) => (
                    <div key={mIdx} className="flex items-start space-x-2 text-amber-400 text-[11px]">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{missing.label}</span>
                    </div>
                  ))}
                {checklist.filter((item) => !checkedIds.includes(item.id)).length === 0 && (
                  <div className="text-emerald-400 flex items-center space-x-2 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>All compliance baselines satisfied!</span>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="pt-2">
                <Link
                  href="#digital-booking"
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold font-sans uppercase tracking-wider shadow-lg transition active:scale-95"
                >
                  <span>Book Free 15-Min Gap Audit Call</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="text-center text-[10px] text-slate-400 mt-2 font-mono">
                  Direct review with Senior Cloud Accountant Kenneth Wong, C.A.(M)
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
