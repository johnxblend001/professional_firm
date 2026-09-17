import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { FirmConfig } from "@/types/firm";
import { getFirmConfig } from "@/config/firms";

export default function StrategicAdviceBanner({ config: propConfig }: { config?: FirmConfig }) {
  const config = propConfig || getFirmConfig();
  const isFincia = config.slug === "fincia";

  return (
    <section className="relative py-24 lg:py-32 bg-[#181818] text-white overflow-hidden">
      {/* Background Image with directional vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1920&q=85"
          alt="Strategic Advice Guidance"
          fill
          sizes="100vw"
          className="object-cover object-left-center sm:object-center opacity-85"
        />
        {/* Gradient preserves visible bright subject on left, dark contrast on right */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, rgba(0,0,0,0.2) 0%, ${config.colors.dark}d0 50%, ${config.colors.dark}fa 100%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl ml-auto text-left lg:text-right">
          
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white mb-6">
            <span style={{ color: config.colors.accent }}>✦</span>
            <span>{isFincia ? "Strategic Advice" : "Partner-Led Counsel"}</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight mb-8">
            {isFincia ? (
              <>
                Get guidance for <br />
                <span className="font-bold text-white">Financial Decision</span>
              </>
            ) : (
              <>
                Authoritative Guidance for <br />
                <span className="font-bold text-white">Statutory & Tax Certainty</span>
              </>
            )}
          </h2>

          {/* Interactive Contact Glass Pills */}
          <div className="flex flex-wrap items-center gap-4 lg:justify-end mb-8">
            <a
              href={`mailto:${config.contact.email}`}
              className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 text-sm font-medium text-white transition-colors"
            >
              <Mail className="w-4 h-4" style={{ color: config.colors.accent }} />
              <span>{config.contact.email}</span>
            </a>

            <a
              href={`tel:${config.contact.phone}`}
              className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 text-sm font-medium text-white transition-colors"
            >
              <Phone className="w-4 h-4" style={{ color: config.colors.accent }} />
              <span>{config.contact.phone}</span>
            </a>
          </div>

          {/* Action Button */}
          <div className="flex lg:justify-end">
            <Link
              href="#contact"
              className="group inline-flex items-center pl-7 pr-2 py-2 rounded-full border border-white/20 text-white text-sm font-bold transition-all duration-300 hover:shadow-xl"
              style={{ backgroundColor: config.colors.dark }}
            >
              <span>{isFincia ? "Speak to an advisor" : "Speak to an Approved Auditor"}</span>
              <span
                className="ml-4 w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm transition-transform duration-300 group-hover:translate-x-1"
                style={{
                  backgroundColor: config.colors.accent,
                  color: config.colors.dark,
                }}
              >
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
