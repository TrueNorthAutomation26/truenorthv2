"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Search,
  FileText,
  Rocket,
  BarChart3,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimateIn";
import { Badge } from "@/components/Badge";

const steps = [
  {
    number: "01",
    title: "The Audit",
    duration: "10 minutes",
    icon: Search,
    description: "We hop on a quick call, learn how your business operates, and identify where you're losing leads, wasting time, or leaving money on the table.",
    result:
      "A clear breakdown of your biggest gaps — and exactly how much they're costing you.",
    detail:
      "No pitch. No pressure. Just a clear picture of what's costing you.",
    accent: "from-teal to-teal-dark",
  },
  {
    number: "02",
    title: "The Proposal",
    duration: "2-3 days",
    icon: FileText,
    description:
      "Based on what we find, we put together a custom plan. What we'll build, how it integrates with your current setup, what it costs, and what results to expect.",
    result: "A straightforward proposal you can review on your own time. No fine print.",
    detail:
      "No jargon. No surprises.",
    accent: "from-navy to-navy-dark",
  },
  {
    number: "03",
    title: "The Build",
    duration: "2-4 weeks",
    icon: Rocket,
    description:
      "We build your systems, test everything, and roll it out alongside your current processes. You don't have to learn anything, set anything up, or change how you work.",
    result:
      "Fully tested AI systems, running live, integrated with your business.",
    detail:
      "We handle all of it.",
    accent: "from-teal to-teal-dark",
  },
  {
    number: "04",
    title: "The Results",
    duration: "Ongoing",
    icon: BarChart3,
    description: "Once you're live, we monitor performance, fine-tune your systems, and send you regular reports.",
    result:
      "Ongoing optimization and a dashboard showing real results — calls answered, leads captured, reviews earned.",
    detail:
      "You'll always know exactly what your automation is doing and what it's worth.",
    accent: "from-navy to-navy-dark",
  },
];

const heroStats = [
  { label: "Free audit", value: "10 min" },
  { label: "Proposal delivered", value: "2–3 days" },
  { label: "Live & running", value: "4 weeks" },
];

const guarantees = [
  "Fixed pricing — no hidden fees",
  "You own everything we build",
  "Cancel anytime with 30-day notice",
  "Plain-language reporting, always",
];

