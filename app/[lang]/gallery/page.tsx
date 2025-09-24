import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { getDictionary } from "@/lib/i18n";
import { isLanguage, Language } from "@/lib/languages";
import { sectionPath } from "@/lib/routes";

export const revalidate = 86400;

const galleryItems = [
  { src: "/images/gallery-wedding-toast.webp", alt: "Wedding couple cheering with lattes" },
  { src: "/images/gallery-baby-shower.webp", alt: "Baby shower coffee cart" },
  { src: "/images/gallery-corporate.webp", alt: "Corporate espresso bar" },
  { src: "/images/gallery-station.webp", alt: "Espresso cart with floral styling" },
  { src: "/images/gallery-teacher.webp", alt: "Teacher appreciation coffee station" },
  { src: "/images/gallery-tournament.webp", alt: "Sports tournament coffee cart" },
];

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  if (!isLanguage(params.lang)) {
    notFound();
  }
  const lang = params.lang as Language;
  const baseTitle = lang === "en" ? "Gallery" : "Galería";
  const baseDescription =
    lang === "en"
      ? "A look at Delightful Bean coffee carts at weddings, corporate lounges, and community events."
      : "Un vistazo a los carritos de café Delightful Bean en bodas, eventos corporativos y comunidad.";
  return {
    title: baseTitle,
    description: baseDescription,
    alternates: {
      canonical: sectionPath(lang, "gallery"),
      languages: {
        "en-US": sectionPath("en", "gallery"),
        "es-US": sectionPath("es", "gallery"),
      },
    },
  };
}

interface GalleryPageProps {
  params: { lang: string };
}

export default function GalleryPage({ params }: GalleryPageProps) {
  if (!isLanguage(params.lang)) {
    notFound();
  }
  const lang = params.lang as Language;
  const dictionary = getDictionary(lang);

  return (
    <section className="space-y-8">
      <SectionHeading
        eyebrow={dictionary.gallery.title}
        title={dictionary.gallery.title}
        description={dictionary.gallery.description}
      />
      <GalleryGrid items={galleryItems} />
    </section>
  );
}
