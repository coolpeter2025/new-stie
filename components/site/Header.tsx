'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButtonLink } from "../ui/ButtonLink";
import type { Dictionary } from "@/lib/i18n/types";
import type { Language } from "@/lib/languages";
import { resolveLanguageAlternate, sectionPath, servicePath } from "@/lib/routes";
import { serviceNameLookup, serviceSlugLookup } from "@/lib/data/services";
import type { ServiceId } from "@/lib/data/services";

interface HeaderProps {
  lang: Language;
  dictionary: Dictionary;
}

export function Header({ lang, dictionary }: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const serviceEntries = Object.keys(serviceSlugLookup[lang]) as ServiceId[];
  const serviceLinks = serviceEntries.map((serviceId) => ({
    href: servicePath(lang, serviceId),
    label: serviceNameLookup[lang][serviceId],
    slug: serviceSlugLookup[lang][serviceId],
  }));

  const alternatePath = resolveLanguageAlternate(lang, pathname ?? `/${lang}`);

  const navItems = [
    { label: dictionary.nav.services, href: sectionPath(lang, "services"), type: "services" as const },
    { label: dictionary.nav.locations, href: sectionPath(lang, "locations"), type: "link" as const },
    { label: dictionary.nav.menu, href: sectionPath(lang, "menu"), type: "link" as const },
    { label: dictionary.nav.gallery, href: sectionPath(lang, "gallery"), type: "link" as const },
    { label: dictionary.nav.about, href: sectionPath(lang, "about"), type: "link" as const },
    { label: dictionary.nav.contact, href: sectionPath(lang, "contact"), type: "link" as const },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-latte/40 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href={`/${lang}`} className="flex flex-col text-left">
          <span className="font-heading text-xl text-espresso sm:text-2xl">Delightful Bean</span>
          <span className="text-xs uppercase tracking-[0.2em] text-mocha/60">
            Mobile Coffee Cart
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) =>
            item.type === "services" ? (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  onClick={() => setMenuOpen((prev) => !prev)}
                  onBlur={() => setTimeout(() => setMenuOpen(false), 150)}
                  className="inline-flex items-center gap-1 text-sm font-medium text-mocha/80 transition hover:text-espresso"
                >
                  {item.label}
                  <span aria-hidden>{menuOpen ? "▴" : "▾"}</span>
                </button>
                {menuOpen ? (
                  <div className="absolute left-0 top-full mt-3 w-64 rounded-2xl border border-latte/50 bg-white/95 p-4 shadow-xl">
                    <ul className="space-y-2">
                      {serviceLinks.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={service.href}
                            className="block rounded-xl px-3 py-2 text-sm text-mocha/80 transition hover:bg-cream hover:text-espresso"
                          >
                            {service.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-mocha/80 transition hover:text-espresso"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href={alternatePath}
            className="text-sm font-semibold uppercase tracking-wide text-teal hover:text-coffee"
          >
            {dictionary.nav.languageSwitcher}
          </Link>
          <ButtonLink href={sectionPath(lang, "contact")}>{dictionary.nav.getQuote}</ButtonLink>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-latte/60 bg-white/70 lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="text-xl text-coffee">≡</span>
        </button>
      </div>
      {menuOpen ? (
        <div className="lg:hidden">
          <nav className="space-y-4 border-t border-latte/40 bg-white/95 px-4 py-6">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-mocha/60">
                {dictionary.nav.services}
              </p>
              <div className="grid gap-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.slug}
                    href={service.href}
                    className="block rounded-xl bg-cream/60 px-3 py-2 text-sm font-medium text-mocha/80"
                    onClick={() => setMenuOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
            {navItems
              .filter((item) => item.type === "link")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm font-medium text-mocha/80"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            <Link
              href={sectionPath(lang, "contact")}
              className="block text-sm font-semibold text-teal"
              onClick={() => setMenuOpen(false)}
            >
              {dictionary.nav.getQuote}
            </Link>
            <Link
              href={alternatePath}
              className="block text-sm font-semibold text-coffee"
              onClick={() => setMenuOpen(false)}
            >
              {dictionary.nav.languageSwitcher}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
