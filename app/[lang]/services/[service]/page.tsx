import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/ui/Hero";
import { IconRow } from "@/components/ui/IconRow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { MenuGrid } from "@/components/ui/MenuGrid";
import { Stepper } from "@/components/ui/Stepper";
import { Testimonials } from "@/components/ui/Testimonials";
import { FAQ } from "@/components/ui/FAQ";
import { CTASection } from "@/components/ui/CTASection";
import { iconMap } from "@/components/icons/icon-map";
import {
  findServiceBySlug,
  serviceSlugLookup,
  serviceSlugToId,
  serviceMetaLookup,
  ServiceId,
  IconKey,
} from "@/lib/data/services";
import { getDictionary } from "@/lib/i18n";
import { isLanguage, Language, LANGUAGES } from "@/lib/languages";
import { sectionPath, servicePath } from "@/lib/routes";

export const revalidate = 86400;

export function generateStaticParams() {
  const params: { lang: Language; service: string }[] = [];
  for (const lang of LANGUAGES) {
    for (const slug of Object.values(serviceSlugLookup[lang])) {
      params.push({ lang, service: slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; service: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  if (!isLanguage(resolvedParams.lang)) {
    notFound();
  }
  const lang = resolvedParams.lang as Language;
  const serviceId = serviceSlugToId[lang][resolvedParams.service];
  if (!serviceId) {
    notFound();
  }
  const meta = serviceMetaLookup[lang][serviceId as ServiceId];
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: servicePath(lang, serviceId as ServiceId),
      languages: {
        "en-US": servicePath("en", serviceId as ServiceId),
        "es-US": servicePath("es", serviceId as ServiceId),
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: servicePath(lang, serviceId as ServiceId),
      type: "article",
    },
  };
}

interface ServicePageProps {
  params: Promise<{ lang: string; service: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  if (!isLanguage(resolvedParams.lang)) {
    notFound();
  }
  const lang = resolvedParams.lang as Language;
  const service = findServiceBySlug(lang, resolvedParams.service);
  if (!service) {
    notFound();
  }
  const dictionary = getDictionary(lang);
  const content = service.content[lang];

  const iconItems = content.valueProps.map((value) => ({
    icon: iconMap[value.icon as IconKey],
    title: value.title,
    description: value.description,
  }));

  const addonCards = content.addOns.map((addon) => ({
    title: addon.title,
    description: addon.description,
  }));

  const workflowSteps = content.workflow.map((step) => ({
    title: step.title,
    description: step.description,
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.name,
    description: content.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Delightful Bean Coffee Cart",
      areaServed: "Tampa Bay Region",
    },
    areaServed: ["Tampa", "St. Petersburg", "Sarasota", "Lakeland"],
    serviceType: content.name,
  };

  const renderAddOnCards = () => (
    <div className="grid gap-5 md:grid-cols-3">
      {addonCards.map((addon) => (
        <Card key={addon.title} title={addon.title} description={addon.description} />
      ))}
    </div>
  );

  const renderInclusions = () => (
    <div className="grid gap-6 md:grid-cols-2">
      {content.inclusions.map((inclusion) => (
        <div key={inclusion.title} className="rounded-3xl bg-white/85 p-6 shadow-sm ring-1 ring-latte/40">
          <h3 className="font-heading text-xl text-espresso">{inclusion.title}</h3>
          <ul className="mt-4 space-y-2 text-sm text-mocha/80">
            {inclusion.points.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderLayout = () => {
    switch (content.layoutVariant) {
      case "split":
        return (
          <>
            <section className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
              <div className="space-y-8">
                <SectionHeading title={content.hero.highlight} description={content.hero.description} />
                <IconRow items={iconItems} />
              </div>
              <div className="space-y-6 rounded-3xl border border-latte/40 bg-white/90 p-6 shadow-lg">
                <h3 className="font-heading text-xl text-espresso">{lang === "en" ? "What’s included" : "¿Qué incluye?"}</h3>
                {renderInclusions()}
              </div>
            </section>

            <section className="space-y-8">
              <SectionHeading title={lang === "en" ? "Menu inspiration" : "Inspiración de menú"} />
              <MenuGrid items={content.sampleMenu} />
            </section>

            <section className="space-y-8">
              <SectionHeading title={lang === "en" ? "Popular add-ons" : "Complementos populares"} />
              {renderAddOnCards()}
            </section>
          </>
        );
      case "overlay":
        return (
          <>
            <section className="relative overflow-hidden rounded-4xl bg-coffee px-6 py-12 text-cream shadow-xl sm:px-10">
              <div className="absolute inset-0 bg-grain opacity-30" aria-hidden />
              <div className="relative grid gap-8 lg:grid-cols-2">
                <div className="space-y-6">
                  <SectionHeading
                    eyebrow={content.hero.eyebrow}
                    title={content.hero.title}
                    description={content.hero.description}
                  />
                  <IconRow items={iconItems} />
                </div>
                <div className="space-y-8 rounded-3xl bg-white/10 p-6 backdrop-blur">
                  <h3 className="font-heading text-xl text-gold">{lang === "en" ? "What’s included" : "¿Qué incluye?"}</h3>
                  {content.inclusions.map((inclusion) => (
                    <div key={inclusion.title} className="space-y-2">
                      <h4 className="font-semibold text-white">{inclusion.title}</h4>
                      <ul className="space-y-1 text-sm text-cream/80">
                        {inclusion.points.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="space-y-8">
              <SectionHeading title={lang === "en" ? "Sample menu" : "Menú sugerido"} />
              <MenuGrid items={content.sampleMenu} />
            </section>

            <section className="rounded-3xl border border-latte/40 bg-white/80 p-6 shadow-sm">
              <SectionHeading title={lang === "en" ? "Add-ons" : "Complementos"} />
              {renderAddOnCards()}
            </section>
          </>
        );
      case "gallery":
        return (
          <>
            <section className="space-y-8">
              <SectionHeading title={lang === "en" ? "What’s included" : "¿Qué incluye?"} />
              {renderInclusions()}
            </section>

            <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
              <div className="space-y-6 rounded-3xl border border-latte/40 bg-white/90 p-6 shadow-lg">
                <SectionHeading title={lang === "en" ? "Menu inspiration" : "Inspiración de menú"} />
                <MenuGrid items={content.sampleMenu} />
              </div>
              <div className="space-y-6 rounded-3xl bg-cream/80 p-6 ring-1 ring-latte/40">
                <SectionHeading title={lang === "en" ? "Popular add-ons" : "Complementos populares"} />
                <div className="space-y-4">
                  {addonCards.map((addon) => (
                    <div key={addon.title} className="rounded-2xl bg-white/80 p-4 shadow-sm">
                      <h4 className="font-heading text-lg text-espresso">{addon.title}</h4>
                      <p className="text-sm text-mocha/80">{addon.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        );
      default:
        return (
          <>
            <section className="space-y-8">
              <SectionHeading title={lang === "en" ? "Why hosts love it" : "Por qué encanta"} />
              <IconRow items={iconItems} />
            </section>

            <section className="space-y-8">
              <SectionHeading title={lang === "en" ? "What’s included" : "¿Qué incluye?"} />
              {renderInclusions()}
            </section>

            <section className="space-y-8">
              <SectionHeading title={lang === "en" ? "Menu inspiration" : "Inspiración de menú"} />
              <MenuGrid items={content.sampleMenu} />
            </section>

            <section className="space-y-8">
              <SectionHeading title={lang === "en" ? "Popular add-ons" : "Complementos populares"} />
              {renderAddOnCards()}
            </section>
          </>
        );
    }
  };

  return (
    <>
      <Hero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        description={content.hero.description}
        image={{ src: content.hero.image, alt: content.hero.imageAlt }}
        highlight={content.hero.highlight}
        stats={content.hero.stats}
        primaryCta={{ label: dictionary.common.getQuote, href: sectionPath(lang, "contact") }}
        secondaryCta={{ label: dictionary.common.viewMenu, href: sectionPath(lang, "menu") }}
      />

      {renderLayout()}

      <section className="space-y-8">
        <SectionHeading title={lang === "en" ? "How we serve" : "Cómo servimos"} />
        <Stepper steps={workflowSteps} />
      </section>

      <section className="space-y-8">
        <SectionHeading title={lang === "en" ? "Client love" : "Testimonios"} />
        <Testimonials testimonials={content.testimonials} />
      </section>

      <section className="space-y-8">
        <SectionHeading title={lang === "en" ? "FAQs" : "Preguntas frecuentes"} />
        <FAQ items={content.faqs} />
      </section>

      <CTASection
        eyebrow={dictionary.common.bookNow}
        title={content.cta.title}
        description={content.cta.description}
        primaryCta={{ label: content.cta.primaryLabel, href: sectionPath(lang, "contact") }}
        secondaryCta={{ label: content.cta.secondaryLabel, href: sectionPath(lang, "menu") }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
