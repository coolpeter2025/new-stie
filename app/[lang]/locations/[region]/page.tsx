import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  getRegionBySlug,
  citiesByRegion,
  regionSlugLookup,
  citySlugToId,
} from "@/lib/data/locations";
import { getDictionary } from "@/lib/i18n";
import { isLanguage, Language, LANGUAGES } from "@/lib/languages";
import { sectionPath, regionPath, cityPath } from "@/lib/routes";

export const revalidate = 86400;

export function generateStaticParams() {
  const params: { lang: Language; region: string }[] = [];
  for (const lang of LANGUAGES) {
    for (const slug of Object.values(regionSlugLookup[lang])) {
      params.push({ lang, region: slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string; region: string };
}): Promise<Metadata> {
  if (!isLanguage(params.lang)) {
    notFound();
  }
  const lang = params.lang as Language;
  const region = getRegionBySlug(lang, params.region);
  if (!region) {
    notFound();
  }
  return {
    title: `${region.content[lang].name} | Delightful Bean`,
    description: region.content[lang].metaDescription,
    alternates: {
      canonical: regionPath(lang, region.id),
      languages: {
        "en-US": regionPath("en", region.id),
        "es-US": regionPath("es", region.id),
      },
    },
  };
}

interface RegionPageProps {
  params: { lang: string; region: string };
}

export default function RegionPage({ params }: RegionPageProps) {
  if (!isLanguage(params.lang)) {
    notFound();
  }
  const lang = params.lang as Language;
  const region = getRegionBySlug(lang, params.region);
  if (!region) {
    notFound();
  }
  const dictionary = getDictionary(lang);
  const content = region.content[lang];
  const cities = citiesByRegion(lang, region.id);

  return (
    <>
      <Hero
        eyebrow={content.name}
        title={content.headline}
        description={content.description}
        image={{ src: content.heroImage, alt: content.heroAlt }}
        highlight={content.serviceHighlights[0]}
        primaryCta={{ label: dictionary.common.getQuote, href: sectionPath(lang, "contact") }}
        secondaryCta={{ label: dictionary.common.viewMenu, href: sectionPath(lang, "services") }}
      />

      <section className="space-y-6">
        <SectionHeading title={lang === "en" ? "Logistics at a glance" : "Logística destacada"} />
        <div className="grid gap-4 md:grid-cols-2">
          {content.logistics.map((item) => (
            <div key={item} className="rounded-2xl bg-white/85 p-5 shadow-sm ring-1 ring-latte/40">
              <p className="text-sm text-mocha/80">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          title={lang === "en" ? "Favorite venues" : "Venues favoritos"}
          description={lang === "en" ? "A few of the Tampa Bay spaces where we regularly serve." : "Algunos de los espacios donde servimos con frecuencia."}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {content.featuredVenues.map((venue) => (
            <Card key={venue} title={venue} description={<span className="text-sm text-mocha/70">{content.name}</span>} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          title={lang === "en" ? "Cities we serve" : "Ciudades que cubrimos"}
          description={lang === "en" ? "Explore dedicated city pages with venue ideas, testimonials, and service combinations." : "Explora páginas por ciudad con venues, testimonios y combinaciones de servicio."}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {cities.map((city) => (
            <Card
              key={city.slug}
              title={city.name}
              description={
                <div className="space-y-2 text-sm text-mocha/80">
                  <p>{city.description}</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-mocha/60">{city.recentEvents[0]}</p>
                </div>
              }
              footer={
                <ButtonLink href={cityPath(lang, region.id, citySlugToId[lang][city.slug])} variant="secondary">
                  {lang === "en" ? "View city" : "Ver ciudad"}
                </ButtonLink>
              }
            />
          ))}
        </div>
      </section>
    </>
  );
}
