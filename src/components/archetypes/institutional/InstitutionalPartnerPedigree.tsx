import React from "react";
import Image from "next/image";
import { Award, Shield, CheckCircle, Scale, GraduationCap } from "lucide-react";
import { institutionalConfig } from "@/config/firms/institutional";

export default function InstitutionalPartnerPedigree() {
  const partners = institutionalConfig.partners || [];

  return (
    <section id="partner-pedigree" className="py-20 lg:py-28 bg-[#F5F2EB] border-b border-[#E2D9CC]">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded bg-white border border-[#E2D9CC] text-xs font-semibold text-[#0B1A30] uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Practice Leadership & Professional Pedigree</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0B1A30] tracking-tight leading-[1.2] mb-4">
            Direct Senior Partner Supervision on Every Audit Mandate
          </h2>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            Unlike international firms that delegate field engagements to junior associates, every audit and tax controversy at Messrs. Sylvester Anthony & Co. is directly led by seasoned practitioners with decades of Big-4 rigor and Malaysian statutory standing.
          </p>
        </div>

        {/* 3 Partner Pedigree Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E2D9CC] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo with fine gold border and pedigree badge */}
                <div className="relative aspect-[4/4.2] w-full overflow-hidden bg-[#0B1A30]">
                  <Image
                    src={partner.image || "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80"}
                    alt={partner.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A30] via-transparent to-transparent opacity-80" />

                  {/* Monogram Seal watermark */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-[#0B1A30]/80 border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] font-serif font-bold text-xs backdrop-blur-sm">
                    SAC
                  </div>

                  {/* Pedigree Ribbon */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 rounded bg-[#C5A059] text-[#0B1A30] text-[10px] font-bold uppercase tracking-wider font-sans shadow-md">
                      {partner.pedigreeBadge}
                    </span>
                  </div>
                </div>

                {/* Partner Details */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1A30] leading-snug">
                      {partner.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider font-sans">
                      {partner.title}
                    </div>
                  </div>

                  {/* Formal Credentials Chip */}
                  <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#E2D9CC] text-xs font-mono text-slate-700 space-y-0.5">
                    <div className="flex items-center space-x-1.5 text-[11px] font-bold text-[#0B1A30]">
                      <GraduationCap className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Accredited Qualifications:</span>
                    </div>
                    <div className="text-[11px] text-slate-600 pl-5">
                      {partner.credentials}
                    </div>
                  </div>

                  {/* Summary / Bio */}
                  <p className="text-xs text-slate-600 leading-relaxed font-sans pt-1">
                    {partner.summary}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 py-4 bg-[#FAF8F5] border-t border-[#E2D9CC] flex items-center justify-between text-[11px] text-slate-500 font-sans">
                <span className="flex items-center space-x-1">
                  <Scale className="w-3 h-3 text-[#C5A059]" />
                  <span>Licensed Audit Authority</span>
                </span>
                <span className="font-mono text-[#0B1A30] font-semibold">
                  MIA Registered
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Audit Quality Assurance Pledge */}
        <div className="mt-12 bg-white rounded-xl p-6 sm:p-8 border border-[#E2D9CC] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-[#0B1A30] text-[#C5A059] flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#0B1A30]">
                Institutional Independence & Conflict-Free Assurance
              </h4>
              <p className="text-xs text-slate-600 font-sans">
                In strict accordance with the Malaysian Institute of Accountants (MIA) By-Laws on Professional Conduct and Ethics.
              </p>
            </div>
          </div>

          <div className="text-xs font-sans text-right shrink-0">
            <span className="block font-bold text-[#0B1A30]">Audit Committee Compliant</span>
            <span className="text-[#C5A059] font-mono">Sections 263-266, CA 2016</span>
          </div>
        </div>

      </div>
    </section>
  );
}