export default function HowItWorksPage() {
  return (
    <PageWrapper>
      <div className="bg-navy-deep">
      {/* ═══════════════ HERO — left-aligned editorial grid ═══════════════ */}
      <section className="relative bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="aurora absolute top-0 right-0 w-[700px] h-[700px] bg-teal/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="aurora-delayed absolute bottom-0 -left-60 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-36 lg:pt-44 pb-20 lg:pb-28 w-full">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-9">
              <AnimateIn delay={0.1}>
                <Badge variant="teal">How It Works</Badge>
              </AnimateIn>
              <AnimateIn delay={0.2}>
                <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tighter text-white">
                  From first conversation to fully automated &mdash;{" "}
                  <span className="text-gradient-animated">in weeks, not months.</span>
                </h1>
              </AnimateIn>
              <AnimateIn delay={0.35}>
                <p className="mt-6 text-xl text-white/55 leading-relaxed max-w-2xl">
                  Four steps. You stay focused on your work the entire time.
                </p>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS STRIP — hairline columns ═══════════════ */}
      <section className="relative border-y border-white/10 bg-navy-dark/40">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3">
          {heroStats.map((item, i) => (
            <AnimateIn
              key={item.label}
              delay={i * 0.08}
              className={`px-8 py-12 ${
                i > 0 ? "sm:border-l sm:border-white/10 max-sm:border-t max-sm:border-white/10" : ""
              }`}
            >
              <span className="block text-4xl lg:text-5xl font-extrabold text-gold font-mono tracking-tight">
                {item.value}
              </span>
              <span className="mt-3 block text-sm text-white/45 leading-snug">
                {item.label}
              </span>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ═══════════════ STEPS — vertical spine with numbered nodes ═══════════════ */}
      <section className="py-24 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-60" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="relative">
            {/* Spine — teal to gold gradient line */}
            <div className="absolute left-6 top-0 bottom-0 w-px">
              <motion.div
                className="w-full h-full bg-gradient-to-b from-teal via-teal/40 to-gold"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ transformOrigin: "top" }}
              />
            </div>

            <div className="space-y-20 lg:space-y-28">
              {steps.map((step) => (
                <AnimateIn
                  key={step.number}
                  delay={0.1}
                  className="relative pl-20 lg:pl-28"
                >
                  {/* Numbered node on the spine */}
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-navy-deep border border-gold/40 flex items-center justify-center font-mono text-gold font-bold">
                    {step.number}
                  </div>

                  {/* Oversized ghost number + duration chip */}
                  <div className="flex items-end justify-between gap-6 mb-6">
                    <span
                      className="font-mono text-6xl lg:text-8xl font-extrabold leading-none select-none text-white/5"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                    <span className="font-mono text-xs font-semibold tracking-widest uppercase text-teal-light bg-teal/10 border border-teal/25 rounded-full px-3 py-1 mb-1 whitespace-nowrap">
                      {step.duration}
                    </span>
                  </div>

                  {/* Step content card */}
                  <div className="group panel-dark panel-dark-hover rounded-2xl p-8 lg:p-10">
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.accent} flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-white/55 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <p className="text-white/40 text-sm leading-relaxed mb-6 border-t border-white/10 pt-5">
                      {step.detail}
                    </p>
                    <div className="flex items-start gap-3 bg-teal/10 border border-teal/25 rounded-xl px-4 py-3">
                      <CheckCircle className="w-4 h-4 text-teal-light shrink-0 mt-0.5" />
                      <p className="text-sm text-teal-light font-medium leading-snug">
                        {step.result}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ GUARANTEES — hairline-divided cell strip ═══════════════ */}
      <section className="py-24 lg:py-28 relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <AnimateIn>
              <Badge variant="teal">Our Commitments</Badge>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tighter">
                Simple and transparent. Always.
              </h2>
            </AnimateIn>
          </div>

          <StaggerContainer
            className="mt-14 grid grid-cols-2 lg:grid-cols-4 border-y border-white/10"
            staggerDelay={0.08}
          >
            {guarantees.map((item, i) => (
              <StaggerItem
                key={item}
                className={`${i > 0 ? "border-l border-white/10" : ""} ${
                  i >= 2 ? "max-lg:border-t max-lg:border-white/10" : ""
                } ${i === 2 ? "max-lg:border-l-0" : ""}`}
              >
                <div className="group relative h-44 flex flex-col items-center justify-center gap-4 px-5 text-center transition-colors duration-500 hover:bg-teal/8 cursor-default">
                  <CheckCircle className="w-7 h-7 text-white/25 group-hover:text-teal group-hover:scale-110 transition-all duration-500" />
                  <span className="text-sm font-medium text-white/60 group-hover:text-white/90 transition-colors duration-500 leading-snug">
                    {item}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA — full-width, massive ═══════════════ */}
      <section className="py-32 lg:py-44 bg-navy-gradient relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-grid-dark opacity-60" />
        <div className="aurora absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gold/6 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateIn delay={0.1}>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-[1.02]">
              The first step takes 10 minutes.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-8 text-xl text-white/55 max-w-2xl mx-auto">
              No commitment. No tech skills required. Just a conversation about where your business is leaving money on the table.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <a
              href="https://calendly.com/fabian-truenorthautomation/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold btn-sheen mt-12 inline-flex items-center gap-2.5 px-10 py-5 text-lg font-bold rounded-xl cursor-pointer"
            >
              Book Your Free Audit
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="mt-6 font-mono text-xs tracking-wider text-white/30">
              Free 10-minute audit &middot; 30-day setup-fee guarantee
            </p>
          </AnimateIn>
        </div>
      </section>
      </div>
    </PageWrapper>
  );
}
