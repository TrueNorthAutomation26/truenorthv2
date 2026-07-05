"use client";

import { PageWrapper } from "@/components/PageWrapper";
import { AnimateIn, CountUp } from "@/components/AnimateIn";
import { Badge } from "@/components/Badge";
import { Phone, Star, Clock, type LucideIcon } from "lucide-react";

type ScenarioResult = {
  value: string;
  label: string;
  count?: { value: number; prefix?: string; suffix?: string };
};

type CaseStudy = {
  icon: LucideIcon;
  accent: string;
  accentLight: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  results: ScenarioResult[];
};

const caseStudies: CaseStudy[] = [
  {
    icon: Phone,
    accent: "bg-teal",
    accentLight: "bg-teal/10",
    industry: "Contractor",
    title: "Every Missed Call Was a Job Walking Out the Door",
    challenge: "3-5 calls were going unanswered every week during active job sites. At an average job value of $2,000-$3,000, that's $4,000+ in lost revenue every month — revenue that went straight to competitors who picked up the phone.",
    solution: "24/7 AI call response with automatic lead capture, instant text notifications, and direct calendar booking.",
    results: [
      { value: "100%", label: "calls answered", count: { value: 100, suffix: "%" } },
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
      { value: "15+", label: "hours reclaimed/wk", count: { value: 15, suffix: "+" } },
      { value: "<3 min", label: "avg response time" },
      { value: "Auto", label: "maintenance routing" },
      { value: "Auto", label: "owner reports" },
    ],
  },
];

