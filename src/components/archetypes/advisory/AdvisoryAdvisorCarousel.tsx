"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Share2, ChevronLeft, ChevronRight, Award, GraduationCap, Briefcase } from "lucide-react";
import { FirmConfig } from "@/types/firm";
import { advisoryConfig } from "@/config/firms/advisory";

export default function AdvisoryAdvisorCarousel({ config: propConfig }: { config?: FirmConfig }) {
  const config = propConfig || advisoryConfig;
  const advisors = config.advisors && config.advisors.length > 0 ? config.advisors : advisoryConfig.advisors || [];

  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const [activeShareId, setActiveShareId] = useState<string | null>(null);

  // Responsive cardsToShow
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalAdvisors = advisors.length;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % totalAdvisors);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + totalAdvisors) % totalAdvisors);
  };

  // Auto-rotation timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, totalAdvisors]);

  // Triple the array for seamless circular window display
  const carouselItems = [...advisors, ...advisors, ...advisors];

  return (
    <section id="team-section" className="py-20 lg:py-28 bg-[#063633] text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c8f8a9]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Row with Next/Prev Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-white mb-3 backdrop-blur-md">
              <span style={{ color: config.colors.accent }}>✦</span>
              <span>Senior Advisory Leadership</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] font-sans mb-3">
              Certified Fiduciary Advisors & M&A Dealmakers
            </h2>

            <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed font-sans">
              Our partners bring pedigrees from tier-1 global investment banks, top regional private equity firms, and Big-4 transaction advisory practices.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition active:scale-95"
              aria-label="Previous Advisors"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-xl flex items-center justify-center font-bold transition active:scale-95 shadow-lg"
              style={{
                backgroundColor: config.colors.accent,
                color: config.colors.dark,
              }}
              aria-label="Next Advisors"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setActiveShareId(null);
          }}
        >
          <div
            className="flex transition-transform duration-700 ease-out -mx-3"
            style={{ transform: `translateX(-${startIndex * (100 / cardsToShow)}%)` }}
          >
            {carouselItems.map((advisor, idx) => {
              const isHovered = activeShareId === `${advisor.id}-${idx}`;

              return (
                <div key={`${advisor.id}-${idx}`} className="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-3">
                  <div className="bg-[#042422] rounded-[24px] overflow-hidden border border-white/15 shadow-xl hover:border-[#c8f8a9]/40 transition-all duration-300 group flex flex-col justify-between h-full">
                    
                    {/* Advisor Photo */}
                    <div className="relative aspect-[3/3.8] w-full overflow-hidden bg-slate-900">
                      <Image
                        src={advisor.image}
                        alt={advisor.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#042422] via-transparent to-transparent pointer-events-none opacity-90" />

                      {/* Monogram Seal */}
                      <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-lg bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-xs font-bold text-[#c8f8a9]">
                        A.
                      </div>

                      {/* Specialty Badge */}
                      {advisor.specialty && (
                        <div className="absolute bottom-3 left-3 right-3">
                          <span className="inline-block px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono text-[#c8f8a9]">
                            {advisor.specialty}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Advisor Info */}
                    <div className="p-5 space-y-3">
                      <div>
                        <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-[#c8f8a9] transition">
                          {advisor.name}
                        </h4>
                        <p className="text-xs text-emerald-200/80 font-sans mt-0.5">
                          {advisor.position}
                        </p>
                      </div>

                      {/* Credentials */}
                      <div className="flex items-center justify-between text-[11px] pt-3 border-t border-white/10 text-emerald-100/70 font-mono">
                        <span className="flex items-center space-x-1">
                          <GraduationCap className="w-3.5 h-3.5 text-[#c8f8a9]" />
                          <span>{advisor.credentials || "C.A.(M)"}</span>
                        </span>
                        <span className="text-[#c8f8a9] font-bold">Verified</span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          {advisors.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setStartIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                startIndex % totalAdvisors === idx
                  ? "w-8 bg-[#c8f8a9]"
                  : "w-2 bg-white/25 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
