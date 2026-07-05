"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ────────────────────────────────────────────────────────────
   Faithful recreation of the real True North Client Portal
   (ai-media-agent.vercel.app/client/dashboard), shown with
   realistic active-client data for the marketing site.
   ──────────────────────────────────────────────────────────── */

type Period = "7d" | "30d";

const NAV = [
  { label: "Home", icon: "🏠", active: true, group: "MENU" },
  { label: "Inquiries", icon: "📨", group: "TODAY" },
  { label: "Reputation", icon: "💬", group: "TODAY" },
  { label: "Missed Calls", icon: "📞", group: "TODAY" },
  { label: "Calendar", icon: "🗓️", group: "TODAY" },
  { label: "Contacts", icon: "👥", group: "TODAY" },
  { label: "Quotes", icon: "📝", group: "MONEY" },
  { label: "Orders", icon: "📦", group: "MONEY" },
  { label: "Invoices", icon: "🧾", group: "MONEY" },
  { label: "Lead Attribution", icon: "🎯", group: "INSIGHTS" },
  { label: "Post Performance", icon: "📈", group: "INSIGHTS" },
  { label: "Ad Stats", icon: "📊", group: "INSIGHTS" },
];

const STATS: Record<Period, { calls: number; posts: number; blogs: number; quotes: number; invoices: number; contacts: number }> = {
  "7d": { calls: 12, posts: 18, blogs: 3, quotes: 7, invoices: 9, contacts: 248 },
  "30d": { calls: 47, posts: 76, blogs: 12, quotes: 23, invoices: 31, contacts: 312 },
};

const ACTIVITY = [
  { text: "Inbound call answered — booked for Thursday 2pm", time: "2 min ago", dot: "bg-sky-500", icon: "📞" },
  { text: "New 5-star review published to Google", time: "18 min ago", dot: "bg-amber-400", icon: "⭐" },
  { text: "Instagram post published automatically", time: "1 hr ago", dot: "bg-violet-500", icon: "👍" },
  { text: "Quote #1042 accepted — order created", time: "3 hr ago", dot: "bg-emerald-500", icon: "💼" },
];

/* Count-up number that animates when scrolled into view or when value changes */
function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.4 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const duration = 900;
    const from = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(from + (value - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, inView]);

  return <span ref={ref}>{display}</span>;
}

