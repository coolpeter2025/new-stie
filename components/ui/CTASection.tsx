import { ReactNode } from "react";
import { ButtonLink } from "./ButtonLink";

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  illustration?: ReactNode;
}

export function CTASection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  illustration,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden rounded-4xl bg-coffee px-6 py-12 text-cream shadow-lg md:px-12">
      <div className="absolute inset-0 bg-coffee/10 opacity-40 mix-blend-overlay" aria-hidden />
      <div className="relative grid gap-8 md:grid-cols-[1.8fr_1fr] md:items-center">
        <div className="space-y-4">
          {eyebrow ? (
            <span className="inline-flex items-center rounded-full bg-gold/30 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-gold">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
            {title}
          </h2>
          <p className="text-base text-white/80 sm:text-lg">{description}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <ButtonLink href={primaryCta.href} variant="primary" className="bg-teal text-cream hover:bg-gold">
              {primaryCta.label}
            </ButtonLink>
            {secondaryCta ? (
              <ButtonLink href={secondaryCta.href} variant="ghost" className="text-white hover:text-gold">
                {secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>
        {illustration ? (
          <div className="relative flex justify-end">
            <div className="relative h-48 w-full max-w-xs overflow-hidden rounded-3xl border border-gold/40 bg-white/10 p-6 backdrop-blur">
              {illustration}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
