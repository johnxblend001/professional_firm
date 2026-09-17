import React from "react";
import { Cpu, CheckCircle2, Zap, ArrowRight, Layers, Shield } from "lucide-react";
import { digitalConfig } from "@/config/firms/digital";

export default function DigitalTechStack() {
  const stack = digitalConfig.techStack || [];

  return (
    <section id="tech-stack" className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-semibold mb-3">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>Verified Integrations</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight font-sans">
              Certified Cloud Accounting & ERP Ecosystem
            </h2>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm max-w-md font-sans">
            We don&apos;t force you onto proprietary software. We operate natively inside industry-standard platforms with full API synchronicity.
          </p>
        </div>

        {/* 5 Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-blue-600 uppercase font-semibold">
                  {item.category}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono font-medium">
                  {item.status}
                </span>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900 font-sans group-hover:text-blue-600 transition">
                  {item.name}
                </h4>
                <div className="text-xs font-semibold text-slate-500 font-mono mt-0.5">
                  {item.tier}
                </div>
              </div>

              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                {item.description}
              </p>

              <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Setup & Migration:</span>
                <span className="text-slate-900 font-semibold">Included in Retainer</span>
              </div>
            </div>
          ))}

          {/* Direct Bank Feeds Card */}
          <div className="p-6 rounded-2xl bg-[#0F172A] text-white border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-blue-400 uppercase font-semibold">
                  Banking Integration
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-blue-900/60 text-blue-300 font-mono">
                  Direct API
                </span>
              </div>

              <h4 className="text-lg font-bold text-white font-sans">
                Direct Malaysian Bank Synchronization
              </h4>

              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                Automated electronic statement capture with Maybank2u Biz, CIMB BizChannel, RHB Reflex, Public Bank Enterprise, and Alliance BizSmart.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-blue-400 flex items-center justify-between">
              <span>Security Standard:</span>
              <span className="text-white">256-Bit Bank Encryption</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
