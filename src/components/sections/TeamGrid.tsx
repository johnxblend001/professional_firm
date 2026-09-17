"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Share2 } from "lucide-react";
import { FirmConfig } from "@/types/firm";
import { getFirmConfig } from "@/config/firms";

export default function TeamGrid({ config: propConfig }: { config?: FirmConfig }) {
  const config = propConfig || getFirmConfig();
  const isFincia = config.slug === "fincia" || config.slug === "advisory" || config.archetype === "advisory";

  // Client logos for rotating marquee
  const clientLogos = [
    { name: "Logoipsum 1", src: "https://fincia-demo.themetechmount.com/wp-content/uploads/2025/12/client-03.svg" },
    { name: "Logoipsum 2", src: "https://fincia-demo.themetechmount.com/wp-content/uploads/2025/12/client-04.svg" },
    { name: "Logoipsum 3", src: "https://fincia-demo.themetechmount.com/wp-content/uploads/2025/12/client-02.svg" },
    { name: "Logoipsum 4", src: "https://fincia-demo.themetechmount.com/wp-content/uploads/2025/12/client-07.svg" },
    { name: "Logoipsum 5", src: "https://fincia-demo.themetechmount.com/wp-content/uploads/2025/12/client-06.svg" },
    { name: "Logoipsum 6", src: "https://fincia-demo.themetechmount.com/wp-content/uploads/2025/12/client-05.svg" },
  ];

  // Advisors matching roster
  const advisors = config.advisors && config.advisors.length > 0
    ? config.advisors
    : isFincia
    ? [
        {
          id: "olivio-bennett",
          name: "Olivio bennett",
          position: "Asset manager",
          image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/team-6-413x480.jpg",
        },
        {
          id: "ariana-collins",
          name: "Ariana Collins",
          position: "Wealth advisor",
          image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/team-1-413x480.jpg",
        },
        {
          id: "melody-turner",
          name: "Melody Turner",
          position: "Financial advisor",
          image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/team-5-413x480.jpg",
        },
        {
          id: "micah-turner",
          name: "Micah Turner",
          position: "Portfolio strategist",
          image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/team-4-413x480.jpg",
        },
        {
          id: "austin-parker",
          name: "Austin Parker",
          position: "Risk adviser",
          image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/team-2-413x480.jpg",
        },
        {
          id: "julian-carter",
          name: "Julian Carter",
          position: "Audit Director",
          image: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/team-3-413x480.jpg",
        },
      ]
    : [
        {
          id: "sylvester-anthony",
          name: "Mr. Sylvester Devaraj Anthony",
          position: "Founder & Managing Partner (C.A.(M))",
          image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "audit-partner",
          name: "Audit & Assurance Practice",
          position: "Approved Statutory Auditors",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "tax-advisory-team",
          name: "Tax Compliance & Defense",
          position: "Licensed Tax Agents",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "corp-secretarial",
          name: "Corporate Secretarial Advisory",
          position: "Licensed Company Secretaries",
          image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "financial-reporting",
          name: "Management & Payroll Services",
          position: "MIA Chartered Accountants",
          image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "restructuring-advisory",
          name: "Restructuring & Insolvency",
          position: "Approved Liquidators",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
        },
      ];

  // Carousel Rotation State
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const [activeShareId, setActiveShareId] = useState<string | null>(null);
  const totalAdvisors = advisors.length;

  // Responsive items count
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

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % totalAdvisors);
  };

  // Auto-rotate team cards every 4 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, totalAdvisors]);

  // Doubled roster for continuous carousel wrap
  const displayAdvisors = [...advisors, ...advisors, ...advisors];

  return (
    <div id="team-section" className="relative w-full bg-white">
      {/* UPPER DARK SECTION — logos, heading */}
      <section
        className="pt-16 pb-36 text-white relative"
        style={{ backgroundColor: config.colors.dark }}
      >
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">

          {/* Continuous Rotating Client Logos Marquee */}
          <div className="overflow-hidden py-3 w-full relative">
            <div
              className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
              style={{ background: `linear-gradient(to right, ${config.colors.dark}, transparent)` }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
              style={{ background: `linear-gradient(to left, ${config.colors.dark}, transparent)` }}
            />
            <div className="animate-marquee items-center gap-12 sm:gap-16">
              {[...clientLogos, ...clientLogos, ...clientLogos].map((client, idx) => (
                <div
                  key={idx}
                  className="h-9 w-24 sm:w-32 flex items-center justify-center grayscale contrast-200 invert brightness-150 opacity-70 hover:opacity-100 transition-opacity shrink-0"
                >
                  <img
                    src={client.src}
                    alt={client.name}
                    className="max-h-7 max-w-[120px] object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Satisfied Clients */}
          <div className="text-center mt-4">
            <p className="text-xs sm:text-sm text-gray-300">
              Over{" "}
              <strong className="font-bold text-white">
                {isFincia ? "2,600" : "240+"}
              </strong>{" "}
              satisfied clients businesses {isFincia ? "worldwide" : "across Malaysia"}
            </p>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-white/10" />

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-white mb-3">
              <span style={{ color: config.colors.accent }}>✦</span>
              <span>{isFincia ? "Expert advisors" : "Professional Leadership"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-[1.25] tracking-tight">
              {isFincia
                ? "A dedicated team of certified financial advisors"
                : "A Dedicated Team of Certified Financial Advisors & Approved Auditors"}
            </h2>
          </div>

        </div>
      </section>

      {/* CARD CAROUSEL — pulled up into dark section via -mt-20 */}
      <div
        className="max-w-[1160px] mx-auto px-4 sm:px-6 relative z-20 -mt-20"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); setActiveShareId(null); }}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out -mx-2.5"
            style={{ transform: `translateX(-${startIndex * (100 / cardsToShow)}%)` }}
          >
            {displayAdvisors.map((advisor, idx) => {
              const isHovered = activeShareId === `${advisor.id}-${idx}`;
              return (
                <div key={`${advisor.id}-${idx}`} className="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-2.5">
                  <div className="relative aspect-[3/3.7] rounded-2xl overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300 border border-black/5 bg-slate-900">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

                    {/* Name & Position */}
                    <div className="absolute bottom-4 left-4 right-14 z-10 pointer-events-none">
                      <h4 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug drop-shadow-sm">
                        {advisor.name}
                      </h4>
                      <p className="text-xs font-normal text-gray-300 mt-0.5">
                        {advisor.position}
                      </p>
                    </div>

                    {/* Share Tray */}
                    <div
                      className="absolute bottom-3.5 right-3.5 z-20"
                      onMouseEnter={() => setActiveShareId(`${advisor.id}-${idx}`)}
                      onMouseLeave={() => setActiveShareId(null)}
                    >
                      <div
                        className={`flex flex-col items-center space-y-2 rounded-xl py-2 px-1.5 transition-all duration-300 shadow-xl ${
                          isHovered
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 translate-y-2 pointer-events-none absolute bottom-0 right-0"
                        }`}
                        style={{ backgroundColor: config.colors.accent, color: config.colors.dark }}
                      >
                        <a href="#" aria-label="X" className="p-1 hover:scale-110 transition-transform font-bold text-xs">
                          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>
                        <a href="#" aria-label="Facebook" className="p-1 hover:scale-110 transition-transform font-bold text-xs leading-none">f</a>
                        <a href="#" aria-label="LinkedIn" className="p-1 hover:scale-110 transition-transform font-bold text-xs leading-none">in</a>
                        <a href="#" aria-label="Instagram" className="p-1 hover:scale-110 transition-transform">
                          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                        <div className="w-3 h-px bg-current/25 my-0.5" />
                        <div className="p-0.5"><Share2 className="w-3.5 h-3.5" /></div>
                      </div>

                      {!isHovered && (
                        <button
                          className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shadow-md transition-transform hover:scale-105 active:scale-95"
                          style={{ backgroundColor: config.colors.accent, color: config.colors.dark }}
                          aria-label={`Share ${advisor.name} profile`}
                        >
                          <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="pb-16 sm:pb-20" />
    </div>
  );
}
