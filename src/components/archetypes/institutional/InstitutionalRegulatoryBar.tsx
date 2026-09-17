import React from "react";
import { ShieldCheck, CheckCircle2, Award, FileCheck, Building } from "lucide-react";
import { institutionalConfig } from "@/config/firms/institutional";

export default function InstitutionalRegulatoryBar() {
  return (
    <section id="credentials" className="py-14 bg-[#F5F2EB] border-b border-[#E2D9CC]">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-semibold text-[#0B1A30] font-sans tracking-wider uppercase mb-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>Statutory Compliance Standing</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1A30] tracking-tight">
              Regulated Practice Credentials & Accreditations
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#64748B] max-w-md">
            All audit reports and statutory tax representations are conducted in strict compliance with the Accountants Act 1967 and Companies Act 2016.
          </p>
        </div>

        {/* 4 Accreditations Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {institutionalConfig.accreditations?.map((badge, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 border border-[#E2D9CC] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#C5A059] group-hover:h-1.5 transition-all" />

              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#0B1A30]/5 border border-[#C5A059]/30 flex items-center justify-center text-[#0B1A30]">
                  <FileCheck className="w-5 h-5 text-[#C5A059]" />
                </div>
                <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Verified Active</span>
                </span>
              </div>

              <h4 className="font-serif font-bold text-base text-[#0B1A30] leading-snug mb-1">
                {badge.name}
              </h4>
              <p className="text-xs font-medium text-[#C5A059] mb-2">
                {badge.subtitle}
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#64748B]">
                <span>Statutory Authority:</span>
                <span className="font-mono font-medium text-[#0B1A30]">{badge.code}</span>
              </div>
              <div className="text-[10px] text-slate-400 mt-1">
                Under {badge.actReference}
              </div>
            </div>
          ))}
        </div>

        {/* Footnote reassurance */}
        <div className="mt-6 pt-4 border-t border-[#E2D9CC]/60 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-2">
          <span>
            Practice Audit Firm License granted by the Minister of Finance (Treasury Malaysia).
          </span>
          <span className="font-medium text-[#0B1A30]">
            Audit License Reference: NF-4228 · Approval Section 263 CA 2016
          </span>
        </div>

      </div>
    </section>
  );
}
