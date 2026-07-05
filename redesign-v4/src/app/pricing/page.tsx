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
    border: "border-white/10",
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
    border: "border-white/10",
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
    border: "border-gold/40",
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
    border: "border-white/10",
  },
];

const faqs = [
  {
    q: "Do I have to sign a long-term contract?",
    a: "No. All plans are month-to-month. We earn your business every month.",
  },
  {
    q: "What’s the setup fee?",
    a: "Setup typically runs $1,500–$4,500 depending on how many systems you need and how complex your business is. A typical build is around $2,500. You get an exact number in your proposal — no surprises. Charter Program clients get 50% off setup.",
  },
  {
    q: "What’s the Charter Program?",
    a: "We cap new client onboarding at 10 Atlantic Canadian businesses per quarter so every build gets the attention it needs. Clients who join this quarter’s cohort (closes June 30) lock in 50% off setup and grandfathered monthly pricing — when we raise rates, yours doesn’t move.",
  },
  {
    q: "What if I want to start small and add more later?",
    a: "That’s exactly what most of our clients do. Start with Missed Call Rescue or Essentials, see the results, then upgrade when you’re ready.",
  },
  {
    q: "Is the AI going to sound robotic to my customers?",
    a: "No. Our AI voice assistants are built to sound natural and professional. Most callers don’t realize they’re talking to AI — they just know they got a helpful, friendly response.",
  },
  {
    q: "What if it’s not working for me?",
    a: "We stake our setup fee on a 30-day guarantee — every call answered, at least 5 qualified leads booked, and response time under 60 seconds. Miss any of those and your setup fee is refunded in full. Plus, no long-term contract — you’re never locked in.",
  },
];

