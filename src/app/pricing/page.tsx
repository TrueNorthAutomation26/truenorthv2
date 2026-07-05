"use client";

import { PageWrapper } from "@/components/PageWrapper";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import { Badge } from "@/components/Badge";
import { CharterBanner } from "@/components/CharterBanner";
import { RoiCalculator } from "@/components/RoiCalculator";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { Check, ArrowRight, Sparkles, Lock } from "lucide-react";

type Tier = {
  name: string;
  price: string;
  charterPrice?: string;
  period: string;
  setup: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
  border: string;
};

const tiers: Tier[] = [
  {
    name: "Missed Call Rescue",
    price: "$297",
    period: "/mo",
    setup: "+ one-time setup fee",
    description:
      "The wedge. Never miss a call again — every inbound rings to your AI, and anyone we miss gets an instant text-back.",
    features: [
      "AI Call Answering (24/7)",
      "Missed-Call Text-Back",
      "Monthly Performance Report",
      "Email Support",
    ],
    cta: "Book a Call",
    popular: false,
    border: "border-gray-200",
  },
  {
    name: "Essentials",
    price: "$497",
    period: "/mo",
    setup: "+ one-time setup fee",
    description:
      "The foundation. If you're losing leads to missed calls and unmanaged reviews, this fixes it fast.",
    features: [
      "Everything in Missed Call Rescue",
      "Review Automation",
      "Basic Lead Follow-Up",
      "Reputation Monitoring",
      "Email Support",
    ],
    cta: "Book a Call",
    popular: false,
    border: "border-gray-200",
  },
  {
    name: "Growth",
    price: "$1,497",
    charterPrice: "$997",
    period: "/mo",
    setup: "+ one-time setup fee",
    description:
      "The full system. Calls, content, reviews, and lead follow-up running on autopilot.",
    features: [
      "Everything in Essentials",
      "Social Media Automation",
      "Advanced Lead Nurturing & Booking",
      "Reputation Dashboard",
      "Bi-Weekly Strategy Calls",
      "Priority Support",
    ],
    cta: "Lock in Charter Rate",
    popular: true,
    border: "border-teal/30",
  },
  {
    name: "Custom",
    price: "Let's Talk",
    period: "",
    setup: "",
    description:
      "For established businesses that need workflow automation, multi-location support, or custom integrations.",
    features: [
      "Everything in Growth",
      "Workflow & Admin Automation",
      "Multi-Location Support",
      "Custom Integrations",
      "Dedicated Account Manager",
      "Weekly Strategy Reviews",
    ],
    cta: "Book a Call",
    popular: false,
    border: "border-gray-200",
  },
];

