"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ChevronUp, MapPin, Phone, Mail, Printer, ShieldCheck } from "lucide-react";
import { FirmConfig } from "@/types/firm";
import { getFirmConfig } from "@/config/firms";

export default function Footer({ config: propConfig }: { config?: FirmConfig }) {
  const config = propConfig || getFirmConfig();
  const isFincia = config.slug === "fincia" || config.slug === "advisory" || config.archetype === "advisory";

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="colophon"
      className="text-white pt-16 pb-12 relative overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: config.colors.dark }}
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Floating Top CTA Card with Background Photo (Matches Reference Image 1) */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 mb-16">
          {/* Background Photo */}
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80"
            alt="Advisory Consultation"
            fill
            sizes="(max-width: 1340px) 100vw, 1340px"
            className="object-cover object-center"
          />

          {/* Deep dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/75 z-0" />

          {/* Card Content */}
          <div className="relative z-10 px-8 sm:px-12 py-8 sm:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium text-white max-w-xl leading-tight">
                {isFincia ? (
                  <>
                    Get professional financial advice free <br />
                    <strong className="font-bold text-white">consultation available</strong>
                  </>
                ) : (
                  <>
                    Engage senior audit & tax partners <br />
                    <strong className="font-bold text-white">for compliant corporate growth</strong>
                  </>
                )}
              </h3>
            </div>

            <div>
              <Link
                href="#contact"
                className="group inline-flex items-center space-x-3 px-6 py-3 rounded-full border border-white/30 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white text-sm font-semibold transition-all duration-300 hover:border-white/60 shadow-lg shrink-0"
              >
                <span>{isFincia ? "Schedule call" : "Request Audit Proposal"}</span>
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-transform duration-300 group-hover:translate-x-1"
                  style={{
                    backgroundColor: config.colors.accent,
                    color: config.colors.dark,
                  }}
                >
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Major Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10 text-xs text-gray-300">
          
          {/* Column 1: Newsletter & Firm Regulatory Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center space-x-3 mb-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs"
                style={{
                  backgroundColor: config.colors.accent,
                  color: config.colors.dark,
                }}
              >
                {config.brandMonogram || "SAC"}
              </div>
              <span className="text-base font-bold text-white">
                {config.shortName}
              </span>
            </div>

            <p className="text-gray-300/90 leading-relaxed text-xs max-w-md">
              {config.footer.legalNotice}
            </p>

            {/* Newsletter Input Box */}
            <form onSubmit={handleSubscribe} className="relative max-w-md pt-2">
              <div className="flex items-center rounded-full bg-white/10 border border-white/20 p-1.5 focus-within:border-white/50 transition-colors">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Official business email"
                  className="w-full bg-transparent px-4 py-1 text-xs text-white placeholder-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 transition"
                  style={{
                    backgroundColor: config.colors.accent,
                    color: config.colors.dark,
                  }}
                >
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs mt-2 font-medium" style={{ color: config.colors.accent }}>
                  ✓ Subscribed to statutory and regulatory updates.
                </p>
              )}
            </form>
          </div>

          {/* Column 2: Accreditation & Professional Standing (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="font-bold text-white text-sm">Regulatory Body</h5>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <ShieldCheck className="w-6 h-6" style={{ color: config.colors.accent }} />
              <div className="font-bold text-white text-sm">
                {config.registration?.body || "MIA"}
              </div>
              <div className="text-[11px] text-gray-300">
                {config.registration?.memberNo || "MIA 4228"}
              </div>
              <div className="text-[10px] text-gray-400">
                Established {config.registration?.establishedDate || "1992"}
              </div>
            </div>
          </div>

          {/* Column 3: Services Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-bold text-white text-sm">Practice Areas</h5>
            <ul className="space-y-2 text-xs text-gray-300">
              {config.services.map((s) => (
                <li key={s.id}>
                  <Link href="#services" className="hover:text-white transition">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Locations (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-bold text-white text-sm">Office Locations</h5>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div>
                <strong className="text-white block">
                  {config.locations.headquarters.label}:
                </strong>
                <p className="text-gray-300 leading-tight mt-0.5">
                  {config.locations.headquarters.suite}, {config.locations.headquarters.street},{" "}
                  {config.locations.headquarters.city}
                </p>
              </div>

              <div className="pt-1 space-y-1">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-gray-400" />
                  <span>{config.contact.phone}</span>
                </div>
                {config.contact.fax && (
                  <div className="flex items-center space-x-2">
                    <Printer className="w-3.5 h-3.5 text-gray-400" />
                    <span>Fax: {config.contact.fax}</span>
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-gray-400" />
                  <span>{config.contact.email}</span>
                </div>
              </div>

              {config.locations.branch && (
                <div className="pt-2 border-t border-white/10">
                  <span className="text-gray-400 block text-[11px]">
                    {config.locations.branch.label}:
                  </span>
                  <span className="text-white font-medium">
                    {config.locations.branch.firmName} — {config.locations.branch.city},{" "}
                    {config.locations.branch.state}
                  </span>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>{config.footer.copyright}</p>
          <div className="flex items-center space-x-6">
            <Link href="#about" className="hover:text-white transition">
              About Practice
            </Link>
            <Link href="#services" className="hover:text-white transition">
              Services
            </Link>
            <Link href="#contact" className="hover:text-white transition">
              Proposal Request
            </Link>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
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
