"use client";

/**
 * Editorial mono eyebrow — gold tick + tracked-out label.
 * Same API as the old pill Badge so every page picks it up automatically.
 */
export function Badge({
  children,
  variant = "dark",
}: {
  children: React.ReactNode;
  variant?: "dark" | "light" | "teal";
}) {
  const styles = {
    dark: "text-teal-light",
    light: "text-navy/70",
    teal: "text-teal-light",
  };

  return (
    <span
      className={`inline-flex items-center gap-3 font-mono text-[11px] font-medium tracking-[0.3em] uppercase ${styles[variant]}`}
    >
      <span className="inline-block w-8 h-px bg-gold" aria-hidden="true" />
      {children}
    </span>
  );
}
