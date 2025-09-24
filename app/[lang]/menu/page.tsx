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

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  if (!isLanguage(params.lang)) {
    notFound();
  }
  const lang = params.lang as Language;
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
  params: { lang: string };
}

export default function MenuPage({ params }: MenuPageProps) {
  if (!isLanguage(params.lang)) {
    notFound();
  }
  const lang = params.lang as Language;
  const dictionary = getDictionary(lang);

  const sections = lang === "en" ? MENU_SECTIONS.en : MENU_SECTIONS.es;
  const description = signatureDescriptions[lang];

  const addOnCards =
    lang === "en"
      ? [
          {
            title: "Signature syrups",
            description: "Brown butter toffee, brûléed sugar, orange blossom cardamom, peppermint mocha.",
          },
          {
            title: "Interactive bars",
            description: "Affogato dessert bar, espresso martini collab, sparkling tea lounge.",
          },
          {
            title: "Styling",
            description: "Custom signage, floral styling, monogrammed cups, bilingual baristas.",
          },
        ]
      : [
          {
            title: "Jarabes de autor",
            description: "Toffee de mantequilla, azúcar brûlée, azahar con cardamomo, peppermint mocha.",
          },
          {
            title: "Barras interactivas",
            description: "Bar de affogato, colaboración para espresso martini, lounge de té espumoso.",
          },
          {
            title: "Ambientación",
            description: "Señalización personalizada, flores, vasos con monograma, baristas bilingües.",
          },
        ];

  return (
    <section className="space-y-10">
      <SectionHeading
        eyebrow={dictionary.nav.menu}
        title={metaCopy[lang].title}
        description={description}
      />
      <MenuGrid items={sections} />
      <div className="grid gap-4 md:grid-cols-3">
        {addOnCards.map((addon) => (
          <Card key={addon.title} title={addon.title} description={addon.description} />
        ))}
      </div>
    </section>
  );
}
