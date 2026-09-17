"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ChevronUp, Layers } from "lucide-react";

export default function DemoSwitcherDock() {
  const pathname = usePathname() || "";
  const [minimized, setMinimized] = useState(false);

  const demos = [
    {
      id: "sylvester",
      href: "/",
      label: "Sylvester Anthony",
      shortLabel: "Sylvester",
      subtitle: "MIA Chartered Audit",
      colorAccent: "#c5a059",
    },
    {
      id: "fincia",
      href: "/fincia",
      label: "Fincia",
      shortLabel: "Fincia",
      subtitle: "Finance Consulting",
      colorAccent: "#c8f8a9",
    },
    {
      id: "advisory",
      href: "/demo/advisory",
      label: "Advisory",
      shortLabel: "Advisory",
      subtitle: "Modern Growth & M&A",
      colorAccent: "#34d399",
    },
    {
      id: "institutional",
      href: "/demo/institutional",
      label: "Institutional",
      shortLabel: "Institutional",
      subtitle: "Big 4 Rigor & Statutory",
      colorAccent: "#fbbf24",
    },
    {
      id: "digital",
      href: "/demo/digital",
      label: "Digital Cloud",
      shortLabel: "Digital",
      subtitle: "e-Invoicing & Tech",
      colorAccent: "#3b82f6",
    },
  ];

  const isDemoActive = (demo: (typeof demos)[0]) => {
    const cleanPath = pathname.replace(/\/$/, "");
    if (demo.id === "sylvester") {
      return (
        cleanPath === "" ||
        cleanPath === "/" ||
        cleanPath.includes("sylvester") ||
        cleanPath === "/sac"
      );
    }
    if (demo.id === "fincia") {
      return cleanPath.includes("fincia");
    }
    return cleanPath.includes(demo.id);
  };

  if (minimized) {
    return (
      <aside aria-label="Demo switcher navigation" className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setMinimized(false)}
          className="flex items-center space-x-2 px-3.5 py-2 rounded-full bg-slate-950/90 text-white text-xs font-semibold backdrop-blur-md border border-white/20 shadow-2xl hover:bg-slate-900 transition-all active:scale-95"
          title="Open Demo Switcher Dock"
          aria-label="Open Demo Switcher Dock"
        >
          <Layers className="w-4 h-4 text-emerald-400" />
          <span>Switch Demo</span>
          <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
        </button>
      </aside>
    );
  }

  return (
    <aside
      aria-label="Demo switcher dock"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-[96vw] sm:max-w-3xl lg:max-w-4xl w-full px-2 pointer-events-auto"
    >
      <div className="bg-slate-950/95 backdrop-blur-xl border border-white/15 rounded-2xl p-1.5 sm:p-2 shadow-[0_20px_50px_rgba(0,0,0,0.65)] flex items-center justify-between gap-1 sm:gap-2 text-white">
        
        {/* Scrollable / Grid Buttons Container */}
        <div className="flex sm:grid sm:grid-cols-5 gap-1 sm:gap-1.5 flex-1 overflow-x-auto no-scrollbar py-0.5">
          {demos.map((demo) => {
            const isActive = isDemoActive(demo);

            return (
              <Link
                key={demo.id}
                href={demo.href}
                className={`group flex items-center space-x-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs font-semibold transition-all shrink-0 sm:shrink relative overflow-hidden ${
                  isActive
                    ? "bg-white/15 text-white ring-1 ring-white/30 shadow-inner"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
                title={`Switch to ${demo.label} demo`}
              >
                {/* Active Indicator Dot */}
                <div
                  className="w-2.5 h-2.5 rounded-full shrink-0 flex items-center justify-center transition-transform group-hover:scale-125 shadow-xs"
                  style={{ backgroundColor: demo.colorAccent }}
                />

                <div className="flex flex-col text-left leading-tight truncate">
                  <div className="flex items-center space-x-1">
                    <span className="truncate hidden sm:inline">{demo.label}</span>
                    <span className="truncate inline sm:hidden">{demo.shortLabel}</span>
                    {isActive && (
                      <span className="text-[9px] px-1 py-0.1 rounded bg-white/20 text-white font-mono shrink-0">
                        LIVE
                      </span>
                    )}
                  </div>
                  <span className="hidden md:block text-[10px] text-slate-400 font-normal truncate">
                    {demo.subtitle}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Minimize Button */}
        <div className="flex items-center pl-1 shrink-0 border-l border-white/10 ml-0.5 sm:ml-1">
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
