"use client";

import { AnimateIn } from "./AnimateIn";
import { Badge } from "./Badge";
import { ShieldCheck, Check } from "lucide-react";

/**
 * Risk-reversal guarantee section. Hard guarantee wording:
 * if we don't perform in the first 30 days, setup fee is on us.
 */
export function GuaranteeSection() {
  const bullets = [
    "Every incoming call answered, 24/7",
    "At least 5 qualified leads booked in your first 30 days",
    "Response time under 60 seconds on every web inquiry",
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <AnimateIn>
          <div className="relative bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-10 lg:p-14 border border-navy/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

            <div className="relative grid lg:grid-cols-[auto,1fr] gap-10 items-center">
              {/* Shield */}
              <div className="w-28 h-28 rounded-3xl bg-teal/15 border border-teal/30 flex items-center justify-center mx-auto lg:mx-0">
                <ShieldCheck className="w-14 h-14 text-teal" />
              </div>

              <div>
                <Badge variant="teal">Our Guarantee</Badge>
                <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  30 days to prove it. Or your setup fee is on us.
                </h2>
                <p className="mt-5 text-white/60 leading-relaxed">
                  We stake our setup fee on three concrete outcomes. If any of
                  them don&apos;t hit in your first 30 days, we refund your
                  setup fee in full — no arguments, no fine print.
                </p>

                <div className="mt-7 space-y-3">
                  {bullets.map((b) => (
                    <div key={b} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-teal" />
                      </div>
                      <span className="text-white/80">{b}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-7 text-xs text-white/40">
                  Paired with our month-to-month terms — you&apos;re never
                  locked into anything that isn&apos;t working.
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
