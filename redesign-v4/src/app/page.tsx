"use client";

import { PageWrapper } from "@/components/PageWrapper";
import { AnimateIn, StaggerContainer, StaggerItem, CountUp } from "@/components/AnimateIn";
import { Badge } from "@/components/Badge";
import { DashboardMockup } from "@/components/DashboardMockup";
import { CharterBanner } from "@/components/CharterBanner";
import { TypicalOutcomes } from "@/components/TypicalOutcomes";
import { WatchDemoButton } from "@/components/PortalDemo";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Smartphone,
  Star,
  Calendar,
  Settings,
  X,
  Check,
  ChevronRight,
  Zap,
  Clock,
  PhoneOff,
  Users,
} from "lucide-react";
import Link from "next/link";

const statsBar: {
  value: string;
  count?: { value: number; prefix?: string; suffix?: string };
  label: string;
}[] = [
  {
    value: "$50K+",
    count: { value: 50, prefix: "$", suffix: "K+" },
    label: "in revenue walks away from unanswered calls every year",
  },
  {
    value: "85%",
    count: { value: 85, suffix: "%" },
    label: "of people who can’t reach you will call someone else",
  },
  { value: "24/7", label: "coverage without hiring a single employee" },
  { value: "30-day", label: "setup-fee guarantee on every build" },
];

const services = [
  {
    icon: Phone,
    title: "AI Call Response",
    desc: "Your phone gets answered on the first ring. Every time. Your AI receptionist knows your business, books appointments, captures lead info, and texts you a summary. Works nights, weekends, and holidays.",
    gradient: "from-teal to-teal-dark",
    span: "lg:col-span-3",
  },
  {
    icon: Smartphone,
    title: "Social Media",
    desc: "Consistent, professional posts across all your platforms — created and published without you lifting a finger. Show up online every day, even when you’re buried in work.",
    gradient: "from-violet-500 to-purple-600",
    span: "lg:col-span-3",
  },
  {
    icon: Star,
    title: "Reputation Management",
    desc: "After every job, your customers get a perfectly timed review request. Your 5-star reputation builds itself while you focus on the next project.",
    gradient: "from-gold to-amber-600",
    span: "lg:col-span-2",
  },
  {
    icon: Calendar,
    title: "Lead Follow-Up",
    desc: "When a lead comes in at 9pm, they get a response in seconds — not the next morning when they’ve already called your competitor. Automatic qualification, answers, and booking.",
    gradient: "from-success to-emerald-600",
    span: "lg:col-span-2",
  },
  {
    icon: Settings,
    title: "Workflow Automation",
    desc: "Invoicing, appointment reminders, follow-up emails, reporting — the admin work that eats your evenings now runs in the background, on autopilot.",
    gradient: "from-navy to-navy-dark",
    span: "lg:col-span-2",
  },
];

const withoutItems = [
  "Missed calls during jobs — leads gone forever",
  "Social media silence — competitors look more established",
  "A handful of reviews that don’t reflect your work",
  "Leads waiting hours or days for a response",
  "Evenings lost to admin, invoicing, and catch-up",
];

const withItems = [
  "Every call answered, every lead captured — automatically",
  "Professional content posted daily without your input",
  "Review count climbing every week on autopilot",
  "Leads get instant responses and book themselves in",
  "Your evenings back — the business runs while you rest",
];

const industries = [
  "Contractors & Trades",
  "HVAC & Plumbing",
  "Solar & Energy",
  "Real Estate",
  "Property Management",
  "Beauty & Wellness",
  "Home Services",
  "Growing Local Companies",
];

/* Mono section index — decorative, sits above section headings */
function SectionIndex({ n, light = false }: { n: string; light?: boolean }) {
  return (
    <span
      className={`block font-mono text-xs tracking-[0.4em] mb-4 ${
        light ? "text-navy/30" : "text-white/25"
      }`}
    >
      {n}
    </span>
  );
}

