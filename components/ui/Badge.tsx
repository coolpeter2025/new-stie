import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  tone?: "gold" | "teal" | "coffee";
}

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  gold: "bg-gold/20 text-gold border border-gold/40",
  teal: "bg-teal/15 text-teal border border-teal/40",
  coffee: "bg-coffee/10 text-coffee border border-coffee/20",
};

export function Badge({ children, tone = "gold" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold uppercase tracking-wide ${toneClasses[tone]}`}>
      {children}
    </span>
  );
}
