"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, ShieldCheck, Lock } from "lucide-react";
import { FirmConfig } from "@/types/firm";
import { advisoryConfig } from "@/config/firms/advisory";

export default function AdvisoryGlassmorphicContact({ config: propConfig }: { config?: FirmConfig }) {
  const config = propConfig || advisoryConfig;

  const faqs = [
    {
      q: "What is the typical engagement structure for corporate advisory?",
      a: "Mandates are structured either as a retained advisory partnership with milestone success fees (common for M&A divestments and capital raising) or a monthly strategic CFO retainer.",
    },
    {
      q: "How do you protect deal confidentiality and proprietary information?",
      a: "Every engagement begins with mutual, legally-binding Non-Disclosure Agreements (NDAs). Deal materials are distributed strictly via encrypted virtual data rooms (VDR) under audit trails.",
    },
    {
      q: "Can Apex Growth Partners advise on cross-border transactions outside Malaysia?",
      a: "Yes. We maintain an active regional presence in Singapore and frequently structure cross-border holding companies, joint ventures, and tax-efficient acquisitions across Singapore, Malaysia, and Indonesia.",
    },
    {
      q: "What enterprise size do you typically represent?",
      a: "Our core sweet spot is mid-market Malaysian enterprises generating between RM10M to RM250M in annual revenue, as well as family offices seeking fiduciary wealth governance.",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    mandateType: "ma-capital",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [docketNo, setDocketNo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && (formData.phone || formData.email)) {
      const docket = `ADV-${Math.floor(100000 + Math.random() * 900000)}`;
      setDocketNo(docket);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#f2f5f1] border-b border-emerald-950/10">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-900/10 text-xs font-semibold text-[#063633] mb-3">
            <span className="text-[#063633]">✦</span>
            <span>Confidential Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#181818] tracking-tight leading-[1.18] font-sans mb-3">
            Initiate a Private Advisory Consultation
          </h2>

          <p className="text-[#6c6c6c] text-sm sm:text-base leading-relaxed font-sans">
            Whether you are planning an M&A divestment, restructuring a multi-generational estate, or seeking expansion debt, our Managing Partners are available for confidential consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: FAQ Accordion Card */}
          <div className="lg:col-span-5 bg-white rounded-[28px] p-7 sm:p-9 border border-gray-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#181818] mb-6 font-sans">
                Advisory Protocol & Engagement FAQ
              </h3>

              <div className="divide-y divide-gray-100">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;

                  return (
                    <div key={idx} className="py-4 first:pt-0">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left group"
                        aria-expanded={isOpen}
                      >
                        <span
                          className={`text-sm font-bold pr-4 transition-colors leading-snug ${
                            isOpen ? "text-[#063633]" : "text-[#181818] group-hover:text-[#063633]"
                          }`}
                        >
                          {faq.q}
                        </span>
                        <span className="text-[#063633] text-lg font-bold shrink-0">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      {isOpen && (
                        <p className="pt-3 text-xs sm:text-sm text-[#6c6c6c] leading-relaxed font-sans">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct Chambers Contact Details */}
            <div className="mt-8 pt-6 border-t border-gray-100 space-y-3 text-xs text-[#6c6c6c]">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-800" />
                <span className="text-[#181818] font-bold">{config.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-emerald-800" />
                <span>{config.contact.email}</span>
              </div>
              <div className="flex items-start space-x-3 text-[11px] text-slate-500">
                <MapPin className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <span>Level 38, Menara Ilham, No. 8, Jalan Binjai, KLCC, 50450 Kuala Lumpur</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Collaboration Photo with Overlaid Glassmorphic Form Card */}
          <div className="lg:col-span-7 relative rounded-[28px] overflow-hidden min-h-[620px] lg:min-h-full flex items-center justify-end p-6 sm:p-8 lg:p-10 shadow-lg border border-emerald-950/10">
            {/* Background Collaboration Photography */}
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=85"
              alt="Strategic Corporate Advisory Session"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center"
            />

            {/* Directional Gradient to spotlight the glassmorphic card */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/45 to-[#063633]/85 pointer-events-none" />

            {/* The Glassmorphic Contact Card */}
            <div className="relative z-10 w-full max-w-[450px] bg-black/60 backdrop-blur-xl border border-white/20 rounded-[24px] p-6 sm:p-8 text-white shadow-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#c8f8a9] text-[11px] font-bold text-[#063633] mb-3 shadow-xs">
                <span>✦</span>
                <span>Fiduciary Intake Docket</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight leading-snug font-sans">
                Confidential Mandate Assessment
              </h3>

              <p className="text-xs text-emerald-100/80 mb-5 font-sans leading-relaxed">
                Direct inquiry routed to Senior Managing Partner Austin Parker, CFA.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-white/10 border border-white/20 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#c8f8a9] text-[#063633] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div className="font-mono text-xs text-[#c8f8a9] uppercase font-bold">
                    Docket ID: {docketNo}
                  </div>
                  <h4 className="text-lg font-bold text-white font-sans">
                    Inquiry Received
                  </h4>
                  <p className="text-xs text-gray-200 leading-relaxed font-sans">
                    Thank you, <strong>{formData.name}</strong>. Our managing partners will review your parameters under mutual NDA and contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#c8f8a9] hover:underline pt-2 inline-block font-sans"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 font-sans">
                  <div>
                    <label className="block text-xs font-medium text-emerald-100 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dato' Michael Lee"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-white/20 bg-white/10 text-sm text-white placeholder-emerald-100/50 focus:outline-none focus:border-[#c8f8a9] focus:bg-white/15 transition backdrop-blur-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-emerald-100 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+60 12-xxx xxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-white/20 bg-white/10 text-sm text-white placeholder-emerald-100/50 focus:outline-none focus:border-[#c8f8a9] focus:bg-white/15 transition backdrop-blur-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-emerald-100 mb-1">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="michael@group.my"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-white/20 bg-white/10 text-sm text-white placeholder-emerald-100/50 focus:outline-none focus:border-[#c8f8a9] focus:bg-white/15 transition backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-emerald-100 mb-1">
                      Primary Mandate Focus
                    </label>
                    <select
                      value={formData.mandateType}
                      onChange={(e) => setFormData({ ...formData, mandateType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-white/20 bg-black/60 text-sm text-white focus:outline-none focus:border-[#c8f8a9] transition backdrop-blur-sm"
                    >
                      <option value="ma-capital" className="bg-[#063633] text-white">M&A & Enterprise Divestment</option>
                      <option value="family-office" className="bg-[#063633] text-white">Family Office & Private Wealth</option>
                      <option value="restructuring" className="bg-[#063633] text-white">Corporate Turnaround & Restructuring</option>
                      <option value="growth-expansion" className="bg-[#063633] text-white">Regional Venture Expansion</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-emerald-100 mb-1">
                      Brief Outline / Target Timelines
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Target transaction value, upcoming shareholder restructuring, or capital syndication target..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-white/20 bg-white/10 text-sm text-white placeholder-emerald-100/50 focus:outline-none focus:border-[#c8f8a9] focus:bg-white/15 transition backdrop-blur-sm resize-none"
                    />
                  </div>

                  {/* Pill Button with Lime Arrow Square */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="group w-full inline-flex items-center justify-between pl-6 pr-2 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-xl hover:brightness-105"
                      style={{
                        backgroundColor: config.colors.accent,
                        color: config.colors.dark,
                      }}
                    >
                      <span>Transmit Mandate Inquiry</span>
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs transition-transform duration-300 group-hover:translate-x-1"
                        style={{
                          backgroundColor: config.colors.dark,
                          color: config.colors.accent,
                        }}
                      >
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                      </span>
                    </button>

                    <div className="flex items-center justify-center space-x-2 text-[10px] text-emerald-200/80 mt-2 font-mono">
                      <Lock className="w-3 h-3 text-[#c8f8a9]" />
                      <span>256-Bit Encrypted · Protected under Statutory NDA</span>
                    </div>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
