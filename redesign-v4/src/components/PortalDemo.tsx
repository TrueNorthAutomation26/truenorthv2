"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Phone,
  PhoneIncoming,
  Calendar,
  Check,
  MessageSquare,
  Mail,
  X,
  Play,
  RotateCcw,
  ArrowRight,
  Instagram,
  Facebook,
  MapPin,
  Megaphone,
  Zap,
  Clock,
  Volume2,
  VolumeX,
} from "lucide-react";
import { DashboardMockup } from "./DashboardMockup";

/* ────────────────────────────────────────────────────────────
   Scripted, auto-playing portal demo — one customer journey:
   missed call → AI books it → new-lead follow-up → social + ads
   → old-lead re-engagement → portal recap.
   ──────────────────────────────────────────────────────────── */

const SCENES = [
  { id: "call", label: "Call", duration: 6800, caption: "It's 7:42pm. You're still on a job site. The phone rings." },
  { id: "chat", label: "Book", duration: 13000, caption: "Your AI answers instantly — and sounds like your best employee." },
  { id: "booked", label: "", duration: 7000, caption: "Booked, confirmed, and logged. No human needed." },
  { id: "newlead", label: "Leads", duration: 15200, caption: "New leads get a text in seconds — and a quote follow-up email the next morning." },
  { id: "social", label: "Social", duration: 16800, caption: "While you work, your content and ads go out on schedule — Facebook, Instagram, Google." },
  { id: "oldlead", label: "Revive", duration: 10500, caption: "Past customers get re-engaged automatically — repeat work, on autopilot." },
  { id: "portal", label: "Portal", duration: 9000, caption: "And every bit of it shows up in your client portal, in real time." },
  { id: "end", label: "", duration: 8000, caption: "" },
] as const;

/* ── Shared bits ───────────────────────────────────────────── */

function Bubble({
  from,
  at,
  children,
}: {
  from: "ai" | "them";
  at: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: at, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`flex ${from === "them" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          from === "them"
            ? "bg-teal text-white rounded-br-md"
            : "bg-white/8 border border-white/10 text-white/85 rounded-bl-md"
        }`}
      >
        {children}
      </div>
    </motion.div>
  );
}

