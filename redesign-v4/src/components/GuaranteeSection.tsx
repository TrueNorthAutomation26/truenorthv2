"use client";

import { AnimateIn } from "./AnimateIn";
import { Badge } from "./Badge";
import { ShieldCheck, Check } from "lucide-react";

/**
 * Risk-reversal guarantee section. Hard guarantee wording:
 * if we don't perform in the first 30 days, setup fee is on us.
 * Laid out as a wide horizontal banner — shield left, copy center,
 * bullets as a hairline-divided column of cells on the right.
 */
export function GuaranteeSection() {
  const bullets = [
    "Every incoming call answered, 24/7",
    "At least 5 qualified leads booked in your first 30 days",
    "Response time under 60 seconds on every web inquiry",
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn>
          <div className="relative bg-gradient-to-br from-navy to-navy-dark rounded-3xl border border-gold/30 shadow-[0_0_80px_-30px_rgba(251,191,36,0.35)] overflow-hidden">
            <div className="aurora absolute top-0 right-0 w-96 h-96 bg-teal/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
            <div className="aurora-delayed absolute bottom-0 left-0 w-80 h-80 bg-gold/8 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

            <div className="relative grid lg:grid-cols-12">
              {/* Shield cell — left */}
              <div className="lg:col-span-2 flex items-center justify-center p-10 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-3xl bg-gold/10 border border-gold/40 flex items-center justify-center">
                  <ShieldCheck className="w-12 h-12 lg:w-14 lg:h-14 text-gold" />
                </div>
              </div>

              {/* Heading + copy — center */}
              <div className="lg:col-span-6 p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
                <Badge variant="teal">Our Guarantee</Badge>
                <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-white tracking-tighter leading-tight">
                  30 days to prove it. Or your setup fee is on us.
                </h2>
                <p className="mt-5 text-white/55 leading-relaxed">
                  We stake our setup fee on three concrete outcomes. If any of
                  them don&apos;t hit in your first 30 days, we refund your
                  setup fee in full — no arguments, no fine print.
                </p>
              </div>

              {/* Bullets — hairline-divided row of cells, right */}
              <div className="lg:col-span-4 flex flex-col justify-center divide-y divide-white/10">
                {bullets.map((b) => (
                  <div
                    key={b}
                    className="flex items-start gap-3 px-8 lg:px-10 py-5 lg:py-6"
                  >
                    <div className="w-6 h-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-gold" />
                    </div>
                    <span className="text-white/80">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footnote strip */}
            <div className="relative border-t border-white/10 px-8 lg:px-12 py-5">
              <p className="text-xs text-white/40">
                Paired with our month-to-month terms — you&apos;re never
                locked into anything that isn&apos;t working.
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
