"use client";

import React, { useState } from "react";
import { Calendar, Clock, CheckCircle2, ArrowRight, User, Mail, Phone, Building, Video } from "lucide-react";

export default function DigitalBooking() {
  const [selectedDay, setSelectedDay] = useState("Tomorrow");
  const [selectedTime, setSelectedTime] = useState("10:30 AM");
  const [topic, setTopic] = useState("einvoice");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [booked, setBooked] = useState(false);

  const days = [
    { label: "Tomorrow", date: "14 Sept", slots: 3 },
    { label: "Thursday", date: "15 Sept", slots: 5 },
    { label: "Friday", date: "16 Sept", slots: 2 },
    { label: "Next Mon", date: "19 Sept", slots: 6 },
  ];

  const times = [
    "09:30 AM",
    "10:30 AM",
    "02:00 PM",
    "03:30 PM",
    "04:30 PM",
  ];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && (formData.email || formData.phone)) {
      setBooked(true);
    }
  };

  return (
    <section id="digital-booking" className="py-20 lg:py-28 bg-[#0F172A] text-white">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Context & Host Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-mono text-blue-300">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Direct Discovery Session</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.15] font-sans">
              Schedule a 15-Minute Cloud Ledger Demo
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-light">
              Choose a time slot to review your current bookkeeping workflow, test your LHDN e-Invoicing readiness, and see how LedgerPulse automates your financial close.
            </p>

            {/* Host Callout */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center space-x-4">
              <div className="w-14 h-14 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-mono font-bold text-base shrink-0">
                KW
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-white font-sans">
                  Kenneth Wong, C.A.(M)
                </h4>
                <div className="text-xs text-blue-400 font-mono">
                  Managing Director · Ex-PwC Tech Senior Manager
                </div>
                <div className="text-[11px] text-slate-400">
                  Google Meet link generated instantly upon confirmation.
                </div>
              </div>
            </div>

            {/* Reassurance points */}
            <div className="space-y-2 text-xs text-slate-400 font-sans">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero sales pressure. Technical audit & pricing guidance only.</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Free LHDN e-Invois assessment scorecard summary included.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Booking Calendar Interface */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-2xl border border-slate-200 p-7 sm:p-9 shadow-2xl">
              
              {booked ? (
                <div className="py-12 px-4 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block">
                      Booking Confirmed
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-sans">
                      See You on {selectedDay} at {selectedTime}
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-sans">
                      We have sent a Google Meet invitation and calendar ICS file to <strong>{formData.email || formData.phone}</strong>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-xs text-left text-slate-600 space-y-1 font-mono">
                    <div><strong>Guest:</strong> {formData.name} ({formData.company})</div>
                    <div><strong>Session:</strong> 15-Min Onboarding Discovery</div>
                    <div><strong>Time:</strong> {selectedDay}, {selectedTime} (GMT+8)</div>
                    <div><strong>Host:</strong> Kenneth Wong, C.A.(M)</div>
                  </div>

                  <button
                    onClick={() => setBooked(false)}
                    className="inline-flex items-center space-x-2 text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider font-sans transition"
                  >
                    <span>Reschedule or Book Another Slot</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBook} className="space-y-6">
                  
                  {/* Step 1: Select Date */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                      1. Select Available Day
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {days.map((day) => (
                        <button
                          key={day.label}
                          type="button"
                          onClick={() => setSelectedDay(day.label)}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            selectedDay === day.label
                              ? "bg-blue-50 border-blue-600 shadow-xs ring-1 ring-blue-600"
                              : "bg-white border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          <div className={`text-xs font-bold font-sans ${selectedDay === day.label ? "text-blue-900" : "text-slate-900"}`}>
                            {day.label}
                          </div>
                          <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                            {day.date}
                          </div>
                          <div className="text-[10px] text-emerald-600 font-medium mt-1">
                            {day.slots} slots open
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Select Time */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                      2. Select Time (Kuala Lumpur Time GMT+8)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {times.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`px-3.5 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                            selectedTime === time
                              ? "bg-[#0F172A] text-white shadow-sm"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Discussion Topic */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                      3. Primary Discussion Focus
                    </label>
                    <select
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-xs font-sans text-slate-900 focus:outline-none focus:border-blue-600"
                    >
                      <option value="einvoice">LHDN MyInvois Mandate & API Integration</option>
                      <option value="backlog">Clear Bookkeeping Backlog & Catch-Up Accounting</option>
                      <option value="xero-migration">Migrate from Desktop / Excel to Cloud Xero</option>
                      <option value="virtual-cfo">Virtual CFO & 13-Week Cashflow Forecasting</option>
                      <option value="secretarial-payroll">Digital Secretarial & Automated Payroll</option>
                    </select>
                  </div>

                  {/* Step 4: Contact Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1 font-sans">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Tan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs font-sans text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1 font-sans">
                        Company Name (Sdn Bhd)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Acme Tech Sdn Bhd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs font-sans text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1 font-sans">
                        Official Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@acme.my"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs font-sans text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1 font-sans">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+60 12-xxx xxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs font-sans text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  {/* Submission Row */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold font-sans uppercase tracking-wider shadow-lg shadow-blue-500/25 transition active:scale-95"
                    >
                      <Video className="w-4 h-4" />
                      <span>Confirm 15-Min Discovery Call with Kenneth Wong</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="text-center text-[10px] text-slate-500 mt-2 font-mono">
                      Confirmation & Google Meet details transmitted instantly.
                    </div>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
