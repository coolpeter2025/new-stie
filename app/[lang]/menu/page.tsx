import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MENU_SECTIONS, signatureDescriptions } from "@/lib/data/menu";
import { MenuGrid } from "@/components/ui/MenuGrid";
import { Card } from "@/components/ui/Card";
import { getDictionary } from "@/lib/i18n";
import { isLanguage, Language } from "@/lib/languages";
import { sectionPath } from "@/lib/routes";

export const revalidate = 86400;

const metaCopy: Record<Language, { title: string; description: string }> = {
  en: {
    title: "Menu",
    description: "Seasonal espresso drinks, teas, and mocktails crafted for Tampa Bay events.",
  },
  es: {
    title: "Menú",
    description: "Bebidas de espresso, tés y mocktails de temporada para eventos en Tampa Bay.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  if (!isLanguage(resolvedParams.lang)) {
    notFound();
  }
  const lang = resolvedParams.lang as Language;
  return {
    title: metaCopy[lang].title,
    description: metaCopy[lang].description,
    alternates: {
      canonical: sectionPath(lang, "menu"),
      languages: {
        "en-US": sectionPath("en", "menu"),
        "es-US": sectionPath("es", "menu"),
      },
    },
  };
}

interface MenuPageProps {
  params: Promise<{ lang: string }>;
}

export default async function MenuPage({ params }: MenuPageProps) {
  const resolvedParams = await params;
  if (!isLanguage(resolvedParams.lang)) {
    notFound();
  }
  const lang = resolvedParams.lang as Language;
  const dictionary = getDictionary(lang);

  const sections = lang === "en" ? MENU_SECTIONS.en : MENU_SECTIONS.es;
  const description = signatureDescriptions[lang];


  return (
    <section className="space-y-10">
      <SectionHeading
        eyebrow={dictionary.nav.menu}
        title={metaCopy[lang].title}
        description={description}
      />
      <MenuGrid items={sections} />
    </section>
  );
}
