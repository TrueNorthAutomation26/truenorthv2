"use client";

import { AnimateIn, StaggerContainer, StaggerItem } from "./AnimateIn";
import { Badge } from "./Badge";
import { Phone, Star, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * Compact 3-card outcomes section for the homepage.
 * Mirrors the composite scenarios on /results but condensed.
 *
 * Framing is important: these are ILLUSTRATIVE, not testimonials or
 * client-specific claims. The footnote at the bottom reinforces that.
 */

const outcomes = [
  {
    icon: Phone,
    accent: "text-teal",
    accentBg: "bg-teal/10",
    industry: "Contractor",
    headline: "Every missed call, answered",
    metric: "+$4,000/mo",
    metricLabel: "typical revenue recovered",
    bullets: [
      "100% call-answer rate",
      "20+ new leads captured",
      "Zero manual follow-up",
    ],
  },
  {
    icon: Star,
    accent: "text-gold",
    accentBg: "bg-gold/10",
    industry: "Home Services",
    headline: "Review count that matches your work",
    metric: "12 → 60+",
    metricLabel: "Google reviews in 8 weeks",
    bullets: [
      "4.9★ average rating",
      "35% more organic traffic",
      "Zero staff time on outreach",
    ],
  },
  {
    icon: Clock,
    accent: "text-success",
    accentBg: "bg-success/10",
    industry: "Property Management",
    headline: "Admin that runs itself",
    metric: "15+ hrs",
    metricLabel: "reclaimed every week",
    bullets: [
      "<3 min avg response time",
      "Automated maintenance routing",
      "Owner reports on autopilot",
    ],
  },
];

export function TypicalOutcomes() {
  return (
    <section className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimateIn>
            <Badge variant="light">What month one typically looks like</Badge>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-dark tracking-tight">
              Here&apos;s what changes in the first 30 days.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed">
              Three illustrative scenarios built from industry data — to give
              you a feel for what your business could look like with each
              system running.
            </p>
          </AnimateIn>
        </div>

        <StaggerContainer
          className="grid md:grid-cols-3 gap-6"
          staggerDelay={0.12}
        >
          {outcomes.map((o) => (
            <StaggerItem key={o.headline}>
              <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-11 h-11 rounded-xl ${o.accentBg} flex items-center justify-center`}
                  >
                    <o.icon className={`w-5 h-5 ${o.accent}`} />
                  </div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                    {o.industry}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-navy-dark leading-snug">
                  {o.headline}
                </h3>

                <div className="mt-6 pb-6 border-b border-gray-100">
                  <p className="text-3xl lg:text-4xl font-extrabold text-navy-dark font-mono tracking-tight">
                    {o.metric}
                  </p>
                  <p className="mt-1 text-sm text-gray-400">{o.metricLabel}</p>
                </div>

                <ul className="mt-6 space-y-2.5 flex-1">
                  {o.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-sm text-gray-600 flex items-start gap-2"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${o.accent.replace("text-", "bg-")} mt-2 shrink-0`}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateIn delay={0.3}>
          <div className="mt-10 text-center">
            <Link
              href="/results"
              className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all duration-200 cursor-pointer"
            >
              See full scenarios with month-by-month math
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="mt-8 text-center text-xs text-gray-400 italic max-w-2xl mx-auto">
            Illustrative scenarios built from industry averages and our
            internal performance model — not testimonials. Your numbers depend
            on call volume, service area, and ticket size. You&apos;ll see
            projections specific to your business during the audit.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
