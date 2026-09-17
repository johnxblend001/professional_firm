import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Shield, Cpu, ArrowRight, CheckCircle2, ExternalLink, Layers, Award, BarChart3, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Malaysian Accounting & Audit Firm Website Archetypes — Live Pitch Hub",
  description: "Explore 3 differentiated, top-tier agency website archetypes for pitching Malaysian accounting, audit, and advisory firm prospects.",
};

export default function DemoHubPage() {
  const archetypes = [
    {
      id: "advisory",
      href: "/demo/advisory",
      badge: "Archetype 01 · High-Growth Consulting",
      title: "Modern Growth & Advisory",
      subtitle: "Fincia Style · Wealth Management & M&A",
      tagline: "Where Strategic Ambitions Accelerate Into Enterprise Scale",
      palette: [
        { name: "Deep Emerald", hex: "#063633" },
        { name: "Accent Lime", hex: "#C8F8A9" },
        { name: "Soft Sage", hex: "#F2F5F1" },
      ],
      idealFor: "Corporate financial consultancies, boutique wealth advisors, M&A dealmakers, and family office managers.",
      distinctElements: [
        "High-energy deep emerald & vibrant lime contrast palette",
        "Dual-rotation carousels (client logos marquee + team advisors auto-carousel)",
        "Rounded cards with glassmorphic contact form card over collaboration photo",
        "Signature pill buttons with accent lime arrow squares",
        "Strategic 4-phase consultation roadmap (Discovery to Stewardship)",
      ],
      bgAccent: "bg-[#063633]",
      borderAccent: "border-[#c8f8a9]/40",
      pillBg: "bg-[#c8f8a9]",
      pillText: "text-[#063633]",
      icon: Sparkles,
    },
    {
      id: "institutional",
      href: "/demo/institutional",
      badge: "Archetype 02 · Heritage Authority",
      title: "Prestigious Institutional & Statutory",
      subtitle: "Big 4 Rigor · Approved Statutory Auditors",
      tagline: "Thirty-Two Years of Uncompromising Fiscal Integrity & Audit Authority",
      palette: [
        { name: "Oxford Navy", hex: "#0B1A30" },
        { name: "Brushed Gold", hex: "#C5A059" },
        { name: "Warm Stone", hex: "#F5F2EB" },
      ],
      idealFor: "Approved Statutory Auditors under CA 2016, MIA member firms (est. 1990s), approved liquidators, and tax defense practices.",
      distinctElements: [
        "Aristocratic Oxford Navy & Brushed Champagne Gold palette with warm stone surfaces",
        "Editorial Playfair Display serif typography paired with clean sans body",
        "Formal crest / monogram seal (SAC · Vigilantia et Integritas · Est. 1992)",
        "Traditional 4-pillar structured statutory audit assurance breakdown",
        "Partner pedigree cards highlighting Ex-Big 4 background & license numbers",
        "High-trust formal proposal intake (RFP) module with statutory NDA pledge",
      ],
      bgAccent: "bg-[#0B1A30]",
      borderAccent: "border-[#C5A059]/40",
      pillBg: "bg-[#C5A059]",
      pillText: "text-[#0B1A30]",
      icon: Shield,
    },
    {
      id: "digital",
      href: "/demo/digital",
      badge: "Archetype 03 · Modern Tech & Precision",
      title: "Minimalist Precision & Cloud Accounting",
      subtitle: "LHDN MyInvois Mandate & Xero Platinum",
      tagline: "The Modern Cloud Ledger Engineered for Scaling Malaysian Companies",
      palette: [
        { name: "Deep Slate", hex: "#0F172A" },
        { name: "Electric Blue", hex: "#2563EB" },
        { name: "Stark White", hex: "#FFFFFF" },
      ],
      idealFor: "Tech-forward accounting firms, Xero Platinum partners, LHDN e-Invoicing specialists, and paperless corporate secretarial providers.",
      distinctElements: [
        "Clean Swiss precision layout in Deep Slate, Stark White, and Electric Royal Blue",
        "Live system & API gateway status ticker (0.18s latency, 100% tax clearance)",
        "Modular bento precision grid layout detailing 4 connected cloud systems",
        "Interactive 5-point SME compliance readiness scorecard with live score calculation",
        "Comprehensive 3-tier comparison matrix with monthly/annual toggle",
        "Integrated 15-minute onboarding discovery call calendar booking module",
      ],
      bgAccent: "bg-[#0F172A]",
      borderAccent: "border-[#2563EB]/40",
      pillBg: "bg-[#2563EB]",
      pillText: "text-white",
      icon: Cpu,
    },
  ];

  const pitchGuide = [
    {
      criterion: "Prospect Tone & Archetype",
      advisory: "Forward-thinking, ambitious growth catalyst",
      institutional: "Authoritative, conservative, sovereign fiscal stability",
      digital: "High-speed, automated, technical precision",
    },
    {
      criterion: "Primary Revenue Driver",
      advisory: "Retainer consulting, M&A success fees, wealth management",
      institutional: "Statutory audit assurance, LHDN tax defense, liquidations",
      digital: "Monthly recurring bookkeeping, e-Invois API, payroll subscriptions",
    },
    {
      criterion: "Key Regulatory Citations",
      advisory: "Fiduciary standards, capital allocation governance",
      institutional: "Section 263 CA 2016, MIA By-Laws, Section 153 ITA 1967",
      digital: "LHDN MyInvois API 1.0, PEPPOL, Section 120 compliance",
    },
    {
      criterion: "Ideal Target Client",
      advisory: "High-net-worth founders, family offices, mid-market enterprises",
      institutional: "Medium & large Sdn Bhd, manufacturing, construction conglomerates",
      digital: "SaaS, e-commerce, digital agencies, modern SMEs (<RM25M)",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-emerald-400 selection:text-slate-950">
      
      {/* Top Banner */}
      <div className="bg-slate-900 border-b border-slate-800 py-3 px-4 sm:px-6">
        <div className="max-w-[1340px] mx-auto flex items-center justify-between text-xs text-slate-400 font-mono">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-white font-bold">Agency Pitch Showcase</span>
            <span>· 3 Live Differentiated Archetypes</span>
          </div>
          <span className="hidden sm:inline text-slate-500">
            Malaysian Practice Edition · Next.js 14 App Router
          </span>
        </div>
      </div>

      {/* Hero Header */}
      <header className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 text-center space-y-5">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 shadow-md">
          <Layers className="w-3.5 h-3.5" />
          <span>Bespoke Accounting Firm Website Archetypes</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.12]">
          Tailored Pitch Variations for Malaysian Accounting & Audit Prospects
        </h1>

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Accounting firms are not one-size-fits-all. Pitch your prospect with the archetype that matches their business model, pedigree, and regulatory authority.
        </p>
      </header>

      {/* 3 Main Archetype Cards */}
      <main className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {archetypes.map((archetype) => {
            const Icon = archetype.icon;

            return (
              <div
                key={archetype.id}
                className={`rounded-3xl border ${archetype.borderAccent} bg-slate-900/90 p-7 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-white/40 transition-all duration-300`}
              >
                <div>
                  {/* Archetype Header Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">
                      {archetype.badge}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h2 className="text-2xl font-bold text-white tracking-tight font-sans">
                    {archetype.title}
                  </h2>
                  <p className="text-xs font-semibold text-slate-400 mt-1">
                    {archetype.subtitle}
                  </p>

                  {/* Palette Swatches */}
                  <div className="my-5 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400">Palette:</span>
                    <div className="flex items-center space-x-2">
                      {archetype.palette.map((swatch, sIdx) => (
                        <div key={sIdx} className="flex items-center space-x-1.5">
                          <div
                            className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-xs"
                            style={{ backgroundColor: swatch.hex }}
                            title={`${swatch.name} (${swatch.hex})`}
                          />
                          <span className="text-slate-300 text-[10px]">{swatch.name.split(" ")[0]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal Target Client */}
                  <div className="space-y-1 mb-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block font-mono">
                      Best Suited For:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {archetype.idealFor}
                    </p>
                  </div>

                  {/* Distinct Elements List */}
                  <div className="space-y-2 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block font-mono">
                      Craft Features & Distinct Elements:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-300 font-sans">
                      {archetype.distinctElements.map((elem, eIdx) => (
                        <li key={eIdx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{elem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Launch Button */}
                <div className="pt-5 border-t border-slate-800">
                  <Link
                    href={archetype.href}
                    className={`w-full group/btn inline-flex items-center justify-between px-5 py-3.5 rounded-xl ${archetype.pillBg} ${archetype.pillText} text-xs font-bold font-sans tracking-wide uppercase shadow-lg hover:brightness-110 transition-all active:scale-95`}
                  >
                    <span>Launch Live Demo</span>
                    <div className="w-6 h-6 rounded-lg bg-black/15 flex items-center justify-center transition-transform group-hover/btn:translate-x-1">
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </Link>

                  <div className="text-center text-[10px] text-slate-500 font-mono mt-2.5">
                    Route: <code className="text-slate-400 font-bold">{archetype.href}</code>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Pitch Guide Comparison Matrix Table */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold block mb-1">
                Pitch Decision Matrix
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Which Archetype Should You Pitch to Your Prospect?
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Designed for High Close Rates
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                  <th className="py-3 px-4 w-1/4">Evaluation Dimension</th>
                  <th className="py-3 px-4 text-[#c8f8a9] w-1/4">1. Advisory (Emerald)</th>
                  <th className="py-3 px-4 text-[#C5A059] w-1/4">2. Institutional (Navy)</th>
                  <th className="py-3 px-4 text-[#60a5fa] w-1/4">3. Digital (Slate)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {pitchGuide.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white font-mono text-[11px]">
                      {row.criterion}
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 leading-relaxed">
                      {row.advisory}
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 leading-relaxed">
                      {row.institutional}
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 leading-relaxed">
                      {row.digital}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center pt-8 text-xs text-slate-500 font-mono space-y-2">
          <p>
            All 3 variations are fully typed, SEO-optimized with JSON-LD schemas, and ready for client demonstration.
          </p>
          <p className="text-slate-600">
            Messrs. Sylvester Anthony & Co. · Apex Growth Partners · LedgerPulse Cloud Accountants
          </p>
        </div>

      </main>

    </div>
  );
}