export default function PricingPage() {
  return (
    <PageWrapper>
      <div className="bg-navy-deep">
        {/* ═══════════════ HERO — left-aligned editorial ═══════════════ */}
        <section className="relative bg-hero-gradient overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark" />
          <div className="aurora absolute -top-40 right-0 w-[700px] h-[700px] bg-teal/8 rounded-full blur-3xl" />
          <div className="aurora-delayed absolute bottom-0 -left-60 w-[600px] h-[600px] bg-teal/8 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 lg:pt-40 pb-16 lg:pb-20">
            <div className="max-w-4xl">
              <AnimateIn delay={0.1}>
                <span className="block font-mono text-xs tracking-[0.4em] text-white/25 mb-4">
                  01
                </span>
                <Badge variant="teal">Pricing</Badge>
              </AnimateIn>
              <AnimateIn delay={0.2}>
                <h1 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tighter text-white">
                  Straightforward pricing. No surprises.{" "}
                  <span className="text-gradient-animated">No long-term contracts.</span>
                </h1>
              </AnimateIn>
            </div>
          </div>

          {/* Slim hairline trust strip */}
          <div className="relative border-t border-white/10 bg-navy-dark/40">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <AnimateIn delay={0.35}>
                <p className="py-6 text-base lg:text-lg text-white/55 leading-relaxed max-w-3xl">
                  Every plan includes full setup, onboarding, and ongoing support. You don&apos;t manage anything.
                </p>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ═══════════════ PRICING CARDS — featured tier dominant ═══════════════ */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark opacity-50" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <StaggerContainer
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch lg:pt-6"
              staggerDelay={0.1}
            >
              {tiers.map((tier) => (
                <StaggerItem
                  key={tier.name}
                  className={tier.popular ? "lg:-mt-6 lg:mb-6" : ""}
                >
                  <div
                    className={`relative rounded-2xl p-7 lg:p-8 h-full flex flex-col cursor-default ${
                      tier.popular
                        ? `bg-white/5 border ${tier.border} shadow-[0_0_80px_-20px_rgba(251,191,36,0.45)]`
                        : `panel-dark panel-dark-hover ${tier.border}`
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gold text-navy-deep text-xs font-bold uppercase tracking-widest rounded-full shadow-lg shadow-gold/25 whitespace-nowrap">
                          <Sparkles className="w-3.5 h-3.5" />
                          Most Popular
                        </span>
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-white">
                      {tier.name}
                    </h3>
                    <p className="mt-2 text-sm text-white/50 min-h-[3rem]">
                      {tier.description}
                    </p>

                    {tier.charterPrice ? (
                      <div className="mt-6">
                        <div className="flex items-baseline gap-2">
                          <span className="text-5xl lg:text-6xl font-extrabold text-gold font-mono tracking-tight">
                            {tier.charterPrice}
                          </span>
                          <span className="text-white/40 text-base font-medium">
                            {tier.period}
                          </span>
                        </div>
                        <div className="mt-2 flex items-center gap-2 flex-wrap">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest rounded">
                            <Lock className="w-2.5 h-2.5" />
                            Charter Rate
                          </span>
                          <span className="text-sm text-white/40">
                            Reg.{" "}
                            <span className="line-through font-mono">
                              {tier.price}
                            </span>
                            {tier.period}
                          </span>
                        </div>
                        {tier.setup && (
                          <p className="mt-1.5 text-xs text-white/40">
                            {tier.setup} (50% off for Charter clients)
                          </p>
                        )}
                      </div>
                    ) : (
                      <>
                        <div className="mt-6 flex items-baseline gap-1">
                          <span className="text-5xl lg:text-6xl font-extrabold text-gold font-mono tracking-tight">
                            {tier.price}
                          </span>
                          {tier.period && (
                            <span className="text-white/40 text-base font-medium">
                              {tier.period}
                            </span>
                          )}
                        </div>
                        {tier.setup && (
                          <p className="mt-1 text-xs text-white/40">
                            {tier.setup}
                          </p>
                        )}
                      </>
                    )}

                    <div className="mt-7 border-t border-white/[0.08] divide-y divide-white/[0.08]">
                      {tier.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5 py-3">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              tier.popular ? "bg-gold/10" : "bg-teal/10"
                            }`}
                          >
                            <Check
                              className={`w-3 h-3 ${
                                tier.popular ? "text-gold" : "text-teal-light"
                              }`}
                            />
                          </div>
                          <span className="text-white/60 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-8">
                      <a
                        href="https://calendly.com/fabian-truenorthautomation/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl transition-all duration-200 cursor-pointer text-sm ${
                          tier.popular
                            ? "btn-gold btn-sheen font-bold"
                            : "border border-white/15 hover:border-teal/50 hover:bg-teal/10 text-white font-semibold"
                        }`}
                      >
                        {tier.cta}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <p className="mt-3 text-center font-mono text-[10px] tracking-wider text-white/30">
                        30-day setup-fee guarantee
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Setup fee — split explainer panel */}
            <AnimateIn delay={0.3}>
              <div className="mt-14 panel-dark rounded-2xl overflow-hidden grid lg:grid-cols-12">
                <div className="lg:col-span-4 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10">
                  <div className="lg:sticky lg:top-32">
                    <span className="block text-2xl font-bold text-white tracking-tight">
                      Setup fee:
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-8 p-8 lg:p-10 flex items-center">
                  <p className="text-base text-white/55 leading-relaxed">
                    $1,500–$4,500 depending on scope · typical build ≈ $2,500 ·
                    exact number in your proposal
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ═══════════════ ROI CALCULATOR ═══════════════ */}
        <RoiCalculator />

        {/* ═══════════════ GUARANTEE — banner ═══════════════ */}
        <GuaranteeSection />

        {/* ═══════════════ FAQ — two-column masonry ═══════════════ */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark opacity-50" />
          <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <AnimateIn>
                <Badge variant="teal">Common Questions</Badge>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold text-white tracking-tighter">
                  Frequently asked questions
                </h2>
              </AnimateIn>
            </div>
            <AnimateIn delay={0.2}>
              <div className="lg:columns-2 gap-6">
                {faqs.map((faq, i) => (
                  <div
                    key={faq.q}
                    className="relative panel-dark panel-dark-hover rounded-2xl p-7 mb-6 break-inside-avoid overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-gold/50 via-gold/15 to-transparent" />
                    <span className="block font-mono text-xs tracking-[0.3em] text-gold/50 mb-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-bold text-white">{faq.q}</h3>
                    <p className="mt-3 text-white/50 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* CHARTER PROGRAM (replaces old funding note) */}
        <CharterBanner variant="hero" />
      </div>
    </PageWrapper>
  );
}
