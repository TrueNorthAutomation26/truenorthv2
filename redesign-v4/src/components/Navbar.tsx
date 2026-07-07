"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Phone, Calendar } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/results", label: "Results" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy-deep/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-navy-deep/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            <Link href="/" className="flex items-center group lg:flex-none flex-1 justify-center lg:justify-start">
              <img
                src="/logo-white.png"
                alt="TrueNorth ServiceFlow AI"
                className="h-36 w-auto transition-all duration-300"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                  <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:+19023160111"
                className="inline-flex items-center gap-2 font-mono text-sm text-white/70 hover:text-gold transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                (902) 316-0111
              </a>
              <a
                href="https://calendly.com/fabian-truenorthautomation/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-lg cursor-pointer"
              >
                Free Audit
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors cursor-pointer text-white hover:bg-white/10"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-navy-deep/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-semibold text-white/80 hover:text-teal transition-colors py-3 px-6"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6"
              >
                <a
                  href="https://calendly.com/fabian-truenorthautomation/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-teal text-white font-semibold rounded-xl shadow-lg shadow-teal/25"
                >
                  Free Audit
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky mobile call/book bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-navy-deep/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 flex gap-3" style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}>
        <a
          href="tel:+19023160111"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-white font-semibold text-sm rounded-xl border border-white/20 hover:bg-white/10 transition-colors cursor-pointer"
        >
          <Phone className="w-4 h-4 text-teal-light" />
          Call Us
        </a>
        <a
          href="https://calendly.com/fabian-truenorthautomation/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 font-bold text-sm rounded-xl cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          Free Audit
        </a>
      </div>
    </>
  );
}
