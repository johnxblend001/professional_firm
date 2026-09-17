import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Cpu, ChevronUp, ShieldCheck, ArrowRight } from "lucide-react";
import { digitalConfig } from "@/config/firms/digital";

export default function DigitalFooter() {
  return (
    <footer className="bg-[#0B1329] text-slate-300 border-t border-slate-800 pt-16 pb-12 font-sans text-xs">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800/80">
          
          {/* Col 1: Tech Monogram & Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#0F172A] border border-slate-700 flex items-center justify-center font-mono font-bold text-sm text-white">
                <span>LP</span>
                <span className="text-[#2563EB]">.</span>
              </div>
              <div>
                <span className="font-bold text-white text-base block">
                  {digitalConfig.name}
                </span>
                <span className="text-[10px] text-blue-400 font-mono tracking-wider font-semibold">
                  Digital Chartered Accountants · Xero Platinum Partner
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-md font-light">
              {digitalConfig.footer.legalNotice}
            </p>

            <div className="pt-2 flex items-center space-x-2 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>All systems operational · LHDN MyInvois API 1.0 Connected</span>
            </div>
          </div>

          {/* Col 2: Architecture & Compliance (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider font-mono text-xs">
              Cloud Solutions
            </h5>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="#bento-grid" className="hover:text-white transition">
                  Daily Bank Feeds
                </Link>
              </li>
              <li>
                <Link href="#scorecard" className="hover:text-white transition">
                  LHDN e-Invoicing Bridge
                </Link>
              </li>
              <li>
                <Link href="#bento-grid" className="hover:text-white transition">
                  Digital Secretarial
                </Link>
              </li>
              <li>
                <Link href="#pricing-tiers" className="hover:text-white transition">
                  Virtual CFO Advisory
                </Link>
              </li>
              <li>
                <Link href="#tech-stack" className="hover:text-white transition">
                  Xero & ERP Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Plan Tiers (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider font-mono text-xs">
              Plans & Scorecard
            </h5>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="#pricing-tiers" className="hover:text-white transition">
                  Statutory Essentials
                </Link>
              </li>
              <li>
                <Link href="#pricing-tiers" className="hover:text-white transition">
                  Cloud Growth Tier
                </Link>
              </li>
              <li>
                <Link href="#pricing-tiers" className="hover:text-white transition">
                  Virtual CFO Tier
                </Link>
              </li>
              <li>
                <Link href="#scorecard" className="hover:text-white transition">
                  Compliance Scorecard
                </Link>
              </li>
              <li>
                <Link href="#digital-booking" className="hover:text-white transition">
                  Book 15-Min Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Technology Centres (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider font-mono text-xs">
              Practice Hubs
            </h5>
            <div className="space-y-2 text-slate-400 leading-relaxed">
              <p>
                <strong className="text-white block font-sans">Kuala Lumpur:</strong>
                Unit 12-03, Level 12, The Horizon Phase 2, Bangsar South, 59200 Kuala Lumpur.
              </p>
              <p className="pt-1">
                <strong className="text-white block font-sans">Penang:</strong>
                Level 6, Gurney Tower, Gurney Drive, Georgetown, Pulau Pinang.
              </p>

              <div className="pt-2 space-y-1 font-mono text-[11px] text-slate-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span>+60 3-8686 2100</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span>hello@ledgerpulse.my</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>{digitalConfig.footer.copyright}</p>
          <div className="flex items-center space-x-6">
            <Link href="#scorecard" className="hover:text-white transition">
              LHDN MyInvois Guidelines
            </Link>
            <Link href="#tech-stack" className="hover:text-white transition">
              Security & SLA Protocol
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-1.5 rounded bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-300 transition"
              aria-label="Back to Top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
