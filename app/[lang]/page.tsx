import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/ui/Hero";
import { IconRow } from "@/components/ui/IconRow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { MenuGrid } from "@/components/ui/MenuGrid";
import { Stepper } from "@/components/ui/Stepper";
import { Testimonials } from "@/components/ui/Testimonials";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { CTASection } from "@/components/ui/CTASection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MENU_SECTIONS, signatureDescriptions } from "@/lib/data/menu";
import { BeanIcon, CoffeeCupIcon, CalendarIcon, MapPinIcon, MilkIcon, ThumbsUpIcon } from "@/components/icons/Icons";
import { getDictionary } from "@/lib/i18n";
import { isLanguage, Language } from "@/lib/languages";
import { sectionPath, homePath, servicePath } from "@/lib/routes";
import { contactDetails } from "@/lib/data/contactDetails";
import type { ServiceId } from "@/lib/data/services";

export const revalidate = 86400;

const homeMetadata: Record<Language, { title: string; description: string }> = {
  en: {
    title: "Tampa Bay Mobile Coffee Cart & Espresso Catering",
    description:
      "Delightful Bean Coffee Cart crafts luxury espresso bars, seasonal lattes, and matcha upgrades for weddings, corporate events, and celebrations across Tampa Bay.",
  },
  es: {
    title: "Carrito de café y espresso móvil en Tampa Bay",
    description:
      "Delightful Bean Coffee Cart crea barras de espresso de lujo, lattes de temporada y opciones de matcha para bodas, eventos corporativos y celebraciones en Tampa Bay.",
  },
};

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  if (!isLanguage(params.lang)) {
    notFound();
  }
  const lang = params.lang as Language;
  const meta = homeMetadata[lang];
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: homePath(lang),
      languages: {
        "en-US": homePath("en"),
        "es-US": homePath("es"),
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: homePath(lang),
      type: "website",
      locale: lang === "en" ? "en_US" : "es_US",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

function getHomeContent(lang: Language) {
  if (lang === "en") {
    return {
      hero: {
        eyebrow: "Delightful Bean Coffee Cart",
        title: "Boutique espresso bars that travel to your celebration",
        description:
          "We bring a full-service coffeehouse to weddings, corporate events, and community gatherings across Tampa Bay—complete with baristas, custom signage, and seasonal menus.",
        highlight: "Serving Tampa Bay, St. Petersburg, Sarasota, Lakeland, and beyond",
        stats: [],
        image: {
          src: "/images/hero-coffee-cart.webp",
          alt: "Mobile coffee cart serving lattes at an outdoor wedding",
        },
        primaryLabel: "Plan your cart",
        secondaryLabel: "View our menu",
      },
      marquee: {
        label: "Trusted by",
        items: ["Oxford Exchange", "Vinoy Resort", "IMG Academy", "TechWave", "Selby Gardens"],
      },
      whyCoffee: {
        eyebrow: "Why a mobile coffee cart?",
        title: "Hospitality that keeps guests mingling and memories brewing",
        items: [
          {
            icon: <CoffeeCupIcon className="h-12 w-12" />,
            title: "Specialty drinks on demand",
            description:
              "Signature lattes, matcha spritzers, and seasonal mocktails prepared live for every guest.",
          },
          {
            icon: <BeanIcon className="h-12 w-12" />,
            title: "Local craft roasted beans",
            description: "We partner with Tampa roasters to showcase bold espresso and cold brew blends.",
          },
          {
            icon: <MilkIcon className="h-12 w-12" />,
            title: "Inclusive menu",
            description: "Dairy-free milks, decaf shots, herbal teas, and kid-friendly cocoa are always included.",
          },
        ],
      },
      featuredServices: {
        title: "Signature services",
        description:
          "From aisle to after-party, our experienced baristas elevate every service moment.",
        services: [
          {
            serviceId: "weddings" as ServiceId,
            title: "Weddings",
            description: "Custom espresso bars, late-night affogatos, and monogrammed details for your day of love.",
          },
          {
            serviceId: "corporate-events" as ServiceId,
            title: "Corporate",
            description: "Brandable coffee experiences that energize meetings, summits, and sponsorship activations.",
          },
          {
            serviceId: "teacher-appreciation" as ServiceId,
            title: "Teacher appreciation",
            description: "Joyful pop-up cafes for campuses, PTO surprises, and exam-season boosts.",
          },
        ],
      },
      seasonal: {
        eyebrow: "Signature menu",
        title: "Signature drinks & classics",
        description: signatureDescriptions.en,
        menu: MENU_SECTIONS.en,
      },
      testimonials: {
        title: "Raves from Tampa Bay hosts",
        items: [
          {
            quote: "Guests are still talking about the espresso martini lattes—they were the hit of our reception.",
            name: "Jordan + Theo",
            role: "Sarasota wedding",
          },
          {
            quote: "Our leadership team loved the branded coffee bar. Setup was flawless and the drinks were outstanding.",
            name: "Maya Collins",
            role: "Corporate summit coordinator",
          },
          {
            quote: "They made teacher appreciation week magical. The baristas were so kind to our staff.",
            name: "Principal Reed",
            role: "Wesley Chapel High",
          },
        ],
      },
      steps: {
        title: "How it works",
        description: "We make booking simple so you can focus on celebrating.",
        items: [
          {
            title: "Design",
            description: "Share your event style, guest count, and must-have flavors.",
          },
          {
            title: "Curate",
            description: "Approve a custom menu, add-ons, and timeline tailored to your run-of-show.",
          },
          {
            title: "Delight",
            description: "Our baristas handle setup, service, and cleanup with smiles to spare.",
          },
        ],
      },
      coverage: {
        eyebrow: "Service radius",
        title: "80 miles of crafted caffeine",
        description:
          "Based in Tampa with frequent routes to St. Petersburg, Clearwater, Lakeland, Bradenton, Sarasota, and beyond. Travel fees may apply outside 40 miles.",
        highlights: [
          {
            icon: <MapPinIcon className="h-12 w-12" />,
            title: "Venue-ready footprint",
            description: "Only a 6×8 ft footprint and standard outlet required.",
          },
          {
            icon: <CalendarIcon className="h-12 w-12" />,
            title: "Flexible scheduling",
            description: "Morning sunrise ceremonies to late-night receptions and multi-day activations.",
          },
          {
            icon: <ThumbsUpIcon className="h-12 w-12" />,
            title: "All-in service",
            description: "Baristas, equipment, styling, and cleanup handled start to finish.",
          },
        ],
      },
      gallery: {
        title: "Recent events",
        description: "Highlights from weddings, corporate lounges, and community celebrations.",
        items: [
          { src: "/images/gallery-station.webp", alt: "Espresso cart setup with floral styling" },
          { src: "/images/gallery-wedding-toast.webp", alt: "Couple toasting with lattes" },
          { src: "/images/gallery-corporate.webp", alt: "Corporate team grabbing coffee" },
          { src: "/images/gallery-baby-shower.webp", alt: "Matcha spritzers at baby shower" },
          { src: "/images/gallery-teacher.webp", alt: "Barista serving teachers" },
          { src: "/images/gallery-tournament.webp", alt: "Sports parents with coffee cups" },
        ],
      },
      cta: {
        title: "Ready to caffeinate your celebration?",
        description:
          "Tell us about your event and we’ll craft a tailored quote with menu ideas and add-ons to match.",
        primaryLabel: "Request a quote",
        secondaryLabel: "Download menu",
      },
    };
  }

  return {
    hero: {
      eyebrow: "Delightful Bean Coffee Cart",
      title: "Barras de espresso boutique que viajan a tu celebración",
      description:
        "Llevamos una cafetería completa a bodas, eventos corporativos y reuniones comunitarias en Tampa Bay con baristas, señalización y menús de temporada.",
      highlight: "Servicio en Tampa Bay, St. Petersburg, Sarasota, Lakeland y más",
      stats: [],
      image: {
        src: "/images/hero-coffee-cart.webp",
        alt: "Carrito de café sirviendo lattes en una boda al aire libre",
      },
      primaryLabel: "Planear mi carrito",
      secondaryLabel: "Ver el menú",
    },
    marquee: {
      label: "Clientes",
      items: ["Oxford Exchange", "Vinoy Resort", "IMG Academy", "TechWave", "Selby Gardens"],
    },
    whyCoffee: {
      eyebrow: "¿Por qué un carrito de café?",
      title: "Hospitalidad que mantiene a tus invitados conectados",
      items: [
        {
          icon: <CoffeeCupIcon className="h-12 w-12" />,
          title: "Bebidas al momento",
          description:
            "Lattes de autor, spritzers de matcha y mocktails de temporada preparados en vivo.",
        },
        {
          icon: <BeanIcon className="h-12 w-12" />,
          title: "Café local",
          description: "Trabajamos con tostadores de Tampa para resaltar espresso y cold brew premium.",
        },
        {
          icon: <MilkIcon className="h-12 w-12" />,
          title: "Menú inclusivo",
          description: "Leches vegetales, espresso descafeinado, tés herbales y cocoa para familias.",
        },
      ],
    },
    featuredServices: {
      title: "Servicios estrella",
      description: "Del pasillo al after party, elevamos cada momento con café de autor.",
      services: [
        {
          serviceId: "weddings" as ServiceId,
          title: "Bodas",
          description: "Barras personalizadas, affogatos nocturnos y detalles con monograma.",
        },
        {
          serviceId: "corporate-events" as ServiceId,
          title: "Corporativos",
          description: "Experiencias con branding que energizan juntas, summits y activaciones.",
        },
        {
          serviceId: "teacher-appreciation" as ServiceId,
          title: "Agradecimiento docente",
          description: "Pop-ups alegres para campus, PTO y semanas de exámenes.",
        },
      ],
    },
    seasonal: {
      eyebrow: "Menú principal",
      title: "Bebidas emblemáticas y clásicos",
      description: signatureDescriptions.es,
      menu: MENU_SECTIONS.es,
    },
    testimonials: {
      title: "Lo que dicen nuestros clientes",
      items: [
        {
          quote: "Los espresso martinis en latte fueron el éxito de nuestra boda.",
          name: "Jordan + Theo",
          role: "Boda en Sarasota",
        },
        {
          quote: "El bar con branding fue impecable. Servicio profesional y delicioso.",
          name: "Maya Collins",
          role: "Summit corporativo",
        },
        {
          quote: "Hicieron que la semana del maestro fuera inolvidable. Todos quedaron felices.",
          name: "Director Reed",
          role: "Wesley Chapel High",
        },
      ],
    },
    steps: {
      title: "Así funciona",
      description: "Reservar es sencillo para que disfrutes la celebración.",
      items: [
        {
          title: "Diseña",
          description: "Comparte estilo, invitados y sabores imprescindibles.",
        },
        {
          title: "Aprueba",
          description: "Confirmamos menú, complementos y horario perfecto.",
        },
        {
          title: "Celebra",
          description: "Llegamos temprano, servimos con alegría y dejamos todo impecable.",
        },
      ],
    },
    coverage: {
      eyebrow: "Radio de servicio",
      title: "80 millas de cafeína artesanal",
      description:
        "Con base en Tampa y rutas frecuentes a St. Pete, Clearwater, Lakeland, Bradenton y Sarasota. Se aplican viáticos fuera de 40 millas.",
      highlights: [
        {
          icon: <MapPinIcon className="h-12 w-12" />,
          title: "Montaje compacto",
          description: "Solo necesitamos 2×3 metros y un tomacorriente estándar.",
        },
        {
          icon: <CalendarIcon className="h-12 w-12" />,
          title: "Horarios flexibles",
          description: "Ceremonias al amanecer, recepciones nocturnas y activaciones multi día.",
        },
        {
          icon: <ThumbsUpIcon className="h-12 w-12" />,
          title: "Servicio integral",
          description: "Baristas, equipo, ambientación y limpieza incluidos.",
        },
      ],
    },
    gallery: {
      title: "Eventos recientes",
      description: "Instantes de bodas, lounges corporativos y celebraciones comunitarias.",
      items: [
        { src: "/images/gallery-station.webp", alt: "Montaje de carrito con flores" },
        { src: "/images/gallery-wedding-toast.webp", alt: "Pareja brindando con lattes" },
        { src: "/images/gallery-corporate.webp", alt: "Equipo corporativo tomando café" },
        { src: "/images/gallery-baby-shower.webp", alt: "Matcha en baby shower" },
        { src: "/images/gallery-teacher.webp", alt: "Barista sirviendo a maestros" },
        { src: "/images/gallery-tournament.webp", alt: "Padres con bebidas en torneo" },
      ],
    },
    cta: {
      title: "¿Listos para caffeinar tu evento?",
      description:
        "Cuéntanos sobre tu celebración y enviaremos una cotización con ideas de menú y complementos.",
      primaryLabel: "Solicitar cotización",
      secondaryLabel: "Descargar menú",
    },
  };
}

interface HomePageProps {
  params: { lang: string };
}

export default function HomePage({ params }: HomePageProps) {
  if (!isLanguage(params.lang)) {
    notFound();
  }
  const lang = params.lang as Language;
  const dictionary = getDictionary(lang);
  const content = getHomeContent(lang);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: contactDetails.businessName,
    description: homeMetadata[lang].description,
    email: contactDetails.email,
    telephone: contactDetails.phone,
    url: "https://www.delightfulbean.com",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 27.9506,
        longitude: -82.4572,
      },
      geoRadius: 128000,
    },
    sameAs: [
      `https://instagram.com/${contactDetails.instagram.replace("@", "")}`,
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "22:00",
      },
    ],
  };

  return (
    <>
      <Hero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        description={content.hero.description}
        primaryCta={{ label: content.hero.primaryLabel, href: sectionPath(lang, "contact") }}
        secondaryCta={{ label: content.hero.secondaryLabel, href: sectionPath(lang, "menu") }}
        image={content.hero.image}
        highlight={content.hero.highlight}
        stats={content.hero.stats}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={sectionPath(lang, "services")} variant="secondary">
            {dictionary.common.learnMore}
          </ButtonLink>
        </div>
      </Hero>

      <section className="rounded-3xl border border-latte/40 bg-white/80 p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mocha/50">
          {content.marquee.label}
        </p>
        <div className="mt-4 grid gap-4 text-mocha/60 sm:grid-cols-5">
          {content.marquee.items.map((item) => (
            <span key={item} className="text-sm font-semibold uppercase tracking-wide">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow={content.whyCoffee.eyebrow}
          title={content.whyCoffee.title}
          align="center"
        />
        <IconRow items={content.whyCoffee.items} />
      </section>

      <section className="space-y-8">
        <SectionHeading title={content.featuredServices.title} description={content.featuredServices.description} align="left" />
        <div className="grid gap-6 md:grid-cols-3">
          {content.featuredServices.services.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
              footer={
                <ButtonLink href={servicePath(lang, service.serviceId)} variant="secondary">
                  {dictionary.common.learnMore}
                </ButtonLink>
              }
            />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow={content.seasonal.eyebrow}
          title={content.seasonal.title}
          description={content.seasonal.description}
        />
        <MenuGrid items={content.seasonal.menu} />
      </section>

      <section className="space-y-8">
        <SectionHeading title={content.testimonials.title} align="center" />
        <Testimonials testimonials={content.testimonials.items} columns={3} />
      </section>

      <section className="space-y-8">
        <SectionHeading title={content.steps.title} description={content.steps.description} />
        <Stepper steps={content.steps.items} />
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow={content.coverage.eyebrow}
          title={content.coverage.title}
          description={content.coverage.description}
        />
        <IconRow items={content.coverage.highlights} />
      </section>

      <section className="space-y-8">
        <SectionHeading title={content.gallery.title} description={content.gallery.description} align="center" />
        <GalleryGrid items={content.gallery.items} />
      </section>

      <CTASection
        eyebrow={dictionary.nav.getQuote}
        title={content.cta.title}
        description={content.cta.description}
        primaryCta={{ label: content.cta.primaryLabel, href: sectionPath(lang, "contact") }}
        secondaryCta={{ label: content.cta.secondaryLabel, href: sectionPath(lang, "menu") }}
        illustration={<MilkIcon className="h-full w-full text-gold" />}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
