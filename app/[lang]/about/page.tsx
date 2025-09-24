import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { IconRow } from "@/components/ui/IconRow";
import { Stepper } from "@/components/ui/Stepper";
import { BeanIcon, CoffeeCupIcon, MapPinIcon, ThumbsUpIcon } from "@/components/icons/Icons";
import { isLanguage, Language } from "@/lib/languages";
import { sectionPath } from "@/lib/routes";

export const revalidate = 86400;

const metaByLanguage: Record<Language, { title: string; description: string }> = {
  en: {
    title: "About",
    description: "Meet the family-owned coffee cart serving Tampa Bay with handcrafted espresso and heartfelt hospitality.",
  },
  es: {
    title: "Nosotros",
    description: "Conoce al carrito de café familiar que sirve Tampa Bay con espresso artesanal y hospitalidad genuina.",
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
      canonical: sectionPath(lang, "about"),
      languages: {
        "en-US": sectionPath("en", "about"),
        "es-US": sectionPath("es", "about"),
      },
    },
  };
}

interface AboutPageProps {
  params: Promise<{ lang: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const resolvedParams = await params;
  if (!isLanguage(resolvedParams.lang)) {
    notFound();
  }
  const lang = resolvedParams.lang as Language;

  const story =
    lang === "en"
      ? "Delightful Bean Coffee Cart is owned by sisters Sofia and Elena Rivera, two lifelong baristas who transformed their love for third-wave coffee into a mobile espresso experience."
      : "Delightful Bean Coffee Cart pertenece a las hermanas Sofía y Elena Rivera, baristas de toda la vida que transformaron su pasión por el café de especialidad en una experiencia móvil.";

  const mission =
    lang === "en"
      ? "We believe a beautiful cup of coffee can anchor a celebration, create conversation, and honor the people you’re celebrating."
      : "Creemos que una taza de café hermosa puede anclar una celebración, crear conversación y honrar a quienes festejas.";

  const values = [
    {
      icon: <CoffeeCupIcon className="h-12 w-12" />,
      title: lang === "en" ? "Craft above convenience" : "Artesanía sobre conveniencia",
      description:
        lang === "en"
          ? "We source from Tampa roasters, pull every shot fresh, and build menus that celebrate the season."
          : "Trabajamos con tostadores de Tampa, extraemos cada shot al momento y diseñamos menús que celebran la temporada.",
    },
    {
      icon: <ThumbsUpIcon className="h-12 w-12" />,
      title: lang === "en" ? "Hospitality first" : "Hospitalidad primero",
      description:
        lang === "en"
          ? "Our bilingual baristas learn guest names, remember favorite orders, and create space for connection."
          : "Nuestras baristas bilingües aprenden los nombres, recuerdan órdenes favoritas y crean espacios de conexión.",
    },
    {
      icon: <MapPinIcon className="h-12 w-12" />,
      title: lang === "en" ? "Community roots" : "Raíces comunitarias",
      description:
        lang === "en"
          ? "We serve schools, churches, nonprofits, and small businesses across the Tampa Bay region."
          : "Servimos escuelas, iglesias, organizaciones y negocios locales en toda Tampa Bay.",
    },
    {
      icon: <BeanIcon className="h-12 w-12" />,
      title: lang === "en" ? "Curated experiences" : "Experiencias curadas",
      description:
        lang === "en"
          ? "From tasting calls to on-site styling, every detail is tailored to your celebration."
          : "Desde degustaciones hasta ambientación en sitio, cada detalle se ajusta a tu celebración.",
    },
  ];

  const timeline =
    lang === "en"
      ? [
          { title: "2016", description: "Sisters Sofia & Elena start hosting pop-up coffee bars for friends." },
          { title: "2018", description: "First mobile espresso cart launches for Tampa weddings." },
          { title: "2020", description: "Corporate and community teams join the client family." },
          { title: "2024", description: "Expanded fleet includes bilingual baristas and specialty tea carts." },
        ]
      : [
          { title: "2016", description: "Sofía y Elena comienzan pop-ups de café para amigos." },
          { title: "2018", description: "Lanzan el primer carrito de espresso para bodas en Tampa." },
          { title: "2020", description: "Equipos corporativos y comunitarios se suman a la familia." },
          { title: "2024", description: "Expandimos la flota con baristas bilingües y barras de té." },
        ];

  return (
    <section className="space-y-10">
      <SectionHeading
        eyebrow={metaByLanguage[lang].title}
        title={metaByLanguage[lang].title}
        description={story}
      />
      <Card title={lang === "en" ? "Our mission" : "Nuestra misión"} description={mission} />
      <IconRow items={values} />
      <SectionHeading title={lang === "en" ? "Our journey" : "Nuestra historia"} />
      <Stepper steps={timeline} />
    </section>
  );
}
