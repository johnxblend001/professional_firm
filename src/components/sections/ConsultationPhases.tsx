import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FirmConfig } from "@/types/firm";
import { getFirmConfig } from "@/config/firms";

export default function ConsultationPhases({ config: propConfig }: { config?: FirmConfig }) {
  const config = propConfig || getFirmConfig();
  const isFincia = config.slug === "fincia";

  const steps = isFincia
    ? [
        {
          stepNumber: "Step 01",
          title: "Initial consultation",
          description:
            "We start with one-on-one Advisory Session to understand your financial situation and future goals.",
        },
        {
          stepNumber: "Step 02",
          title: "Financial assessment",
          description:
            "Our experts review your income, expenses and liabilities to evaluate where you stand today.",
        },
        {
          stepNumber: "Step 03",
          title: "Strategy development",
          description:
            "We build a clear data-driven plan that aligns with your objectives covering risk management.",
        },
      ]
    : [
        {
          stepNumber: "Phase 01",
          title: "Scope & Entity Diagnostic",
          description:
            "Preliminary review of company secretarial registers, prior year audit reports, and LHDN tax submission status.",
        },
        {
          stepNumber: "Phase 02",
          title: "Fieldwork & Compliance Audit",
          description:
            "Comprehensive testing of financial statements against MPERS / MFRS frameworks, substantive analytical procedures, and tax schedule review.",
        },
        {
          stepNumber: "Phase 03",
          title: "Certification & Regulatory Lodgement",
          description:
            "Issuance of independent Auditor's Report, Board management letter, and timely submission to SSM via MBRS and LHDN Form C.",
        },
      ];

  return (
    <section id="phases" className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#181818] mb-4"
              style={{ backgroundColor: config.colors.surface }}
            >
              <span style={{ color: config.colors.accent }}>✦</span>
              <span>Engagement Methodology</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#181818] leading-[1.2] tracking-tight max-w-2xl">
              {isFincia
                ? "A step-by-step path to financial confidence"
                : "Structured Engagement Framework For Total Regulatory Certainty"}
            </h2>
          </div>

          <div>
            <Link
              href="#contact"
              className="group inline-flex items-center pl-6 pr-1.5 py-1.5 rounded-full border text-sm font-semibold transition-all duration-300 hover:shadow-md"
              style={{
                borderColor: config.colors.dark,
                color: config.colors.dark,
              }}
            >
              <span>Audit Methodology</span>
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

        {/* 3 Step Progression Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl border border-gray-200/70 transition-all duration-300 group hover:shadow-md"
              style={{ backgroundColor: config.colors.surface }}
            >
              {/* Step Pill */}
              <div
                className="inline-flex items-center px-3 py-1 rounded-full bg-white text-xs font-bold shadow-xs border border-gray-100 mb-4"
                style={{ color: config.colors.dark }}
              >
                {step.stepNumber}
              </div>

              {/* Title */}
              <h4 className="text-xl font-bold text-[#181818] mb-3 transition-colors">
                {step.title}
              </h4>

              {/* Description */}
              <p className="text-[#6c6c6c] text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Decorative bottom accent bar */}
              <div
                className="mt-6 w-12 h-1 rounded-full transition-all duration-300 group-hover:w-20"
                style={{ backgroundColor: config.colors.accent }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
