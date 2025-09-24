import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: ReactNode;
  icon?: ReactNode;
  footer?: ReactNode;
  emphasis?: boolean;
}

export function Card({ title, description, icon, footer, emphasis = false }: CardProps) {
  return (
    <div
      className={`flex h-full flex-col gap-4 rounded-3xl border border-latte/60 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-glow ${
        emphasis ? "ring-2 ring-gold/50" : ""
      }`}
    >
      {icon ? <div className="h-12 w-12 text-teal">{icon}</div> : null}
      <div className="space-y-2">
        <h3 className="font-heading text-2xl text-espresso">{title}</h3>
        <div className="text-base leading-relaxed text-mocha/90">{description}</div>
      </div>
      {footer ? <div className="mt-auto pt-4 text-sm text-mocha/70">{footer}</div> : null}
    </div>
  );
}
