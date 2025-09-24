import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/ui/Hero";
import { IconRow } from "@/components/ui/IconRow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MenuGrid } from "@/components/ui/MenuGrid";
import { Card } from "@/components/ui/Card";
import { Stepper } from "@/components/ui/Stepper";
import { CTASection } from "@/components/ui/CTASection";
import { iconMap } from "@/components/icons/icon-map";
import {
  findServiceBySlug,
  serviceSlugLookup,
} from "@/lib/data/services";
import {
  getRegionBySlug,
  getCityBySlug,
  regionSlugLookup,
  citySlugLookup,
} from "@/lib/data/locations";
import { getDictionary } from "@/lib/i18n";
import { isLanguage, Language, LANGUAGES } from "@/lib/languages";
import { serviceLocationPath, sectionPath } from "@/lib/routes";

export const revalidate = 86400;

export function generateStaticParams() {
  const params: { lang: Language; service: string; region: string; city: string }[] = [];
  for (const lang of LANGUAGES) {
    for (const serviceSlug of Object.values(serviceSlugLookup[lang])) {
      for (const regionSlug of Object.values(regionSlugLookup[lang])) {
        const region = getRegionBySlug(lang, regionSlug);
        if (!region) continue;
        for (const [, citySlug] of Object.entries(citySlugLookup[lang])) {
          const city = getCityBySlug(lang, citySlug);
          if (city && city.regionId === region.id) {
            params.push({ lang, service: serviceSlug, region: regionSlug, city: citySlug });
          }
        }
      }
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; service: string; region: string; city: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  if (!isLanguage(resolvedParams.lang)) {
    notFound();
  }
  const lang = resolvedParams.lang as Language;
  const service = findServiceBySlug(lang, resolvedParams.service);
  const region = getRegionBySlug(lang, resolvedParams.region);
  const city = getCityBySlug(lang, resolvedParams.city);
  if (!service || !region || !city || city.regionId !== region.id) {
    notFound();
  }
  const title =
    lang === "en"
      ? `${service.content.en.name} in ${city.content.en.name}`
      : `${service.content.es.name} en ${city.content.es.name}`;
  const description =
    lang === "en"
      ? `Delightful Bean’s ${service.content.en.name.toLowerCase()} cart serves ${city.content.en.name} venues with specialty espresso, cold brew, and hospitality.`
      : `El carrito de ${service.content.es.name.toLowerCase()} de Delightful Bean atiende ${city.content.es.name} con espresso y hospitalidad artesanal.`;

  return {
    title,
    description,
    alternates: {
      canonical: serviceLocationPath(lang, service.id, region.id, city.id),
      languages: {
        "en-US": serviceLocationPath("en", service.id, region.id, city.id),
        "es-US": serviceLocationPath("es", service.id, region.id, city.id),
      },
    },
  };
}

interface ServiceCityPageProps {
  params: Promise<{ lang: string; service: string; region: string; city: string }>;
}

export default async function ServiceCityPage({ params }: ServiceCityPageProps) {
  const resolvedParams = await params;
  if (!isLanguage(resolvedParams.lang)) {
    notFound();
  }
  const lang = resolvedParams.lang as Language;
  const service = findServiceBySlug(lang, resolvedParams.service);
  const region = getRegionBySlug(lang, resolvedParams.region);
  const city = getCityBySlug(lang, resolvedParams.city);
  if (!service || !region || !city || city.regionId !== region.id) {
    notFound();
  }
  const serviceContent = service.content[lang];
  const regionContent = region.content[lang];
  const cityContent = city.content[lang];
  const dictionary = getDictionary(lang);

  const heroTitle =
    lang === "en"
      ? `${serviceContent.name} in ${cityContent.name}`
      : `${serviceContent.name} en ${cityContent.name}`;
  const heroDescription =
    lang === "en"
      ? `Baristas, espresso, and seasonal flavors tailored for ${cityContent.name} venues, from ${cityContent.venues[0]} to ${cityContent.venues[1] ?? regionContent.name}.`
      : `Baristas, espresso y sabores de temporada para venues en ${cityContent.name}, de ${cityContent.venues[0]} a ${cityContent.venues[1] ?? regionContent.name}.`;

  const iconItems = serviceContent.valueProps.slice(0, 3).map((item) => ({
    icon: iconMap[item.icon],
    title: item.title,
    description: item.description,
  }));

  const pricingCopy =
    lang === "en"
      ? `Typical investment for ${serviceContent.name.toLowerCase()} in ${cityContent.name} ranges from $750 for petite gatherings to $1,800+ for large celebrations. Travel within ${cityContent.travelTime} is included.`
      : `La inversión típica para ${serviceContent.name.toLowerCase()} en ${cityContent.name} va desde $750 para eventos íntimos hasta $1,800+ para celebraciones grandes. Incluye desplazamiento de ${cityContent.travelTime}.`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceContent.name} - ${cityContent.name}`,
    areaServed: cityContent.name,
    provider: {
      "@type": "LocalBusiness",
      name: "Delightful Bean Coffee Cart",
    },
    serviceType: serviceContent.name,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${serviceContent.name} packages`,
      itemListElement: serviceContent.inclusions[0]?.points.map((point) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: point,
        },
      })),
    },
  };

  return (
    <>
      <Hero
        eyebrow={regionContent.name}
        title={heroTitle}
        description={heroDescription}
        image={{ src: cityContent.heroImage, alt: cityContent.heroAlt }}
        highlight={cityContent.travelTime}
        stats={serviceContent.hero.stats}
        primaryCta={{ label: dictionary.common.getQuote, href: sectionPath(lang, "contact") }}
        secondaryCta={{ label: dictionary.common.viewMenu, href: sectionPath(lang, "menu") }}
      />

      <section className="space-y-8">
        <SectionHeading
          title={lang === "en" ? "Why it works" : "Por qué funciona"}
          description={lang === "en" ? `Our ${serviceContent.name.toLowerCase()} layout shines at ${cityContent.name} venues.` : `Nuestro servicio de ${serviceContent.name.toLowerCase()} brilla en los venues de ${cityContent.name}.`}
        />
        <IconRow items={iconItems} />
      </section>

      <section className="space-y-8">
        <SectionHeading
          title={lang === "en" ? "What’s included" : "¿Qué incluye?"}
          description={lang === "en" ? "Every package comes with baristas, premium beans, dairy + oat milk, and styling." : "Cada paquete incluye baristas, café premium, leches y ambientación."}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {serviceContent.inclusions.map((inclusion) => (
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
      </section>

      <section className="space-y-8">
        <SectionHeading
          title={lang === "en" ? "Menu inspiration" : "Inspiración de menú"}
          description={lang === "en" ? `Seasonal drinks that play well with ${cityContent.name} weather.` : `Bebidas de temporada perfectas para el clima de ${cityContent.name}.`}
        />
        <MenuGrid items={serviceContent.sampleMenu} />
      </section>

      <section className="space-y-6">
        <SectionHeading title={lang === "en" ? "Pricing guidance" : "Guía de inversión"} />
        <Card title={lang === "en" ? "Estimated range" : "Rango estimado"} description={pricingCopy} />
      </section>

      <section className="space-y-6">
        <SectionHeading title={lang === "en" ? "Favorite local venues" : "Venues favoritos"} />
        <div className="grid gap-4 md:grid-cols-2">
          {cityContent.venues.map((venue) => (
            <Card key={venue} title={venue} description={<span className="text-sm text-mocha/70">{cityContent.name}</span>} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading title={lang === "en" ? "How we serve" : "Cómo servimos"} />
        <Stepper steps={serviceContent.workflow} />
      </section>

      <CTASection
        eyebrow={dictionary.common.getQuote}
        title={lang === "en" ? `Ready to book ${serviceContent.name} in ${cityContent.name}?` : `¿Listo para reservar ${serviceContent.name} en ${cityContent.name}?`}
        description={lang === "en" ? "Tell us about your timeline, venue, and guest count." : "Comparte horario, venue y número de invitados."}
        primaryCta={{ label: dictionary.common.getQuote, href: sectionPath(lang, "contact") }}
        secondaryCta={{ label: dictionary.common.viewMenu, href: sectionPath(lang, "menu") }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
