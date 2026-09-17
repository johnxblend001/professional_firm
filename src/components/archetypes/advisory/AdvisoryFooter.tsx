"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ChevronUp, ShieldCheck, ArrowRight } from "lucide-react";
import { FirmConfig } from "@/types/firm";
import { advisoryConfig } from "@/config/firms/advisory";

export default function AdvisoryFooter({ config: propConfig }: { config?: FirmConfig }) {
  const config = propConfig || advisoryConfig;

  return (
    <footer className="bg-[#042422] text-emerald-100/90 border-t border-emerald-900/30 pt-16 pb-12 font-sans text-xs">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand & Fiduciary Mandate (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base shadow-md"
                style={{
                  backgroundColor: config.colors.accent,
                  color: config.colors.dark,
                }}
              >
                {config.brandMonogram || "A."}
              </div>
              <div>
                <span className="font-bold text-white text-base block">
                  {config.name}
                </span>
                <span className="text-[10px] text-[#c8f8a9] font-mono tracking-wider font-semibold">
                  Corporate Advisory & Private Wealth
                </span>
              </div>
            </div>

            <p className="text-emerald-200/70 leading-relaxed max-w-md font-light">
              {config.footer.legalNotice}
            </p>

            <div className="pt-2 flex items-center space-x-2 text-[11px] font-mono text-[#c8f8a9]">
              <ShieldCheck className="w-4 h-4" />
              <span>Independent Corporate Consulting & Capital Structuring Practice</span>
            </div>
          </div>

          {/* Col 2: Practice Mandates (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider font-mono text-xs">
              Advisory Mandates
            </h5>
            <ul className="space-y-2 text-emerald-200/70">
              <li>
                <Link href="#services" className="hover:text-[#c8f8a9] transition">
                  M&A Advisory
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#c8f8a9] transition">
                  Private Wealth & Family Office
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#c8f8a9] transition">
                  Turnaround & Restructuring
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#c8f8a9] transition">
                  ASEAN Venture Expansion
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="hover:text-[#c8f8a9] transition">
                  Consultation Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Leadership & Cases (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider font-mono text-xs">
              Governance
            </h5>
            <ul className="space-y-2 text-emerald-200/70">
              <li>
                <Link href="#team-section" className="hover:text-[#c8f8a9] transition">
                  Advisory Leadership
                </Link>
              </li>
              <li>
                <Link href="#cases" className="hover:text-[#c8f8a9] transition">
                  M&A Case Studies
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#c8f8a9] transition">
                  Confidential NDA Protocol
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#c8f8a9] transition">
                  Engagement Terms
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#c8f8a9] transition">
                  Industry Focus
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Regional Offices (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider font-mono text-xs">
              Regional Chambers
            </h5>
            <div className="space-y-2 text-emerald-200/70 leading-relaxed">
              <p>
                <strong className="text-white block font-sans">Kuala Lumpur Flagship:</strong>
                Level 38, Menara Ilham, No. 8, Jalan Binjai, KLCC, 50450 Kuala Lumpur.
              </p>
              <p className="pt-1">
                <strong className="text-white block font-sans">Regional Hub:</strong>
                Marina Bay Financial Centre, Tower 2, Singapore.
              </p>

              <div className="pt-2 space-y-1 font-mono text-[11px] text-white">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-[#c8f8a9]" />
                  <span>{config.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-[#c8f8a9]" />
                  <span>{config.contact.email}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-emerald-200/60 text-[11px]">
          <p>{config.footer.copyright}</p>
          <div className="flex items-center space-x-6">
            <Link href="#contact" className="hover:text-white transition">
              Fiduciary Charter
            </Link>
            <Link href="#services" className="hover:text-white transition">
              Conflict-of-Interest Policy
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-[#c8f8a9] hover:text-[#063633] text-white transition"
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