function ThreadHeader({
  icon: Icon,
  title,
  sub,
  subClass = "text-success",
}: {
  icon: typeof MessageSquare;
  title: string;
  sub: string;
  subClass?: string;
}) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <div className="w-8 h-8 rounded-lg bg-teal/15 border border-teal/30 flex items-center justify-center">
        <Icon className="w-4 h-4 text-teal-light" />
      </div>
      <div>
        <p className="text-xs font-semibold text-white">{title}</p>
        <p className={`font-mono text-[10px] flex items-center gap-1.5 ${subClass}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse inline-block" />
          {sub}
        </p>
      </div>
    </div>
  );
}

function EmailChip({ at, title, sub }: { at: number; title: string; sub: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: at, duration: 0.4 }}
      className="mt-4 flex items-center gap-3 rounded-xl bg-gold/8 border border-gold/25 px-4 py-3"
    >
      <Mail className="w-4 h-4 text-gold shrink-0" />
      <div className="min-w-0">
        <p className="text-xs font-semibold text-white truncate">{title}</p>
        <p className="text-[10px] text-white/40 truncate">{sub}</p>
      </div>
    </motion.div>
  );
}

/* ── Scenes ────────────────────────────────────────────────── */

function SceneCall() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-6">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="pulse-ring absolute inset-0 rounded-full border-2 border-teal/60" />
        <div className="pulse-ring absolute inset-0 rounded-full border-2 border-teal/40" style={{ animationDelay: "1s" }} />
        <motion.div
          animate={{ rotate: [0, -12, 12, -12, 12, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.8 }}
          className="relative w-20 h-20 rounded-full bg-teal/15 border border-teal/40 flex items-center justify-center"
        >
          <PhoneIncoming className="w-9 h-9 text-teal-light" />
        </motion.div>
      </div>
      <div className="text-center">
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-white/40">Incoming call</p>
        <p className="mt-2 text-2xl font-bold text-white">Sarah M.</p>
        <p className="mt-1 font-mono text-sm text-white/40">(902) 555-0143</p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.6 }}
        className="px-4 py-2 rounded-full bg-error/10 border border-error/30"
      >
        <p className="text-sm font-semibold text-error">You can't pick up.</p>
      </motion.div>
    </div>
  );
}

function SceneChat() {
  return (
    <div className="flex flex-col justify-center h-full max-w-md mx-auto w-full px-2">
      <ThreadHeader icon={MessageSquare} title="Your AI receptionist" sub="answered in under 1 second" />
      <div className="space-y-3">
        <Bubble from="ai" at={0.6}>
          Hi, you&apos;ve reached Harbour Light Electrical! I can help you book a visit — what do you need done?
        </Bubble>
        <Bubble from="them" at={3.8}>
          Hey — half my kitchen outlets stopped working today.
        </Bubble>
        <Bubble from="ai" at={6.8}>
          Sorry to hear that — we can get an electrician out to you. Does Thursday at 2:00pm work?
        </Bubble>
        <Bubble from="them" at={10.2}>Perfect, Thursday works. Thanks!</Bubble>
      </div>
    </div>
  );
}

function SceneBooked() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-5">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-16 h-16 rounded-full bg-success/15 border border-success/40 flex items-center justify-center"
      >
        <Check className="w-8 h-8 text-success" />
      </motion.div>
      <div className="panel-dark rounded-2xl px-7 py-5 text-center">
        <div className="flex items-center justify-center gap-2.5">
          <Calendar className="w-5 h-5 text-gold" />
          <p className="text-lg font-bold text-white">Appointment booked</p>
        </div>
        <p className="mt-1.5 font-mono text-sm text-gold">Thursday · 2:00 PM</p>
      </div>
      <div className="space-y-2 text-center">
        {["Confirmation texted to Sarah", "Summary texted to you"].map((t, i) => (
          <motion.p
            key={t}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.7 }}
            className="text-sm text-white/55 flex items-center justify-center gap-2"
          >
            <Check className="w-3.5 h-3.5 text-teal-light" />
            {t}
          </motion.p>
        ))}
      </div>
    </div>
  );
}

function SceneNewLead() {
  return (
    <div className="flex flex-col justify-center h-full max-w-md mx-auto w-full px-2">
      <ThreadHeader icon={Zap} title="New website inquiry — Mike R. · 9:14pm" sub="texted back in 8 seconds" />
      <div className="space-y-3">
        <Bubble from="them" at={0.5}>
          Hi, looking for a quote on a panel upgrade for an older house.
        </Bubble>
        <Bubble from="ai" at={2.6}>
          Hi Mike! Happy to help with the panel upgrade. We can come by Friday morning to quote it — does 9:30am work?
        </Bubble>
        <Bubble from="them" at={6.4}>Friday 9:30 works great.</Bubble>
        <Bubble from="ai" at={8.4}>
          You&apos;re booked! We&apos;ll text you a reminder the day before.
        </Bubble>
      </div>
      <EmailChip
        at={10}
        title="Quote follow-up email — scheduled for 9:00am tomorrow"
        sub="Automatic nurture until Mike signs or says no"
      />
    </div>
  );
}

const SOCIAL_POSTS = [
  {
    icon: Instagram,
    platform: "Instagram",
    time: "Posted 8:00 AM",
    text: "Before & after: full panel upgrade in Stratford. Done in a day. ⚡",
    accent: "from-pink-500 to-purple-600",
    at: 0.6,
  },
  {
    icon: Facebook,
    platform: "Facebook",
    time: "Posted 12:00 PM",
    text: "5 signs your breaker panel is overdue for an upgrade — #3 surprises everyone.",
    accent: "from-blue-500 to-blue-700",
    at: 1.6,
  },
  {
    icon: MapPin,
    platform: "Google Business",
    time: "Posted 3:00 PM",
    text: "Now booking fall electrical inspections across PEI. Licensed & insured.",
    accent: "from-teal to-teal-dark",
    at: 2.6,
  },
];

function SceneSocial() {
  return (
    <div className="flex flex-col justify-center h-full max-w-lg mx-auto w-full px-2">
      <div className="space-y-2.5">
        {SOCIAL_POSTS.map((p) => (
          <motion.div
            key={p.platform}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: p.at, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3.5 panel-dark rounded-xl px-4 py-3"
          >
            <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${p.accent} flex items-center justify-center shrink-0`}>
              <p.icon className="w-4.5 h-4.5 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-xs font-bold text-white">{p.platform}</p>
                <p className="font-mono text-[9px] text-white/35 shrink-0">{p.time}</p>
              </div>
              <p className="text-[11px] text-white/55 truncate mt-0.5">{p.text}</p>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: p.at + 0.5, type: "spring", stiffness: 400, damping: 18 }}
              className="w-5 h-5 rounded-full bg-success/15 border border-success/40 flex items-center justify-center shrink-0"
            >
              <Check className="w-3 h-3 text-success" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.6, duration: 0.5 }}
        className="mt-4 rounded-xl bg-white/5 border border-gold/25 px-5 py-4"
      >
        <div className="flex items-center gap-2 mb-3">
          <Megaphone className="w-4 h-4 text-gold" />
          <p className="text-xs font-bold text-white">This month&apos;s ads — Meta + Google</p>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          {[
            { v: "12.4K", l: "people reached" },
            { v: "38", l: "leads generated" },
            { v: "$6.20", l: "cost per lead" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5.2 + i * 0.5 }}
            >
              <p className="font-mono text-xl font-bold text-gold">{s.v}</p>
              <p className="text-[9px] text-white/40 mt-0.5">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function SceneOldLead() {
  return (
    <div className="flex flex-col justify-center h-full max-w-md mx-auto w-full px-2">
      <ThreadHeader
        icon={Clock}
        title="Past customer — Dave T. · last job 8 months ago"
        sub="seasonal re-engagement, sent automatically"
        subClass="text-gold"
      />
      <div className="space-y-3">
        <Bubble from="ai" at={0.6}>
          Hi Dave, it&apos;s Harbour Light Electrical — it&apos;s been 8 months since your last inspection. Want us to book your fall check-up before the cold hits?
        </Bubble>
        <Bubble from="them" at={4.6}>Perfect timing — yes! Same as last year?</Bubble>
        <Bubble from="ai" at={6.8}>
          You got it. Tuesday at 10am — you&apos;re on the schedule.
        </Bubble>
      </div>
      <EmailChip
        at={8.6}
        title="Seasonal campaign also sent by email"
        sub="142 past customers reached · 11 bookings so far"
      />
    </div>
  );
}

function ScenePortal() {
  return (
    <div className="relative flex items-center justify-center h-full">
      <div className="w-full max-w-2xl scale-[0.92] origin-center">
        <DashboardMockup />
      </div>
      {[
        { icon: Phone, title: "+2 Jobs booked", sub: "Sarah · Mike", pos: "top-6 right-4 sm:right-10", at: 1.2 },
        { icon: Instagram, title: "+3 Posts published", sub: "FB · IG · Google", pos: "bottom-8 left-4 sm:left-10", at: 2.2 },
        { icon: Clock, title: "+11 Old leads revived", sub: "Fall campaign", pos: "top-1/2 right-2 sm:right-6", at: 3.2 },
      ].map((c) => (
        <motion.div
          key={c.title}
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: c.at, type: "spring", stiffness: 300, damping: 22 }}
          className={`absolute ${c.pos} glass-card rounded-xl px-4 py-3 flex items-center gap-3 z-10`}
        >
          <div className="w-8 h-8 rounded-lg bg-teal/20 flex items-center justify-center">
            <c.icon className="w-4 h-4 text-teal-light" />
          </div>
          <div>
            <p className="text-xs font-semibold text-white">{c.title}</p>
            <p className="text-[10px] text-white/40">{c.sub}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function SceneEnd({ onReplay }: { onReplay: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-7 text-center px-6">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl sm:text-4xl font-extrabold text-white tracking-tighter max-w-lg"
      >
        All of that happened{" "}
        <span className="text-gradient-animated">while you were on a ladder.</span>
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="https://calendly.com/fabian-truenorthautomation/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold btn-sheen inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl cursor-pointer"
        >
          Book Your Free Audit
          <ArrowRight className="w-4 h-4" />
        </a>
        <button
          onClick={onReplay}
          className="inline-flex items-center gap-2 px-6 py-3.5 text-white/70 hover:text-white font-semibold rounded-xl border border-white/15 hover:border-teal/50 hover:bg-teal/10 transition-all duration-200 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          Replay
        </button>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="font-mono text-xs tracking-wider text-white/30"
      >
        Free 10-minute audit &middot; No tech skills needed &middot; 30-day setup-fee guarantee
      </motion.p>
    </div>
  );
}

/* ── Player ────────────────────────────────────────────────── */

export function PortalDemo() {
  const [scene, setScene] = useState(0);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const musicRef = useRef<HTMLAudioElement | null>(null);

  // Background music: quiet looping bed under the narration
  useEffect(() => {
    const music = musicRef.current;
    if (!music) return;
    music.volume = 0.04;
    music.play().catch(() => {});
    return () => music.pause();
  }, []);

  useEffect(() => {
    if (scene >= SCENES.length - 1) return; // hold on end scene
    const t = setTimeout(() => setScene((s) => s + 1), SCENES[scene].duration);
    return () => clearTimeout(t);
  }, [scene]);

  // Voiceover: play the chapter's narration when the scene changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.src = `/audio/demo/${SCENES[scene].id}.mp3`;
    audio.muted = muted;
    audio.currentTime = 0;
    audio.play().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scene]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted;
    if (musicRef.current) musicRef.current.muted = muted;
  }, [muted]);

  // Stop narration when the player unmounts (modal closed)
  useEffect(() => {
    const audio = audioRef.current;
    return () => audio?.pause();
  }, []);

  const replay = useCallback(() => setScene(0), []);
  const current = SCENES[scene];

  return (
    <div className="relative rounded-2xl overflow-hidden bg-navy-deep border border-white/10">
      <audio ref={audioRef} preload="auto" />
      <audio ref={musicRef} src="/audio/demo/music.mp3" loop preload="auto" />
      {/* Title bar */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <div className="w-3 h-3 rounded-full bg-green-400/80" />
        </div>
        <div className="flex-1 text-center">
          <span className="font-mono text-xs text-white/30">
            true north automation &middot; one evening, automated
          </span>
        </div>
        <button
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Unmute narration" : "Mute narration"}
          className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Stage */}
      <div className="relative h-[440px] sm:h-[500px] bg-grid-dark">
        <AnimatePresence mode="wait">
          <motion.div
            key={scene}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 p-6 pb-10"
          >
            {current.id === "call" && <SceneCall />}
            {current.id === "chat" && <SceneChat />}
            {current.id === "booked" && <SceneBooked />}
            {current.id === "newlead" && <SceneNewLead />}
            {current.id === "social" && <SceneSocial />}
            {current.id === "oldlead" && <SceneOldLead />}
            {current.id === "portal" && <ScenePortal />}
            {current.id === "end" && <SceneEnd onReplay={replay} />}
          </motion.div>
        </AnimatePresence>

        {/* Caption */}
        {current.caption && (
          <motion.p
            key={`cap-${scene}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-3 left-0 right-0 text-center font-mono text-[11px] sm:text-xs tracking-wider text-gold px-6"
          >
            {current.caption}
          </motion.p>
        )}
      </div>

      {/* Progress segments (clickable, labeled) */}
      <div className="px-5 py-3 border-t border-white/10 bg-white/3">
        <div className="flex gap-1.5">
          {SCENES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setScene(i)}
              aria-label={s.label ? `Skip to ${s.label}` : `Scene ${i + 1}`}
              className="group flex-1 cursor-pointer"
            >
              <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                {i < scene && <div className="h-full w-full bg-teal" />}
                {i === scene && (
                  <motion.div
                    key={`bar-${scene}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: SCENES[scene].duration / 1000, ease: "linear" }}
                    className="h-full bg-teal"
                  />
                )}
              </div>
              <span
                className={`hidden sm:block mt-1.5 font-mono text-[8px] tracking-[0.2em] uppercase transition-colors ${
                  i === scene ? "text-teal-light" : "text-white/25 group-hover:text-white/50"
                }`}
              >
                {s.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── "Watch the demo" trigger + modal ── */
export function WatchDemoButton({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`group inline-flex items-center gap-2.5 px-7 py-4 text-white font-semibold rounded-xl border border-white/15 hover:border-gold/60 hover:bg-gold/10 transition-all duration-200 cursor-pointer ${className}`}
      >
        <span className="w-7 h-7 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-colors duration-200">
          <Play className="w-3 h-3 text-gold group-hover:text-navy-deep fill-current ml-0.5 transition-colors duration-200" />
        </span>
        Watch the Demo
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setOpen(false)}
          >
            <div className="absolute inset-0 bg-navy-deep/90 backdrop-blur-md" />
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="relative w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close demo"
                className="absolute -top-12 right-0 p-2 text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
              {/* Remount on open so the demo always starts from scene 1 */}
              <PortalDemo />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
