"use client";

import { useState, FormEvent } from "react";
import { PageWrapper } from "@/components/PageWrapper";
import { AnimateIn } from "@/components/AnimateIn";
import { Badge } from "@/components/Badge";
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  ArrowRight,
  CheckCircle,
  Calendar,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const businessTypes = [
  "Contractor / Trades",
  "HVAC & Plumbing",
  "Solar & Energy",
  "Real Estate",
  "Property Management",
  "Beauty & Wellness",
  "Home Services",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
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
        body: JSON.stringify({ ...form, source: "contact" }),
      });

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <div className="bg-navy-deep">
        <section className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="absolute inset-0 bg-grid-dark" />
          <div className="aurora absolute top-0 right-0 w-[800px] h-[800px] bg-teal/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="aurora-delayed absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal/8 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-24">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              {/* LEFT — sticky intro + contact info (5 cols) */}
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-32">
                  <AnimateIn>
                    <Badge variant="teal">LET&apos;S TALK</Badge>
                    <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter">
                      The first step is a conversation.
                    </h1>
                  </AnimateIn>
                  <AnimateIn delay={0.1}>
                    <p className="mt-6 text-xl text-white/55 leading-relaxed max-w-md">
                      Book a free 10-minute audit and we&apos;ll show you exactly where your business is leaving money on the table. No pitch. No pressure. Just clarity.
                    </p>
                  </AnimateIn>

                  {/* Contact info — hairline-divided rows */}
                  <AnimateIn delay={0.2}>
                    <div className="mt-12">
                      <a
                        href="tel:+19023160111"
                        className="group grid grid-cols-[6.5rem_1fr] items-baseline gap-4 py-5 border-t border-white/10 text-white/70 hover:text-teal-light transition-colors cursor-pointer"
                      >
                        <p className="font-mono text-xs tracking-[0.25em] uppercase text-white/40">Phone</p>
                        <p className="font-semibold flex items-center gap-3">
                          <Phone className="w-4 h-4 text-white/30 group-hover:text-teal-light transition-colors shrink-0" />
                          +1 (902) 316-0111
                        </p>
                      </a>

                      <a
                        href="mailto:fabian@truenorthserviceflow.ai"
                        className="group grid grid-cols-[6.5rem_1fr] items-baseline gap-4 py-5 border-t border-white/10 text-white/70 hover:text-teal-light transition-colors cursor-pointer"
                      >
                        <p className="font-mono text-xs tracking-[0.25em] uppercase text-white/40">Email</p>
                        <p className="font-semibold flex items-center gap-3">
                          <Mail className="w-4 h-4 text-white/30 group-hover:text-teal-light transition-colors shrink-0" />
                          fabian@truenorthserviceflow.ai
                        </p>
                      </a>

                      <a
                        href="https://truenorthserviceflow.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group grid grid-cols-[6.5rem_1fr] items-baseline gap-4 py-5 border-t border-white/10 text-white/70 hover:text-teal-light transition-colors cursor-pointer"
                      >
                        <p className="font-mono text-xs tracking-[0.25em] uppercase text-white/40">Website</p>
                        <p className="font-semibold flex items-center gap-3">
                          <Globe className="w-4 h-4 text-white/30 group-hover:text-teal-light transition-colors shrink-0" />
                          truenorthserviceflow.ai
                        </p>
                      </a>

                      <div className="grid grid-cols-[6.5rem_1fr] items-baseline gap-4 py-5 border-t border-b border-white/10 text-white/70">
                        <p className="font-mono text-xs tracking-[0.25em] uppercase text-white/40">Location</p>
                        <p className="font-semibold flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-white/30 shrink-0" />
                          Charlottetown, Prince Edward Island, Canada
                        </p>
                      </div>
                    </div>
                  </AnimateIn>

                  <AnimateIn delay={0.3}>
                    <div className="mt-10 panel-dark rounded-xl p-5 flex items-center gap-4">
                      <Calendar className="w-5 h-5 text-teal-light shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm text-white/60">
                          Prefer to pick a time?
                        </p>
                      </div>
                      <a
                        href="https://calendly.com/fabian-truenorthautomation/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold btn-sheen inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-lg cursor-pointer whitespace-nowrap"
                      >
                        Book a Time
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </AnimateIn>
                </div>
              </div>

              {/* RIGHT — Form panel (7 cols) */}
              <AnimateIn delay={0.2} direction="right" className="lg:col-span-7">
                <div className="panel-dark rounded-2xl p-8 lg:p-12">
                  <AnimatePresence mode="wait">
                    {!submitted ? (
                      <motion.form
                        key="form"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-5"
                      >
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-semibold text-white/70 mb-1.5"
                            >
                              Full Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              required
                              value={form.name}
                              onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                              }
                              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all text-white placeholder:text-white/30"
                              placeholder="Your name"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-semibold text-white/70 mb-1.5"
                            >
                              Email *
                            </label>
                            <input
                              type="email"
                              id="email"
                              required
                              value={form.email}
                              onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                              }
                              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all text-white placeholder:text-white/30"
                              placeholder="you@yourbusiness.com"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-sm font-semibold text-white/70 mb-1.5"
                            >
                              Phone
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              value={form.phone}
                              onChange={(e) =>
                                setForm({ ...form, phone: e.target.value })
                              }
                              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all text-white placeholder:text-white/30"
                              placeholder="Best number to reach you"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="businessType"
                              className="block text-sm font-semibold text-white/70 mb-1.5"
                            >
                              Business Type
                            </label>
                            <select
                              id="businessType"
                              value={form.businessType}
                              onChange={(e) =>
                                setForm({ ...form, businessType: e.target.value })
                              }
                              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all text-white appearance-none cursor-pointer [&_option]:bg-navy-dark [&_option]:text-white"
                            >
                              <option value="">e.g., Contractor, HVAC, Property Management</option>
                              {businessTypes.map((type) => (
                                <option key={type} value={type}>
                                  {type}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-semibold text-white/70 mb-1.5"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            value={form.message}
                            onChange={(e) =>
                              setForm({ ...form, message: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all text-white placeholder:text-white/30 resize-none"
                            placeholder="Tell us a bit about your business and what you're struggling with"
                          />
                        </div>

                        {error && (
                          <p className="text-sm text-error font-medium">{error}</p>
                        )}

                        <button
                          type="submit"
                          disabled={submitting}
                          className="btn-gold btn-sheen w-full inline-flex items-center justify-center gap-2 px-6 py-4 font-bold rounded-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                          {submitting ? "Sending..." : "Request My Free Audit"}
                          {!submitting && <ArrowRight className="w-5 h-5" />}
                        </button>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-16"
                      >
                        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                          <CheckCircle className="w-8 h-8 text-success" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          We&apos;ll be in touch within 24 hours.
                        </h3>
                        <p className="mt-3 text-white/50">
                          Check your inbox for a confirmation. We&apos;ll reach out personally to schedule your audit.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
