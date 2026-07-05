"use client";

import { PageWrapper } from "@/components/PageWrapper";
import { AnimateIn } from "@/components/AnimateIn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <PageWrapper>
      <section className="min-h-screen bg-hero-gradient flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative text-center px-6">
          <AnimateIn>
            <p className="text-8xl font-extrabold text-white/10 font-mono">
              404
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
              Page not found
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-4 text-lg text-white/50 max-w-md mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-teal hover:bg-teal-dark text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-teal/25 cursor-pointer"
            >
              Back to Home
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </PageWrapper>
  );
}
