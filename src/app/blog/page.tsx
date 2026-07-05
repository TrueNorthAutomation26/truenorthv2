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

export default function BlogPage() {
  return (
    <PageWrapper>
      {/* HERO */}
      <section className="relative min-h-[60vh] bg-hero-gradient overflow-hidden flex items-center">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-teal/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 pt-36 pb-28 w-full text-center">
          <AnimateIn delay={0.1}>
            <Badge variant="teal">INSIGHTS</Badge>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
              Straight talk about running a business in{" "}
              <span className="text-gradient">Atlantic Canada.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.35}>
            <p className="mt-6 text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
              No fluff. No jargon. Just practical insights for busy business owners.
            </p>
          </AnimateIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-light-bg to-transparent" />
      </section>

      {/* BLOG GRID */}
      <section className="py-24 lg:py-32 bg-light-bg relative">
        <div className="absolute inset-0 dot-pattern-light" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.08}
          >
            {posts.map((post) => (
              <StaggerItem key={post.title}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 hover:-translate-y-1 cursor-default">
                  {/* Gradient Header */}
                  <div
                    className={`h-40 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 dot-pattern opacity-20" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/20">
                        <Clock className="w-3 h-3" />
                        Coming Soon
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-xs font-semibold text-teal uppercase tracking-wider">{post.category}</span>
                    <h3 className="mt-2 text-lg font-bold text-navy-dark leading-snug group-hover:text-teal-dark transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">{post.preview}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm text-gray-300">
                      <ArrowRight className="w-3.5 h-3.5" />
                      <span>Read More</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PageWrapper>
  );
}
