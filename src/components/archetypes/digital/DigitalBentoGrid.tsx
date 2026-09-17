import React from "react";
import Link from "next/link";
import { Cpu, ShieldCheck, Zap, BarChart3, Building2, CheckCircle2, ArrowRight, RefreshCw, FileText } from "lucide-react";
import { digitalConfig } from "@/config/firms/digital";

export default function DigitalBentoGrid() {
  return (
    <section id="bento-grid" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span>Modular Cloud Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.18] font-sans mb-4">
            Four Connected Systems Powering Modern Corporate Compliance
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            Replace fragmented bookkeepers and slow email exchanges with an automated finance stack managed by certified Malaysian Chartered Accountants.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: LHDN e-Invoicing API Engine (Span 7 cols) */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-xs font-semibold">
                  100% Tax Compliant
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider block mb-1">
                  National Tax Mandate
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans tracking-tight">
                  LHDN MyInvois Automated API Gateway & Validation
                </h3>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                Direct programmatic integration with the Inland Revenue Board of Malaysia. Automatically generate validated XML/JSON payloads, embed cryptographic validation UUIDs, and generate buyer-compliant QR codes without operational disruptions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-700 space-y-1">
                  <span className="font-bold text-slate-900 block font-mono">B2B & B2C Validation</span>
                  <span className="text-slate-500">Automated TIN and BRN check with real-time clearance.</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-700 space-y-1">
                  <span className="font-bold text-slate-900 block font-mono">Consolidated Invoicing</span>
                  <span className="text-slate-500">End-of-month aggregation for retail and consumer sales.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">
                Covers Phase 1, 2 & 3 Mandates
              </span>
              <Link
                href="#scorecard"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 font-sans uppercase tracking-wider"
              >
                <span>Verify Your e-Invois Readiness</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bento Card 2: Daily Automated Bank Feeds (Span 5 cols) */}
          <div className="md:col-span-5 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-blue-400" />
                </div>
                <span className="font-mono text-xs text-slate-500">
                  Daily Sync
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider block mb-1">
                  Automated General Ledger
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-sans tracking-tight">
                  Zero-Backlog Daily Bank Reconciliation
                </h3>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                Direct enterprise bank feeds with Maybank2u Biz, CIMB BizChannel, RHB Reflex, and Public Bank PB enterprise. Unmatched receipts are flagged instantly via automated WhatsApp bots.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-900 text-white font-mono text-xs space-y-1.5">
                <div className="flex justify-between text-slate-400">
                  <span>Reconciliation SLA:</span>
                  <span className="text-emerald-400">Under 24 Hours</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Receipt Extraction:</span>
                  <span className="text-blue-400">AI Dext / WhatsApp</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-sans">
                Clean books every morning
              </span>
              <span className="text-xs font-bold text-slate-900 font-mono">Xero Platinum</span>
            </div>
          </div>

          {/* Bento Card 3: Paperless Corporate Secretarial & Payroll (Span 5 cols) */}
          <div className="md:col-span-5 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-xs">
                  Companies Act 2016
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider block mb-1">
                  100% Digital Corporate Governance
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-sans tracking-tight">
                  Paperless SSM Secretarial & Statutory Payroll
                </h3>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                Execute directors&apos; resolutions, AGM approvals, and share transfers anywhere via mobile digital signing. Automated monthly payroll computes EPF, SOCSO, EIS, and LHDN PCB with one-click direct debit files.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 font-sans">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Cloud statutory registers & SSM annual returns</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Employee mobile portal for payslips & EA forms</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-sans">
                Zero courier dispatch delays
              </span>
              <span className="text-xs font-bold text-blue-600 font-mono">100% Digital</span>
            </div>
          </div>

          {/* Bento Card 4: Virtual CFO & 13-Week Cash Flow Intelligence (Span 7 cols) */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-mono text-xs font-semibold">
                  Board-Ready Intelligence
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider block mb-1">
                  Executive Financial Clarity
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans tracking-tight">
                  Virtual CFO & Rolling 13-Week Cashflow Stress Testing
                </h3>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                Gain deep managerial visibility into unit margins, customer payment delays, and cash runway. Your dedicated Chartered Accountant prepares formal board management packs and attends monthly director review sessions.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-1 text-center font-mono">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-400 text-[10px]">Monthly Close</div>
                  <div className="text-slate-900 font-bold text-sm mt-0.5">Day 5 Close</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-400 text-[10px]">Cash Visibility</div>
                  <div className="text-slate-900 font-bold text-sm mt-0.5">13-Week Horizon</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-400 text-[10px]">Direct SLA</div>
                  <div className="text-blue-600 font-bold text-sm mt-0.5">4-Hr WhatsApp</div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">
                PowerBI / Fathom Connected
              </span>
              <Link
                href="#digital-booking"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 font-sans uppercase tracking-wider"
              >
                <span>Request Sample Board Pack</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
