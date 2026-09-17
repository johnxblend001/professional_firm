import React from "react";
import Image from "next/image";
import { Star, ShieldCheck, Award, Building } from "lucide-react";
import { FirmConfig } from "@/types/firm";
import { getFirmConfig } from "@/config/firms";

export default function MetricsStrip({ config: propConfig }: { config?: FirmConfig }) {
  const config = propConfig || getFirmConfig();
  const isFincia = config.slug === "fincia";

  return (
    <section
      className="border-b border-gray-200/70 py-9 lg:py-11"
      style={{ backgroundColor: config.colors.surface }}
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Block: Accreditation or Review Badges */}
          <div className="lg:col-span-4 flex items-center justify-between sm:justify-start sm:space-x-8 pr-0 lg:pr-6 lg:border-r lg:border-gray-300/70">
            {isFincia ? (
              <>
                {/* 1. Clutch Review Badge */}
                <div className="flex flex-col">
                  <div className="relative h-6 w-20 mb-2">
                    <Image
                      src="https://fincia-demo.themetechmount.com/wp-content/uploads/2025/12/client-2.png"
                      alt="Clutch"
                      width={80}
                      height={23}
                      className="object-contain object-left"
                    />
                  </div>
                  <div className="flex items-center space-x-0.5 text-[#ffdb00]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#ffdb00] text-[#ffdb00]" />
                    ))}
                  </div>
                  <span className="text-[13px] text-gray-500 font-medium mt-1">31 reviews</span>
                </div>

                {/* 2. Trustpilot Review Badge */}
                <div className="flex flex-col sm:border-l sm:border-gray-200/80 sm:pl-8 lg:border-none lg:pl-0">
                  <div className="relative h-6 w-24 mb-2">
                    <Image
                      src="https://fincia-demo.themetechmount.com/wp-content/uploads/2025/12/client-1.png"
                      alt="Trustpilot"
                      width={105}
                      height={20}
                      className="object-contain object-left"
                    />
                  </div>
                  <div className="flex items-center space-x-0.5 text-[#ffdb00]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#ffdb00] text-[#ffdb00]" />
                    ))}
                  </div>
                  <span className="text-[13px] text-gray-500 font-medium mt-1">15 reviews</span>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg shrink-0 shadow-xs"
                  style={{
                    backgroundColor: config.colors.dark,
                    color: config.colors.accent,
                  }}
                >
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {config.registration?.body || "Regulatory Body"}
                  </div>
                  <div className="text-base font-extrabold text-slate-900 leading-tight">
                    {config.registration?.memberNo || "Accredited Practice"}
                  </div>
                  <div className="text-[11px] font-medium text-slate-600 mt-0.5">
                    {config.registration?.legalForm || "Approved Auditors"}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Block: 4 Key Numeric Metrics */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 items-center">
            {config.credibilityMetrics.map((metric, idx) => (
              <div
                key={idx}
                className={`flex flex-col justify-center ${
                  idx > 0 ? "sm:border-l sm:border-gray-300/70 sm:pl-6" : ""
                }`}
              >
                <span className="text-xs text-gray-500 font-medium leading-tight mb-1">
                  {metric.label}
                </span>
                <div className="flex items-baseline space-x-0.5">
                  <span className="text-2xl lg:text-3xl font-black text-[#181818] tracking-tight">
                    {metric.value}
                  </span>
                </div>
                <span className="text-[11px] text-gray-500 font-medium mt-0.5 truncate">
                  {metric.detail}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
