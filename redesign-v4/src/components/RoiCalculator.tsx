"use client";

import { useState, useMemo } from "react";
import { AnimateIn } from "./AnimateIn";
import { Badge } from "./Badge";
import { Calculator, TrendingUp } from "lucide-react";

/**
 * ROI Calculator — lets visitors plug in their numbers and see
 * (a) revenue lost to missed calls annually
 * (b) revenue recovered if TrueNorth ServiceFlow captures 50% of those calls
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

    // If TrueNorth ServiceFlow picks up the phone, conservative assumption: we
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
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-50" />
      <div className="aurora absolute top-0 right-0 w-[600px] h-[600px] bg-teal/8 rounded-full blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Left-aligned editorial header */}
        <div className="max-w-3xl mb-14">
          <AnimateIn>
            <Badge variant="teal">The Math</Badge>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter">
              How much are missed calls costing you?
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-4 text-lg text-white/55">
              Plug in your numbers. The math is uncomfortable.
            </p>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.25}>
          {/* Single split panel — inputs left, results right */}
          <div className="grid lg:grid-cols-2 rounded-3xl border border-white/10 overflow-hidden">
            {/* Inputs */}
            <div className="bg-white/[0.03] p-8 lg:p-10">
              <div className="flex items-center gap-3 pb-6 mb-2 border-b border-white/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/25 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-teal-light" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  Your business
                </h3>
              </div>

              <div className="divide-y divide-white/[0.08]">
                <div className="py-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <label
                      htmlFor="avgJobValue"
                      className="text-sm font-semibold text-white"
                    >
                      Average job value
                    </label>
                    <span className="text-gold font-mono font-bold text-right">
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
                  <div className="flex justify-between text-xs text-white/40 mt-1 font-mono">
                    <span>$100</span>
                    <span>$10,000</span>
                  </div>
                </div>

                <div className="py-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <label
                      htmlFor="callsPerDay"
                      className="text-sm font-semibold text-white"
                    >
                      Inbound calls per day
                    </label>
                    <span className="text-gold font-mono font-bold text-right">
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
                  <div className="flex justify-between text-xs text-white/40 mt-1 font-mono">
                    <span>1</span>
                    <span>30</span>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <label
                      htmlFor="missedPercent"
                      className="text-sm font-semibold text-white"
                    >
                      Calls you currently miss
                    </label>
                    <span className="text-gold font-mono font-bold text-right">
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
                  <div className="flex justify-between text-xs text-white/40 mt-1 font-mono">
                    <span>5%</span>
                    <span>70%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results — big mono number stack with hairline dividers */}
            <div className="relative bg-gradient-to-br from-navy to-navy-dark border-t lg:border-t-0 lg:border-l border-white/10 p-8 lg:p-10 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-teal/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />

              <div className="relative">
                <div className="flex items-center gap-3 pb-6 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-teal/15 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-teal-light" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    What that means
                  </h3>
                </div>

                <div className="divide-y divide-white/10">
                  <div className="py-7">
                    <p className="text-sm text-white/55">
                      Annual revenue walking away from unanswered calls
                    </p>
                    <p className="mt-2 text-5xl lg:text-6xl font-extrabold font-mono tracking-tight text-error">
                      -{fmt(annualLoss)}
                    </p>
                  </div>

                  <div className="py-7">
                    <p className="text-sm text-white/55">
                      Revenue we conservatively recover for you per year
                    </p>
                    <p className="mt-2 text-5xl lg:text-6xl font-extrabold font-mono tracking-tight text-gold">
                      +{fmt(recovered)}
                    </p>
                    <p className="mt-2 text-xs text-white/40">
                      (Assumes we capture half of the calls you currently miss)
                    </p>
                  </div>

                  <div className="py-7 grid grid-cols-2 divide-x divide-white/10">
                    <div className="pr-4">
                      <p className="text-xs text-white/45">
                        Growth plan (12 mo)
                      </p>
                      <p className="mt-1 text-2xl font-bold font-mono text-white">
                        {fmt(growthMonthly)}
                      </p>
                    </div>
                    <div className="pl-4">
                      <p className="text-xs text-white/45">ROI multiple</p>
                      <p className="mt-1 text-2xl font-bold font-mono text-gold">
                        {roiMultiple}x
                      </p>
                    </div>
                  </div>

                  <p className="pt-6 text-xs text-white/40 leading-relaxed">
                    Estimates. Based on 260 working days/year and an assumption
                    that 40% of missed callers would have booked. Your numbers
                    will vary — we&apos;ll show you yours during the audit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
