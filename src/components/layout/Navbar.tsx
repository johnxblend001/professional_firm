"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { FirmConfig } from "@/types/firm";
import { getFirmConfig } from "@/config/firms";

export default function Navbar({ config: propConfig }: { config?: FirmConfig }) {
  const config = propConfig || getFirmConfig();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isFincia = config.slug === "fincia" || config.slug === "advisory" || config.archetype === "advisory";
  const ctaLabel = isFincia ? "Get Consultation" : "Request Proposal";

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "fixed top-0 left-0 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "relative bg-white border-b border-gray-100 py-3.5"
      }`}
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 gap-6">
          
          {/* Brand Logo / Monogram Seal */}
          <Link href={config.slug === "advisory" ? "/demo/advisory" : isFincia ? "/" : `/${config.slug}`} className="flex items-center space-x-3 group shrink-0">
            {isFincia ? (
              <div className="relative h-9 w-32 flex items-center">
                <Image
                  src="https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/logo-fincia-dark.png"
                  alt={config.name}
                  width={128}
                  height={36}
                  priority
                  className="object-contain h-8 w-auto group-hover:opacity-90 transition-opacity"
                />
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                {/* Monogram Seal */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm tracking-wider shadow-sm border shrink-0"
                  style={{
                    backgroundColor: config.colors.dark,
                    color: config.colors.accent,
                    borderColor: `${config.colors.accent}40`,
                  }}
                >
                  {config.brandMonogram || "SAC"}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-base tracking-tight text-slate-900 group-hover:text-slate-700 transition whitespace-nowrap">
                    {config.shortName}
                  </span>
                  {config.registration?.legalForm && (
                    <span className="text-[11px] font-medium text-slate-500 tracking-tight whitespace-nowrap">
                      {config.registration.legalForm}
                      {config.registration.memberNo ? ` · ${config.registration.memberNo}` : ""}
                    </span>
                  )}
                </div>
              </div>
            )}
          </Link>

          {/* Desktop Navigation Links — Streamlined Single-Line Menu */}
          <nav className="hidden lg:flex items-center space-x-8 text-[15px] font-medium text-[#181818]">
            <Link
              href="#services"
              className="hover:text-slate-900 transition-colors whitespace-nowrap"
            >
              Services
            </Link>

            <Link
              href="#about"
              className="hover:text-slate-900 transition-colors whitespace-nowrap"
            >
              About
            </Link>

            <Link
              href="#cases"
              className="hover:text-slate-900 transition-colors whitespace-nowrap"
            >
              {isFincia ? "Cases" : "Track Record"}
            </Link>

            <Link
              href="#faq"
              className="hover:text-slate-900 transition-colors whitespace-nowrap"
            >
              FAQ
            </Link>
          </nav>

          {/* Contact Phone & Signature CTA */}
          <div className="flex items-center space-x-5 shrink-0">
            {/* Phone Info Block */}
            <div className="hidden xl:flex items-center space-x-2 text-sm font-semibold text-slate-900 whitespace-nowrap">
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs"
                style={{
                  backgroundColor: `${config.colors.accent}30`,
                  color: config.colors.dark,
                }}
              >
                <Phone className="w-3.5 h-3.5" />
              </span>
              <a
                href={`tel:${config.contact.phone}`}
                className="hover:underline tracking-tight"
              >
                {config.contact.phone}
              </a>
            </div>

            {/* Signature Pill Button with Accent Arrow Container */}
            <Link
              href="#contact"
              className="group inline-flex items-center pl-5 pr-1.5 py-1.5 rounded-full text-white text-xs font-bold transition-all duration-300 shadow-sm whitespace-nowrap"
              style={{ backgroundColor: config.colors.dark }}
            >
              <span>{ctaLabel}</span>
              <span
                className="ml-3 w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs transition-transform duration-300 group-hover:translate-x-0.5"
                style={{
                  backgroundColor: config.colors.accent,
                  color: config.colors.dark,
                }}
              >
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-gray-100 transition"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-2">
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-800"
            >
              Services & Practice Areas
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-800"
            >
              About Practice
            </Link>
            <Link
              href="#cases"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-800"
            >
              Track Record
            </Link>
            <Link
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-800"
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-800"
            >
              Request Proposal
            </Link>
          </div>

          <div className="pt-4 border-t border-gray-100 space-y-3 text-sm">
            <div className="flex items-center space-x-2 text-slate-700 font-semibold">
              <Phone className="w-4 h-4 text-slate-500" />
              <span>{config.contact.phone}</span>
            </div>
            {config.contact.email && (
              <div className="text-xs text-slate-500">
                Email: <span className="text-slate-800">{config.contact.email}</span>
              </div>
            )}
            <div className="text-xs text-slate-500 leading-relaxed">
              📍 {config.locations.headquarters.suite}, {config.locations.headquarters.city}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
