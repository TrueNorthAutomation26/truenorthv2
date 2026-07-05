"use client";

import { PageWrapper } from "@/components/PageWrapper";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import { Badge } from "@/components/Badge";
import {
  Phone,
  Smartphone,
  Star,
  Calendar,
  Settings,
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "calls",
    icon: Phone,
    gradient: "from-teal to-teal-dark",
    shadow: "shadow-teal/20",
    title: "AI Call & Inquiry Response",
    problem:
      "Right now, your phone is ringing and no one's picking up. You're on a roof. Under a sink. In a meeting. Driving. It doesn't matter why — what matters is the caller just hung up and dialed someone else. That's not a missed call. That's a missed $500, $2,000, or $10,000 job.",
    solution:
      "Your AI receptionist never misses a ring. It answers in a natural, professional voice. It knows your business — your services, your hours, your service area. It answers questions, captures the caller's information, and books appointments directly into your calendar. Then it texts you a summary so you know exactly what happened. It works 24/7 — nights, weekends, holidays. No sick days. No lunch breaks.",
    outcomes: [
      "Zero missed calls — every lead captured",
      "Caller info texted to you instantly",
      "Appointments booked without you touching your phone",
      "Professional first impression, every single time",
    ],
  },
  {
    id: "social",
    icon: Smartphone,
    gradient: "from-violet-500 to-purple-600",
    shadow: "shadow-purple-500/20",
    title: "Social Media Content & Posting",
    problem:
      "Your competitor posts every day. You haven't posted in three weeks. When a potential customer searches for a contractor in your area, they check your social media. If your last post is from two months ago, they move on. Not because your work isn't good — because you look inactive. Meanwhile, the guy doing half your quality of work has a feed full of content and looks like he's thriving.",
    solution:
      "Professional content, posted consistently, without you doing anything. We create content tailored to your industry and your local market. Posts are generated, scheduled, and published across your platforms on a consistent schedule. You never have to think about what to post, when to post, or which platform to use.",
    outcomes: [
      "Consistent posting across all platforms",
      "Industry-relevant content created automatically",
      "You stay visible to local customers every day",
      "No more guilt about the social media you're neglecting",
    ],
  },
  {
    id: "reviews",
    icon: Star,
    gradient: "from-gold to-amber-600",
    shadow: "shadow-amber-500/20",
    title: "Review & Reputation Management",
    problem:
      "You've done 300 jobs this year. You have 14 Google reviews. The contractor down the road has 180 reviews and shows up first in every search. He's not better than you. He just asks. But you're too busy doing the work to remember to follow up. And your customers — happy as they are — won't leave a review unless someone makes it easy.",
    solution:
      "Every happy customer becomes a 5-star review — automatically. After every completed job, our system sends a review request at exactly the right time — when the customer is still impressed. It makes leaving a review effortless. It monitors your reviews across Google, Facebook, and other platforms. If something negative comes in, you're alerted immediately.",
    outcomes: [
      "Review requests sent automatically after every job",
      "Your review count grows every single week",
      "Instant alerts if anything needs your attention",
      "The online reputation your work actually deserves",
    ],
  },
  {
    id: "leads",
    icon: Calendar,
    gradient: "from-success to-emerald-600",
    shadow: "shadow-emerald-500/20",
    title: "Lead Follow-Up & Booking",
    problem:
      "A lead filled out your form at 8pm last night. You saw it at noon today. They booked with someone else at 8:05pm. Speed wins. The business that responds first gets the job — not the business that does the best work. When someone reaches out and doesn't hear back within minutes, they don't wait. They call the next name on the list.",
    solution:
      "Every lead gets a response in seconds. Not hours. Not tomorrow. Whether it's noon or midnight, every inquiry gets an instant, personalized response. The system qualifies the lead, answers their questions, and books an appointment directly into your calendar. By the time you wake up, your schedule is already filling.",
    outcomes: [
      "Response time drops from hours to seconds",
      "Leads are pre-qualified before they reach you",
      "Your calendar fills without you lifting a finger",
      "No lead ever goes cold again",
    ],
  },
  {
    id: "workflows",
    icon: Settings,
    gradient: "from-navy to-navy-dark",
    shadow: "shadow-navy/20",
    title: "Workflow & Admin Automation",
    problem:
      "You finished work at 5. It's now 9pm and you're still doing admin. Invoicing. Appointment reminders. Follow-up emails. Updating spreadsheets. Sending quotes. This isn't the work you started your business to do — but it's the work that keeps you up every night. And the longer you put it off, the worse it gets.",
    solution:
      "The paperwork runs itself. We find your repetitive admin tasks and automate them. Invoices go out automatically. Appointment reminders send themselves. Follow-up sequences run without you. Reports generate on schedule. You get your evenings back.",
    outcomes: [
      "10-15+ hours reclaimed every single week",
      "Invoicing and reminders on autopilot",
      "Customer communications handled automatically",
      "You focus on the work that actually generates revenue",
    ],
  },
];

