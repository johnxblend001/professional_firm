"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FirmConfig } from "@/types/firm";
import { getFirmConfig } from "@/config/firms";

export default function CaseStudies({ config: propConfig }: { config?: FirmConfig }) {
  const config = propConfig || getFirmConfig();
  const isFincia = config.slug === "fincia" || config.slug === "advisory" || config.archetype === "advisory";

  const defaultCases = isFincia
    ? [
        {
          id: "tax-optimization",
          category: "Tax strategy & optimization",
          title: "Tax optimization for an entrepreneur",
          bullets: [
            "Leveraging available tax credits and incentives effectively",
            "Aligning profits and cash flow with smart tax strategies",
            "Integrating retirement and investment planning",
          ],
          image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/Portfolio-1-1023x600.jpg",
        },
        {
          id: "wealth-growth",
          category: "Business wealth growth",
          title: "Wealth growth for a business owner",
          bullets: [
            "Balancing risk and opportunity for sustainable growth",
            "Strategic planning for long-term financial success",
            "Protecting assets and investments effectively",
          ],
          image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/Portfolio-2-1023x600.jpg",
        },
        {
          id: "analytics-strategy",
          category: "Data-driven financial strategy",
          title: "Analytics based financial strategy",
          bullets: [
            "Data-driven financial strategies for informed decision-making",
            "Leveraging analytics to identify growth opportunities",
            "Optimizing investments using actionable insights",
          ],
          image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/Portfolio-3-1023x600.jpg",
        },
      ]
    : [
        {
          id: "statutory-assurance",
          category: "Statutory Audit & MFRS Compliance",
          title: "Statutory audit certification for retail & wholesale group",
          bullets: [
            "Unqualified independent auditor's report issued under Companies Act 2016",
            "Rigorous inventory valuation audit and internal accounting controls advisory",
            "Timely MBRS XBRL financial statement lodgement with SSM Malaysia",
          ],
          image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1023&q=80",
        },
        {
          id: "tax-defense",
          category: "Corporate Taxation & LHDN Defense",
          title: "Capital allowance optimization & tax audit representation",
          bullets: [
            "Identification of overlooked plant and machinery capital allowances",
            "Form C corporate submission and tax computation restructuring",
            "Direct technical liaison with Inland Revenue Board (LHDN) auditors",
          ],
          image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1023&q=80",
        },
        {
          id: "corporate-reconstruction",
          category: "Corporate Secretarial & Restructuring",
          title: "Members' voluntary liquidation & corporate streamlining",
          bullets: [
            "Members' voluntary winding-up (MVW) execution under Sec 439 of Companies Act 2016",
            "Tax clearance certification secured from LHDN and liquidator asset distribution",
            "Significant ongoing statutory filing and administrative cost savings",
          ],
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1023&q=80",
        },
      ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + defaultCases.length) % defaultCases.length);
  };

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % defaultCases.length);
  };

  const activeCase = defaultCases[currentIndex];

  return (
    <section id="cases" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#181818] mb-4"
              style={{ backgroundColor: config.colors.surface }}
            >
              <span style={{ color: config.colors.accent }}>✦</span>
              <span>Proven Track Record</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#181818] leading-[1.2] tracking-tight">
              {isFincia
                ? "Transforming financial goals into real achievements"
                : "Decades of Precision: Proven Case Engagements"}
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center space-x-2.5">
            <button
              onClick={prevCase}
              className="w-11 h-11 rounded-xl flex items-center justify-center font-bold transition-all shadow-xs active:scale-95"
              style={{
                backgroundColor: config.colors.accent,
                color: config.colors.dark,
              }}
              aria-label="Previous Case Study"
            >
              <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={nextCase}
              className="w-11 h-11 rounded-xl flex items-center justify-center font-bold transition-all shadow-xs active:scale-95"
              style={{
                backgroundColor: config.colors.accent,
                color: config.colors.dark,
              }}
              aria-label="Next Case Study"
            >
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Featured Case Card Container */}
        <div
          className="rounded-[28px] p-8 sm:p-10 lg:p-14 border border-gray-200/80 shadow-xs"
          style={{ backgroundColor: config.colors.surface }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white text-xs font-semibold text-[#181818] shadow-xs border border-gray-200/60">
                <span style={{ color: config.colors.accent }}>✦</span>
                <span>{activeCase.category}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#181818] leading-tight">
                {activeCase.title}
              </h3>

              <ul className="space-y-3.5 text-[#6c6c6c] text-[15px] font-normal">
                {activeCase.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span
                      className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: config.colors.dark }}
                    />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Link
                  href="#contact"
                  className="group inline-flex items-center pl-7 pr-2 py-2 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: config.colors.dark }}
                >
                  <span>Request Engagement Proposal</span>
                  <span
                    className="ml-4 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs transition-transform duration-300 group-hover:translate-x-0.5"
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

            {/* Right Image Display Area */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full aspect-[16/10] rounded-[20px] overflow-hidden shadow-md border border-white">
                <Image
                  src={activeCase.image}
                  alt={activeCase.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
