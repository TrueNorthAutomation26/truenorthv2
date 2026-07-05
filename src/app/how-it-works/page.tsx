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
      "A clear breakdown of your biggest gaps \u2014 and exactly how much they're costing you.",
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
      "Ongoing optimization and a dashboard showing real results \u2014 calls answered, leads captured, reviews earned.",
    detail:
      "You'll always know exactly what your automation is doing and what it's worth.",
    accent: "from-navy to-navy-dark",
  },
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
      {/* HERO */}
      <section className="relative min-h-[70vh] bg-hero-gradient overflow-hidden flex items-center">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-teal/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 pt-36 pb-32 w-full text-center">
          <AnimateIn delay={0.1}>
            <Badge variant="teal">How It Works</Badge>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
              From first conversation to fully automated &mdash;{" "}
              <span className="text-gradient">in weeks, not months.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.35}>
            <p className="mt-6 text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
              Four steps. You stay focused on your work the entire time.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.45}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
              {[
                { label: "Free audit", value: "10 min" },
                { label: "Proposal delivered", value: "2–3 days" },
                { label: "Live & running", value: "4 weeks" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-2xl font-extrabold text-white font-mono tracking-tight">
                    {item.value}
                  </p>
                  <p className="text-sm text-white/40 mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* STEPS TIMELINE */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-light opacity-60" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-transparent via-teal/30 to-transparent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ transformOrigin: "top" }}
            />
          </div>

          <div className="space-y-20 lg:space-y-28">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <AnimateIn
                  key={step.number}
                  direction={isEven ? "left" : "right"}
                  delay={0.1}
                  className="relative"
                >
                  {/* Desktop layout */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Number side */}
                    <div
                      className={`flex ${
                        isEven ? "justify-end" : "justify-start order-2"
                      }`}
                    >
                      <div className="relative">
                        <span className="font-mono text-[10rem] font-extrabold leading-none select-none text-navy/5">
                          {step.number}
                        </span>
                        {/* Timeline dot */}
                        <div
                          className={`absolute top-1/2 -translate-y-1/2 ${
                            isEven ? "-right-[2.55rem]" : "-left-[2.55rem]"
                          }`}
                        >
                          <div className="w-5 h-5 rounded-full bg-teal ring-4 ring-teal/20 ring-offset-4 ring-offset-white" />
                        </div>
                      </div>
                    </div>

                    {/* Card side */}
                    <div className={isEven ? "order-2" : ""}>
                      <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-start justify-between mb-6">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.accent} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            <step.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-xs font-semibold tracking-widest uppercase text-teal bg-teal/8 border border-teal/15 rounded-full px-3 py-1">
                            {step.duration}
                          </span>
                        </div>
                        <h3 className="text-2xl font-extrabold text-navy-dark tracking-tight mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {step.description}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 border-t border-gray-100 pt-5">
                          {step.detail}
                        </p>
                        <div className="flex items-start gap-3 bg-teal/5 border border-teal/15 rounded-xl px-4 py-3">
                          <CheckCircle className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                          <p className="text-sm text-teal-dark font-medium leading-snug">
                            {step.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile layout */}
                  <div className="lg:hidden">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-mono text-5xl font-extrabold text-navy/8 select-none">
                        {step.number}
                      </span>
                      <div
                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${step.accent} flex items-center justify-center shadow-lg`}
                      >
                        <step.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs font-semibold tracking-widest uppercase text-teal bg-teal/8 border border-teal/15 rounded-full px-3 py-1">
                        {step.duration}
                      </span>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                      <h3 className="text-xl font-extrabold text-navy-dark tracking-tight mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        {step.description}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 border-t border-gray-100 pt-4">
                        {step.detail}
                      </p>
                      <div className="flex items-start gap-3 bg-teal/5 border border-teal/15 rounded-xl px-3 py-3">
                        <CheckCircle className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                        <p className="text-sm text-teal-dark font-medium leading-snug">
                          {step.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="py-24 lg:py-28 bg-light-bg relative">
        <div className="absolute inset-0 dot-pattern-light" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <AnimateIn>
              <Badge variant="light">Our Commitments</Badge>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-navy-dark tracking-tight">
                Simple and transparent. Always.
              </h2>
            </AnimateIn>
          </div>
          <StaggerContainer
            className="mt-12 grid sm:grid-cols-2 gap-4"
            staggerDelay={0.08}
          >
            {guarantees.map((item) => (
              <StaggerItem key={item}>
                <div className="group bg-white rounded-xl px-6 py-5 flex items-center gap-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 cursor-default">
                  <div className="w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center shrink-0 group-hover:bg-teal/20 transition-colors duration-300">
                    <CheckCircle className="w-4 h-4 text-teal" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 lg:py-32 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal/5 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimateIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              The first step takes 10 minutes.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-5 text-xl text-white/50">
              No commitment. No tech skills required. Just a conversation about where your business is leaving money on the table.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <a
              href="https://calendly.com/fabian-truenorthautomation/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2.5 px-9 py-4 bg-teal hover:bg-teal-dark text-white text-lg font-semibold rounded-xl transition-all duration-200 shadow-xl shadow-teal/25 hover:shadow-teal/40 hover:-translate-y-0.5 cursor-pointer"
            >
              Book Your Free Audit
              <ArrowRight className="w-5 h-5" />
            </a>
          </AnimateIn>
        </div>
      </section>
    </PageWrapper>
  );
}
