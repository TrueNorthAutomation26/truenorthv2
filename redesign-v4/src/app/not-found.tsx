"use client";

import { PageWrapper } from "@/components/PageWrapper";
import { AnimateIn } from "@/components/AnimateIn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <PageWrapper>
      <section className="min-h-screen bg-hero-gradient flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="aurora absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal/8 rounded-full blur-3xl" />
        <div className="relative text-center px-6">
          <AnimateIn>
            <p className="text-8xl font-extrabold text-white/10 font-mono tracking-tight">
              404
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tighter">
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
              className="btn-gold btn-sheen mt-8 inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl cursor-pointer"
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