export function DashboardMockup({ className = "" }: { className?: string }) {
  const [period, setPeriod] = useState<Period>("30d");
  const d = STATS[period];

  const chips = [
    { icon: "📞", value: d.calls, label: "calls", color: "text-sky-600" },
    { icon: "👍", value: d.posts, label: "posts", color: "text-violet-600" },
    { icon: "📝", value: d.blogs, label: "blogs", color: "text-slate-600" },
    { icon: "💼", value: d.quotes, label: "quotes", color: "text-emerald-600" },
    { icon: "🧾", value: d.invoices, label: "invoices", color: "text-amber-600" },
  ];

  return (
    <div
      className={`relative rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-2xl shadow-navy-deep/40 ${className}`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-200 bg-slate-50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 flex justify-center">
          <span className="text-[11px] text-slate-400 font-mono bg-white border border-slate-200 rounded-md px-3 py-1">
            app.truenorthautomation.ai/client/dashboard
          </span>
        </div>
      </div>

      <div className="flex bg-slate-50/70">
        {/* Sidebar */}
        <aside className="hidden sm:flex flex-col w-[156px] shrink-0 border-r border-slate-200 bg-white py-3">
          <div className="flex items-center gap-2 px-3 pb-3">
            <div className="w-7 h-7 rounded-lg bg-navy-deep flex items-center justify-center text-[10px] font-bold text-white">
              BH
            </div>
            <div className="leading-tight">
              <p className="text-[11px] font-bold text-slate-800">Client Portal</p>
              <p className="text-[9px] text-slate-400">Bob&apos;s HVAC</p>
            </div>
          </div>

          <div className="px-3 pb-2">
            <div className="flex items-center justify-between rounded-lg border border-slate-200 px-2 py-1.5">
              <span className="text-[10px] font-semibold text-slate-700 truncate">Bob&apos;s HVAC</span>
              <span className="text-[8px] font-bold text-amber-600 bg-amber-100 rounded px-1 py-0.5">ADMIN</span>
            </div>
          </div>

          <nav className="px-2 space-y-0.5 overflow-hidden">
            {NAV.map((item, i) => {
              const showGroup = i === 0 || item.group !== NAV[i - 1].group;
              return (
                <div key={item.label}>
                  {showGroup && item.group !== "MENU" && (
                    <p className="px-2 pt-2 pb-1 text-[8px] font-bold tracking-widest text-slate-300">
                      {item.group}
                    </p>
                  )}
                  <div
                    className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[10px] transition-colors ${
                      item.active
                        ? "bg-sky-50 text-sky-700 font-semibold"
                        : "text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    <span className="text-[11px] leading-none">{item.icon}</span>
                    <span className="truncate">{item.label}</span>
                  </div>
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Main */}
        <div className="flex-1 min-w-0 p-4 space-y-3">
          {/* Header + period toggle */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <h4 className="text-sm font-bold text-slate-800">Bob&apos;s HVAC</h4>
              <p className="text-[11px] text-slate-400">Welcome back · You&apos;re an admin</p>
            </div>
            <div className="flex rounded-lg bg-slate-100 p-0.5 text-[10px] font-medium">
              {(["7d", "30d"] as Period[]).map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                    period === p ? "bg-white text-navy shadow-sm" : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {p === "7d" ? "7 days" : "30 days"}
                </button>
              ))}
            </div>
          </div>

          {/* All caught up banner */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-center">
            <p className="text-xs font-bold text-emerald-700">✨ You&apos;re all caught up</p>
            <p className="text-[10px] text-emerald-600/80 mt-0.5">
              No missed calls, no pending quotes, no unpaid invoices.
            </p>
          </div>

          {/* What we did for you */}
          <div className="rounded-xl border border-slate-200 bg-white p-3.5">
            <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
              <span className="text-[11px] font-bold text-slate-700">What we did for you</span>
              <span className="text-[10px] text-slate-400">{period === "7d" ? "Last 7 days" : "Last 30 days"}</span>
            </div>
            <div className="grid grid-cols-5 gap-1.5">
              {chips.map((c) => (
                <div key={c.label} className="rounded-lg bg-slate-50 border border-slate-100 px-1 py-2 text-center">
                  <div className="text-sm leading-none mb-1">{c.icon}</div>
                  <p className={`text-base font-extrabold font-mono leading-none ${c.color}`}>
                    <CountUp value={c.value} />
                  </p>
                  <p className="text-[9px] text-slate-400 mt-0.5">{c.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Total contacts + Recent activity */}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-slate-200 bg-white p-3.5 flex flex-col justify-center">
              <p className="text-2xl font-extrabold font-mono text-navy leading-none">
                <CountUp value={d.contacts} />
              </p>
              <p className="text-[10px] text-slate-400 mt-1">Total contacts</p>
              <span className="mt-2 inline-flex items-center gap-1 text-[9px] font-semibold text-emerald-600">
                ↑ trending up
              </span>
            </div>

            <div className="col-span-2 rounded-xl border border-slate-200 bg-white p-3.5">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Recent activity</p>
              <div className="space-y-2">
                {ACTIVITY.slice(0, 3).map((item, i) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${item.dot} shrink-0`} />
                    <p className="text-[10px] text-slate-600 truncate flex-1">{item.text}</p>
                    <span className="text-[9px] text-slate-300 shrink-0">{item.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live pulse badge */}
      <div className="absolute top-12 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-emerald-200 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[9px] font-semibold text-emerald-600">Live</span>
      </div>
    </div>
  );
}
