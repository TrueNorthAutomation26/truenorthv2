"use client";

import { useState, useMemo } from "react";
import { AnimateIn } from "./AnimateIn";
import { Badge } from "./Badge";
import { Calculator, TrendingUp } from "lucide-react";

/**
 * ROI Calculator — lets visitors plug in their numbers and see
 * (a) revenue lost to missed calls annually
 * (b) revenue recovered if True North captures 50% of those calls
 *
 * Defaults are tuned for Atlantic Canadian trades (the ICP):
 *   avg job value = $500
 *   calls per day = 5
 *   missed % = 30
 */
export function RoiCalculator() {
  const [avgJobValue, setAvgJobValue] = useState(500);
  const [callsPerDay, setCallsPerDay] = useState(5);
  const [missedPercent, setMissedPercent] = useState(30);

  const { annualLoss, recovered, growthMonthly, roiMultiple } = useMemo(() => {
    const workingDays = 260; // ~52 weeks × 5
    const missedCallsPerYear =
      callsPerDay * workingDays * (missedPercent / 100);

    // Assume 40% of missed callers would have actually booked
    const lostJobsPerYear = missedCallsPerYear * 0.4;
    const annualLossRaw = lostJobsPerYear * avgJobValue;

    // If True North picks up the phone, conservative assumption: we
    // recover 50% of the currently-lost revenue.
    const recoveredRaw = annualLossRaw * 0.5;

    // Compare to Growth plan annual cost ($997 × 12) — user's cost to run us
    const growthMonthlyRaw = 997 * 12;
    const roiRaw = growthMonthlyRaw > 0 ? recoveredRaw / growthMonthlyRaw : 0;

    return {
      annualLoss: Math.round(annualLossRaw),
      recovered: Math.round(recoveredRaw),
      growthMonthly: growthMonthlyRaw,
      roiMultiple: Math.round(roiRaw * 10) / 10,
    };
  }, [avgJobValue, callsPerDay, missedPercent]);

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <section className="py-20 lg:py-24 bg-light-bg relative">
      <div className="absolute inset-0 dot-pattern-light" />
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <AnimateIn>
            <Badge variant="light">The Math</Badge>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-dark tracking-tight">
              How much are missed calls costing you?
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-4 text-lg text-gray-600">
              Plug in your numbers. The math is uncomfortable.
            </p>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.25}>
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Inputs */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-navy" />
                </div>
                <h3 className="text-lg font-bold text-navy-dark">
                  Your business
                </h3>
              </div>

              <div className="space-y-7">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <label
                      htmlFor="avgJobValue"
                      className="text-sm font-semibold text-navy-dark"
                    >
                      Average job value
                    </label>
                    <span className="text-teal font-mono font-bold">
                      {fmt(avgJobValue)}
                    </span>
                  </div>
                  <input
                    id="avgJobValue"
                    type="range"
                    min={100}
                    max={10000}
                    step={100}
                    value={avgJobValue}
                    onChange={(e) => setAvgJobValue(Number(e.target.value))}
                    className="w-full accent-teal"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>$100</span>
                    <span>$10,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <label
                      htmlFor="callsPerDay"
                      className="text-sm font-semibold text-navy-dark"
                    >
                      Inbound calls per day
                    </label>
                    <span className="text-teal font-mono font-bold">
                      {callsPerDay}
                    </span>
                  </div>
                  <input
                    id="callsPerDay"
                    type="range"
                    min={1}
                    max={30}
                    step={1}
                    value={callsPerDay}
                    onChange={(e) => setCallsPerDay(Number(e.target.value))}
                    className="w-full accent-teal"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>1</span>
                    <span>30</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <label
                      htmlFor="missedPercent"
                      className="text-sm font-semibold text-navy-dark"
                    >
                      Calls you currently miss
                    </label>
                    <span className="text-teal font-mono font-bold">
                      {missedPercent}%
                    </span>
                  </div>
                  <input
                    id="missedPercent"
                    type="range"
                    min={5}
                    max={70}
                    step={5}
                    value={missedPercent}
                    onChange={(e) => setMissedPercent(Number(e.target.value))}
                    className="w-full accent-teal"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>5%</span>
                    <span>70%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-br from-navy to-navy-dark rounded-2xl p-8 border border-navy/20 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-teal/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-teal/15 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-teal" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    What that means
                  </h3>
                </div>

                <div>
                  <p className="text-sm text-white/60">
                    Annual revenue walking away from unanswered calls
                  </p>
                  <p className="mt-1 text-4xl lg:text-5xl font-extrabold font-mono text-error">
                    -{fmt(annualLoss)}
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-sm text-white/60">
                    Revenue we conservatively recover for you per year
                  </p>
                  <p className="mt-1 text-4xl lg:text-5xl font-extrabold font-mono text-teal">
                    +{fmt(recovered)}
                  </p>
                  <p className="mt-2 text-xs text-white/40">
                    (Assumes we capture half of the calls you currently miss)
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-white/50">
                      Growth plan (12 mo)
                    </p>
                    <p className="mt-1 text-2xl font-bold font-mono text-white">
                      {fmt(growthMonthly)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-white/50">ROI multiple</p>
                    <p className="mt-1 text-2xl font-bold font-mono text-gold">
                      {roiMultiple}x
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-xs text-white/40 leading-relaxed">
                  Estimates. Based on 260 working days/year and an assumption
                  that 40% of missed callers would have booked. Your numbers
                  will vary — we&apos;ll show you yours during the audit.
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
