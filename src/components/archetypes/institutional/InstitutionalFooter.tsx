import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Printer, Shield, ChevronUp, Scale } from "lucide-react";
import { institutionalConfig } from "@/config/firms/institutional";

export default function InstitutionalFooter() {
  return (
    <footer className="bg-[#071224] text-[#E2D9CC] border-t-2 border-[#C5A059]/40 pt-16 pb-12 font-sans">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10 text-xs">
          
          {/* Col 1: Monogram Crest & Regulatory Mandate (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-[#0B1A30] border border-[#C5A059] flex items-center justify-center font-serif font-bold text-[#C5A059] text-sm">
                SAC
              </div>
              <div>
                <span className="font-serif font-bold text-white text-base block">
                  {institutionalConfig.name}
                </span>
                <span className="text-[10px] text-[#C5A059] uppercase tracking-widest font-semibold">
                  Chartered Accountants · Approved Auditors
                </span>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed max-w-md font-light">
              {institutionalConfig.footer.legalNotice}
            </p>

            <div className="pt-2 flex items-center space-x-3 text-[11px] text-[#C5A059]">
              <Scale className="w-4 h-4" />
              <span>Practising continuously under MIA Member Firm No. 4228 since 1992.</span>
            </div>
          </div>

          {/* Col 2: Statutory Practice Areas (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-serif font-bold text-white text-sm uppercase tracking-wider">
              Statutory Areas
            </h5>
            <ul className="space-y-2 text-slate-300 text-xs">
              <li>
                <Link href="#assurance-breakdown" className="hover:text-[#C5A059] transition">
                  Statutory Audit
                </Link>
              </li>
              <li>
                <Link href="#assurance-breakdown" className="hover:text-[#C5A059] transition">
                  Corporate Tax Defense
                </Link>
              </li>
              <li>
                <Link href="#assurance-breakdown" className="hover:text-[#C5A059] transition">
                  Financial Due Diligence
                </Link>
              </li>
              <li>
                <Link href="#assurance-breakdown" className="hover:text-[#C5A059] transition">
                  Members&apos; Voluntary Liquidation
                </Link>
              </li>
              <li>
                <Link href="#assurance-breakdown" className="hover:text-[#C5A059] transition">
                  Companies Act Secretarial
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Accreditations (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-serif font-bold text-white text-sm uppercase tracking-wider">
              Credentials
            </h5>
            <ul className="space-y-2 text-slate-300 text-xs">
              <li>
                <span className="text-[#C5A059] font-bold">MIA:</span> Firm NF 4228
              </li>
              <li>
                <span className="text-[#C5A059] font-bold">SSM:</span> CA 2016 Sec 263
              </li>
              <li>
                <span className="text-[#C5A059] font-bold">LHDN:</span> ITA Sec 153 Agent
              </li>
              <li>
                <span className="text-[#C5A059] font-bold">MIPA:</span> Approved Liquidator
              </li>
              <li>
                <span className="text-[#C5A059] font-bold">CTIM:</span> Fellow Member
              </li>
            </ul>
          </div>

          {/* Col 4: Chambers Address & Phone (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-serif font-bold text-white text-sm uppercase tracking-wider">
              Audit Chambers
            </h5>
            <div className="space-y-2 text-slate-300 text-xs leading-relaxed">
              <p>
                <strong className="text-white block">Principal Office:</strong>
                Suite 609, 6th Floor, Block A, Kelana Square, 17, Jalan SS 7/26, 47301 Petaling Jaya, Selangor.
              </p>

              <div className="pt-2 space-y-1">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>+60 3-7804 1736 / 1737</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Printer className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Fax: +60 3-7804 0968</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>audit@sylvesteranthony.com</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400">
                <strong>Associated Practice:</strong> Span & Co. (Kuantan, Pahang)
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{institutionalConfig.footer.copyright}</p>
          <div className="flex items-center space-x-6 text-[11px]">
            <Link href="#assurance-breakdown" className="hover:text-white transition">
              Statutory Disclaimer
            </Link>
            <Link href="#credentials" className="hover:text-white transition">
              MIA Compliance Statement
            </Link>
            <Link href="#proposal-intake" className="hover:text-white transition">
              RFP Protocol
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-1.5 rounded bg-white/10 hover:bg-[#C5A059] hover:text-[#0B1A30] text-white transition"
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
