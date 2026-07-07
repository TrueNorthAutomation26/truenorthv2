"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Inbox,
  Star,
  PhoneMissed,
  Calendar,
  Users,
  FileText,
  Package,
  Receipt,
  Target,
  BarChart3,
  Megaphone,
  CheckCircle2,
  Phone,
  PenLine,
  Newspaper,
  TrendingUp,
} from "lucide-react";

/* ─── Animated counter: re-counts whenever the target value changes ─── */
function AnimatedCounter({
  value,
  className = "",
}: {
  value: number;
  className?: string;
}) {
  const [display, setDisplay] = useState(0);
  const previous = useRef(0);

  useEffect(() => {
    const controls = animate(previous.current, value, {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    previous.current = value;
    return () => controls.stop();
  }, [value]);

  return <span className={className}>{display.toLocaleString()}</span>;
}

/* ─── Sidebar — mirrors the real client portal nav ─── */
const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Inbox, label: "Inquiries" },
  { icon: Star, label: "Reputation" },
  { icon: PhoneMissed, label: "Missed Calls" },
  { icon: Calendar, label: "Calendar" },
  { icon: Users, label: "Contacts" },
  { icon: FileText, label: "Quotes" },
  { icon: Package, label: "Orders" },
  { icon: Receipt, label: "Invoices" },
  { icon: Target, label: "Lead Attribution" },
  { icon: BarChart3, label: "Post Performance" },
  { icon: Megaphone, label: "Ad Stats" },
];

/* ─── "What we did for you" stats, per range ─── */
type Range = "7d" | "30d";

const didForYou: {
  icon: typeof Phone;
  label: string;
  values: Record<Range, number>;
  tint: string;
}[] = [
  { icon: Phone, label: "Calls answered", values: { "7d": 23, "30d": 96 }, tint: "text-teal bg-teal/10" },
  { icon: PenLine, label: "Posts published", values: { "7d": 12, "30d": 49 }, tint: "text-violet-600 bg-violet-100" },
  { icon: Newspaper, label: "Blogs written", values: { "7d": 2, "30d": 8 }, tint: "text-navy bg-navy/8" },
  { icon: FileText, label: "Quotes sent", values: { "7d": 9, "30d": 34 }, tint: "text-gold bg-gold/15" },
  { icon: Receipt, label: "Invoices sent", values: { "7d": 11, "30d": 42 }, tint: "text-success bg-success/10" },
];

const newContacts: Record<Range, number> = { "7d": 14, "30d": 53 };

export function DashboardMockup({ className = "" }: { className?: string }) {
  const [range, setRange] = useState<Range>("7d");

  return (
    <div
      className={`relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-2xl shadow-navy/20 ${className}`}
    >
      {/* Browser title bar */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100 bg-gray-50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <div className="w-3 h-3 rounded-full bg-green-400/80" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-xs text-gray-400 font-mono">
            portal.truenorthserviceflow.ai
          </span>
        </div>
      </div>

      <div className="flex">
        {/* ── Sidebar ── */}
        <aside className="w-[118px] shrink-0 border-r border-gray-100 bg-light-bg py-3 px-2 hidden sm:block">
          <div className="flex items-center gap-1.5 px-2 mb-3">
            <div className="w-5 h-5 rounded-md bg-navy flex items-center justify-center">
              <span className="text-[8px] font-bold text-white">TN</span>
            </div>
            <span className="text-[9px] font-bold text-navy-dark leading-tight">
              Client Portal
            </span>
          </div>
          <nav className="space-y-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-1.5 px-2 py-[5px] rounded-md text-[9px] font-medium transition-colors cursor-default ${
                  item.active
                    ? "bg-teal/10 text-teal-dark"
                    : "text-gray-500 hover:bg-gray-100 hover:text-navy"
                }`}
              >
                <item.icon className="w-3 h-3 shrink-0" />
                <span className="truncate">{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* ── Main panel ── */}
        <div className="flex-1 p-4 min-w-0">
          {/* Header + range toggle */}
          <div className="flex items-center justify-between mb-3 gap-2">
            <div className="min-w-0">
              <h4 className="text-sm font-bold text-navy-dark truncate">
                Welcome back 👋
              </h4>
              <p className="text-[10px] text-gray-400 mt-0.5">
                Here&apos;s what your automation handled
              </p>
            </div>
            <div className="flex rounded-lg bg-gray-100 p-0.5 shrink-0">
              {(["7d", "30d"] as Range[]).map((r) => (
                <button
                  key={r}
                  onClick={() => setRange(r)}
                  className={`relative px-2.5 py-1 text-[10px] font-semibold rounded-md transition-colors cursor-pointer ${
                    range === r ? "text-navy-dark" : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {range === r && (
                    <motion.div
                      layoutId="range-pill"
                      className="absolute inset-0 bg-white rounded-md shadow-sm"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative">{r === "7d" ? "7 days" : "30 days"}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Caught-up banner */}
          <div className="flex items-center gap-2.5 rounded-xl bg-success/10 border border-success/20 px-3.5 py-2.5 mb-3">
            <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-emerald-800 truncate">
                You&apos;re all caught up
              </p>
              <p className="text-[9px] text-emerald-700/70 truncate">
                No missed calls or unread inquiries need your attention
              </p>
            </div>
          </div>

          {/* "What we did for you" stat row */}
          <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
            What we did for you
          </p>
          <div className="grid grid-cols-5 gap-1.5 mb-3">
            {didForYou.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-gray-100 bg-white px-1.5 py-2 text-center hover:border-teal/30 hover:shadow-sm transition-all cursor-default"
              >
                <div
                  className={`w-5 h-5 rounded-md ${stat.tint} flex items-center justify-center mx-auto mb-1`}
                >
                  <stat.icon className="w-2.5 h-2.5" />
                </div>
                <AnimatedCounter
                  value={stat.values[range]}
                  className="block text-sm font-bold text-navy-dark font-mono leading-none"
                />
                <span className="block text-[8px] text-gray-400 mt-1 leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Contacts summary */}
          <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-light-bg px-3.5 py-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-navy flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-lg font-bold text-navy-dark font-mono leading-none">
                  <AnimatedCounter value={348} />
                </p>
                <p className="text-[9px] text-gray-400 mt-0.5">Total contacts</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-success shrink-0">
              <TrendingUp className="w-3 h-3" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={range}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="text-[10px] font-semibold font-mono"
                >
                  +{newContacts[range]} new
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
