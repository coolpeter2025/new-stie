import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { services, ServiceId } from "@/lib/data/services";
import { getDictionary } from "@/lib/i18n";
import { isLanguage, Language } from "@/lib/languages";
import { sectionPath, servicePath } from "@/lib/routes";

export const revalidate = 86400;

const servicesMeta: Record<Language, { title: string; description: string }> = {
  en: {
    title: "Services",
    description: "Explore Delightful Bean’s mobile coffee cart services for weddings, corporate events, community celebrations, and more.",
  },
  es: {
    title: "Servicios",
    description: "Descubre los servicios de nuestro carrito de café móvil para bodas, eventos corporativos, comunidad y más.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  if (!isLanguage(resolvedParams.lang)) {
    notFound();
  }
  const lang = resolvedParams.lang as Language;
  return {
    title: servicesMeta[lang].title,
    description: servicesMeta[lang].description,
    alternates: {
      canonical: sectionPath(lang, "services"),
      languages: {
        "en-US": sectionPath("en", "services"),
        "es-US": sectionPath("es", "services"),
      },
    },
  };
}

interface ServicesPageProps {
  params: Promise<{ lang: string }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const resolvedParams = await params;
  if (!isLanguage(resolvedParams.lang)) {
    notFound();
  }
  const lang = resolvedParams.lang as Language;
  const dictionary = getDictionary(lang);

  const introCopy =
    lang === "en"
      ? "Choose the service experience that matches your celebration. Every package includes professional baristas, espresso equipment, dairy + oat milk, custom signage, and full setup/cleanup."
      : "Elige la experiencia que mejor se adapte a tu evento. Todos los paquetes incluyen baristas profesionales, equipo de espresso, leches entera y de avena, señalización personalizada y montaje completo.";

  return (
    <section className="space-y-10">
      <SectionHeading
        eyebrow={dictionary.nav.services}
        title={servicesMeta[lang].title}
        description={introCopy}
      />
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => {
          const content = service.content[lang];
          const serviceId = service.id as ServiceId;
          return (
            <Card
              key={serviceId}
              title={content.name}
              description={
                (() => {
                  const source = (content.inclusions[0]?.points ?? []) as string[];
                  const pts = source
                    .filter((pt) => /espresso|latte|cappuccin|cold brew|coffee|café|descafeinado/i.test(pt))
                    .slice(0, 3);
                  const items = pts.length > 0 ? pts : ["Espresso drinks", "Lattes & cappuccinos", "Cold brew"];
                  return (
                    <div className="space-y-3">
                      <ul className="space-y-1 text-sm text-mocha/70">
                        {items.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal" aria-hidden />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })()
              }
              footer={
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-mocha/60">
                    {content.hero.eyebrow}
                  </span>
                  <ButtonLink href={servicePath(lang, serviceId)} variant="primary">
                    {dictionary.common.learnMore}
                  </ButtonLink>
                </div>
              }
            />
          );
        })}
      </div>
    </section>
  );
}
