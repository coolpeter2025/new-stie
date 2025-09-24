import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Testimonials } from "@/components/ui/Testimonials";
import { CTASection } from "@/components/ui/CTASection";
import {
  getCityBySlug,
  getRegionBySlug,
  citySlugLookup,
  regionSlugLookup,
} from "@/lib/data/locations";
import { serviceIds, serviceNameLookup } from "@/lib/data/services";
import { getDictionary } from "@/lib/i18n";
import { isLanguage, Language, LANGUAGES } from "@/lib/languages";
import { cityPath, regionPath, serviceLocationPath, sectionPath } from "@/lib/routes";

export const revalidate = 86400;

export function generateStaticParams() {
  const params: { lang: Language; region: string; city: string }[] = [];
  for (const lang of LANGUAGES) {
    for (const regionSlug of Object.values(regionSlugLookup[lang])) {
      const region = getRegionBySlug(lang, regionSlug);
      if (!region) continue;
      for (const [, slug] of Object.entries(citySlugLookup[lang])) {
        const city = getCityBySlug(lang, slug);
        if (city && city.regionId === region.id) {
          params.push({ lang, region: regionSlug, city: slug });
        }
      }
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; region: string; city: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  if (!isLanguage(resolvedParams.lang)) {
    notFound();
  }
  const lang = resolvedParams.lang as Language;
  const city = getCityBySlug(lang, resolvedParams.city);
  const region = getRegionBySlug(lang, resolvedParams.region);
  if (!city || !region || city.regionId !== region.id) {
    notFound();
  }
  return {
    title: `${city.content[lang].name} Coffee Cart | Delightful Bean`,
    description: city.content[lang].metaDescription,
    alternates: {
      canonical: cityPath(lang, region.id, city.id ?? city.content[lang].slug),
      languages: {
        "en-US": cityPath("en", region.id, city.id ?? city.content["en"].slug),
        "es-US": cityPath("es", region.id, city.id ?? city.content["es"].slug),
      },
    },
  };
}

interface CityPageProps {
  params: Promise<{ lang: string; region: string; city: string }>;
}

export default async function CityPage({ params }: CityPageProps) {
  const resolvedParams = await params;
  if (!isLanguage(resolvedParams.lang)) {
    notFound();
  }
  const lang = resolvedParams.lang as Language;
  const city = getCityBySlug(lang, resolvedParams.city);
  const region = getRegionBySlug(lang, resolvedParams.region);
  if (!city || !region || city.regionId !== region.id) {
    notFound();
  }
  const dictionary = getDictionary(lang);
  const content = city.content[lang];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `${content.name} Coffee Cart Catering`,
    description: content.metaDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: content.name,
      addressRegion: region.content[lang].name,
      addressCountry: "US",
    },
  };

  return (
    <>
      <Hero
        eyebrow={region.content[lang].name}
        title={content.headline}
        description={content.description}
        image={{ src: content.heroImage, alt: content.heroAlt }}
        highlight={content.travelTime}
        stats={[
          { label: lang === "en" ? "Travel time" : "Tiempo de viaje", value: content.travelTime },
          { label: lang === "en" ? "Venues loved" : "Venues", value: String(content.venues.length) },
          { label: lang === "en" ? "Recent events" : "Eventos", value: String(content.recentEvents.length) },
        ]}
        primaryCta={{ label: dictionary.common.getQuote, href: sectionPath(lang, "contact") }}
        secondaryCta={{ label: dictionary.common.learnMore, href: regionPath(lang, region.id) }}
      />

      <section className="space-y-6">
        <SectionHeading title={lang === "en" ? "Local venues" : "Venues locales"} />
        <div className="grid gap-4 md:grid-cols-2">
          {content.venues.map((venue) => (
            <Card key={venue} title={venue} description={<span className="text-sm text-mocha/70">{content.name}</span>} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading title={lang === "en" ? "Recent events" : "Eventos recientes"} />
        <div className="grid gap-4 md:grid-cols-3">
          {content.recentEvents.map((event) => (
            <div key={event} className="rounded-2xl bg-white/85 p-4 shadow-sm ring-1 ring-latte/40">
              <p className="text-sm text-mocha/80">{event}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          title={lang === "en" ? "Popular service pairings" : "Combinaciones de servicio"}
          description={
            lang === "en"
              ? "Choose your event type and explore city-specific service pages for menus, pricing notes, and FAQs."
              : "Elige el tipo de evento y descubre páginas específicas de esta ciudad con menús y detalles."
          }
        />
        <div className="grid gap-4 md:grid-cols-2">
          {serviceIds.map((serviceId) => (
            <Card
              key={serviceId}
              title={serviceNameLookup[lang][serviceId]}
              description={
                <p className="text-sm text-mocha/80">
                  {lang === "en"
                    ? `See how our ${serviceNameLookup["en"][serviceId]} experience adapts for ${content.name}.`
                    : `Descubre cómo nuestro servicio de ${serviceNameLookup["es"][serviceId]} se adapta a ${content.name}.`}
                </p>
              }
              footer={
                <ButtonLink
                  href={serviceLocationPath(lang, serviceId, region.id, city.id ?? city.content[lang].slug)}
                  variant="primary"
                >
                  {lang === "en" ? "View page" : "Ver página"}
                </ButtonLink>
              }
            />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading title={lang === "en" ? "What locals say" : "Lo que dicen"} />
        <Testimonials testimonials={[content.testimonial]} />
      </section>

      <CTASection
        eyebrow={dictionary.common.getQuote}
        title={lang === "en" ? `Bring Delightful Bean to ${content.name}` : `Lleva Delightful Bean a ${content.name}`}
        description={lang === "en" ? "Tell us about your venue, timeline, and coffee wishlist." : "Comparte venue, horario y bebidas soñadas."}
        primaryCta={{ label: dictionary.common.getQuote, href: sectionPath(lang, "contact") }}
        secondaryCta={{ label: dictionary.common.viewMenu, href: sectionPath(lang, "menu") }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