export default function HomePage() {
  return (
    <PageWrapper>
      <div className="bg-navy-deep">
        {/* ═══════════════ HERO — full-bleed, centered, 3D dashboard ═══════════════ */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="absolute inset-0 bg-grid-dark" />
          <div className="aurora absolute -top-40 right-0 w-[900px] h-[900px] bg-teal/10 rounded-full blur-3xl" />
          <div className="aurora-delayed absolute top-1/2 -left-60 w-[700px] h-[700px] bg-teal/6 rounded-full blur-3xl" />
          <div className="aurora absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-36 lg:pt-44 pb-20">
            <div className="max-w-4xl mx-auto text-center">
              <AnimateIn delay={0.1}>
                <div className="flex justify-center">
                  <Badge variant="teal">BUILT FOR ATLANTIC CANADIAN BUSINESSES</Badge>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <h1 className="mt-8 text-5xl sm:text-6xl lg:text-[5.25rem] font-extrabold leading-[1.02] tracking-tighter">
                  <span className="text-white">Every missed call is a job </span>
                  <span className="text-gradient-animated">
                    your competitor just booked.
                  </span>
                </h1>
              </AnimateIn>

              <AnimateIn delay={0.35}>
                <p className="mt-8 text-lg lg:text-xl text-white/55 leading-relaxed max-w-2xl mx-auto">
                  We install AI systems that answer your calls, post your content,
                  grow your reviews, follow up with every lead, and handle your
                  admin — while you&apos;re on the job site. You don&apos;t touch a thing.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.45}>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <a
                    href="https://calendly.com/fabian-truenorthautomation/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold btn-sheen inline-flex items-center gap-2.5 px-8 py-4 font-bold rounded-xl cursor-pointer"
                  >
                    See What You&apos;re Missing &rarr;
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <WatchDemoButton />
                  <Link
                    href="/how-it-works"
                    className="inline-flex items-center gap-2.5 px-8 py-4 text-white font-semibold rounded-xl border border-white/15 hover:border-teal/50 hover:bg-teal/10 transition-all duration-200 cursor-pointer"
                  >
                    How It Works
                  </Link>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.55}>
                <p className="mt-7 font-mono text-xs tracking-wider text-white/35">
                  Free 10-minute audit &middot; No tech skills needed &middot; 30-day setup-fee guarantee
                </p>
              </AnimateIn>
            </div>

            {/* 3D-tilted portal with floating notifications */}
            <AnimateIn delay={0.5} className="mt-20 hidden md:block">
              <div className="relative max-w-4xl mx-auto" style={{ perspective: "1600px" }}>
                <motion.div
                  initial={{ rotateX: 16, y: 40, opacity: 0 }}
                  whileInView={{ rotateX: 8, y: 0, opacity: 1 }}
                  whileHover={{ rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <DashboardMockup />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-8 -left-10 z-20 glass-card rounded-xl px-4 py-3 flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-teal/20 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-teal-light" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-white">New Call Answered</p>
                    <p className="text-[11px] text-white/40">Booked for Thursday 2pm</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -right-8 z-20 glass-card rounded-xl px-4 py-3 flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-gold/20 flex items-center justify-center">
                    <Star className="w-4 h-4 text-gold" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-white">5-Star Review Received</p>
                    <p className="text-[11px] text-white/40">&quot;Excellent service!&quot;</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-1/4 -right-14 z-20 glass-card rounded-xl px-4 py-3 flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Smartphone className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-white">Social Post Published</p>
                    <p className="text-[11px] text-white/40">Instagram &middot; Auto-posted</p>
                  </div>
                </motion.div>
              </div>
            </AnimateIn>

            {/* Mobile fallback — flat dashboard */}
            <AnimateIn delay={0.5} className="mt-16 md:hidden">
              <DashboardMockup />
            </AnimateIn>
          </div>
        </section>

        {/* ═══════════════ STATS STRIP — hairline columns ═══════════════ */}
        <section className="relative border-y border-white/10 bg-navy-dark/40">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
            {statsBar.map((stat, i) => (
              <AnimateIn
                key={stat.value}
                delay={i * 0.08}
                className={`px-8 py-12 ${
                  i > 0 ? "border-l border-white/10" : ""
                } ${i >= 2 ? "max-lg:border-t max-lg:border-white/10" : ""} ${
                  i === 2 ? "max-lg:border-l-0" : ""
                }`}
              >
                <span className="block text-4xl lg:text-5xl font-extrabold text-gold font-mono tracking-tight">
                  {stat.count ? (
                    <CountUp
                      value={stat.count.value}
                      prefix={stat.count.prefix}
                      suffix={stat.count.suffix}
                    />
                  ) : (
                    stat.value
                  )}
                </span>
                <span className="mt-3 block text-sm text-white/45 leading-snug">
                  {stat.label}
                </span>
              </AnimateIn>
            ))}
          </div>
        </section>

        {/* ═══════════════ 01 / THE PROBLEM ═══════════════ */}
        <section className="relative py-28 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark opacity-60" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-14">
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-32">
                  <AnimateIn>
                    <SectionIndex n="01" />
                    <Badge variant="teal">THE PROBLEM NO ONE TALKS ABOUT</Badge>
                  </AnimateIn>
                  <AnimateIn delay={0.1}>
                    <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tighter">
                      You didn&apos;t start your business to answer emails at 11pm.
                    </h2>
                  </AnimateIn>
                </div>
              </div>
              <div className="lg:col-span-7">
                <AnimateIn delay={0.2}>
                  <p className="text-lg lg:text-xl text-white/55 leading-relaxed">
                    You started it because you&apos;re damn good at what you do. But somewhere along the way, running the business started running you. Calls slip through while you&apos;re on a job. Your Google reviews don&apos;t reflect the quality of your work. Social media hasn&apos;t been touched in weeks. And every evening, instead of being with your family, you&apos;re catching up on invoices and follow-ups.
                  </p>
                </AnimateIn>
                <AnimateIn delay={0.3}>
                  <div className="mt-10 pl-8 border-l-2 border-gold py-2">
                    <p className="text-lg text-white/75 leading-relaxed">
                      Here&apos;s the thing — you don&apos;t need to work more hours. You don&apos;t need to hire an office manager. You need systems that handle the business side automatically, around the clock, without you thinking about it. That&apos;s exactly what we build.
                    </p>
                  </div>
                </AnimateIn>
                <AnimateIn delay={0.4}>
                  <div className="mt-12 panel-dark rounded-2xl p-10 flex items-center gap-8 overflow-hidden relative">
                    <div className="relative shrink-0 w-20 h-20 flex items-center justify-center">
                      <div className="pulse-ring absolute inset-0 rounded-full border-2 border-error/60" />
                      <div className="pulse-ring absolute inset-0 rounded-full border-2 border-error/40" style={{ animationDelay: "1.5s" }} />
                      <div className="relative w-16 h-16 rounded-2xl bg-error/10 border border-error/30 flex items-center justify-center">
                        <PhoneOff className="w-8 h-8 text-error" />
                      </div>
                    </div>
                    <div>
                      <p className="text-white/50 text-sm font-medium">Missed calls cost you</p>
                      <p className="text-white text-5xl font-extrabold font-mono mt-1 tracking-tight">
                        <CountUp value={50} prefix="$" suffix="K+" />
                        <span className="text-xl text-white/40">/yr</span>
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ HAIRLINE CELL STRIP ═══════════════ */}
        <section className="grid grid-cols-2 lg:grid-cols-4 border-y border-white/10">
          {[
            { icon: Users, label: "Your Team" },
            { icon: Phone, label: "Every Call" },
            { icon: Zap, label: "Automated" },
            { icon: Clock, label: "24/7 Active" },
          ].map((item, i) => (
            <div
              key={i}
              className={`group relative h-44 flex flex-col items-center justify-center gap-3 transition-colors duration-500 hover:bg-teal/8 cursor-default ${
                i > 0 ? "border-l border-white/10" : ""
              } ${i >= 2 ? "max-lg:border-t max-lg:border-white/10" : ""} ${
                i === 2 ? "max-lg:border-l-0" : ""
              }`}
            >
              <item.icon className="w-8 h-8 text-white/25 group-hover:text-teal group-hover:scale-110 transition-all duration-500" />
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-white/40 group-hover:text-white/80 transition-colors duration-500">
                {item.label}
              </span>
            </div>
          ))}
        </section>

        {/* ═══════════════ 02 / SERVICES — bento grid ═══════════════ */}
        <section className="relative py-28 lg:py-40 overflow-hidden">
          <div className="aurora absolute top-0 right-0 w-[700px] h-[700px] bg-teal/6 rounded-full blur-3xl" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <AnimateIn>
                <SectionIndex n="02" />
                <Badge variant="teal">WHAT RUNS WHILE YOU WORK</Badge>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter">
                  Five systems. Zero effort from you.
                </h2>
              </AnimateIn>
            </div>

            <StaggerContainer className="mt-16 grid lg:grid-cols-6 gap-5" staggerDelay={0.08}>
              {services.map((service) => (
                <StaggerItem key={service.title} className={service.span}>
                  <div className="group panel-dark panel-dark-hover relative rounded-2xl p-8 lg:p-10 h-full overflow-hidden cursor-default">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-7 shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed">{service.desc}</p>
                  </div>
                </StaggerItem>
              ))}
              <StaggerItem className="lg:col-span-6">
                <Link
                  href="/services"
                  className="group panel-dark panel-dark-hover relative rounded-2xl p-8 flex items-center justify-between gap-6 cursor-pointer overflow-hidden"
                >
                  <span className="text-white font-bold text-xl lg:text-2xl tracking-tight">
                    See How Each System Works
                  </span>
                  <span className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                    <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-gold group-hover:translate-x-0.5 transition-all" />
                  </span>
                </Link>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* ═══════════════ 03 / FULL VISIBILITY — light chapter ═══════════════ */}
        <section className="relative py-28 lg:py-40 bg-light-bg overflow-hidden">
          <div className="absolute inset-0 dot-pattern-light" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <AnimateIn>
                  <SectionIndex n="03" light />
                  <Badge variant="light">FULL VISIBILITY</Badge>
                </AnimateIn>
                <AnimateIn delay={0.1}>
                  <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-dark tracking-tighter">
                    Know exactly what your automation is doing.
                  </h2>
                </AnimateIn>
                <AnimateIn delay={0.2}>
                  <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-lg">
                    Every call answered, every review requested, every lead followed up — tracked in the client portal every True North customer gets, checkable from your phone.
                  </p>
                </AnimateIn>
                <AnimateIn delay={0.3}>
                  <div className="mt-10 grid grid-cols-2 gap-4">
                    {[
                      { value: 96, label: "Calls answered this month" },
                      { value: 49, label: "Posts published" },
                      { value: 34, label: "Quotes sent" },
                      { value: 53, label: "New contacts captured" },
                    ].map((s, i) => (
                      <div
                        key={s.label}
                        className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-teal/30 transition-all duration-300 cursor-default"
                      >
                        <p className="text-3xl font-bold text-navy-dark font-mono">
                          <CountUp value={s.value} delay={i * 0.12} />
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </AnimateIn>
              </div>
              <AnimateIn delay={0.2} direction="right">
                <DashboardMockup className="shadow-2xl shadow-navy/15" />
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ═══════════════ 04 / BEFORE & AFTER — split panel ═══════════════ */}
        <section className="relative py-28 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark opacity-50" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <AnimateIn>
                <SectionIndex n="04" />
                <div className="flex justify-center">
                  <Badge variant="teal">THE SHIFT</Badge>
                </div>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter">
                  This is what changes.
                </h2>
              </AnimateIn>
            </div>

            <div className="mt-16 grid lg:grid-cols-2 gap-px rounded-3xl overflow-hidden border border-white/10 bg-white/10">
              <AnimateIn delay={0.1} direction="left" className="bg-navy-deep">
                <div className="relative p-10 lg:p-12 h-full">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-error/60 to-transparent" />
                  <div className="flex items-center gap-3 mb-9">
                    <div className="w-10 h-10 rounded-xl bg-error/10 border border-error/25 flex items-center justify-center">
                      <X className="w-5 h-5 text-error" />
                    </div>
                    <h3 className="font-mono text-sm tracking-[0.2em] text-white/70">
                      RUNNING YOUR BUSINESS TODAY
                    </h3>
                  </div>
                  <div className="space-y-5">
                    {withoutItems.map((item) => (
                      <div key={item} className="flex items-start gap-3.5">
                        <X className="w-4 h-4 text-error/70 shrink-0 mt-1" />
                        <span className="text-white/55">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.2} direction="right" className="bg-navy-deep">
                <div className="relative p-10 lg:p-12 h-full">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal to-transparent" />
                  <div className="flex items-center gap-3 mb-9">
                    <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/25 flex items-center justify-center">
                      <Check className="w-5 h-5 text-teal-light" />
                    </div>
                    <h3 className="font-mono text-sm tracking-[0.2em] text-white/70">
                      WITH TRUE NORTH RUNNING
                    </h3>
                  </div>
                  <div className="space-y-5">
                    {withItems.map((item) => (
                      <div key={item} className="flex items-start gap-3.5">
                        <Check className="w-4 h-4 text-teal-light shrink-0 mt-1" />
                        <span className="text-white/75">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* Quantified shift */}
            <AnimateIn delay={0.3}>
              <div className="mt-8 grid sm:grid-cols-3 border border-white/10 rounded-2xl overflow-hidden">
                {[
                  { label: "Avg. response time", before: "2+ hours", after: "under 10 sec" },
                  { label: "Calls answered", before: "~60%", after: "100%" },
                  { label: "After-hours coverage", before: "none", after: "24/7" },
                ].map((m, i) => (
                  <div
                    key={m.label}
                    className={`px-6 py-6 text-center ${i > 0 ? "sm:border-l border-white/10 max-sm:border-t" : ""}`}
                  >
                    <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/35 mb-2.5">
                      {m.label}
                    </p>
                    <p className="font-mono text-base sm:text-lg font-bold">
                      <span className="text-error/80 line-through decoration-error/50">{m.before}</span>
                      <span className="text-white/30 mx-2.5">&rarr;</span>
                      <span className="text-teal-light">{m.after}</span>
                    </p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ═══════════════ 05 / PROCESS — connected timeline ═══════════════ */}
        <section className="relative py-28 lg:py-36 border-t border-white/10">
          <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
            <AnimateIn className="text-center">
              <SectionIndex n="05" />
            </AnimateIn>
            <div className="relative">
              <div className="hidden md:block absolute top-7 left-[16%] right-[16%] h-px bg-gradient-to-r from-teal/40 via-gold/40 to-teal/40" />
              <StaggerContainer className="grid md:grid-cols-3 gap-12" staggerDelay={0.15}>
                {[
                  { step: "01", title: "We Audit", desc: "A 10-minute conversation to understand your business and find the gaps." },
                  { step: "02", title: "We Build", desc: "Custom AI systems designed for your specific workflows." },
                  { step: "03", title: "We Launch", desc: "Everything goes live. You monitor results. We optimize." },
                ].map((item) => (
                  <StaggerItem key={item.step}>
                    <div className="text-center group">
                      <div className="relative inline-flex w-14 h-14 rounded-full bg-navy-deep border border-gold/40 items-center justify-center font-mono text-gold font-bold group-hover:bg-gold group-hover:text-navy-deep transition-colors duration-300">
                        {item.step}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mt-6 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-white/45 mt-3 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <AnimateIn delay={0.4} className="text-center mt-14">
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-teal-light font-semibold hover:gap-3.5 transition-all duration-200 cursor-pointer"
              >
                See the Full Process &rarr;
                <ChevronRight className="w-4 h-4" />
              </Link>
            </AnimateIn>
          </div>
        </section>

        {/* ═══════════════ TYPICAL OUTCOMES ═══════════════ */}
        <TypicalOutcomes />

        {/* ═══════════════ TESTIMONIAL — oversized editorial quote ═══════════════ */}
        <section className="relative py-28 lg:py-40 overflow-hidden border-t border-white/10">
          <div className="aurora absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-teal/6 rounded-full blur-3xl" />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <AnimateIn>
              <span className="block font-mono text-8xl text-gold/30 leading-none select-none" aria-hidden="true">
                &ldquo;
              </span>
              <div className="flex justify-center -mt-6">
                <Badge variant="teal">From a Real Customer</Badge>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <blockquote className="mt-10 text-2xl sm:text-3xl lg:text-[2.6rem] font-bold text-white leading-snug tracking-tight">
                &ldquo;I used to worry constantly about missing calls and not posting on social media. Now it all runs in the background. I check my dashboard, see what&apos;s happening, and get back to running my business.&rdquo;
              </blockquote>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="mt-10">
                <p className="text-lg font-semibold text-gold">Peter — VY Build Inc., PEI</p>
                <p className="mt-2 font-mono text-xs tracking-wider text-white/35">
                  AI Call Response &middot; Social Media &middot; Review Management &middot; Lead Follow-Up
                </p>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ═══════════════ CHARTER PROGRAM — light chapter ═══════════════ */}
        <CharterBanner variant="hero" />

        {/* ═══════════════ INDUSTRIES — infinite marquee ═══════════════ */}
        <section className="relative py-20 border-y border-white/10 overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center mb-12">
            <AnimateIn>
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-white/40 leading-relaxed">
                Built for businesses that are great at what they do — and too busy to do everything else.
              </p>
            </AnimateIn>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-deep to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-deep to-transparent z-10 pointer-events-none" />
            <div className="marquee-track gap-4 pr-4">
              {[...industries, ...industries].map((ind, i) => (
                <span
                  key={`${ind}-${i}`}
                  className="inline-flex shrink-0 px-7 py-3.5 rounded-full text-sm font-medium text-white/70 border border-white/15 hover:border-gold/50 hover:text-gold transition-colors duration-300 cursor-default whitespace-nowrap"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ FINAL CTA — massive ═══════════════ */}
        <section className="relative py-32 lg:py-44 overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark opacity-60" />
          <div className="aurora absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gold/6 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <AnimateIn>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-[1.02]">
                You&apos;re losing leads <span className="text-gradient-animated">right now.</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="mt-8 text-xl text-white/50 max-w-2xl mx-auto">
                Every day without these systems is another day your competitors have the advantage. A 10-minute call is all it takes to see what you&apos;re missing.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <a
                href="https://calendly.com/fabian-truenorthautomation/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold btn-sheen mt-12 inline-flex items-center gap-2.5 px-10 py-5 text-lg font-bold rounded-xl cursor-pointer"
              >
                Book Your Free Audit &rarr;
                <ArrowRight className="w-5 h-5" />
              </a>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <p className="mt-8 font-mono text-xs tracking-wider text-white/30">
                Free 10-minute audit &middot; No tech skills needed &middot; 30-day setup-fee guarantee
              </p>
            </AnimateIn>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
