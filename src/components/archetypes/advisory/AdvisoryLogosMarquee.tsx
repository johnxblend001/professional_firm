"use client";

import React from "react";

export default function AdvisoryLogosMarquee() {
  const logos = [
    { name: "Petronas Gas Partners", label: "PETRONAS ECO" },
    { name: "Sime Darby Industrial", label: "SIME ALLIANCE" },
    { name: "Sunway Ventures", label: "SUNWAY CAP" },
    { name: "Gamuda Infrastructure", label: "GAMUDA INFRA" },
    { name: "YTL Power Capital", label: "YTL CAPITAL" },
    { name: "IOI Properties Trust", label: "IOI WEALTH" },
    { name: "Axiata Digital", label: "AXIATA LABS" },
    { name: "CIMB Principal", label: "CIMB ASSET" },
  ];

  return (
    <section className="bg-[#042422] text-white py-10 border-t border-b border-white/10 overflow-hidden relative">
      {/* Side Fade Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 z-10 pointer-events-none bg-gradient-to-r from-[#042422] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 z-10 pointer-events-none bg-gradient-to-l from-[#042422] to-transparent" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        {/* Continuous Animated Marquee Strip */}
        <div className="overflow-hidden w-full py-2">
          <div className="animate-marquee items-center gap-12 sm:gap-16">
            {[...logos, ...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="h-10 px-5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center space-x-2.5 text-slate-300 hover:text-white hover:border-[#c8f8a9]/40 hover:bg-white/10 transition-all shrink-0 select-none group"
              >
                <div className="w-2 h-2 rounded-full bg-[#c8f8a9]/60 group-hover:bg-[#c8f8a9] transition-colors" />
                <span className="font-mono text-xs font-bold tracking-wider text-emerald-100/90 group-hover:text-white uppercase">
                  {logo.label}
                </span>
                <span className="text-[10px] text-emerald-400/60 font-sans hidden sm:inline">
                  · {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Counter Subtext */}
        <div className="text-center mt-6">
          <p className="text-xs sm:text-sm text-emerald-200/80 font-sans">
            Advising over <strong className="font-bold text-white">450+</strong> private limited companies, family offices, and cross-border conglomerates across Malaysia & Singapore.
          </p>
        </div>
      </div>
    </section>
  );
}
