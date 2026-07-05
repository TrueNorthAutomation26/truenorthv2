"use client";

export function Badge({
  children,
  variant = "dark",
}: {
  children: React.ReactNode;
  variant?: "dark" | "light" | "teal";
}) {
  const styles = {
    dark: "bg-teal/10 text-teal border-teal/20",
    light: "bg-navy/5 text-navy border-navy/10",
    teal: "bg-teal/20 text-teal-light border-teal/30",
  };

  return (
    <span
      className={`inline-flex items-center px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full border ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
