import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { regions, citiesByRegion } from "@/lib/data/locations";
import { getDictionary } from "@/lib/i18n";
import { isLanguage, Language } from "@/lib/languages";
import { regionPath, sectionPath } from "@/lib/routes";

export const revalidate = 86400;

const metaByLanguage: Record<Language, { title: string; description: string }> = {
  en: {
    title: "Locations",
    description:
      "Delightful Bean covers the Greater Tampa Bay area with mobile espresso carts for venues, neighborhoods, campuses, and corporate hubs.",
  },
  es: {
    title: "Ubicaciones",
    description:
      "Delightful Bean ofrece carritos de espresso móvil en toda la región de Tampa Bay para venues, vecindarios, campus y empresas.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  if (!isLanguage(resolvedParams.lang)) {
    notFound();
  }
  const lang = resolvedParams.lang as Language;
  return {
    title: metaByLanguage[lang].title,
    description: metaByLanguage[lang].description,
    alternates: {
      canonical: sectionPath(lang, "locations"),
      languages: {
        "en-US": sectionPath("en", "locations"),
        "es-US": sectionPath("es", "locations"),
      },
    },
  };
}

interface LocationsPageProps {
  params: Promise<{ lang: string }>;
}

export default async function LocationsPage({ params }: LocationsPageProps) {
  const resolvedParams = await params;
  if (!isLanguage(resolvedParams.lang)) {
    notFound();
  }
  const lang = resolvedParams.lang as Language;
  const dictionary = getDictionary(lang);
  const intro =
    lang === "en"
      ? "Explore the Tampa Bay counties and cities we serve. From rooftop weddings in downtown Tampa to beachfront soirées in Sarasota, we bring polished espresso service wherever you celebrate."
      : "Explora los condados y ciudades donde servimos. Desde bodas en rooftops de Tampa hasta celebraciones frente al mar en Sarasota, llevamos espresso profesional a cada ocasión.";

  return (
    <section className="space-y-10">
      <SectionHeading
        eyebrow={dictionary.nav.locations}
        title={metaByLanguage[lang].title}
        description={intro}
      />
      <div className="grid gap-6 md:grid-cols-2">
        {regions.map((region) => {
          const content = region.content[lang];
          const cities = citiesByRegion(lang, region.id);
          return (
            <Card
              key={region.id}
              title={content.name}
              description={
                <div className="space-y-3 text-sm text-mocha/80">
                  <p>{content.description}</p>
                  <p className="font-semibold text-mocha">
                    {lang === "en" ? "Featured venues:" : "Venues destacados:"}
                  </p>
                  <ul className="list-disc pl-5">
                    {content.featuredVenues.slice(0, 3).map((venue) => (
                      <li key={venue}>{venue}</li>
                    ))}
                  </ul>
                  <p className="text-xs uppercase tracking-[0.25em] text-mocha/60">
                    {cities.length} {lang === "en" ? "cities covered" : "ciudades"}
                  </p>
                </div>
              }
              footer={
                <ButtonLink href={regionPath(lang, region.id)} variant="primary">
                  {lang === "en" ? "View region" : "Ver región"}
                </ButtonLink>
              }
            />
          );
        })}
      </div>
    </section>
  );
}
