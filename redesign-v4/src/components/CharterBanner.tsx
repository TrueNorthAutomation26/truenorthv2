"use client";

import { AnimateIn } from "./AnimateIn";
import { Badge } from "./Badge";
import { ArrowRight, Users, Lock, Zap } from "lucide-react";
import {
  CHARTER_SPOTS_TOTAL,
  CHARTER_SPOTS_REMAINING,
  CHARTER_DEADLINE,
  CHARTER_IS_OPEN,
} from "@/lib/charter";

/**
 * Charter Program banner — drops into any page where we want to show
 * scarcity + exclusivity without sounding new/untested.
 *
 * Variants:
 *   "hero"     — full-width section with gradient + icons (home, pricing)
 *   "compact"  — inline card for footer-adjacent placements
 */
type Variant = "hero" | "compact";

export function CharterBanner({ variant = "hero" }: { variant?: Variant }) {
  // Cohort closed state — flips messaging to "waitlist"
  if (!CHARTER_IS_OPEN || CHARTER_SPOTS_REMAINING <= 0) {
    return (
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <div className="relative bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-10 lg:p-14 border border-gold/30 overflow-hidden text-center">
              <div className="aurora absolute top-0 right-0 w-80 h-80 bg-teal/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="flex justify-center">
                  <Badge variant="teal">Cohort Closed</Badge>
                </div>
                <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold text-white tracking-tighter">
                  This quarter&apos;s 10 spots are filled.
                </h2>
                <p className="mt-4 text-lg text-white/55 max-w-xl mx-auto">
                  Join the waitlist for our next intake. You&apos;ll be first in
                  line for Charter pricing when the next cohort opens.
                </p>
                <a
                  href="https://calendly.com/fabian-truenorthautomation/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold btn-sheen mt-8 inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl cursor-pointer"
                >
                  Join the Waitlist &rarr;
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    );
  }

  if (variant === "compact") {
    return (
      <div className="bg-white/5 rounded-2xl p-6 border border-gold/30">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-wider">
              Charter Program Open
            </p>
            <p className="mt-1 text-white/70">
              {CHARTER_SPOTS_REMAINING} of {CHARTER_SPOTS_TOTAL} spots remaining
              · Closes {CHARTER_DEADLINE}
            </p>
          </div>
          <a
            href="https://calendly.com/fabian-truenorthautomation/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold btn-sheen inline-flex items-center gap-2 px-5 py-2.5 font-bold text-sm rounded-xl cursor-pointer"
          >
            Reserve a Spot &rarr;
          </a>
        </div>
      </div>
    );
  }

  // Default: hero variant
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <AnimateIn>
          <div className="relative bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-10 lg:p-14 border border-gold/30 overflow-hidden">
            <div className="aurora absolute top-0 right-0 w-80 h-80 bg-teal/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="aurora-delayed absolute bottom-0 left-0 w-72 h-72 bg-gold/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative">
              <Badge variant="teal">Atlantic Canada Charter Program</Badge>
              <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter">
                {CHARTER_SPOTS_TOTAL} new client spots — closes{" "}
                <span className="text-gold">{CHARTER_DEADLINE}</span>.
              </h2>
              <p className="mt-4 text-lg text-white/55 max-w-2xl">
                We cap new onboarding at {CHARTER_SPOTS_TOTAL} Atlantic
                Canadian businesses per quarter so every build gets the
                attention it needs. Clients who join this cohort lock in
                Charter pricing — permanently.
              </p>

              {/* Live spot counter */}
              <div className="mt-6 inline-flex items-center gap-3 bg-white/5 backdrop-blur rounded-xl px-5 py-3 border border-white/10">
                <div className="flex gap-1.5">
                  {Array.from({ length: CHARTER_SPOTS_TOTAL }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2.5 h-2.5 rounded-full ${
                        i < CHARTER_SPOTS_REMAINING
                          ? "bg-teal"
                          : "bg-white/15"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-white">
                  {CHARTER_SPOTS_REMAINING} of {CHARTER_SPOTS_TOTAL} remaining
                </span>
              </div>

              {/* Charter benefits */}
              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 text-teal-light" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      50% off setup
                    </p>
                    <p className="mt-1 text-xs text-white/45">
                      One-time setup fee, halved
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
                    <Lock className="w-4 h-4 text-teal-light" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      Rate locked for life
                    </p>
                    <p className="mt-1 text-xs text-white/45">
                      When we raise prices, yours doesn&apos;t
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-teal-light" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      Priority support
                    </p>
                    <p className="mt-1 text-xs text-white/45">
                      Direct line, not a queue
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://calendly.com/fabian-truenorthautomation/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold btn-sheen mt-10 inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl cursor-pointer"
              >
                Reserve a Charter Spot &rarr;
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="mt-4 font-mono text-xs tracking-wider text-white/30">
                Free 10-minute audit &middot; 30-day setup-fee guarantee
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
