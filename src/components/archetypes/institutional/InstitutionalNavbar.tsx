"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Shield, ShieldCheck, FileText, Menu, X, ArrowRight, ExternalLink } from "lucide-react";
import { FirmConfig } from "@/types/firm";
import { institutionalConfig } from "@/config/firms/institutional";

export default function InstitutionalNavbar({ config: propConfig }: { config?: FirmConfig }) {
  const config = propConfig || institutionalConfig;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Heritage Regulatory Banner */}
      <div className="bg-[#071224] border-b border-[#C5A059]/20 text-[11px] text-[#E2D9CC] py-2 px-4 sm:px-6">
        <div className="max-w-[1340px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="font-serif tracking-wider text-[#C5A059] uppercase text-[10px] font-semibold">
              Statutory Authority
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="font-normal text-slate-300">
              {config.taglineBadge || "Approved Statutory Auditors under Section 263, Companies Act 2016 · MIA Member Firm 4228"}
            </span>
          </div>
          <div className="flex items-center space-x-4 text-[11px] text-slate-300">
            <span>Principal Chambers: {config.locations.headquarters.city}, {config.locations.headquarters.state}</span>
            <span className="text-white/40">|</span>
            <a href={`tel:${config.contact.phone}`} className="hover:text-[#C5A059] transition flex items-center space-x-1 font-medium">
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span>{config.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Dignified Header */}
      <header
        className={`w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "sticky top-0 bg-[#0B1A30]/95 backdrop-blur-md shadow-xl border-b border-[#C5A059]/25 py-3.5"
            : "relative bg-[#0B1A30] border-b border-[#E2D9CC]/15 py-4"
        }`}
      >
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Heraldic Crest Monogram */}
            <Link href="/demo/institutional" className="flex items-center space-x-4 group">
              {/* Ornate Gold Monogram Seal */}
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-b from-[#132847] to-[#081528] border-2 border-[#C5A059] flex flex-col items-center justify-center shadow-lg group-hover:border-[#E5C378] transition-all">
                <span className="font-serif font-bold text-[#C5A059] text-base tracking-wider leading-none">
                  {config.brandMonogram || "SAC"}
                </span>
                <span className="text-[8px] font-sans tracking-widest text-[#E2D9CC]/70 uppercase mt-0.5">
                  {config.registration?.establishedYear || 1992}
                </span>
                <div className="absolute -inset-0.5 rounded-xl border border-[#C5A059]/30 pointer-events-none" />
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#C5A059] transition">
                  {config.shortName}
                </span>
                <span className="text-[11px] font-sans text-[#C5A059] tracking-wider uppercase font-semibold">
                  {config.registration?.legalForm || "Chartered Accountants & Approved Auditors"}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-200 font-sans">
              <Link href="#assurance-breakdown" className="hover:text-[#C5A059] transition-colors py-1">
                Statutory Practice Areas
              </Link>
              <Link href="#credentials" className="hover:text-[#C5A059] transition-colors py-1">
                MIA & SSM Credentials
              </Link>
              <Link href="#partner-pedigree" className="hover:text-[#C5A059] transition-colors py-1">
                Partner Pedigree
              </Link>
              <Link href="#track-record" className="hover:text-[#C5A059] transition-colors py-1">
                Inquest Records
              </Link>
              <Link href="#proposal-intake" className="hover:text-[#C5A059] transition-colors py-1">
                RFP Intake
              </Link>
            </nav>

            {/* CTA & Actions */}
            <div className="flex items-center space-x-4">
              <Link
                href="#proposal-intake"
                className="group inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#C5A059] to-[#D4B36F] hover:from-[#D4B36F] hover:to-[#E5C378] text-[#0B1A30] text-xs font-bold font-sans tracking-wide uppercase shadow-md transition-all duration-200 active:scale-95"
              >
                <span>Request Formal Proposal</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition"
                aria-label="Toggle Menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#071224] border-t border-[#C5A059]/20 px-6 py-5 space-y-4 font-sans text-sm animate-in slide-in-from-top-2">
            <Link
              href="#assurance-breakdown"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-slate-200 hover:text-[#C5A059] border-b border-white/5"
            >
              Statutory Practice Areas
            </Link>
            <Link
              href="#credentials"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-slate-200 hover:text-[#C5A059] border-b border-white/5"
            >
              MIA & SSM Credentials
            </Link>
            <Link
              href="#partner-pedigree"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-slate-200 hover:text-[#C5A059] border-b border-white/5"
            >
              Partner Pedigree & Big-4 Heritage
            </Link>
            <Link
              href="#track-record"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-slate-200 hover:text-[#C5A059] border-b border-white/5"
            >
              Statutory Audit Inquests
            </Link>
            <Link
              href="#proposal-intake"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-[#C5A059] font-bold"
            >
              Request Formal Audit Proposal (RFP)
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
