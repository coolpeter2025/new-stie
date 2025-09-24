import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/types";
import type { Language } from "@/lib/languages";
import { contactDetails } from "@/lib/data/contactDetails";
import { sectionPath, homePath } from "@/lib/routes";

interface FooterProps {
  lang: Language;
  dictionary: Dictionary;
}

export function Footer({ lang, dictionary }: FooterProps) {
  const quickLinks = [
    { label: dictionary.nav.home, href: homePath(lang) },
    { label: dictionary.nav.services, href: sectionPath(lang, "services") },
    { label: dictionary.nav.locations, href: sectionPath(lang, "locations") },
    { label: dictionary.nav.menu, href: sectionPath(lang, "menu") },
    { label: dictionary.nav.gallery, href: sectionPath(lang, "gallery") },
    { label: dictionary.nav.about, href: sectionPath(lang, "about") },
    { label: dictionary.nav.contact, href: sectionPath(lang, "contact") },
  ];

  return (
    <footer className="border-t border-latte/40 bg-cream/90">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
        <div className="space-y-4">
          <h3 className="font-heading text-2xl text-espresso">Delightful Bean</h3>
          <p className="text-sm text-mocha/80">{dictionary.footer.tagline}</p>
          <p className="text-xs uppercase tracking-[0.25em] text-mocha/60">
            {dictionary.footer.serviceRadius}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-mocha/60">
            {dictionary.footer.quickLinks}
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-mocha/80">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-espresso">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-mocha/60">
            {dictionary.footer.contactTitle}
          </h4>
          <ul className="space-y-2 text-sm text-mocha/80">
            <li>
              <span className="block font-semibold text-espresso">
                {contactDetails.businessName}
              </span>
            </li>
            <li>
              {dictionary.common.emailLabel}:{" "}
              <a href={`mailto:${contactDetails.email}`} className="text-teal hover:text-espresso">
                {contactDetails.email}
              </a>
            </li>
            <li>
              {dictionary.common.phoneLabel}:{" "}
              <a href={`tel:${contactDetails.phone.replace(/[^\d]/g, "")}`} className="text-teal hover:text-espresso">
                {contactDetails.phone}
              </a>
            </li>
            <li>
              {dictionary.common.instagramLabel}:{" "}
              <a
                href={`https://instagram.com/${contactDetails.instagram.replace("@", "")}`}
                className="text-teal hover:text-espresso"
                target="_blank"
                rel="noreferrer"
              >
                {contactDetails.instagram}
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-mocha/60">
            {dictionary.footer.followUs}
          </h4>
          <p className="text-sm text-mocha/80">{dictionary.footer.hours}</p>
          <p className="text-xs text-mocha/60">© {new Date().getFullYear()} Delightful Bean Coffee Cart</p>
        </div>
      </div>
    </footer>
  );
}
