"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Smartphone,
  Star,
  Calendar,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    label: "Calls Answered",
    value: "47",
    change: "+12",
    icon: Phone,
    color: "from-teal to-teal-dark",
  },
  {
    label: "5-Star Reviews",
    value: "38",
    change: "+9",
    icon: Star,
    color: "from-gold to-amber-600",
  },
  {
    label: "Posts Published",
    value: "124",
    change: "+31",
    icon: Smartphone,
    color: "from-violet-500 to-purple-600",
  },
  {
    label: "Leads Booked",
    value: "23",
    change: "+8",
    icon: Calendar,
    color: "from-success to-emerald-600",
  },
];

const activityItems = [
  {
    text: "Inbound call answered — booked for Thursday",
    time: "2 min ago",
    dot: "bg-teal",
  },
  {
    text: "5-star review received on Google",
    time: "15 min ago",
    dot: "bg-gold",
  },
  {
    text: "Instagram post published automatically",
    time: "1 hr ago",
    dot: "bg-purple-400",
  },
  {
    text: "Lead follow-up sent — appointment confirmed",
    time: "2 hr ago",
    dot: "bg-success",
  },
  {
    text: "Weekly invoice batch sent — 12 invoices",
    time: "3 hr ago",
    dot: "bg-navy-light",
  },
];

export function DashboardMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden bg-navy-deep/90 border border-white/10 shadow-2xl ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <div className="w-3 h-3 rounded-full bg-green-400/80" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-xs text-white/30 font-mono">
            dashboard.truenorthautomation.ai
          </span>
        </div>
      </div>

      <div className="p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h4 className="text-sm font-semibold text-white/90">
              This Month&apos;s Performance
            </h4>
            <p className="text-xs text-white/40 mt-0.5">
              March 2026 &middot; All systems active
            </p>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-success/10 border border-success/20">
            <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            <span className="text-xs font-medium text-success">Live</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="relative rounded-xl bg-white/5 border border-white/8 p-4 group hover:bg-white/8 transition-colors cursor-default"
            >
              <div className="flex items-center justify-between mb-2">
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                >
                  <stat.icon className="w-4 h-4 text-white" />
                </div>
                <span className="flex items-center gap-0.5 text-xs font-medium text-success">
                  <ArrowUpRight className="w-3 h-3" />
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-white font-mono tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs text-white/40 mt-0.5">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Mini Chart */}
        <div className="rounded-xl bg-white/5 border border-white/8 p-4 mb-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-white/60">
              Business Activity This Week
            </span>
            <TrendingUp className="w-4 h-4 text-success" />
          </div>
          <svg viewBox="0 0 300 60" className="w-full h-12">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="chartGradient2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="chartGradient3" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Calls line - teal */}
            <path
              d="M0,45 Q30,40 60,35 Q90,30 120,25 Q150,28 180,20 Q210,15 240,12 Q270,8 300,5"
              fill="none"
              stroke="#0EA5E9"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M0,45 Q30,40 60,35 Q90,30 120,25 Q150,28 180,20 Q210,15 240,12 Q270,8 300,5 L300,60 L0,60 Z"
              fill="url(#chartGradient)"
            />
            {/* Reviews line - gold */}
            <path
              d="M0,50 Q30,48 60,44 Q90,42 120,38 Q150,36 180,32 Q210,30 240,26 Q270,22 300,18"
              fill="none"
              stroke="#FBBF24"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeOpacity="0.7"
            />
            <path
              d="M0,50 Q30,48 60,44 Q90,42 120,38 Q150,36 180,32 Q210,30 240,26 Q270,22 300,18 L300,60 L0,60 Z"
              fill="url(#chartGradient2)"
            />
            {/* Posts line - purple */}
            <path
              d="M0,42 Q30,38 60,40 Q90,35 120,30 Q150,32 180,26 Q210,22 240,18 Q270,14 300,10"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeOpacity="0.6"
            />
            <path
              d="M0,42 Q30,38 60,40 Q90,35 120,30 Q150,32 180,26 Q210,22 240,18 Q270,14 300,10 L300,60 L0,60 Z"
              fill="url(#chartGradient3)"
            />
          </svg>
          <div className="flex justify-between mt-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
              <span key={d} className="text-[10px] text-white/30 font-mono">
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="rounded-xl bg-white/5 border border-white/8 p-4">
          <h5 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">
            Recent Activity
          </h5>
          <div className="space-y-3">
            {activityItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.5 }}
                className="flex items-start gap-3"
              >
                <div
                  className={`w-2 h-2 rounded-full ${item.dot} mt-1.5 shrink-0`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-white/70 truncate">{item.text}</p>
                  <p className="text-[10px] text-white/30 mt-0.5">
                    {item.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
