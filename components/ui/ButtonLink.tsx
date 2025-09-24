import Link from "next/link";
import { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variants: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary: "bg-teal text-cream hover:bg-coffee focus-visible:ring-teal/70 ring-offset-cream",
  secondary: "bg-gold/20 text-coffee hover:bg-gold/30 focus-visible:ring-gold/50 ring-offset-cream",
  ghost: "bg-transparent text-teal hover:text-coffee hover:bg-teal/10 focus-visible:ring-teal/50 ring-offset-cream",
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]} ${className ?? ""}`}>
      {children}
    </Link>
  );
}
