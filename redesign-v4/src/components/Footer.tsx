"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Globe, ArrowRight } from "lucide-react";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "AI Call Response", href: "/services#calls" },
      { label: "Social Media", href: "/services#social" },
      { label: "Reputation Management", href: "/services#reviews" },
      { label: "Lead Follow-Up", href: "/services#leads" },
      { label: "Workflow Automation", href: "/services#workflows" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Results", href: "/results" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Contractors & Trades", href: "/services" },
      { label: "HVAC & Plumbing", href: "/services" },
      { label: "Solar & Energy", href: "/services" },
      { label: "Real Estate", href: "/services" },
      { label: "Home Services", href: "/services" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-60" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent" />

      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="mb-6">
                <img
                  src="/logo-white.png"
                  alt="TrueNorth ServiceFlow AI"
                  className="h-40 w-auto"
                />
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-8">
                AI systems that run your business while you do your job.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+19023160111"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-teal transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  +1 (902) 316-0111
                </a>
                <a
                  href="mailto:fabian@truenorthserviceflow.ai"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-teal transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  fabian@truenorthserviceflow.ai
                </a>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <MapPin className="w-4 h-4 shrink-0" />
                  Charlottetown, PEI, Canada
                </div>
                <a
                  href="https://truenorthserviceflow.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-teal transition-colors cursor-pointer"
                >
                  <Globe className="w-4 h-4" />
                  truenorthserviceflow.ai
                </a>
              </div>
            </div>

            {footerLinks.map((group) => (
              <div key={group.title} className="lg:col-span-2">
                <h4 className="font-semibold text-sm text-white/90 mb-4 uppercase tracking-wider">
                  {group.title}
                </h4>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/50 hover:text-teal transition-colors cursor-pointer"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="lg:col-span-2">
              <h4 className="font-semibold text-sm text-white/90 mb-4 uppercase tracking-wider">
                Get Started
              </h4>
              <p className="text-sm text-white/50 mb-4 leading-relaxed">
                A 10-minute conversation is all it takes to see what you&apos;re
                missing.
              </p>
              <a
                href="https://calendly.com/fabian-truenorthautomation/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-lg cursor-pointer"
              >
                Free Audit
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="mt-3 font-mono text-[10px] tracking-wider text-white/30">
                30-day setup-fee guarantee
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} TrueNorth ServiceFlow AI. All
              rights reserved.
            </p>
            <div className="flex items-center gap-5 text-xs text-white/40">
              <Link
                href="/privacy"
                className="hover:text-teal transition-colors cursor-pointer"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-teal transition-colors cursor-pointer"
              >
                Terms of Service
              </Link>
              <span className="hidden sm:inline">
                Charlottetown, Prince Edward Island, Canada
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
