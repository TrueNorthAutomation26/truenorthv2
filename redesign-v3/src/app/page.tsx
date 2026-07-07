"use client";

import { PageWrapper } from "@/components/PageWrapper";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import { Badge } from "@/components/Badge";
import { DashboardMockup } from "@/components/DashboardMockup";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { CharterBanner } from "@/components/CharterBanner";
import { TypicalOutcomes } from "@/components/TypicalOutcomes";
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

const statsBar = [
  { value: "$50K+", label: "in revenue walks away from unanswered calls every year" },
  { value: "85%", label: "of people who can\u2019t reach you will call someone else" },
  { value: "24/7", label: "coverage without hiring a single employee" },
  { value: "30-day", label: "setup-fee guarantee on every build" },
];

const services = [
  {
    icon: Phone,
    title: "AI Call Response",
    desc: "Your phone gets answered on the first ring. Every time. Your AI receptionist knows your business, books appointments, captures lead info, and texts you a summary. Works nights, weekends, and holidays.",
    gradient: "from-teal to-teal-dark",
  },
  {
    icon: Smartphone,
    title: "Social Media",
    desc: "Consistent, professional posts across all your platforms \u2014 created and published without you lifting a finger. Show up online every day, even when you\u2019re buried in work.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Star,
    title: "Reputation Management",
    desc: "After every job, your customers get a perfectly timed review request. Your 5-star reputation builds itself while you focus on the next project.",
    gradient: "from-gold to-amber-600",
  },
  {
    icon: Calendar,
    title: "Lead Follow-Up",
    desc: "When a lead comes in at 9pm, they get a response in seconds \u2014 not the next morning when they\u2019ve already called your competitor. Automatic qualification, answers, and booking.",
    gradient: "from-success to-emerald-600",
  },
  {
    icon: Settings,
    title: "Workflow Automation",
    desc: "Invoicing, appointment reminders, follow-up emails, reporting \u2014 the admin work that eats your evenings now runs in the background, on autopilot.",
    gradient: "from-navy to-navy-dark",
  },
];

const withoutItems = [
  "Missed calls during jobs \u2014 leads gone forever",
  "Social media silence \u2014 competitors look more established",
  "A handful of reviews that don\u2019t reflect your work",
  "Leads waiting hours or days for a response",
  "Evenings lost to admin, invoicing, and catch-up",
];

