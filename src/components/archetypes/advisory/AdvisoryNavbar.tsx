"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ArrowRight, TrendingUp, Sparkles } from "lucide-react";
import { FirmConfig } from "@/types/firm";
import { advisoryConfig } from "@/config/firms/advisory";

export default function AdvisoryNavbar({ config: propConfig }: { config?: FirmConfig }) {
  const config = propConfig || advisoryConfig;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Advisory Ticker */}
      <div className="bg-[#042422] border-b border-[#c8f8a9]/20 text-[11px] text-[#c8f8a9] py-2 px-4 sm:px-6">
        <div className="max-w-[1340px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center space-x-1 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8f8a9] animate-pulse" />
              <span>MARKET ADVISORY:</span>
            </span>
            <span className="text-white/80 font-normal">
              RM380M+ Private Equity & M&A Mandates Under Active Governance
            </span>
          </div>
          <div className="flex items-center space-x-4 text-white/70">
            <span>Menara Ilham, KLCC · Marina Bay, Singapore</span>
            <span className="text-white/30">|</span>
            <a
              href={`tel:${config.contact.phone}`}
              className="hover:text-[#c8f8a9] transition flex items-center space-x-1 text-[#c8f8a9] font-medium"
            >
              <Phone className="w-3 h-3" />
              <span>{config.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "sticky top-0 bg-[#063633]/95 backdrop-blur-md shadow-xl border-b border-[#c8f8a9]/20 py-3"
            : "relative bg-[#063633] border-b border-white/10 py-4"
        }`}
      >
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Monogram Brand */}
            <Link href="/demo/advisory" className="flex items-center space-x-3.5 group shrink-0">
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-base shadow-lg transition-transform group-hover:scale-105"
                style={{
                  backgroundColor: config.colors.accent,
                  color: config.colors.dark,
                }}
              >
                {config.brandMonogram || "A."}
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-white group-hover:text-[#c8f8a9] transition">
                  {config.name}
                </span>
                <span className="text-[11px] font-medium text-[#c8f8a9] tracking-tight">
                  Corporate Advisory & Wealth Management
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-emerald-100/90">
              <Link href="#services" className="hover:text-[#c8f8a9] transition-colors">
                Advisory Mandates
              </Link>
              <Link href="#roadmap" className="hover:text-[#c8f8a9] transition-colors">
                Consultation Roadmap
              </Link>
              <Link href="#team-section" className="hover:text-[#c8f8a9] transition-colors">
                Advisors
              </Link>
              <Link href="#cases" className="hover:text-[#c8f8a9] transition-colors">
                Transactions
              </Link>
              <Link href="#contact" className="hover:text-[#c8f8a9] transition-colors">
                Contact
              </Link>
            </nav>

            {/* Signature Pill Button with Lime Arrow Square */}
            <div className="flex items-center space-x-4">
              <Link
                href="#contact"
                className="group hidden sm:inline-flex items-center pl-5 pr-1.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:brightness-105"
                style={{
                  backgroundColor: config.colors.accent,
                  color: config.colors.dark,
                }}
              >
                <span>Schedule Consultation</span>
                <span
                  className="ml-3 w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs transition-transform duration-300 group-hover:translate-x-0.5"
                  style={{
                    backgroundColor: config.colors.dark,
                    color: config.colors.accent,
                  }}
                >
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#042422] border-t border-white/10 px-6 py-5 space-y-4 text-sm animate-in slide-in-from-top-2 duration-200">
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-emerald-100 hover:text-[#c8f8a9] font-medium"
            >
              Advisory Mandates
            </Link>
            <Link
              href="#roadmap"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-emerald-100 hover:text-[#c8f8a9] font-medium"
            >
              Consultation Roadmap
            </Link>
            <Link
              href="#team-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-emerald-100 hover:text-[#c8f8a9] font-medium"
            >
              Advisors Roster
            </Link>
            <Link
              href="#cases"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-emerald-100 hover:text-[#c8f8a9] font-medium"
            >
              M&A Transactions
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#c8f8a9] font-bold"
            >
              Schedule Consultation
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