export default function PricingPage() {
  return (
    <PageWrapper>
      {/* HERO */}
      <section className="relative min-h-[70vh] bg-hero-gradient overflow-hidden flex items-center">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-teal/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 pt-36 pb-32 w-full text-center">
          <AnimateIn delay={0.1}>
            <Badge variant="teal">Pricing</Badge>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
              Straightforward pricing. No surprises.{" "}
              <span className="text-gradient">No long-term contracts.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.35}>
            <p className="mt-6 text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
              Every plan includes full setup, onboarding, and ongoing support. You don&apos;t manage anything.
            </p>
          </AnimateIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* PRICING CARDS */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start"
            staggerDelay={0.1}
          >
            {tiers.map((tier) => (
              <StaggerItem key={tier.name}>
                <div
                  className={`relative rounded-2xl p-7 lg:p-8 border-2 transition-all duration-300 hover:shadow-xl cursor-default bg-white ${
                    tier.popular
                      ? `${tier.border} shadow-xl shadow-teal/10`
                      : `${tier.border} hover:border-gray-300`
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-teal text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg shadow-teal/25 whitespace-nowrap">
                        <Sparkles className="w-3.5 h-3.5" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-navy-dark">
                    {tier.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 min-h-[3rem]">
                    {tier.description}
                  </p>

                  {tier.charterPrice ? (
                    <div className="mt-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl lg:text-5xl font-extrabold text-navy-dark font-mono tracking-tight">
                          {tier.charterPrice}
                        </span>
                        <span className="text-gray-400 text-base font-medium">
                          {tier.period}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-teal/10 text-teal text-[10px] font-bold uppercase tracking-widest rounded">
                          <Lock className="w-2.5 h-2.5" />
                          Charter Rate
                        </span>
                        <span className="text-sm text-gray-400">
                          Reg.{" "}
                          <span className="line-through font-mono">
                            {tier.price}
                          </span>
                          {tier.period}
                        </span>
                      </div>
                      {tier.setup && (
                        <p className="mt-1.5 text-xs text-gray-400">
                          {tier.setup} (50% off for Charter clients)
                        </p>
                      )}
                    </div>
                  ) : (
                    <>
                      <div className="mt-6 flex items-baseline gap-1">
                        <span className="text-4xl lg:text-5xl font-extrabold text-navy-dark font-mono tracking-tight">
                          {tier.price}
                        </span>
                        {tier.period && (
                          <span className="text-gray-400 text-base font-medium">
                            {tier.period}
                          </span>
                        )}
                      </div>
                      {tier.setup && (
                        <p className="mt-1 text-xs text-gray-400">
                          {tier.setup}
                        </p>
                      )}
                    </>
                  )}

                  <div className="mt-7 space-y-3">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            tier.popular ? "bg-teal/10" : "bg-gray-100"
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 ${
                              tier.popular ? "text-teal" : "text-gray-400"
                            }`}
                          />
                        </div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://calendly.com/fabian-truenorthautomation/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 w-full inline-flex items-center justify-center gap-2 px-5 py-3 font-semibold rounded-xl transition-all duration-200 cursor-pointer text-sm ${
                      tier.popular
                        ? "bg-teal hover:bg-teal-dark text-white shadow-lg shadow-teal/25 hover:shadow-teal/40 hover:-translate-y-0.5"
                        : "bg-navy/5 hover:bg-navy/10 text-navy-dark"
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Setup fee range disclosure */}
          <AnimateIn delay={0.3}>
            <div className="mt-12 text-center">
              <p className="inline-flex items-center gap-2 px-5 py-3 bg-light-bg rounded-xl text-sm text-gray-600 border border-gray-100">
                <span className="font-semibold text-navy-dark">Setup fee:</span>
                <span>
                  $1,500–$4,500 depending on scope · typical build ≈ $2,500 ·
                  exact number in your proposal
                </span>
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <RoiCalculator />

      {/* GUARANTEE */}
      <GuaranteeSection />

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimateIn>
              <Badge variant="light">Common Questions</Badge>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-navy-dark tracking-tight">
                Frequently asked questions
              </h2>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.2}>
            <div className="space-y-6">
              {[
                {
                  q: "Do I have to sign a long-term contract?",
                  a: "No. All plans are month-to-month. We earn your business every month.",
                },
                {
                  q: "What\u2019s the setup fee?",
                  a: "Setup typically runs $1,500–$4,500 depending on how many systems you need and how complex your business is. A typical build is around $2,500. You get an exact number in your proposal — no surprises. Charter Program clients get 50% off setup.",
                },
                {
                  q: "What\u2019s the Charter Program?",
                  a: "We cap new client onboarding at 10 Atlantic Canadian businesses per quarter so every build gets the attention it needs. Clients who join this quarter\u2019s cohort (closes June 30) lock in 50% off setup and grandfathered monthly pricing — when we raise rates, yours doesn\u2019t move.",
                },
                {
                  q: "What if I want to start small and add more later?",
                  a: "That\u2019s exactly what most of our clients do. Start with Missed Call Rescue or Essentials, see the results, then upgrade when you\u2019re ready.",
                },
                {
                  q: "Is the AI going to sound robotic to my customers?",
                  a: "No. Our AI voice assistants are built to sound natural and professional. Most callers don\u2019t realize they\u2019re talking to AI — they just know they got a helpful, friendly response.",
                },
                {
                  q: "What if it\u2019s not working for me?",
                  a: "We stake our setup fee on a 30-day guarantee — every call answered, at least 5 qualified leads booked, and response time under 60 seconds. Miss any of those and your setup fee is refunded in full. Plus, no long-term contract — you\u2019re never locked in.",
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="bg-light-bg rounded-2xl p-6 border border-gray-100"
                >
                  <h3 className="text-lg font-bold text-navy-dark">{faq.q}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CHARTER PROGRAM (replaces old funding note) */}
      <CharterBanner variant="hero" />
    </PageWrapper>
  );
}
