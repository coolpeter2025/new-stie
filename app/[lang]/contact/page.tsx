import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ContactForm } from "@/components/contact/ContactForm";
import { getDictionary } from "@/lib/i18n";
import { isLanguage, Language } from "@/lib/languages";
import { contactDetails } from "@/lib/data/contactDetails";
import { sectionPath } from "@/lib/routes";

export const revalidate = 86400;

const pageMeta: Record<Language, { title: string; description: string }> = {
  en: {
    title: "Contact",
    description: "Request a quote for Delightful Bean Coffee Cart and design your custom espresso menu.",
  },
  es: {
    title: "Contacto",
    description: "Solicita una cotización para Delightful Bean Coffee Cart y diseña tu menú personalizado.",
  },
};

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  if (!isLanguage(params.lang)) {
    notFound();
  }
  const lang = params.lang as Language;
  return {
    title: pageMeta[lang].title,
    description: pageMeta[lang].description,
    alternates: {
      canonical: sectionPath(lang, "contact"),
      languages: {
        "en-US": sectionPath("en", "contact"),
        "es-US": sectionPath("es", "contact"),
      },
    },
  };
}

interface ContactPageProps {
  params: { lang: string };
}

export default function ContactPage({ params }: ContactPageProps) {
  if (!isLanguage(params.lang)) {
    notFound();
  }
  const lang = params.lang as Language;
  const dictionary = getDictionary(lang);

  const contactStructuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    areaServed: "Tampa Bay",
    availableLanguage: lang === "en" ? ["English", "Spanish"] : ["Español", "Inglés"],
    contactType: "Customer Service",
    email: contactDetails.email,
    telephone: contactDetails.phone,
  });

  return (
    <section className="space-y-10">
      <SectionHeading
        eyebrow={dictionary.contact.heroTitle}
        title={dictionary.contact.heroTitle}
        description={dictionary.contact.heroDescription}
      />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <ContactForm dictionary={dictionary} lang={lang} />

        <div className="space-y-6">
          <Card
            title={contactDetails.businessName}
            description={
              <div className="space-y-2 text-sm text-mocha/80">
                <p>
                  {dictionary.common.emailLabel}:{" "}
                  <a href={`mailto:${contactDetails.email}`} className="text-teal hover:text-coffee">
                    {contactDetails.email}
                  </a>
                </p>
                <p>
                  {dictionary.common.phoneLabel}:{" "}
                  <a href={`tel:${contactDetails.phone.replace(/[^\d]/g, "")}`} className="text-teal hover:text-coffee">
                    {contactDetails.phone}
                  </a>
                </p>
                <p>
                  {dictionary.common.instagramLabel}:{" "}
                  <a
                    href={`https://instagram.com/${contactDetails.instagram.replace("@", "")}`}
                    className="text-teal hover:text-coffee"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {contactDetails.instagram}
                  </a>
                </p>
                <p>{contactDetails.serviceRadius}</p>
                <p>{contactDetails.hours}</p>
              </div>
            }
          />
          <Card
            title={lang === "en" ? "How booking works" : "Cómo funciona la reserva"}
            description={
              <ol className="space-y-2 text-sm text-mocha/80">
                {dictionary.contact.bookingSteps.map((step) => (
                  <li key={step.title}>
                    <span className="font-semibold text-espresso">{step.title}:</span> {step.description}
                  </li>
                ))}
              </ol>
            }
          />
          <ButtonLink href={sectionPath(lang, "services")} variant="secondary">
            {lang === "en" ? "Review services" : "Ver servicios"}
          </ButtonLink>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: contactStructuredData,
        }}
      />
    </section>
  );
}
