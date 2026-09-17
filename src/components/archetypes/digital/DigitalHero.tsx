"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Terminal, Zap, Activity, Cpu } from "lucide-react";
import { digitalConfig } from "@/config/firms/digital";

export default function DigitalHero() {
  return (
    <section className="relative bg-[#0F172A] text-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      {/* Subtle Technical Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#2563EB 1px, transparent 1px), radial-gradient(#64748B 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 20px 20px",
        }}
      />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Technical Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Compliance Chip */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-mono text-blue-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>LHDN MyInvois Mandate Ready · Platinum Xero Partner</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.12] font-sans">
              The Modern Cloud Ledger Engineered for Fast-Scaling Malaysian Companies
            </h1>

            {/* Subtext */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans font-light max-w-2xl">
              Eliminate paper receipts, manual Excel reconciliations, and LHDN compliance anxiety. We combine licensed Malaysian Chartered Accountants with modern cloud software—seamlessly automating your e-Invoicing, bank feeds, and monthly board packs.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#scorecard"
                className="group inline-flex items-center space-x-3 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-bold font-sans shadow-lg shadow-blue-500/25 transition-all active:scale-95"
              >
                <span>Run 2-Min Compliance Scorecard</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#digital-booking"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-sm font-medium font-sans transition"
              >
                <Zap className="w-4 h-4 text-blue-400" />
                <span>Book 15-Min System Demo</span>
              </Link>
            </div>

            {/* Credibility Metric Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800">
              {digitalConfig.credibilityMetrics.map((metric, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-white">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-blue-400 font-sans">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-slate-400 font-light">
                    {metric.detail}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Live Terminal / Cloud Dashboard Mockup Visual */}
          <div className="lg:col-span-5">
            <div className="bg-[#0B1329] rounded-2xl border border-slate-700/80 shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden">
              
              {/* Window Header */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-slate-300">ledgerpulse.engine.v2</span>
                </div>
                <span className="text-[11px] text-emerald-400">SYNCHRONIZED</span>
              </div>

              {/* Window Content / Dashboard Stream */}
              <div className="p-6 space-y-4 font-mono text-xs">
                
                {/* Real-time sync stream */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">LHDN Validation Status</span>
                    <span className="text-emerald-400 font-bold">100% Passed</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-blue-500 h-1.5 rounded-full w-full" />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>UUID: a89f-21cb-44e2-9b01</span>
                    <span>Latency: 182ms</span>
                  </div>
                </div>

                {/* Ledger metrics snapshot */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase">Bank Feed Reconciliation</div>
                    <div className="text-base font-bold text-white mt-1">42 / 42 Matched</div>
                    <div className="text-[10px] text-blue-400 mt-0.5">Maybank & CIMB auto-cleared</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase">Monthly Close Progress</div>
                    <div className="text-base font-bold text-white mt-1">Day 3 of Month</div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">P&L & Balance Sheet Ready</div>
                  </div>
                </div>

                {/* Live transaction validation log */}
                <div className="space-y-1.5 pt-1 text-[11px] text-slate-300 border-t border-slate-800/80">
                  <div className="flex items-center space-x-2 text-emerald-400">
                    <span>✔</span>
                    <span>Invoice #INV-2026-881 signed via LHDN PEPPOL</span>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-400">
                    <span>✔</span>
                    <span>Staff PCB & EPF contribution auto-reconciled</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400">
                    <span>✔</span>
                    <span>Dext OCR extracted 28 receipts with 99.6% accuracy</span>
                  </div>
                </div>

                {/* Integration Badges Row */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                  <span>Connected to:</span>
                  <div className="flex items-center space-x-2 text-white font-sans font-bold">
                    <span className="px-2 py-0.5 rounded bg-blue-900/50 border border-blue-700/50 text-blue-300">Xero</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">AutoCount</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-900/50 border border-emerald-700/50 text-emerald-300">MyInvois</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
