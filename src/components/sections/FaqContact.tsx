"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus, Minus, CheckCircle, Phone, MapPin, Mail } from "lucide-react";
import { FirmConfig } from "@/types/firm";
import { getFirmConfig } from "@/config/firms";

export default function FaqContact({ config: propConfig }: { config?: FirmConfig }) {
  const config = propConfig || getFirmConfig();
  const isFincia = config.slug === "fincia" || config.slug === "advisory" || config.archetype === "advisory";

  const defaultFaqs = isFincia
    ? [
        {
          question: "How does the consultation process work?",
          answer:
            "Find detailed answers about our plans, financial advisory process, and how we help you achieve your goals.",
        },
        {
          question: "Is my financial information kept confidential?",
          answer:
            "Yes. Your financial information is kept strictly confidential and protected using secure systems and privacy protocols.",
        },
        {
          question: "Do you work with international clients?",
          answer:
            "Yes, we work with international clients on virtual consultations, making it easy to manage finances regardless of location.",
        },
        {
          question: "How much do your advisory services cost?",
          answer:
            "Our advisory fees depend on the scope and complexity of the services you need and are structured to reflect the value delivered. All costs are clearly explained, no hidden charges.",
        },
      ]
    : [
        {
          question: "What is required to initiate a statutory audit for our Sdn Bhd?",
          answer:
            "To begin, we require your prior year audited financial statements, draft management accounts (P&L and Balance Sheet), trial balance, bank statements, and access to company secretarial records.",
        },
        {
          question: "How do you handle LHDN corporate tax filings and deadlines?",
          answer:
            "We handle Form C preparation, compute capital allowances, review deductibility of business expenses, and manage online submission to the Inland Revenue Board (LHDN) within statutory 7-month deadlines.",
        },
        {
          question: "Can Messrs. Sylvester Anthony & Co. handle corporate secretarial compliance?",
          answer:
            "Yes. Through our secretarial practice, we provide full corporate governance under the Companies Act 2016, including annual return filings, SSM MBRS financial reporting, and board resolutions.",
        },
        {
          question: "Where are your principal audit offices located?",
          answer: `Our principal office is located at ${config.locations.headquarters.suite}, ${config.locations.headquarters.street}, ${config.locations.headquarters.city}. We also maintain an associated practice (${config.locations.branch?.firmName}) in ${config.locations.branch?.city}, ${config.locations.branch?.state}.`,
        },
      ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: isFincia ? "wealth-management" : "statutory-audit",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && (formData.phone || formData.email)) {
      setIsSubmitted(true);
    }
  };

  return (
    <section
      id="faq"
      className="py-20 lg:py-28"
      style={{ backgroundColor: config.colors.surface }}
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: FAQ Accordion Card */}
          <div className="lg:col-span-5 bg-white rounded-[24px] p-6 sm:p-8 border border-gray-200/80 shadow-xs flex flex-col justify-between">
            <div>
              {/* Accordion Items with subtle dividers */}
              <div className="divide-y divide-gray-100">
                {defaultFaqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div key={idx} className="py-4 first:pt-0">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between text-left group"
                        aria-expanded={isOpen}
                      >
                        <span
                          className={`text-sm sm:text-[15px] font-bold pr-4 transition-colors leading-snug ${
                            isOpen ? "text-[#063633]" : "text-[#181818] group-hover:text-[#063633]"
                          }`}
                        >
                          {faq.question}
                        </span>
                        <div className="text-gray-500 font-bold text-lg shrink-0">
                          {isOpen ? (
                            <span className="text-[#063633] text-xl font-bold leading-none">−</span>
                          ) : (
                            <span className="text-gray-600 text-lg font-bold leading-none">+</span>
                          )}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="pt-3 text-xs sm:text-sm text-[#6c6c6c] leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom FAQ Info & More FAQ Button */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-xs text-[#6c6c6c] leading-relaxed mb-4">
                Frequently asked questions about our financial services, planning approach, and client support. If you need additional information, our team is always happy to assist.
              </p>
              <Link
                href="#contact"
                className="group inline-flex items-center pl-5 pr-1.5 py-1.5 rounded-xl text-white text-xs font-bold transition-all duration-300 hover:shadow-md"
                style={{ backgroundColor: config.colors.dark }}
              >
                <span>More FAQ</span>
                <span
                  className="ml-3 w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs transition-transform duration-300 group-hover:translate-x-1"
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

          {/* Right Column: High-Impact Photo with Overlaid Glassmorphic Form Card */}
          <div
            id="contact"
            className="lg:col-span-7 relative rounded-[24px] overflow-hidden min-h-[580px] lg:min-h-full flex items-center justify-end p-6 sm:p-8 lg:p-10 shadow-xs border border-gray-200/60"
          >
            {/* Background Image */}
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=85"
              alt="Business Advisory Team"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-left-center sm:object-center"
            />

            {/* Directional gradient to highlight the overlaid form */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/35 to-black/75 pointer-events-none" />

            {/* Overlaid Dark Glassmorphic Form Card */}
            <div className="relative z-10 w-full max-w-[420px] bg-black/60 backdrop-blur-md border border-white/20 rounded-[22px] p-6 sm:p-7 text-white shadow-2xl">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white text-[11px] font-semibold text-[#181818] mb-3 shadow-xs">
                <span className="text-black">✦</span>
                <span>Reach out today</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 tracking-tight leading-snug">
                We&apos;re here for a better future
              </h3>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-white/10 border border-white/20 text-center space-y-3">
                  <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">
                    Request Received
                  </h4>
                  <p className="text-xs text-gray-200 leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Our advisory team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-medium text-gray-200 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-white/20 bg-white/10 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white/60 focus:bg-white/15 transition backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-200 mb-1.5">
                      Phone number*
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-white/20 bg-white/10 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white/60 focus:bg-white/15 transition backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-200 mb-1.5">
                      Drop us a line for us
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Type your message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-white/20 bg-white/10 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white/60 focus:bg-white/15 transition backdrop-blur-sm resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="group inline-flex items-center pl-6 pr-2 py-2 rounded-xl text-white text-xs font-bold transition-all duration-300 hover:shadow-lg shadow-md"
                      style={{ backgroundColor: config.colors.dark }}
                    >
                      <span>Submit now</span>
                      <span
                        className="ml-3 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs transition-transform duration-300 group-hover:translate-x-1"
                        style={{
                          backgroundColor: config.colors.accent,
                          color: config.colors.dark,
                        }}
                      >
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                      </span>
                    </button>
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
