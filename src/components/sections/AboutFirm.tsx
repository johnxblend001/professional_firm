import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, MapPin, CheckCircle2 } from "lucide-react";
import { FirmConfig } from "@/types/firm";
import { getFirmConfig } from "@/config/firms";

export default function AboutFirm({ config: propConfig }: { config?: FirmConfig }) {
  const config = propConfig || getFirmConfig();
  const isFincia = config.slug === "fincia" || config.slug === "advisory" || config.archetype === "advisory";

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-gray-200/80 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Eyebrow & CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#181818]"
              style={{ backgroundColor: config.colors.surface }}
            >
              <span style={{ color: config.colors.accent }}>✦</span>
              <span>About our practice</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#181818] leading-[1.18] tracking-tight">
              {isFincia
                ? "Committed to your financial growth in every step of the way"
                : "Three Decades of Fiscal Stewardship & Regulatory Trust"}
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed">
              {isFincia
                ? "Providing objective and customized advice, seamless wealth management and exclusive access to private investments."
                : `Registered with the ${config.registration?.body || "MIA"} since ${config.registration?.establishedYear || 1992}. Serving as statutory auditors and corporate tax counselors to over 240 Malaysian enterprises.`}
            </p>

            <div>
              <Link
                href="#contact"
                className="group inline-flex items-center pl-6 pr-1.5 py-1.5 rounded-full border text-sm font-semibold transition-all duration-300 hover:shadow-md"
                style={{
                  borderColor: config.colors.dark,
                  color: config.colors.dark,
                }}
              >
                <span>Request Consultation</span>
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

          {/* Center Column: Featured Image with rounded corners */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[414/430] rounded-[24px] overflow-hidden shadow-lg border border-gray-100">
              <Image
                src={
                  config.founder?.image ||
                  "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/about-section-home1.jpg"
                }
                alt={config.founder?.name || config.name}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Founder / Leadership Pedigree */}
          <div className="lg:col-span-4 space-y-5">
            {config.founder ? (
              <>
                <div
                  className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: `${config.colors.accent}25`,
                    color: config.colors.dark,
                  }}
                >
                  <Award className="w-3.5 h-3.5" style={{ color: config.colors.accent }} />
                  <span>{config.founder.pedigreeBadge || "Leadership"}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                  {config.founder.name}
                </h3>
                <div className="text-xs font-semibold text-slate-500 -mt-2">
                  {config.founder.title} · {config.founder.credentials}
                </div>

                <p className="text-[#6c6c6c] text-[14px] leading-relaxed">
                  {config.founder.summary}
                </p>

                {/* Headquarters badge */}
                <div className="pt-3 border-t border-gray-100 flex items-start space-x-2.5 text-xs text-slate-600">
                  <MapPin className="w-4 h-4 shrink-0 text-slate-400 mt-0.5" />
                  <span>
                    <strong>{config.locations.headquarters.label}:</strong>{" "}
                    {config.locations.headquarters.suite},{" "}
                    {config.locations.headquarters.city}
                  </span>
                </div>
              </>
            ) : (
              <>
                <h4 className="text-xl sm:text-2xl font-bold text-[#181818] leading-snug">
                  Management consulting includes a broad range of activities
                </h4>
                <p className="text-[#6c6c6c] text-[15px] leading-relaxed">
                  We offer a deeply personalized approach, providing objective and well customized advice, seamless wealth management and exclusive access to private investments.
                </p>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
