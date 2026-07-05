"use client";

import { PageWrapper } from "@/components/PageWrapper";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import { Badge } from "@/components/Badge";
import { Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "The $50,000 Phone Call You Never Answered",
    gradient: "from-teal to-teal-dark",
    category: "Lead Generation",
    preview: "How missed calls are silently draining revenue from Atlantic Canadian businesses — and what to do about it.",
  },
  {
    title: "Your Competitor Has 200 Reviews. Here's What That's Actually Costing You.",
    gradient: "from-gold to-amber-600",
    category: "Reputation",
    preview: "Why review count matters more than you think — and why asking isn't enough.",
  },
  {
    title: "You Don't Need to Go Viral. You Need to Show Up.",
    gradient: "from-violet-500 to-purple-600",
    category: "Social Media",
    preview: "Consistency beats creativity. Why posting regularly matters more than posting perfectly.",
  },
  {
    title: "The Hidden Tax: How Admin Work Is Eating Your Profit",
    gradient: "from-success to-emerald-600",
    category: "Productivity",
    preview: "You're working 60-hour weeks but only 30 of those hours make you money.",
  },
  {
    title: "AI Isn't Replacing Contractors. It's Replacing the Work They Hate.",
    gradient: "from-teal-dark to-navy",
    category: "Industry",
    preview: "Why the trades businesses that adopt AI now will dominate the next decade.",
  },
];

function ComingSoonPill() {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-sm text-white/70 text-xs font-semibold rounded-full border border-white/15">
      <Clock className="w-3 h-3" />
      Coming Soon
    </span>
  );
}

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <PageWrapper>
      <div className="bg-navy-deep">
        {/* HERO */}
        <section className="relative min-h-[60vh] overflow-hidden flex items-center">
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="absolute inset-0 bg-grid-dark" />
          <div className="aurora absolute top-0 right-0 w-[700px] h-[700px] bg-teal/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="aurora-delayed absolute bottom-0 -left-40 w-[600px] h-[600px] bg-teal/8 rounded-full blur-3xl" />

          <div className="relative max-w-5xl mx-auto px-6 lg:px-8 pt-36 pb-28 w-full text-center">
            <AnimateIn delay={0.1}>
              <div className="flex justify-center">
                <Badge variant="teal">INSIGHTS</Badge>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <h1 className="mt-8 text-5xl sm:text-6xl lg:text-[5.25rem] font-extrabold leading-[1.02] tracking-tighter text-white">
                Straight talk about running a business in{" "}
                <span className="text-gradient-animated">Atlantic Canada.</span>
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.35}>
              <p className="mt-6 text-xl text-white/55 leading-relaxed max-w-2xl mx-auto">
                No fluff. No jargon. Just practical insights for busy business owners.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* MAGAZINE INDEX */}
        <section className="py-24 lg:py-32 relative overflow-hidden border-t border-white/10">
          <div className="absolute inset-0 bg-grid-dark opacity-50" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            {/* Featured post — large 2-col split */}
            <AnimateIn>
              <div className="group grid lg:grid-cols-2 gap-10 lg:gap-16 pb-16 lg:pb-20 cursor-default">
                <div>
                  <span className="font-mono text-xs font-semibold text-teal-light uppercase tracking-[0.25em]">
                    {featured.category}
                  </span>
                  <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter leading-[1.05] group-hover:text-teal-light transition-colors duration-200">
                    {featured.title}
                  </h2>
                </div>
                <div className="flex flex-col justify-end items-start gap-6 lg:pb-2">
                  <ComingSoonPill />
                  <p className="text-lg text-white/50 leading-relaxed max-w-md">
                    {featured.preview}
                  </p>
                  <div className="flex items-center gap-1.5 text-sm text-white/30">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:text-teal-light transition-all duration-200" />
                    <span>Read More</span>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Remaining posts — hairline-divided index rows */}
            <StaggerContainer staggerDelay={0.08}>
              {rest.map((post) => (
                <StaggerItem key={post.title}>
                  <div className="group grid lg:grid-cols-12 items-start gap-4 lg:gap-8 py-10 lg:py-12 border-t border-white/10 cursor-default">
                    {/* Mono category — left */}
                    <div className="lg:col-span-2 flex flex-row lg:flex-col items-start gap-3 lg:pt-1.5">
                      <span className="font-mono text-xs font-semibold text-teal-light uppercase tracking-[0.25em]">
                        {post.category}
                      </span>
                      <ComingSoonPill />
                    </div>

                    {/* Title + preview — center */}
                    <div className="lg:col-span-8">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug group-hover:text-teal-light transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-sm text-white/50 leading-relaxed max-w-2xl">
                        {post.preview}
                      </p>
                    </div>

                    {/* Arrow — row end */}
                    <div className="lg:col-span-2 flex items-center lg:justify-end gap-1.5 text-sm text-white/30 lg:pt-2">
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:text-teal-light transition-all duration-200" />
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
