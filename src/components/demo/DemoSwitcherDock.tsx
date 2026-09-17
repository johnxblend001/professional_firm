"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Shield, Cpu, ExternalLink, X, ChevronUp, Layers } from "lucide-react";

export default function DemoSwitcherDock() {
  const pathname = usePathname() || "";
  const [minimized, setMinimized] = useState(false);

  const demos = [
    {
      id: "advisory",
      href: "/demo/advisory",
      label: "Advisory",
      subtitle: "Emerald & Lime · Fincia Style",
      icon: Sparkles,
      colorBg: "#063633",
      colorAccent: "#c8f8a9",
      activeBorder: "border-[#c8f8a9]",
    },
    {
      id: "institutional",
      href: "/demo/institutional",
      label: "Institutional",
      subtitle: "Navy & Gold · Big 4 Authority",
      icon: Shield,
      colorBg: "#0B1A30",
      colorAccent: "#C5A059",
      activeBorder: "border-[#C5A059]",
    },
    {
      id: "digital",
      href: "/demo/digital",
      label: "Digital Cloud",
      subtitle: "Slate & Blue · e-Invoicing Grid",
      icon: Cpu,
      colorBg: "#0F172A",
      colorAccent: "#2563EB",
      activeBorder: "border-[#2563EB]",
    },
  ];

  if (minimized) {
    return (
      <aside aria-label="Demo switcher navigation" className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setMinimized(false)}
          className="flex items-center space-x-2 px-3.5 py-2 rounded-full bg-slate-900/90 text-white text-xs font-semibold backdrop-blur-md border border-white/20 shadow-2xl hover:bg-slate-900 transition-all active:scale-95"
          title="Open Pitch Archetype Switcher"
          aria-label="Open Pitch Archetype Switcher"
        >
          <Layers className="w-4 h-4 text-emerald-400" />
          <span>Switch Demo Archetype</span>
          <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
        </button>
      </aside>
    );
  }

  return (
    <aside aria-label="Demo switcher dock" className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] sm:max-w-2xl w-full px-2">
      <div className="bg-slate-950/95 backdrop-blur-xl border border-white/15 rounded-2xl p-2 sm:p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex items-center justify-between gap-1 sm:gap-2 text-white">
        
        {/* Hub Link */}
        <Link
          href="/demo"
          className="hidden sm:flex items-center space-x-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition text-xs font-semibold shrink-0"
          title="View All 3 Demos Hub"
        >
          <Layers className="w-3.5 h-3.5 text-slate-400" />
          <span className="hidden md:inline">Pitch Hub</span>
        </Link>

        <div className="hidden sm:block w-px h-6 bg-white/10 shrink-0" />

        {/* 3 Archetype Buttons */}
        <div className="grid grid-cols-3 gap-1 sm:gap-1.5 flex-1">
          {demos.map((demo) => {
            const Icon = demo.icon;
            const isActive = pathname.includes(demo.id);

            return (
              <Link
                key={demo.id}
                href={demo.href}
                className={`group flex items-center space-x-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs font-semibold transition-all relative overflow-hidden ${
                  isActive
                    ? "bg-white/15 text-white ring-1 ring-white/30 shadow-inner"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {/* Active Indicator Dot */}
                <div
                  className="w-2.5 h-2.5 rounded-full shrink-0 flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: demo.colorAccent }}
                />

                <div className="flex flex-col text-left leading-tight truncate">
                  <div className="flex items-center space-x-1">
                    <span className="truncate">{demo.label}</span>
                    {isActive && (
                      <span className="text-[10px] px-1 py-0.2 rounded bg-white/20 text-white font-mono shrink-0">
                        LIVE
                      </span>
                    )}
                  </div>
                  <span className="hidden md:block text-[10px] text-slate-400 font-normal truncate">
                    {demo.subtitle.split("·")[0]}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Minimize Button */}
        <div className="flex items-center pl-1 shrink-0">
          <button
            onClick={() => setMinimized(true)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition"
            title="Minimize Switcher Dock"
            aria-label="Minimize Switcher Dock"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </aside>
  );
}