const withItems = [
  "Every call answered, every lead captured \u2014 automatically",
  "Professional content posted daily without your input",
  "Review count climbing every week on autopilot",
  "Leads get instant responses and book themselves in",
  "Your evenings back \u2014 the business runs while you rest",
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

export default function HomePage() {
  return (
    <PageWrapper>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-screen bg-hero-gradient overflow-hidden flex items-center">
        {/* Background effects */}
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="aurora absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
        <div className="aurora-2 absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-40 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimateIn delay={0.1}>
                <Badge variant="teal">BUILT FOR ATLANTIC CANADIAN BUSINESSES</Badge>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
                  <span className="text-white">
                    Every missed call is a job
                  </span>
                  <br />
                  <span className="text-gradient">your competitor just booked.</span>
                </h1>
              </AnimateIn>

              <AnimateIn delay={0.35}>
                <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-lg">
                  We install AI systems that answer your calls, post your content,
                  grow your reviews, follow up with every lead, and handle your
                  admin — while you&apos;re on the job site. You don&apos;t touch a thing.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.45}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="https://calendly.com/fabian-truenorthautomation/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shimmer inline-flex items-center gap-2.5 px-7 py-4 bg-teal hover:bg-teal-dark text-white font-semibold rounded-xl transition-all duration-200 shadow-xl shadow-teal/25 hover:shadow-teal/40 hover:-translate-y-0.5 cursor-pointer"
                  >
                    See What You&apos;re Missing &rarr;
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <Link
                    href="/how-it-works"
                    className="inline-flex items-center gap-2.5 px-7 py-4 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-200 cursor-pointer"
                  >
                    How It Works
                  </Link>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.55}>
                <p className="mt-6 text-sm text-white/40">
                  Free 10-minute audit &middot; No tech skills needed &middot; 30-day setup-fee guarantee
                </p>
              </AnimateIn>
            </div>

            {/* Hero Visual — Dashboard + Floating Cards */}
            <AnimateIn delay={0.3} direction="right" className="hidden lg:block">
              <div className="relative">
                {/* Floating notification cards */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -left-8 z-20 glass-card rounded-xl px-4 py-3 flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-teal/20 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-teal" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">New Call Answered</p>
                    <p className="text-[11px] text-white/40">Booked for Thursday 2pm</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -right-6 z-20 glass-card rounded-xl px-4 py-3 flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-gold/20 flex items-center justify-center">
                    <Star className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">5-Star Review Received</p>
                    <p className="text-[11px] text-white/40">&quot;Excellent service!&quot;</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-1/3 -right-10 z-20 glass-card rounded-xl px-4 py-3 flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Smartphone className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Social Post Published</p>
                    <p className="text-[11px] text-white/40">Instagram &middot; Auto-posted</p>
                  </div>
                </motion.div>

                <DashboardMockup />
              </div>
            </AnimateIn>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ═══════════════ STATS BAR ═══════════════ */}
      <section className="relative -mt-20 z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <AnimateIn>
          <div className="bg-white rounded-2xl shadow-xl shadow-navy/8 border border-gray-100 p-2">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {statsBar.map((stat, i) => (
                <div
                  key={stat.value}
                  className={`flex flex-col items-center text-center px-6 py-6 ${
                    i < statsBar.length - 1
                      ? "lg:border-r border-gray-100"
                      : ""
                  }`}
                >
                  <span className="text-3xl lg:text-4xl font-extrabold text-navy font-mono tracking-tight">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 text-sm text-gray-500">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* ═══════════════ PROBLEM SECTION ═══════════════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimateIn>
                <Badge variant="light">THE PROBLEM NO ONE TALKS ABOUT</Badge>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-dark leading-tight tracking-tight">
                  You didn&apos;t start your business to answer emails at 11pm.
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.2}>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  You started it because you&apos;re damn good at what you do. But somewhere along the way, running the business started running you. Calls slip through while you&apos;re on a job. Your Google reviews don&apos;t reflect the quality of your work. Social media hasn&apos;t been touched in weeks. And every evening, instead of being with your family, you&apos;re catching up on invoices and follow-ups.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.3}>
                <div className="mt-8 pl-6 border-l-4 border-teal bg-teal/5 rounded-r-xl py-5 pr-6">
                  <p className="text-gray-700 leading-relaxed">
                    Here&apos;s the thing — you don&apos;t need to work more hours. You don&apos;t need to hire an office manager. You need systems that handle the business side automatically, around the clock, without you thinking about it. That&apos;s exactly what we build.
                  </p>
                </div>
              </AnimateIn>
            </div>
            <AnimateIn delay={0.2} direction="right">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-navy/80 to-navy-deep/90 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-4">
                      <PhoneOff className="w-10 h-10 text-white/60" />
                    </div>
                    <p className="text-white/60 text-sm font-medium">Missed calls cost you</p>
                    <p className="text-white text-4xl font-extrabold font-mono mt-1">$50K+<span className="text-lg text-white/50">/yr</span></p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ═══════════════ IMAGE STRIP ═══════════════ */}
      <section className="grid grid-cols-2 lg:grid-cols-4 h-64 overflow-hidden">
        {[
          { icon: Users, label: "Your Team" },
          { icon: Phone, label: "Every Call" },
          { icon: Zap, label: "Automated" },
          { icon: Clock, label: "24/7 Active" },
        ].map((item, i) => (
          <div
            key={i}
            className="relative bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center group overflow-hidden"
          >
            <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/30 transition-colors duration-500" />
            <div className="relative text-center z-10">
              <item.icon className="w-10 h-10 text-teal/60 mx-auto mb-3 group-hover:text-teal transition-colors duration-500" />
              <span className="text-sm font-medium text-white/60 group-hover:text-white/80 transition-colors duration-500">
                {item.label}
              </span>
            </div>
            <div className="absolute inset-0 dot-pattern opacity-20" />
          </div>
        ))}
      </section>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section className="py-24 lg:py-32 bg-light-bg relative">
        <div className="absolute inset-0 dot-pattern-light" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <AnimateIn>
              <Badge variant="light">WHAT RUNS WHILE YOU WORK</Badge>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-dark tracking-tight">
                Five systems. Zero effort from you.
              </h2>
            </AnimateIn>
          </div>

          <StaggerContainer className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 hover:-translate-y-1 cursor-default h-full">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">{service.desc}</p>
                </div>
              </StaggerItem>
            ))}
            <StaggerItem>
              <Link
                href="/services"
                className="group relative bg-gradient-to-br from-navy to-navy-dark rounded-2xl p-8 flex flex-col items-center justify-center text-center h-full min-h-[200px] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full border-2 border-dashed border-white/30 flex items-center justify-center mb-4 group-hover:border-teal group-hover:bg-teal/10 transition-all duration-300">
                  <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-teal transition-colors" />
                </div>
                <span className="text-white font-semibold text-lg">
                  See How Each System Works
                </span>
                <span className="text-white/40 text-sm mt-1">
                  See How Each System Works &rarr;
                </span>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════ DASHBOARD SECTION ═══════════════ */}
      <section className="py-24 lg:py-32 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-teal/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimateIn>
                <Badge variant="teal">FULL VISIBILITY</Badge>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  Know exactly what your automation is doing.
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.2}>
                <p className="mt-6 text-lg text-white/50 leading-relaxed max-w-lg">
                  Every call answered, every review requested, every lead followed up — tracked in one dashboard you can check from your phone.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.3}>
                <div className="mt-10 grid grid-cols-2 gap-4">
                  {[
                    { value: 47, label: "Calls Answered" },
                    { value: 38, label: "5-Star Reviews" },
                    { value: 124, label: "Posts Published" },
                    { value: 23, label: "Leads Booked" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="glass-card rounded-xl p-4 hover:bg-white/[0.12] hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <p className="text-2xl font-bold text-white font-mono">
                        <AnimatedCounter value={s.value} />
                      </p>
                      <p className="text-xs text-white/40 mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </AnimateIn>
            </div>
            <AnimateIn delay={0.2} direction="right">
              <DashboardMockup />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ═══════════════ BEFORE / AFTER ═══════════════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <AnimateIn>
              <Badge variant="light">THE SHIFT</Badge>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-dark tracking-tight">
                This is what changes.
              </h2>
            </AnimateIn>
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-8">
            <AnimateIn delay={0.1} direction="left">
              <div className="rounded-2xl border-2 border-error/20 bg-error/3 p-8 lg:p-10 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-error/10 flex items-center justify-center">
                    <X className="w-5 h-5 text-error" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-dark">
                    RUNNING YOUR BUSINESS TODAY
                  </h3>
                </div>
                <div className="space-y-4">
                  {withoutItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-error/10 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 text-error" />
                      </div>
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2} direction="right">
              <div className="rounded-2xl border-2 border-teal/20 bg-teal/3 p-8 lg:p-10 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-teal" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-dark">
                    WITH TRUENORTH SERVICEFLOW RUNNING
                  </h3>
                </div>
                <div className="space-y-4">
                  {withItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-teal" />
                      </div>
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ═══════════════ PROCESS PREVIEW ═══════════════ */}
      <section className="py-24 lg:py-32 bg-light-bg relative">
        <div className="absolute inset-0 dot-pattern-light" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "We Audit", desc: "A 10-minute conversation to understand your business and find the gaps." },
              { step: "02", title: "We Build", desc: "Custom AI systems designed for your specific workflows." },
              { step: "03", title: "We Launch", desc: "Everything goes live. You monitor results. We optimize." },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="text-center group">
                  <span className="text-6xl font-extrabold text-navy/8 font-mono group-hover:text-teal/15 transition-colors duration-300">
                    {item.step}
                  </span>
                  <h3 className="text-2xl font-bold text-navy-dark mt-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mt-2">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateIn delay={0.4} className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all duration-200 cursor-pointer"
            >
              See the Full Process &rarr;
              <ChevronRight className="w-4 h-4" />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ═══════════════ TYPICAL OUTCOMES (composite scenarios) ═══════════════ */}
      <TypicalOutcomes />

      {/* ═══════════════ TESTIMONIAL ═══════════════ */}
      <section className="py-24 lg:py-32 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal/5 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateIn>
            <Badge variant="teal">From a Real Customer</Badge>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <blockquote className="mt-10 text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug tracking-tight">
              &ldquo;I used to worry constantly about missing calls and not posting on social media. Now it all runs in the background. I check my dashboard, see what&apos;s happening, and get back to running my business.&rdquo;
            </blockquote>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-8">
              <p className="text-lg font-semibold text-white">Peter — VY Build Inc., PEI</p>
              <p className="mt-2 text-sm text-white/40">AI Call Response &middot; Social Media &middot; Review Management &middot; Lead Follow-Up</p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ═══════════════ CHARTER PROGRAM ═══════════════ */}
      <CharterBanner variant="hero" />

      {/* ═══════════════ INDUSTRIES ═══════════════ */}
      <section className="py-16 bg-light-bg">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <AnimateIn>
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
              Built for businesses that are great at what they do — and too busy to do everything else.
            </p>
          </AnimateIn>
          <StaggerContainer className="flex flex-wrap justify-center gap-3" staggerDelay={0.05}>
            {industries.map((ind) => (
              <StaggerItem key={ind}>
                <span className="inline-flex px-5 py-2.5 bg-white rounded-full text-sm font-medium text-navy border border-gray-200 hover:border-teal/40 hover:bg-teal/5 transition-all duration-200 cursor-default shadow-sm">
                  {ind}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="py-24 lg:py-32 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal/5 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              You&apos;re losing leads right now.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-xl text-white/50">
              Every day without these systems is another day your competitors have the advantage. A 10-minute call is all it takes to see what you&apos;re missing.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <a
              href="https://calendly.com/fabian-truenorthautomation/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer mt-10 inline-flex items-center gap-2.5 px-9 py-4.5 bg-teal hover:bg-teal-dark text-white text-lg font-semibold rounded-xl transition-all duration-200 shadow-xl shadow-teal/25 hover:shadow-teal/40 hover:-translate-y-0.5 cursor-pointer"
            >
              Book Your Free Audit &rarr;
              <ArrowRight className="w-5 h-5" />
            </a>
          </AnimateIn>
        </div>
      </section>
    </PageWrapper>
  );
}
