"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cpu, CheckCircle2, ArrowRight, Menu, X, Activity, Calendar } from "lucide-react";
import { FirmConfig } from "@/types/firm";
import { digitalConfig } from "@/config/firms/digital";

export default function DigitalNavbar({ config: propConfig }: { config?: FirmConfig }) {
  const config = propConfig || digitalConfig;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Live System & API Status Bar */}
      <div className="bg-[#0B1329] border-b border-slate-800 text-[11px] text-slate-300 py-1.5 px-4 sm:px-6">
        <div className="max-w-[1340px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 font-mono">
          <div className="flex items-center space-x-2.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-semibold">
              LHDN MyInvois 1.0 Gateway:
            </span>
            <span className="text-slate-300">
              OPERATIONAL (0.18s validation latency)
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-400">
              Direct Bank Feeds: Maybank · CIMB · RHB · Public Bank
            </span>
          </div>

          <div className="flex items-center space-x-3 text-slate-400">
            <span>{config.registration?.memberNo || "MIA Member Firm 9841"}</span>
            <span className="text-slate-600">|</span>
            <span className="text-blue-400 font-semibold">Xero Platinum Partner</span>
          </div>
        </div>
      </div>

      {/* Main Technical Navbar */}
      <header
        className={`w-full z-40 transition-all duration-200 ${
          isScrolled
            ? "sticky top-0 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3"
            : "relative bg-white border-b border-slate-200 py-3.5"
        }`}
      >
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Tech Brand Monogram */}
            <Link href="/demo/digital" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#0F172A] flex items-center justify-center text-[#2563EB] font-mono font-bold text-sm shadow-md border border-slate-800 group-hover:bg-[#1E293B] transition">
                <span className="text-white">{config.brandMonogram || "LP"}</span>
                <span className="text-[#2563EB]">.</span>
              </div>

              <div className="flex flex-col">
                <span className="text-slate-900 font-bold text-base tracking-tight font-sans">
                  {config.name}
                </span>
                <span className="text-[11px] font-mono text-[#2563EB] tracking-tight font-medium">
                  Cloud Ledger & e-Invois Compliance
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-600 font-sans">
              <Link href="#bento-grid" className="hover:text-blue-600 transition">
                Cloud Architecture
              </Link>
              <Link href="#scorecard" className="hover:text-blue-600 transition flex items-center space-x-1.5">
                <span>Compliance Scorecard</span>
                <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-blue-50 text-blue-700 font-mono font-bold border border-blue-200">
                  Interactive
                </span>
              </Link>
              <Link href="#pricing-tiers" className="hover:text-blue-600 transition">
                Plans & Service Matrix
              </Link>
              <Link href="#tech-stack" className="hover:text-blue-600 transition">
                Integrations
              </Link>
              <Link href="#digital-booking" className="hover:text-blue-600 transition">
                Book 15-Min Call
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              <Link
                href="#scorecard"
                className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                <Activity className="w-3.5 h-3.5 text-blue-600" />
                <span>Run Scorecard</span>
              </Link>

              <Link
                href="#digital-booking"
                className="group inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold font-sans shadow-sm transition-all active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Discovery</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
                aria-label="Toggle Navigation"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-3 font-sans text-sm animate-in slide-in-from-top-2">
            <Link
              href="#bento-grid"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-slate-700 hover:text-blue-600 font-medium"
            >
              Cloud Architecture
            </Link>
            <Link
              href="#scorecard"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-slate-700 hover:text-blue-600 font-medium"
            >
              Interactive Compliance Scorecard
            </Link>
            <Link
              href="#pricing-tiers"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-slate-700 hover:text-blue-600 font-medium"
            >
              Plans & Pricing Matrix
            </Link>
            <Link
              href="#tech-stack"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-slate-700 hover:text-blue-600 font-medium"
            >
              Supported Cloud ERP Stack
            </Link>
            <Link
              href="#digital-booking"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-blue-600 font-bold"
            >
              Book 15-Min Onboarding Discovery
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
