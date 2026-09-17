import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { FirmConfig } from "@/types/firm";
import { getFirmConfig } from "@/config/firms";

export default function ServicesGrid({ config: propConfig }: { config?: FirmConfig }) {
  const config = propConfig || getFirmConfig();
  const isFincia = config.slug === "fincia";

  // Map services with fallback images if needed
  const serviceImages = [
    "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/Service-1.jpg",
    "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/Service-2.jpg",
    "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/Service-3.jpg",
    "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/Service-4.jpg",
  ];

  return (
    <section
      id="services"
      className="py-20 lg:py-28 border-b border-gray-200/80 transition-colors duration-300"
      style={{ backgroundColor: config.colors.surface }}
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white text-xs font-semibold text-[#181818] shadow-xs border border-gray-200/60 mb-4">
            <span style={{ color: config.colors.accent }}>✦</span>
            <span>Practice Areas & Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#181818] leading-[1.2] tracking-tight">
            {isFincia
              ? "Comprehensive financial solutions for every stage of life"
              : "Authoritative Audit, Taxation & Corporate Compliance Solutions"}
          </h2>
        </div>

        {/* 4-Card Grid with Interactive Dynamic Hover Color Transition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {config.services.slice(0, 4).map((service, idx) => {
            const imgSrc = service.image || serviceImages[idx % serviceImages.length];

            return (
              <div
                key={service.id}
                className="rounded-[24px] p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-2 bg-white hover:bg-brand-dark text-[#181818] hover:text-white shadow-sm hover:shadow-2xl border border-gray-200/80 hover:border-transparent cursor-pointer"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative w-full h-48 sm:h-52 rounded-[16px] overflow-hidden mb-6 bg-gray-100">
                    <Image
                      src={imgSrc}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Tagline / Category */}
                  {service.tagline && (
                    <div className="text-[11px] font-bold tracking-wider uppercase mb-1 text-slate-500 group-hover:text-brand-accent transition-colors duration-300">
                      {service.tagline}
                    </div>
                  )}

                  {/* Card Title */}
                  <h4 className="text-xl font-bold mb-4 text-[#181818] group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h4>

                  {/* Key Deliverables */}
                  <ul className="space-y-3 mb-6">
                    {service.keyDeliverables.map((deliverable, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start space-x-2.5 text-xs sm:text-[13px] font-medium leading-relaxed text-gray-600 group-hover:text-gray-200 transition-colors duration-300"
                      >
                        <span className="mt-0.5 shrink-0 flex items-center justify-center font-bold text-brand-dark group-hover:text-brand-accent transition-colors duration-300">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </span>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Row with Square Arrow Container */}
                <div className="flex items-center justify-between pt-5 border-t border-gray-100 group-hover:border-white/15 transition-colors duration-300">
                  <Link
                    href="#contact"
                    className="text-xs font-bold text-slate-800 group-hover:text-white transition-colors duration-300"
                  >
                    Engage Practice
                  </Link>

                  <Link
                    href="#contact"
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all duration-300 bg-brand-surface text-brand-dark group-hover:bg-brand-accent group-hover:text-brand-dark group-hover:translate-x-1 shadow-xs"
                  >
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
