"use client";

import { useState, FormEvent } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const businessTypes = [
  "Contractor / Trades",
  "Solar & Energy",
  "Real Estate",
  "Property Services",
  "Beauty & Wellness",
  "Home Services",
  "Other",
];

/* Hairline detail rows — split from the existing reassurance line */
const detailRows = ["No spam.", "No automated emails.", "A real person will call you."];

const inputClasses =
  "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all text-white placeholder:text-white/30";

export default function ConventionPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    challenge: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ ...form, source: "convention" }),
      });

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-hero-gradient relative overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="aurora absolute top-0 right-0 w-[800px] h-[800px] bg-teal/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="aurora-delayed absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal/8 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="relative w-full max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT — brand, heading, intro, detail rows */}
          <div className="lg:col-span-5">
            <AnimateIn>
              <img
                src="/logo-white.png"
                alt="True North Automation"
                className="h-28 w-auto mb-4"
              />
              <h1 className="text-xl font-bold text-white tracking-tight">
                True North Automation
              </h1>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <h2 className="mt-10 text-3xl sm:text-4xl font-extrabold text-white tracking-tighter leading-[1.05]">
                Claim Your Free Automation Audit
              </h2>
              <p className="mt-4 text-white/60 leading-relaxed">
                Find out exactly where your business is losing leads, wasting time, and leaving money on the table. Takes 10 minutes. No commitment.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="mt-10 border-t border-white/10">
                {detailRows.map((row, i) => (
                  <div
                    key={row}
                    className="flex items-baseline gap-4 py-3.5 border-b border-white/10"
                  >
                    <span className="font-mono text-xs text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-xs tracking-[0.25em] uppercase text-white/40 leading-relaxed">
                      {row}
                    </span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* RIGHT — dark form panel */}
          <div className="lg:col-span-7">
            <AnimateIn delay={0.15}>
              <div className="panel-dark rounded-2xl p-8 lg:p-10">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label
                            htmlFor="conv-name"
                            className="block text-sm font-semibold text-white/70 mb-1.5"
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="conv-name"
                            required
                            value={form.name}
                            onChange={(e) =>
                              setForm({ ...form, name: e.target.value })
                            }
                            className={inputClasses}
                            placeholder="John Smith"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="conv-email"
                            className="block text-sm font-semibold text-white/70 mb-1.5"
                          >
                            Email *
                          </label>
                          <input
                            type="email"
                            id="conv-email"
                            required
                            value={form.email}
                            onChange={(e) =>
                              setForm({ ...form, email: e.target.value })
                            }
                            className={inputClasses}
                            placeholder="john@example.com"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="conv-phone"
                            className="block text-sm font-semibold text-white/70 mb-1.5"
                          >
                            Phone *
                          </label>
                          <input
                            type="tel"
                            id="conv-phone"
                            required
                            value={form.phone}
                            onChange={(e) =>
                              setForm({ ...form, phone: e.target.value })
                            }
                            className={inputClasses}
                            placeholder="(902) 555-0123"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="conv-type"
                            className="block text-sm font-semibold text-white/70 mb-1.5"
                          >
                            Business Type *
                          </label>
                          <select
                            id="conv-type"
                            required
                            value={form.businessType}
                            onChange={(e) =>
                              setForm({ ...form, businessType: e.target.value })
                            }
                            className={`${inputClasses} appearance-none cursor-pointer`}
                          >
                            <option value="" className="bg-navy-dark text-white">
                              Select your industry
                            </option>
                            {businessTypes.map((type) => (
                              <option
                                key={type}
                                value={type}
                                className="bg-navy-dark text-white"
                              >
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="conv-challenge"
                            className="block text-sm font-semibold text-white/70 mb-1.5"
                          >
                            Biggest Challenge
                          </label>
                          <textarea
                            id="conv-challenge"
                            rows={3}
                            value={form.challenge}
                            onChange={(e) =>
                              setForm({ ...form, challenge: e.target.value })
                            }
                            className={`${inputClasses} resize-none`}
                            placeholder="What's the one thing in your business that keeps you up at night?"
                          />
                        </div>

                        {error && (
                          <p className="text-sm text-error font-medium">{error}</p>
                        )}

                        <button
                          type="submit"
                          disabled={submitting}
                          className="btn-gold btn-sheen w-full inline-flex items-center justify-center gap-2 px-6 py-4 font-bold rounded-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {submitting ? "Sending..." : "Get My Free Audit"}
                          {!submitting && <ArrowRight className="w-5 h-5" />}
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                          delay: 0.1,
                        }}
                        className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle className="w-8 h-8 text-success" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white">
                        You&apos;re in!
                      </h3>
                      <p className="mt-3 text-white/60">
                        We&apos;ll reach out personally within 24 hours to schedule your audit.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </div>
  );
}