export default function ServicesPage() {
  return (
    <PageWrapper>
      <div className="bg-navy-deep">
      {/* ═══════════════ HERO — editorial 12-col grid + chapter index ═══════════════ */}
      <section className="relative bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="aurora absolute top-0 right-0 w-[700px] h-[700px] bg-teal/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="aurora-delayed absolute bottom-0 -left-60 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-36 lg:pt-44 pb-20 lg:pb-28 w-full">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-end">
            {/* Headline — left-aligned */}
            <div className="lg:col-span-7">
              <AnimateIn delay={0.1}>
                <Badge variant="teal">WHAT WE BUILD FOR YOU</Badge>
              </AnimateIn>
              <AnimateIn delay={0.2}>
                <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tighter text-white">
                  Five systems that run your business while you do your job.
                </h1>
              </AnimateIn>
              <AnimateIn delay={0.35}>
                <p className="mt-6 text-xl text-white/55 leading-relaxed max-w-2xl">
                  Each one works on its own. Together, they&apos;re unstoppable.
                </p>
              </AnimateIn>
            </div>

            {/* Mono numbered index — doubles as a table of contents */}
            <div className="lg:col-span-5">
              <AnimateIn delay={0.45}>
                <nav aria-label="Service index" className="border-t border-white/10">
                  {services.map((service, i) => (
                    <a
                      key={service.id}
                      href={`#${service.id}`}
                      className="group flex items-center gap-5 border-b border-white/10 py-4 cursor-pointer"
                    >
                      <span className="font-mono text-xs tracking-[0.3em] text-white/30 group-hover:text-gold transition-colors duration-300">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-white/65 font-semibold tracking-tight group-hover:text-gold transition-colors duration-300">
                        {service.title}
                      </span>
                      <ArrowRight className="w-4 h-4 ml-auto shrink-0 text-white/20 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  ))}
                </nav>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICE CHAPTERS — sticky rail + stacked content ═══════════════ */}
      {services.map((service, i) => {
        const railRight = i % 2 !== 0;
        const num = String(i + 1).padStart(2, "0");
        return (
          <section
            key={service.id}
            id={service.id}
            className="relative py-24 lg:py-36 overflow-hidden border-t border-white/10 scroll-mt-24"
          >
            {railRight && <div className="absolute inset-0 bg-grid-dark opacity-50" />}
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                {/* Sticky chapter rail */}
                <div className={`lg:col-span-4 ${railRight ? "lg:order-2" : ""}`}>
                  <div className="lg:sticky lg:top-32">
                    <AnimateIn>
                      <span
                        className="block font-mono text-7xl lg:text-8xl font-extrabold leading-none select-none text-white/8"
                        aria-hidden="true"
                      >
                        {num}
                      </span>
                      <div
                        className={`mt-8 w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg ${service.shadow}`}
                      >
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tighter">
                        {service.title}
                      </h2>
                    </AnimateIn>
                  </div>
                </div>

                {/* Content column — hairline-divided rows + panel card */}
                <div className={`lg:col-span-8 ${railRight ? "lg:order-1" : ""}`}>
                  <AnimateIn delay={0.1}>
                    <div className="border-t border-white/10 pt-8">
                      <h3 className="font-mono text-xs font-semibold text-error/90 uppercase tracking-[0.25em] mb-3">
                        The Problem
                      </h3>
                      <p className="text-white/55 text-lg leading-relaxed">
                        {service.problem}
                      </p>
                    </div>
                  </AnimateIn>

                  <AnimateIn delay={0.2}>
                    <div className="mt-10 border-t border-white/10 pt-8">
                      <h3 className="font-mono text-xs font-semibold text-teal-light uppercase tracking-[0.25em] mb-3">
                        The Solution
                      </h3>
                      <p className="text-white/55 text-lg leading-relaxed">
                        {service.solution}
                      </p>
                    </div>
                  </AnimateIn>

                  <AnimateIn delay={0.3}>
                    <div className="mt-10 panel-dark panel-dark-hover rounded-2xl p-8 lg:p-10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-grid-dark opacity-40" />
                      <div className="relative">
                        <h3 className="font-mono text-xs font-semibold text-teal-light uppercase tracking-[0.25em] mb-4">
                          What You Get
                        </h3>
                        <StaggerContainer className="divide-y divide-white/10" staggerDelay={0.08}>
                          {service.outcomes.map((outcome) => (
                            <StaggerItem key={outcome}>
                              <div className="flex items-start gap-4 py-4 group">
                                <div className="w-8 h-8 rounded-lg bg-teal/15 flex items-center justify-center shrink-0 group-hover:bg-teal/25 transition-colors duration-300">
                                  <Check className="w-4 h-4 text-teal-light" />
                                </div>
                                <span className="text-white/80 text-lg leading-snug pt-1">
                                  {outcome}
                                </span>
                              </div>
                            </StaggerItem>
                          ))}
                        </StaggerContainer>
                      </div>
                    </div>
                  </AnimateIn>

                  {/* Platform logos — hairline-divided cell strip */}
                  {service.id === "social" && (
                    <AnimateIn delay={0.4}>
                      <div className="mt-12">
                        <p className="font-mono text-xs tracking-[0.25em] uppercase text-white/40 mb-5">
                          We post across all your platforms
                        </p>
                        <div className="grid grid-cols-5 border-y border-white/10">
                          {/* Instagram */}
                          <div className="flex items-center justify-center h-24 transition-colors duration-500 hover:bg-teal/8">
                            <svg className="w-9 h-9 text-white/40 opacity-60 hover:opacity-100 hover:text-[#E4405F] transition-all duration-200 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                          </div>
                          {/* Facebook */}
                          <div className="flex items-center justify-center h-24 border-l border-white/10 transition-colors duration-500 hover:bg-teal/8">
                            <svg className="w-9 h-9 text-white/40 opacity-60 hover:opacity-100 hover:text-[#1877F2] transition-all duration-200 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                          </div>
                          {/* LinkedIn */}
                          <div className="flex items-center justify-center h-24 border-l border-white/10 transition-colors duration-500 hover:bg-teal/8">
                            <svg className="w-9 h-9 text-white/40 opacity-60 hover:opacity-100 hover:text-[#0A66C2] transition-all duration-200 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </div>
                          {/* TikTok */}
                          <div className="flex items-center justify-center h-24 border-l border-white/10 transition-colors duration-500 hover:bg-teal/8">
                            <svg className="w-9 h-9 text-white/40 opacity-60 hover:opacity-100 hover:text-white transition-all duration-200 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                            </svg>
                          </div>
                          {/* YouTube */}
                          <div className="flex items-center justify-center h-24 border-l border-white/10 transition-colors duration-500 hover:bg-teal/8">
                            <svg className="w-9 h-9 text-white/40 opacity-60 hover:opacity-100 hover:text-[#FF0000] transition-all duration-200 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </AnimateIn>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ═══════════════ FINAL CTA — full-width, massive ═══════════════ */}
      <section className="py-32 lg:py-44 bg-navy-gradient relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-grid-dark opacity-60" />
        <div className="aurora absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gold/6 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-[1.02]">
              Not sure which systems you need?
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-8 text-xl text-white/55 max-w-2xl mx-auto">
              That&apos;s exactly what the free audit is for. In 10 minutes, we&apos;ll show you where you&apos;re leaving money on the table.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <a
              href="https://calendly.com/fabian-truenorthautomation/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold btn-sheen mt-12 inline-flex items-center gap-2.5 px-10 py-5 text-lg font-bold rounded-xl cursor-pointer"
            >
              Book Your Free Audit
              <ArrowRight className="w-5 h-5" />
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
