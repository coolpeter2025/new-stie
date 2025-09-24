import Image from "next/image";
import { ReactNode } from "react";
import { Badge } from "./Badge";
import { ButtonLink } from "./ButtonLink";

interface HeroProps {
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
  image: {
    src: string;
    alt: string;
  };
  highlight?: string;
  stats?: { label: string; value: string }[];
  children?: ReactNode;
}

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  highlight,
  stats,
  children,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden rounded-4xl bg-white/90 px-6 py-12 shadow-lg ring-1 ring-latte/50 sm:px-10 md:py-16">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-coffee/10 opacity-30 md:block" aria-hidden />
      <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          {eyebrow ? <Badge tone="teal">{eyebrow}</Badge> : null}
          <h1 className="font-heading text-4xl font-semibold leading-tight text-espresso sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-xl text-lg text-mocha/90">{description}</p>
          {children}
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={primaryCta.href} variant="primary">
              {primaryCta.label}
            </ButtonLink>
            {secondaryCta ? (
              <ButtonLink href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
          {highlight ? (
            <p className="text-sm font-semibold uppercase tracking-wider text-mocha/60">
              {highlight}
            </p>
          ) : null}
          {stats && stats.length ? (
            <dl className="grid gap-4 pt-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-cream/80 p-4 text-center">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-mocha/70">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-heading text-2xl text-espresso">{stat.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-4xl border border-gold/40 bg-cream shadow-lg">
            <Image
              src={image.src}
              alt={image.alt}
              width={900}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
