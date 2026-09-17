"use client";

import React, { useState } from "react";
import { ShieldCheck, Lock, FileText, CheckCircle2, ArrowRight, Building, Phone, Mail } from "lucide-react";
import { institutionalConfig } from "@/config/firms/institutional";

export default function InstitutionalProposalIntake() {
  const [formData, setFormData] = useState({
    entityType: "sdn-bhd",
    turnover: "10m-50m",
    ssmNumber: "",
    financialYearEnd: "31-dec",
    scope: "statutory-audit",
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [docketNo, setDocketNo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.companyName && formData.contactPerson && (formData.email || formData.phone)) {
      const generatedDocket = `RFP-SAC-${Math.floor(100000 + Math.random() * 900000)}`;
      setDocketNo(generatedDocket);
      setSubmitted(true);
    }
  };

  return (
    <section id="proposal-intake" className="py-20 lg:py-28 bg-[#0B1A30] text-white">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Statutory Trust Overview & NDA Assurance */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-white/10 border border-[#C5A059]/40 text-xs font-semibold text-[#C5A059] uppercase tracking-wider font-sans">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Formal Practice Intake</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-[1.15] tracking-tight">
              Request a Partner-Led Statutory Audit Proposal
            </h2>

            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Submit your company details for a preliminary assessment by Senior Managing Partner Mr. Sylvester Devaraj Anthony. All inquiries are covered by statutory audit confidentiality under Section 266 of the Companies Act 2016.
            </p>

            {/* NDA Trust Card */}
            <div className="p-6 rounded-2xl bg-[#071224] border border-[#C5A059]/30 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-[#C5A059]/15 border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-white">
                    Statutory Non-Disclosure Guarantee
                  </h4>
                  <p className="text-xs text-[#C5A059] font-sans">
                    Legal privilege under Accountants Act 1967
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Financial statements, draft trial balances, and management accounts submitted to Messrs. Sylvester Anthony & Co. are strictly protected and never disclosed to third parties.
              </p>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Engagement SLA:</span>
                <span className="text-white font-bold">24-Hour Partner Response</span>
              </div>
            </div>

            {/* Direct Chambers Contact */}
            <div className="space-y-3 pt-2 text-xs text-slate-300 font-sans">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Direct Chambers Line: +60 3-7804 1736 / 1737</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#C5A059]" />
                <span>Direct Audit Intake: audit@sylvesteranthony.com</span>
              </div>
              <div className="text-[11px] text-slate-400 leading-relaxed pl-7">
                Suite 609, 6th Floor, Block A, Kelana Square, Petaling Jaya, Selangor
              </div>
            </div>

          </div>

          {/* Right Column: Structured Formal RFP Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF8F5] text-[#0B1A30] rounded-2xl border-2 border-[#C5A059]/60 p-7 sm:p-10 shadow-2xl">
              
              {submitted ? (
                <div className="py-12 px-4 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-wider block">
                      Docket Reference: {docketNo}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1A30]">
                      Proposal Request Received
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-sans">
                      Thank you, <strong>{formData.contactPerson}</strong>. Your inquiry for <strong>{formData.companyName}</strong> has been assigned to Senior Partner Mr. Sylvester Devaraj Anthony. Our chambers will issue a formal proposal within 24 business hours.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#E2D9CC] max-w-md mx-auto text-xs text-left text-slate-600 space-y-1 font-sans">
                    <div><strong>Legal Entity:</strong> {formData.companyName} ({formData.entityType.toUpperCase()})</div>
                    <div><strong>Turnover Range:</strong> {formData.turnover}</div>
                    <div><strong>Scope:</strong> {formData.scope}</div>
                    <div><strong>Confidential Contact:</strong> {formData.email || formData.phone}</div>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center space-x-2 text-xs font-bold text-[#0B1A30] hover:text-[#C5A059] uppercase tracking-wider font-sans transition"
                  >
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                  
                  <div className="border-b border-[#E2D9CC] pb-4">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1A30]">
                      Audit & Assurance RFP Intake Form
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Please specify your enterprise parameters to calculate statutory audit fee scales accurately.
                    </p>
                  </div>

                  {/* Field 1: Company Name & SSM Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0B1A30] mb-1 uppercase tracking-wider">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Engineering Sdn Bhd"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2D9CC] bg-white text-sm text-[#0B1A30] placeholder-slate-400 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0B1A30] mb-1 uppercase tracking-wider">
                        SSM Registration No.
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 201801012345 (1234567-X)"
                        value={formData.ssmNumber}
                        onChange={(e) => setFormData({ ...formData, ssmNumber: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2D9CC] bg-white text-sm text-[#0B1A30] placeholder-slate-400 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                      />
                    </div>
                  </div>

                  {/* Field 2: Entity Type & Group Turnover Bracket */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0B1A30] mb-1 uppercase tracking-wider">
                        Entity Type
                      </label>
                      <select
                        value={formData.entityType}
                        onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2D9CC] bg-white text-sm text-[#0B1A30] focus:outline-none focus:border-[#C5A059]"
                      >
                        <option value="sdn-bhd">Private Limited (Sdn Bhd)</option>
                        <option value="berhad">Public Limited (Berhad)</option>
                        <option value="foreign-branch">Branch of Foreign Company</option>
                        <option value="llp">Limited Liability Partnership (PLT)</option>
                        <option value="holding-group">Holding Group (Consolidated)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B1A30] mb-1 uppercase tracking-wider">
                        Annual Turnover Bracket
                      </label>
                      <select
                        value={formData.turnover}
                        onChange={(e) => setFormData({ ...formData, turnover: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2D9CC] bg-white text-sm text-[#0B1A30] focus:outline-none focus:border-[#C5A059]"
                      >
                        <option value="under-10m">Under RM 10,000,000 / year</option>
                        <option value="10m-50m">RM 10,000,000 – RM 50,000,000</option>
                        <option value="50m-200m">RM 50,000,000 – RM 200,000,000</option>
                        <option value="above-200m">RM 200,000,000+ (Conglomerate)</option>
                      </select>
                    </div>
                  </div>

                  {/* Field 3: Scope of Engagement & Financial Year End */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0B1A30] mb-1 uppercase tracking-wider">
                        Primary Scope of Engagement
                      </label>
                      <select
                        value={formData.scope}
                        onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2D9CC] bg-white text-sm text-[#0B1A30] focus:outline-none focus:border-[#C5A059]"
                      >
                        <option value="statutory-audit">Statutory Audit (Companies Act 2016)</option>
                        <option value="tax-defense">Corporate Tax Defense & LHDN Dispute</option>
                        <option value="due-diligence">Financial Due Diligence & Forensics</option>
                        <option value="liquidation">Members&apos; Voluntary Liquidation (Winding-Up)</option>
                        <option value="full-retainer">Full Retainer (Audit + Tax + Secretarial)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B1A30] mb-1 uppercase tracking-wider">
                        Financial Year-End Date
                      </label>
                      <select
                        value={formData.financialYearEnd}
                        onChange={(e) => setFormData({ ...formData, financialYearEnd: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2D9CC] bg-white text-sm text-[#0B1A30] focus:outline-none focus:border-[#C5A059]"
                      >
                        <option value="31-dec">31 December</option>
                        <option value="31-mar">31 March</option>
                        <option value="30-jun">30 June</option>
                        <option value="30-sep">30 September</option>
                        <option value="other">Other Date</option>
                      </select>
                    </div>
                  </div>

                  {/* Field 4: Contact Person, Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0B1A30] mb-1 uppercase tracking-wider">
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Director / CFO name"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2D9CC] bg-white text-sm text-[#0B1A30] placeholder-slate-400 focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B1A30] mb-1 uppercase tracking-wider">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="cfo@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2D9CC] bg-white text-sm text-[#0B1A30] placeholder-slate-400 focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B1A30] mb-1 uppercase tracking-wider">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+60 12-xxx xxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2D9CC] bg-white text-sm text-[#0B1A30] placeholder-slate-400 focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-xs font-bold text-[#0B1A30] mb-1 uppercase tracking-wider">
                      Specific Engagement Requirements / Deadlines
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Upcoming AGM deadline, LHDN audit query letter received, or restructuring timetable..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2D9CC] bg-white text-sm text-[#0B1A30] placeholder-slate-400 focus:outline-none focus:border-[#C5A059] resize-none"
                    />
                  </div>

                  {/* Submission Row */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center space-x-2 text-xs text-slate-500">
                      <Lock className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Encrypted SSL · Section 266 CA 2016 Compliant</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#C5A059] to-[#D4B36F] hover:from-[#D4B36F] hover:to-[#E5C378] text-[#0B1A30] text-xs font-bold uppercase tracking-wider shadow-lg transition-all active:scale-95"
                    >
                      <span>Transmit Formal RFP to Managing Partner</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
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