export default function ResultsPage() {
  return (
    <PageWrapper>
      <div className="bg-navy-deep">
        {/* HERO — left-aligned editorial */}
        <section className="relative min-h-[70vh] overflow-hidden flex items-center">
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="absolute inset-0 bg-grid-dark" />
          <div className="aurora absolute top-0 right-0 w-[700px] h-[700px] bg-teal/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="aurora-delayed absolute bottom-0 -left-40 w-[600px] h-[600px] bg-teal/8 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-32 w-full">
            <div className="max-w-4xl">
              <AnimateIn delay={0.1}>
                <Badge variant="teal">Projected Outcomes</Badge>
              </AnimateIn>
              <AnimateIn delay={0.2}>
                <h1 className="mt-8 text-5xl sm:text-6xl lg:text-[5.25rem] font-extrabold leading-[1.02] tracking-tighter text-white">
                  What your first months{" "}
                  <span className="text-gradient-animated">typically look like.</span>
                </h1>
              </AnimateIn>
              <AnimateIn delay={0.35}>
                <p className="mt-6 text-xl text-white/55 leading-relaxed max-w-2xl">
                  Illustrative month-by-month outcomes modeled on industry averages and our internal performance model for Atlantic Canadian trades and service businesses.
                </p>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* FEATURED TESTIMONIAL */}
        <section className="py-24 lg:py-32 bg-navy-gradient relative overflow-hidden border-y border-white/10">
          <div className="absolute inset-0 bg-grid-dark opacity-50" />
          <div className="aurora absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal/8 rounded-full blur-3xl" />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <AnimateIn>
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug tracking-tight">
                &ldquo;I used to worry constantly about missing calls and not posting on social media. Now it all runs in the background. I check my dashboard, see what&apos;s happening, and get back to running my business.&rdquo;
              </blockquote>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="mt-8">
                <p className="text-lg font-semibold text-gold">Peter — VY Build Inc., Prince Edward Island</p>
                <p className="mt-2 font-mono text-xs tracking-wider text-white/40">AI Call Response &middot; Social Media &middot; Review Management &middot; Lead Follow-Up</p>
                <p className="mt-1 text-sm text-teal-light/70">Running for 3 months</p>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* CASE STUDIES — full-width editorial rows */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark opacity-50" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            {/* Section header — left-aligned editorial */}
            <div className="max-w-3xl">
              <AnimateIn>
                <Badge variant="teal">Three composite scenarios</Badge>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold text-white tracking-tighter">
                  Built from industry data across our target verticals.
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.2}>
                <p className="mt-5 text-lg text-white/55 leading-relaxed">
                  These are <span className="font-semibold text-white">not testimonials</span>.
                  They&apos;re illustrative scenarios built from industry benchmarks
                  and our call/lead economics model — designed to show you what
                  your business could look like with each system running. You&apos;ll
                  see projections specific to your numbers during the audit.
                </p>
              </AnimateIn>
            </div>

            {/* Scenario rows — hairline-divided, alternating metric side */}
            <div className="mt-20">
              {caseStudies.map((study, i) => {
                const [hero, ...rest] = study.results;
                const metricRight = i % 2 === 1;
                return (
                  <AnimateIn key={study.title}>
                    <div className="border-t border-white/10 py-16 lg:py-24 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                      {/* Big metric block — 4 cols, alternates sides */}
                      <div className={`lg:col-span-4 ${metricRight ? "lg:order-2" : ""}`}>
                        <div className="lg:sticky lg:top-32">
                          <p className="font-mono text-6xl lg:text-7xl font-extrabold text-gold tracking-tighter leading-none">
                            {hero.count ? (
                              <CountUp
                                value={hero.count.value}
                                prefix={hero.count.prefix}
                                suffix={hero.count.suffix}
                              />
                            ) : (
                              hero.value
                            )}
                          </p>
                          <p className="mt-5 font-mono text-xs tracking-[0.25em] uppercase text-white/40">
                            {hero.label}
                          </p>
                          <div className={`mt-8 h-1 w-16 rounded-full ${study.accent}`} />
                        </div>
                      </div>

                      {/* Narrative — 8 cols */}
                      <div className={`lg:col-span-8 ${metricRight ? "lg:order-1" : ""}`}>
                        {/* Mono industry eyebrow */}
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-12 h-12 rounded-xl ${study.accentLight} flex items-center justify-center`}
                          >
                            <study.icon
                              className={`w-6 h-6 ${
                                study.accent === "bg-teal"
                                  ? "text-teal-light"
                                  : study.accent === "bg-gold"
                                  ? "text-gold"
                                  : "text-success"
                              }`}
                            />
                          </div>
                          <span className="font-mono text-xs tracking-[0.25em] uppercase text-white/40">
                            {study.industry}
                          </span>
                        </div>

                        <h3 className="mt-7 text-3xl sm:text-4xl font-extrabold text-white tracking-tighter">
                          {study.title}
                        </h3>

                        <div className="mt-9 grid sm:grid-cols-2 gap-8">
                          {/* Challenge */}
                          <div>
                            <h4 className="font-mono text-xs font-semibold text-error uppercase tracking-[0.25em] mb-3">
                              Challenge
                            </h4>
                            <p className="text-white/50 leading-relaxed">
                              {study.challenge}
                            </p>
                          </div>

                          {/* Solution */}
                          <div>
                            <h4 className="font-mono text-xs font-semibold text-teal-light uppercase tracking-[0.25em] mb-3">
                              Solution
                            </h4>
                            <p className="text-white/50 leading-relaxed">
                              {study.solution}
                            </p>
                          </div>
                        </div>

                        {/* Results — mono hairline table */}
                        <div className="mt-10">
                          <h4 className="font-mono text-xs font-semibold text-success uppercase tracking-[0.25em]">
                            Results
                          </h4>
                          <div className="mt-4 border-t border-white/10 divide-y divide-white/8">
                            {rest.map((result) => (
                              <div
                                key={result.label}
                                className="flex items-baseline justify-between gap-6 py-4"
                              >
                                <p className="text-sm text-white/40">
                                  {result.label}
                                </p>
                                <p className="font-mono font-bold text-gold tracking-tight text-lg">
                                  {result.value}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>

            {/* Disclaimer footnote */}
            <AnimateIn delay={0.2}>
              <div className="border-t border-white/10 pt-10 max-w-3xl">
                <p className="text-sm text-white/30 italic leading-relaxed">
                  Illustrative scenarios modeled on industry averages, our internal performance benchmarks, and typical call/lead economics for Atlantic Canadian trades and service businesses. Not claims about specific past clients. Actual outcomes vary based on call volume, service area, ticket size, and market conditions — you&apos;ll see projections specific to your business during the audit.
                </p>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-navy-gradient relative overflow-hidden border-t border-white/10">
          <div className="absolute inset-0 bg-grid-dark opacity-50" />
          <div className="aurora absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/6 rounded-full blur-3xl" />

          <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <AnimateIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tighter">
                Your results start with a 10-minute conversation.
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <a
                href="https://calendly.com/fabian-truenorthautomation/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold btn-sheen mt-10 inline-flex items-center gap-2.5 px-9 py-4 text-lg font-bold rounded-xl cursor-pointer"
              >
                Book Your Free Audit →
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
