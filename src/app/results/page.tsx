"use client";

import { PageWrapper } from "@/components/PageWrapper";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import { Badge } from "@/components/Badge";
import { Phone, Star, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    icon: Phone,
    accent: "bg-teal",
    accentLight: "bg-teal/10",
    industry: "Contractor",
    title: "Every Missed Call Was a Job Walking Out the Door",
    challenge: "3-5 calls were going unanswered every week during active job sites. At an average job value of $2,000-$3,000, that's $4,000+ in lost revenue every month — revenue that went straight to competitors who picked up the phone.",
    solution: "24/7 AI call response with automatic lead capture, instant text notifications, and direct calendar booking.",
    results: [
      { value: "100%", label: "calls answered" },
      { value: "20+", label: "new leads/mo" },
      { value: "$4K+", label: "monthly revenue recovered" },
      { value: "0", label: "manual follow-up" },
    ],
  },
  {
    icon: Star,
    accent: "bg-gold",
    accentLight: "bg-gold/10",
    industry: "Home Services",
    title: "Great Work. No Proof.",
    challenge: "After two years in business and hundreds of completed jobs, only 12 Google reviews. A competitor with half the workload had 180+ reviews and dominated local search rankings.",
    solution: "Automated post-job review request system with optimal timing and frictionless review links.",
    results: [
      { value: "12→60+", label: "reviews in 8 weeks" },
      { value: "4.9★", label: "average rating" },
      { value: "35%", label: "more website traffic" },
      { value: "0", label: "staff time on outreach" },
    ],
  },
  {
    icon: Clock,
    accent: "bg-success",
    accentLight: "bg-success/10",
    industry: "Property Management",
    title: "Working Two Full-Time Jobs — One of Them Unpaid",
    challenge: "Drowning in tenant inquiries, maintenance requests, and owner reporting. 15+ hours per week spent on tasks that didn't generate revenue.",
    solution: "Automated tenant response system, intelligent maintenance routing, and automated owner reporting.",
    results: [
      { value: "15+", label: "hours reclaimed/wk" },
      { value: "<3 min", label: "avg response time" },
      { value: "Auto", label: "maintenance routing" },
      { value: "Auto", label: "owner reports" },
    ],
  },
];

export default function ResultsPage() {
  return (
    <PageWrapper>
      {/* HERO */}
      <section className="relative min-h-[70vh] bg-hero-gradient overflow-hidden flex items-center">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-teal/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 pt-36 pb-32 w-full text-center">
          <AnimateIn delay={0.1}>
            <Badge variant="teal">Projected Outcomes</Badge>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
              What your first months{" "}
              <span className="text-gradient">typically look like.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.35}>
            <p className="mt-6 text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
              Illustrative month-by-month outcomes modeled on industry averages and our internal performance model for Atlantic Canadian trades and service businesses.
            </p>
          </AnimateIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* FEATURED TESTIMONIAL */}
      <section className="py-24 lg:py-32 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal/5 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateIn>
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug tracking-tight">
              &ldquo;I used to worry constantly about missing calls and not posting on social media. Now it all runs in the background. I check my dashboard, see what&apos;s happening, and get back to running my business.&rdquo;
            </blockquote>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="mt-8">
              <p className="text-lg font-semibold text-white">Peter — VY Build Inc., Prince Edward Island</p>
              <p className="mt-2 text-sm text-white/40">AI Call Response &middot; Social Media &middot; Review Management &middot; Lead Follow-Up</p>
              <p className="mt-1 text-sm text-teal/60">Running for 3 months</p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimateIn>
              <Badge variant="light">Three composite scenarios</Badge>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-navy-dark tracking-tight">
                Built from industry data across our target verticals.
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-5 text-lg text-gray-500 leading-relaxed">
                These are <span className="font-semibold text-navy-dark">not testimonials</span>.
                They&apos;re illustrative scenarios built from industry benchmarks
                and our call/lead economics model — designed to show you what
                your business could look like with each system running. You&apos;ll
                see projections specific to your numbers during the audit.
              </p>
            </AnimateIn>
          </div>

          <StaggerContainer className="space-y-12" staggerDelay={0.15}>
            {caseStudies.map((study) => (
              <StaggerItem key={study.title}>
                <div className="relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 overflow-hidden group">
                  {/* Top accent bar */}
                  <div className={`h-1.5 ${study.accent}`} />

                  <div className="p-8 lg:p-12">
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl ${study.accentLight} flex items-center justify-center`}
                      >
                        <study.icon
                          className={`w-6 h-6 ${
                            study.accent === "bg-teal"
                              ? "text-teal"
                              : study.accent === "bg-gold"
                              ? "text-gold"
                              : "text-success"
                          }`}
                        />
                      </div>
                      <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                        {study.industry}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-dark tracking-tight mb-8">
                      {study.title}
                    </h3>

                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Challenge */}
                      <div>
                        <h4 className="text-sm font-semibold text-error uppercase tracking-widest mb-3">
                          Challenge
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h4 className="text-sm font-semibold text-teal uppercase tracking-widest mb-3">
                          Solution
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="text-sm font-semibold text-success uppercase tracking-widest mb-3">
                          Results
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {study.results.map((result) => (
                            <div key={result.label}>
                              <p className="text-2xl font-extrabold text-navy-dark font-mono tracking-tight">
                                {result.value}
                              </p>
                              <p className="text-xs text-gray-400 mt-0.5">
                                {result.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateIn delay={0.2} className="mt-12 max-w-3xl mx-auto">
            <p className="text-sm text-gray-400 italic leading-relaxed text-center">
              Illustrative scenarios modeled on industry averages, our internal performance benchmarks, and typical call/lead economics for Atlantic Canadian trades and service businesses. Not claims about specific past clients. Actual outcomes vary based on call volume, service area, ticket size, and market conditions — you&apos;ll see projections specific to your business during the audit.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal/5 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Your results start with a 10-minute conversation.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <a
              href="https://calendly.com/fabian-truenorthautomation/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2.5 px-9 py-4 bg-teal hover:bg-teal-dark text-white text-lg font-semibold rounded-xl transition-all duration-200 shadow-xl shadow-teal/25 hover:shadow-teal/40 hover:-translate-y-0.5 cursor-pointer"
            >
              Book Your Free Audit →
            </a>
          </AnimateIn>
        </div>
      </section>
    </PageWrapper>
  );
}
