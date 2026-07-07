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
    <div className="min-h-screen bg-hero-gradient relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal/3 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="relative w-full max-w-lg mx-auto px-6 py-12">
        {/* Logo */}
        <AnimateIn className="text-center mb-10">
          <img
            src="/logo-white.png"
            alt="TrueNorth ServiceFlow AI"
            className="h-36 w-auto mx-auto mb-4"
          />
          <h1 className="text-xl font-bold text-white tracking-tight">
            TrueNorth ServiceFlow AI
          </h1>
        </AnimateIn>

        {/* Form Card */}
        <AnimateIn delay={0.15}>
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 className="text-2xl font-extrabold text-navy-dark tracking-tight text-center">
                    Claim Your Free Automation Audit
                  </h2>
                  <p className="mt-3 text-sm text-gray-500 text-center">
                    Find out exactly where your business is losing leads, wasting time, and leaving money on the table. Takes 10 minutes. No commitment.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    <div>
                      <label
                        htmlFor="conv-name"
                        className="block text-sm font-semibold text-gray-700 mb-1.5"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="conv-email"
                        className="block text-sm font-semibold text-gray-700 mb-1.5"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="conv-phone"
                        className="block text-sm font-semibold text-gray-700 mb-1.5"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                        placeholder="(902) 555-0123"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="conv-type"
                        className="block text-sm font-semibold text-gray-700 mb-1.5"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all text-gray-900 appearance-none bg-white cursor-pointer"
                      >
                        <option value="">Select your industry</option>
                        {businessTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="conv-challenge"
                        className="block text-sm font-semibold text-gray-700 mb-1.5"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all text-gray-900 placeholder:text-gray-400 resize-none"
                        placeholder="What's the one thing in your business that keeps you up at night?"
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-error font-medium">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-teal hover:bg-teal-dark text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-teal/25 hover:shadow-teal/40 hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
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
                  <h3 className="text-2xl font-bold text-navy-dark">
                    You&apos;re in!
                  </h3>
                  <p className="mt-3 text-gray-500">
                    We&apos;ll reach out personally within 24 hours to schedule your audit.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </AnimateIn>

        {/* Bottom note */}
        <AnimateIn delay={0.3} className="text-center mt-6">
          <p className="text-sm text-white/40">
            No spam. No automated emails. A real person will call you.
          </p>
        </AnimateIn>
      </div>
    </div>
  );
}
