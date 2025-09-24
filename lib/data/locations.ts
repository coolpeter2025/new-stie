import { Language } from "../languages";
import { ServiceId } from "./services";

export type RegionId =
  | "tampa-bay-region"
  | "hillsborough-county"
  | "pinellas-county"
  | "pasco-county"
  | "hernando-county"
  | "polk-county"
  | "manatee-county"
  | "sarasota-county";

export interface RegionContent {
  slug: string;
  name: string;
  headline: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  logistics: string[];
  featuredVenues: string[];
  serviceHighlights: string[];
  metaTitle: string;
  metaDescription: string;
}

export interface CityContent {
  slug: string;
  name: string;
  headline: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  travelTime: string;
  venues: string[];
  recentEvents: string[];
  testimonial: { quote: string; name: string; role?: string };
  metaTitle: string;
  metaDescription: string;
}

export interface CityDefinition {
  id: string;
  regionId: RegionId;
  content: Record<Language, CityContent>;
}

export interface RegionDefinition {
  id: RegionId;
  content: Record<Language, RegionContent>;
}

export const regions: RegionDefinition[] = [
  {
    id: "tampa-bay-region",
    content: {
      en: {
        slug: "tampa-bay-region",
        name: "Tampa Bay Region",
        headline: "Mobile coffee cart service across the Tampa Bay coast",
        description:
          "From downtown Tampa rooftops to Gulf-front celebrations in St. Pete and Sarasota, Delightful Bean covers the full Tampa Bay corridor with luxe espresso service, matcha upgrades, and polished baristas.",
        heroImage: "/images/delightful-bean-cart.webp",
        heroAlt: "Delightful Bean coffee cart setup in Tampa Bay",
        logistics: [
          "Full-service coverage within an 80-mile radius of Tampa Bay",
          "Travel fees may apply for events beyond 40 miles",
          "Commercial-grade equipment, power management, and water tanks included",
        ],
        featuredVenues: [
          "Oxford Exchange",
          "Armature Works",
          "Vinoy Resort",
          "Fenway Hotel",
          "Powel Crosley Estate",
        ],
        serviceHighlights: [
          "Espresso, cold brew, tea, and cocoa options",
          "Dairy, oat, and almond milk always included",
          "Custom signage, menu translations, and bilingual baristas available",
        ],
        metaTitle: "Tampa Bay Mobile Coffee Cart Catering",
        metaDescription:
          "Delightful Bean serves the entire Tampa Bay region with on-site espresso carts for weddings, corporate events, and celebrations.",
      },
      es: {
        slug: "region-de-tampa-bay",
        name: "Región de Tampa Bay",
        headline: "Carrito de café móvil en toda la bahía de Tampa",
        description:
          "Desde azoteas en Tampa hasta celebraciones frente al Golfo en St. Pete y Sarasota, Delightful Bean cubre todo el corredor de Tampa Bay con espresso premium, opciones de matcha y baristas profesionales.",
        heroImage: "/images/delightful-bean-cart.webp",
        heroAlt: "Carrito de café Delightful Bean en Tampa Bay",
        logistics: [
          "Cobertura completa dentro de 80 millas de la bahía de Tampa",
          "Se aplican viáticos para eventos a más de 40 millas",
          "Equipo comercial, gestión eléctrica y tanques de agua incluidos",
        ],
        featuredVenues: [
          "Oxford Exchange",
          "Armature Works",
          "Vinoy Resort",
          "Fenway Hotel",
          "Powel Crosley Estate",
        ],
        serviceHighlights: [
          "Espresso, cold brew, té y chocolate caliente",
          "Leche entera, de avena y almendra incluidas",
          "Señalización personalizada, menús bilingües y baristas bilingües",
        ],
        metaTitle: "Carrito de café en la región de Tampa Bay",
        metaDescription:
          "Delightful Bean atiende toda la región de Tampa Bay con carritos de espresso para bodas, eventos corporativos y celebraciones.",
      },
    },
  },
  {
    id: "hillsborough-county",
    content: {
      en: {
        slug: "hillsborough-county",
        name: "Hillsborough County",
        headline: "Espresso cart catering throughout Hillsborough County",
        description:
          "We frequent downtown Tampa high-rises, historic Ybor studios, and countryside estates in Plant City, delivering coffee experiences that wow guests.",
        heroImage: "/images/hillsborough-county.webp",
        heroAlt: "Coffee cart in Hillsborough County venue",
        logistics: [
          "Waived travel fees within Tampa, Brandon, Riverview, and Plant City",
          "Preferred vendor with multiple downtown Tampa venues",
          "Adaptable power solutions for barns and outdoor spaces",
        ],
        featuredVenues: [
          "Armature Works",
          "Tampa River Center",
          "Cross Creek Ranch",
          "The Orlo",
          "Sparkman Wharf",
        ],
        serviceHighlights: [
          "Popular for corporate HQ meetings and waterfront weddings",
          "Morning teacher appreciation routes across Hillsborough schools",
          "Tailored menus for Gasparilla season and local festivals",
        ],
        metaTitle: "Hillsborough County Coffee Cart Catering",
        metaDescription:
          "Delightful Bean serves Tampa, Brandon, Riverview, Plant City, and Carrollwood with on-site espresso carts for events.",
      },
      es: {
        slug: "condado-de-hillsborough",
        name: "Condado de Hillsborough",
        headline: "Carrito de espresso en todo el condado de Hillsborough",
        description:
          "Visitamos rascacielos de downtown Tampa, estudios históricos en Ybor y haciendas en Plant City con experiencias de café que sorprenden.",
        heroImage: "/images/hillsborough-county.webp",
        heroAlt: "Carrito de café en un venue de Hillsborough",
        logistics: [
          "Sin viáticos dentro de Tampa, Brandon, Riverview y Plant City",
          "Proveedor preferido en múltiples venues de downtown Tampa",
          "Soluciones eléctricas para graneros y espacios exteriores",
        ],
        featuredVenues: [
          "Armature Works",
          "Tampa River Center",
          "Cross Creek Ranch",
          "The Orlo",
          "Sparkman Wharf",
        ],
        serviceHighlights: [
          "Ideal para reuniones corporativas y bodas frente al agua",
          "Rutas matutinas de agradecimiento docente en escuelas de Hillsborough",
          "Menús personalizados para Gasparilla y festivales locales",
        ],
        metaTitle: "Carrito de café en Hillsborough County",
        metaDescription:
          "Delightful Bean atiende Tampa, Brandon, Riverview, Plant City y Carrollwood con carritos de espresso en sitio.",
      },
    },
  },
  {
    id: "pinellas-county",
    content: {
      en: {
        slug: "pinellas-county",
        name: "Pinellas County",
        headline: "Coastal coffee cart experiences throughout Pinellas County",
        description:
          "Beachfront weddings, art-forward corporate retreats, and sunset celebrations in St. Petersburg, Clearwater, and Largo love our cart.",
        heroImage: "/images/pinellas-county.webp",
        heroAlt: "Coffee cart by the beach in Pinellas County",
        logistics: [
          "Sunrise to sunset service for waterfront venues",
          "Generator support for beach and park permits",
          "Close partnerships with resort and gallery teams",
        ],
        featuredVenues: [
          "The Vinoy",
          "The Birchwood",
          "Safety Harbor Resort",
          "The Bilmar Beach Resort",
          "Morean Center for Clay",
        ],
        serviceHighlights: [
          "Perfect for sunset espresso martini bars",
          "Elopement and micro-wedding friendly",
          "Bilingual teams for destination guest lists",
        ],
        metaTitle: "Pinellas County Coffee Cart Catering",
        metaDescription:
          "Delightful Bean serves St. Petersburg, Clearwater, Largo, Dunedin, Palm Harbor, and Tarpon Springs with mobile espresso bars.",
      },
      es: {
        slug: "condado-de-pinellas",
        name: "Condado de Pinellas",
        headline: "Experiencias de café costeras en el condado de Pinellas",
        description:
          "Bodas frente al mar, retiros corporativos creativos y celebraciones al atardecer en St. Petersburg, Clearwater y Largo adoraron nuestro carrito.",
        heroImage: "/images/pinellas-county.webp",
        heroAlt: "Carrito de café frente al mar en Pinellas",
        logistics: [
          "Servicio desde el amanecer hasta el atardecer en venues frente al agua",
          "Soporte con generador para permisos en playa y parques",
          "Alianzas con resorts y galerías locales",
        ],
        featuredVenues: [
          "The Vinoy",
          "The Birchwood",
          "Safety Harbor Resort",
          "The Bilmar Beach Resort",
          "Morean Center for Clay",
        ],
        serviceHighlights: [
          "Ideal para barras de espresso martini al atardecer",
          "Perfecto para elopements y microbodas",
          "Equipo bilingüe para invitados internacionales",
        ],
        metaTitle: "Carrito de café en Pinellas County",
        metaDescription:
          "Delightful Bean atiende St. Petersburg, Clearwater, Largo, Dunedin, Palm Harbor y Tarpon Springs con barras de espresso móviles.",
      },
    },
  },
  {
    id: "pasco-county",
    content: {
      en: {
        slug: "pasco-county",
        name: "Pasco County",
        headline: "Mobile espresso bars for Pasco County gatherings",
        description:
          "Teacher appreciation routes in Wesley Chapel, community festivals in Land O' Lakes, and sports tournaments in New Port Richey keep us busy year-round.",
        heroImage: "/images/pasco-county.webp",
        heroAlt: "Coffee cart at a Pasco County community event",
        logistics: [
          "Discounted weekday rates for schools and churches",
          "Cold brew and hydration upgrades for sports complexes",
          "Quick setup for neighborhood clubhouses and HOAs",
        ],
        featuredVenues: [
          "Tampa Premium Outlets",
          "Epperson Lagoon",
          "Seven Springs Golf & Country Club",
          "The Edison Suncoast",
          "Longleaf Community Club",
        ],
        serviceHighlights: [
          "Loved by teacher appreciation teams",
          "Perfect for fundraising galas and HOA socials",
          "Extended service hours for tournament weekends",
        ],
        metaTitle: "Pasco County Mobile Coffee Cart",
        metaDescription:
          "Delightful Bean brings espresso carts to Wesley Chapel, Land O' Lakes, New Port Richey, and Trinity events.",
      },
      es: {
        slug: "condado-de-pasco",
        name: "Condado de Pasco",
        headline: "Barras de espresso móviles para eventos en Pasco",
        description:
          "Rutas de agradecimiento docente en Wesley Chapel, festivales comunitarios en Land O' Lakes y torneos en New Port Richey nos mantienen activos todo el año.",
        heroImage: "/images/pasco-county.webp",
        heroAlt: "Carrito de café en un evento comunitario de Pasco",
        logistics: [
          "Tarifas especiales entre semana para escuelas e iglesias",
          "Upgrades de cold brew e hidratación para complejos deportivos",
          "Montaje ágil para clubhouses y HOAs",
        ],
        featuredVenues: [
          "Tampa Premium Outlets",
          "Epperson Lagoon",
          "Seven Springs Golf & Country Club",
          "The Edison Suncoast",
          "Longleaf Community Club",
        ],
        serviceHighlights: [
          "Preferido por equipos de agradecimiento docente",
          "Ideal para galas de recaudación y eventos de HOA",
          "Cobertura extendida para fines de semana de torneos",
        ],
        metaTitle: "Carrito de café en Pasco County",
        metaDescription:
          "Delightful Bean lleva carritos de espresso a eventos en Wesley Chapel, Land O' Lakes, New Port Richey y Trinity.",
      },
    },
  },
  {
    id: "hernando-county",
    content: {
      en: {
        slug: "hernando-county",
        name: "Hernando County",
        headline: "Coffee cart experiences for Spring Hill and Brooksville",
        description:
          "Rustic barn weddings, community appreciation events, and sports banquets in Hernando County love our polished baristas and flexible menus.",
        heroImage: "/images/hernando-county.webp",
        heroAlt: "Coffee cart in Hernando County barn wedding",
        logistics: [
          "Travel-friendly for farms, barns, and community centers",
          "Generator available for remote properties",
          "Customizable menus for family reunions and celebrations",
        ],
        featuredVenues: [
          "Saxon Manor",
          "Silverthorn Country Club",
          "Lake House Recreation Complex",
          "Chinsegut Hill Retreat",
          "Serenova Acres",
        ],
        serviceHighlights: [
          "Ideal for teacher appreciation breakfasts",
          "Loved by athletic booster clubs",
          "Seasonal menus for fall festivals and holiday markets",
        ],
        metaTitle: "Hernando County Coffee Cart",
        metaDescription:
          "Delightful Bean serves Spring Hill and Brooksville events with mobile espresso catering.",
      },
      es: {
        slug: "condado-de-hernando",
        name: "Condado de Hernando",
        headline: "Experiencias de café para Spring Hill y Brooksville",
        description:
          "Bodas en graneros, eventos comunitarios y banquetes deportivos en Hernando disfrutan de nuestro servicio profesional y menús flexibles.",
        heroImage: "/images/hernando-county.webp",
        heroAlt: "Carrito de café en boda de granero en Hernando",
        logistics: [
          "Ideal para granjas, graneros y centros comunitarios",
          "Generador disponible para propiedades remotas",
          "Menús personalizables para reuniones familiares",
        ],
        featuredVenues: [
          "Saxon Manor",
          "Silverthorn Country Club",
          "Lake House Recreation Complex",
          "Chinsegut Hill Retreat",
          "Serenova Acres",
        ],
        serviceHighlights: [
          "Perfecto para desayunos de agradecimiento docente",
          "Preferido por clubes deportivos",
          "Menús de temporada para festivales y mercados navideños",
        ],
        metaTitle: "Carrito de café en Hernando County",
        metaDescription:
          "Delightful Bean atiende eventos en Spring Hill y Brooksville con catering de espresso móvil.",
      },
    },
  },
  {
    id: "polk-county",
    content: {
      en: {
        slug: "polk-county",
        name: "Polk County",
        headline: "Lakeland coffee cart catering and beyond",
        description:
          "From downtown Lakeland event halls to rustic venues in Plant City’s neighboring towns, our cart brings third-wave coffee culture to Polk celebrations.",
        heroImage: "/images/polk-county.webp",
        heroAlt: "Coffee cart setup in Lakeland venue",
        logistics: [
          "Standard service radius includes Lakeland and Winter Haven",
          "Flexible weekday rates for corporate campuses",
          "Optional cold brew kegerator for large headcounts",
        ],
        featuredVenues: [
          "Haus 820",
          "Summit Venue",
          "Bonnet Springs Park",
          "The Manor on the Lake",
          "Idlewood",
        ],
        serviceHighlights: [
          "Popular for teacher appreciation in charter schools",
          "Great for corporate retreats and training days",
          "Seasonal menus inspired by Strawberry Fest",
        ],
        metaTitle: "Polk County Coffee Cart Catering",
        metaDescription:
          "Delightful Bean delivers espresso catering to Lakeland events with mobile coffee carts and customized menus.",
      },
      es: {
        slug: "condado-de-polk",
        name: "Condado de Polk",
        headline: "Carrito de café para Lakeland y alrededores",
        description:
          "Desde salones en Lakeland hasta venues rústicos cercanos a Plant City, llevamos café de tercera ola a celebraciones de Polk.",
        heroImage: "/images/polk-county.webp",
        heroAlt: "Carrito de café en un venue de Lakeland",
        logistics: [
          "Radio estándar incluye Lakeland y Winter Haven",
          "Tarifas flexibles entre semana para empresas",
          "Opción de barril de cold brew para grandes aforos",
        ],
        featuredVenues: [
          "Haus 820",
          "Summit Venue",
          "Bonnet Springs Park",
          "The Manor on the Lake",
          "Idlewood",
        ],
        serviceHighlights: [
          "Favorito en escuelas charter",
          "Excelente para retiros corporativos",
          "Menús de temporada inspirados en Strawberry Fest",
        ],
        metaTitle: "Carrito de café en Polk County",
        metaDescription:
          "Delightful Bean ofrece catering de espresso en eventos de Lakeland con carritos de café personalizados.",
      },
    },
  },
  {
    id: "manatee-county",
    content: {
      en: {
        slug: "manatee-county",
        name: "Manatee County",
        headline: "Bringing specialty coffee to Bradenton events",
        description:
          "From riverfront venues to coastal retreats on Anna Maria Island, our cart keeps celebrations in Manatee County refreshed.",
        heroImage: "/images/manatee-county.webp",
        heroAlt: "Coffee cart near Bradenton waterfront",
        logistics: [
          "Sunrise weddings and brunch service available",
          "Power and generator solutions for waterfront decks",
          "Preferred vendor for several Bradenton venues",
        ],
        featuredVenues: [
          "Powel Crosley Estate",
          "Bakers Ranch",
          "The Bishop Museum",
          "IMG Academy venues",
          "Rosemary & Thyme",
        ],
        serviceHighlights: [
          "Great for destination weddings and retreats",
          "Pairs well with boat charter welcome events",
          "Bilingual service for international guests",
        ],
        metaTitle: "Manatee County Mobile Coffee Cart",
        metaDescription:
          "Delightful Bean brings mobile coffee carts to Bradenton and Manatee County weddings, corporates, and celebrations.",
      },
      es: {
        slug: "condado-de-manatee",
        name: "Condado de Manatee",
        headline: "Café especial para eventos en Bradenton",
        description:
          "Desde venues frente al río hasta retiros en Anna Maria Island, nuestro carrito mantiene frescas las celebraciones en Manatee.",
        heroImage: "/images/manatee-county.webp",
        heroAlt: "Carrito de café cerca del río en Bradenton",
        logistics: [
          "Disponible para bodas al amanecer y brunch",
          "Soluciones eléctricas para decks frente al agua",
          "Proveedor preferido en varios venues de Bradenton",
        ],
        featuredVenues: [
          "Powel Crosley Estate",
          "Bakers Ranch",
          "The Bishop Museum",
          "IMG Academy venues",
          "Rosemary & Thyme",
        ],
        serviceHighlights: [
          "Excelente para bodas destino y retiros",
          "Perfecto para eventos de bienvenida en barco",
          "Servicio bilingüe para invitados internacionales",
        ],
        metaTitle: "Carrito de café en Manatee County",
        metaDescription:
          "Delightful Bean lleva carritos de café a bodas, eventos corporativos y celebraciones en Bradenton y Manatee.",
      },
    },
  },
  {
    id: "sarasota-county",
    content: {
      en: {
        slug: "sarasota-county",
        name: "Sarasota County",
        headline: "Sarasota’s go-to mobile espresso cart",
        description:
          "Art-forward galas, beach weddings on Siesta Key, and corporate retreats in downtown Sarasota rely on our polished, modern coffee cart.",
        heroImage: "/images/sarasota-county.webp",
        heroAlt: "Coffee cart near Siesta Key beach",
        logistics: [
          "Luxury display styling to match Sarasota’s arts scene",
          "Seasonal menu options inspired by coastal flavors",
          "On-call bilingual baristas for international guest lists",
        ],
        featuredVenues: [
          "Selby Gardens",
          "The Ringling",
          "Hyatt Regency Sarasota",
          "Art Ovation Hotel",
          "The Westin Sarasota",
        ],
        serviceHighlights: [
          "Ideal for art galleries and philanthropy galas",
          "Beach ceremony coverage with portable shade",
          "Corporate wellness retreats love our matcha bar",
        ],
        metaTitle: "Sarasota Coffee Cart Catering",
        metaDescription:
          "Delightful Bean delivers espresso cart catering to Sarasota, Siesta Key, and coastal venues.",
      },
      es: {
        slug: "condado-de-sarasota",
        name: "Condado de Sarasota",
        headline: "El carrito de espresso favorito de Sarasota",
        description:
          "Galas artísticas, bodas en Siesta Key y retiros corporativos en Sarasota confían en nuestro carrito moderno y elegante.",
        heroImage: "/images/sarasota-county.webp",
        heroAlt: "Carrito de café cerca de la playa de Siesta Key",
        logistics: [
          "Estilismo de lujo acorde a la escena artística de Sarasota",
          "Menús de temporada con sabores costeros",
          "Baristas bilingües disponibles para invitados internacionales",
        ],
        featuredVenues: [
          "Selby Gardens",
          "The Ringling",
          "Hyatt Regency Sarasota",
          "Art Ovation Hotel",
          "The Westin Sarasota",
        ],
        serviceHighlights: [
          "Ideal para galerías y galas benéficas",
          "Cobertura de ceremonias en playa con sombra portátil",
          "Los retiros corporativos aman nuestro bar de matcha",
        ],
        metaTitle: "Carrito de café en Sarasota",
        metaDescription:
          "Delightful Bean ofrece catering de espresso en Sarasota, Siesta Key y venues costeros.",
      },
    },
  },
];

const city = <T extends CityDefinition>(definition: T) => definition;

export const cities: CityDefinition[] = [
  city({
    id: "tampa",
    regionId: "hillsborough-county",
    content: {
      en: {
        slug: "tampa",
        name: "Tampa",
        headline: "Tampa coffee cart catering for skyline celebrations",
        description:
          "We keep Channel District rooftops, Water Street corporate retreats, and Tampa Riverwalk weddings fueled with signature espresso drinks and iced specialties.",
        heroImage: "/images/tampa-city.webp",
        heroAlt: "Coffee cart with Tampa skyline in the background",
        travelTime: "Based in Tampa with no travel fee",
        venues: [
          "Armature Works",
          "Tampa Marriott Water Street",
          "The Vault",
          "Oxford Exchange",
        ],
        recentEvents: [
          "Water Street corporate innovation summit",
          "River Center waterfront wedding reception",
          "Gasparilla parade VIP espresso bar",
        ],
        testimonial: {
          quote:
            "Delightful Bean is our go-to vendor for executive meetings. Their team handles high volume with ease.",
          name: "Samantha Fields",
          role: "Event Director, Tampa Downtown Partnership",
        },
        metaTitle: "Tampa Coffee Cart Catering",
        metaDescription:
          "Book Delightful Bean’s Tampa-based mobile espresso cart for weddings, corporate meetings, and celebrations downtown.",
      },
      es: {
        slug: "tampa",
        name: "Tampa",
        headline: "Carrito de café en Tampa para eventos con vista al skyline",
        description:
          "Mantenemos con energía a rooftops en Channel District, retiros corporativos en Water Street y bodas en Riverwalk con espresso y bebidas frías de autor.",
        heroImage: "/images/tampa-city.webp",
        heroAlt: "Carrito de café con el skyline de Tampa de fondo",
        travelTime: "Base en Tampa sin cargo de viaje",
        venues: [
          "Armature Works",
          "Tampa Marriott Water Street",
          "The Vault",
          "Oxford Exchange",
        ],
        recentEvents: [
          "Summit de innovación en Water Street",
          "Recepción de boda en Tampa River Center",
          "Bar VIP de espresso en el desfile Gasparilla",
        ],
        testimonial: {
          quote:
            "Delightful Bean es nuestro proveedor favorito para reuniones ejecutivas. Manejan grandes volúmenes con facilidad.",
          name: "Samantha Fields",
          role: "Directora de eventos, Tampa Downtown Partnership",
        },
        metaTitle: "Carrito de café en Tampa",
        metaDescription:
          "Reserva el carrito de espresso móvil de Delightful Bean para bodas, reuniones corporativas y celebraciones en Tampa.",
      },
    },
  }),
  city({
    id: "brandon",
    regionId: "hillsborough-county",
    content: {
      en: {
        slug: "brandon",
        name: "Brandon",
        headline: "Brandon mobile espresso cart for backyard and ballroom events",
        description:
          "From elegant clubhouses to intimate at-home celebrations, Brandon hosts love our polished cart, dairy-free options, and dessert pairings.",
        heroImage: "/images/brandon-florida.webp",
        heroAlt: "Coffee cart setup for a Brandon event",
        travelTime: "20 minutes from Tampa studio",
        venues: [
          "The Regent",
          "River Hills Country Club",
          "Events by Capital City",
          "Bloomingdale Golf Club",
        ],
        recentEvents: [
          "Teacher appreciation latte morning",
          "Sweet sixteen backyard celebration",
          "Corporate leadership retreat at The Regent",
        ],
        testimonial: {
          quote:
            "Our guests raved about the dairy-free lattes. Setup and teardown were completely stress-free.",
          name: "Jill Martin",
          role: "Brandon Host",
        },
        metaTitle: "Brandon Coffee Cart Catering",
        metaDescription:
          "Delightful Bean brings mobile espresso catering to Brandon weddings, birthdays, and corporate events.",
      },
      es: {
        slug: "brandon",
        name: "Brandon",
        headline: "Carrito de espresso en Brandon para eventos en casa o salón",
        description:
          "Desde clubhouses elegantes hasta celebraciones íntimas en casa, las familias de Brandon disfrutan nuestro carrito profesional y opciones sin lácteos.",
        heroImage: "/images/brandon-florida.webp",
        heroAlt: "Montaje de carrito de café para un evento en Brandon",
        travelTime: "A 20 minutos de nuestro estudio en Tampa",
        venues: [
          "The Regent",
          "River Hills Country Club",
          "Events by Capital City",
          "Bloomingdale Golf Club",
        ],
        recentEvents: [
          "Mañana de lattes para agradecer maestros",
          "Sweet sixteen íntimo en patio trasero",
          "Retiro corporativo en The Regent",
        ],
        testimonial: {
          quote:
            "Los invitados amaron los lattes sin lácteos. El montaje y desmontaje fue muy sencillo.",
          name: "Jill Martin",
          role: "Anfitriona en Brandon",
        },
        metaTitle: "Carrito de café en Brandon",
        metaDescription:
          "Delightful Bean lleva catering de espresso a bodas, cumpleaños y eventos corporativos en Brandon.",
      },
    },
  }),
  city({
    id: "riverview",
    regionId: "hillsborough-county",
    content: {
      en: {
        slug: "riverview",
        name: "Riverview",
        headline: "Riverview coffee cart catering for family celebrations",
        description:
          "Neighborhood clubhouses, gated communities, and private homes in Riverview love the warm hospitality our baristas bring.",
        heroImage: "/images/riverview-florida.webp",
        heroAlt: "Mobile coffee cart at a Riverview clubhouse",
        travelTime: "30 minutes from Tampa studio",
        venues: [
          "Southshore Bay Lagoon",
          "Winthrop Barn",
          "Summerfield Crossings",
          "The Firehouse Cultural Center",
        ],
        recentEvents: [
          "Neighborhood holiday cocoa bar",
          "Baby shower latte station",
          "Teacher appreciation week pop-up",
        ],
        testimonial: {
          quote:
            "They coordinated seamlessly with our HOA and left the clubhouse spotless.",
          name: "Carlos Rojas",
          role: "HOA President",
        },
        metaTitle: "Riverview Coffee Cart",
        metaDescription:
          "Delightful Bean serves Riverview with mobile espresso carts for showers, parties, and HOA events.",
      },
      es: {
        slug: "riverview",
        name: "Riverview",
        headline: "Carrito de café en Riverview para celebraciones familiares",
        description:
          "Clubhouses, comunidades privadas y residencias en Riverview disfrutan la hospitalidad cálida de nuestro equipo.",
        heroImage: "/images/riverview-florida.webp",
        heroAlt: "Carrito de café móvil en un clubhouse de Riverview",
        travelTime: "A 30 minutos de Tampa",
        venues: [
          "Southshore Bay Lagoon",
          "Winthrop Barn",
          "Summerfield Crossings",
          "The Firehouse Cultural Center",
        ],
        recentEvents: [
          "Barra de chocolate caliente navideña",
          "Estación de lattes para baby shower",
          "Pop-up de agradecimiento docente",
        ],
        testimonial: {
          quote:
            "Coordinan perfecto con nuestra HOA y dejan todo impecable.",
          name: "Carlos Rojas",
          role: "Presidente de HOA",
        },
        metaTitle: "Carrito de café en Riverview",
        metaDescription:
          "Delightful Bean atiende Riverview con carritos de espresso para showers, fiestas y eventos de HOA.",
      },
    },
  }),
  city({
    id: "plant-city",
    regionId: "hillsborough-county",
    content: {
      en: {
        slug: "plant-city",
        name: "Plant City",
        headline: "Plant City espresso cart for rustic venues and barn weddings",
        description:
          "From Strawberry Festival season to sunflower field weddings, our cart pairs perfectly with Plant City’s charming venues.",
        heroImage: "/images/plant-city.webp",
        heroAlt: "Coffee cart at a Plant City barn wedding",
        travelTime: "35 minutes from Tampa studio",
        venues: [
          "Wishing Well Barn",
          "Florida Rustic Barn Weddings",
          "The Lange Farm",
          "Keel Farms",
        ],
        recentEvents: [
          "Sunset wedding affogato bar",
          "Festival pop-up with strawberry cold brew",
          "Corporate farm-to-table dinner",
        ],
        testimonial: {
          quote:
            "Guests loved the strawberry-infused lattes—perfect nod to Plant City roots.",
          name: "Heather Collins",
          role: "Event Planner",
        },
        metaTitle: "Plant City Coffee Cart",
        metaDescription:
          "Delightful Bean brings espresso carts to Plant City barn weddings, festivals, and corporate gatherings.",
      },
      es: {
        slug: "plant-city",
        name: "Plant City",
        headline: "Carrito de espresso en Plant City para venues rústicos",
        description:
          "Desde la temporada del Strawberry Festival hasta bodas en campos de girasoles, nuestro carrito complementa a la perfección los venues de Plant City.",
        heroImage: "/images/plant-city.webp",
        heroAlt: "Carrito de café en boda de granero en Plant City",
        travelTime: "A 35 minutos de Tampa",
        venues: [
          "Wishing Well Barn",
          "Florida Rustic Barn Weddings",
          "The Lange Farm",
          "Keel Farms",
        ],
        recentEvents: [
          "Barra de affogato al atardecer",
          "Pop-up en festival con cold brew de fresa",
          "Cena corporativa farm-to-table",
        ],
        testimonial: {
          quote:
            "Los invitados amaron los lattes infusionados con fresa, un guiño perfecto a Plant City.",
          name: "Heather Collins",
          role: "Planner de eventos",
        },
        metaTitle: "Carrito de café en Plant City",
        metaDescription:
          "Delightful Bean lleva carritos de espresso a bodas, festivales y eventos corporativos en Plant City.",
      },
    },
  }),
  city({
    id: "carrollwood",
    regionId: "hillsborough-county",
    content: {
      en: {
        slug: "carrollwood",
        name: "Carrollwood",
        headline: "Carrollwood coffee cart for private clubs and home celebrations",
        description:
          "From country club anniversaries to backyard weddings, Carrollwood hosts trust us for elevated hospitality.",
        heroImage: "/images/carrollwood.webp",
        heroAlt: "Coffee cart at a Carrollwood home event",
        travelTime: "20 minutes from Tampa studio",
        venues: [
          "Carrollwood Country Club",
          "Forest Hills Presbyterian",
          "Carrollwood Cultural Center",
          "Private residences",
        ],
        recentEvents: [
          "Anniversary espresso bar",
          "Neighborhood holiday social",
          "Country club bridal shower",
        ],
        testimonial: {
          quote:
            "Professional, polished, and such a treat for our guests. Highly recommend for Carrollwood events.",
          name: "Lauren Bentley",
          role: "Carrollwood Resident",
        },
        metaTitle: "Carrollwood Coffee Cart",
        metaDescription:
          "Delightful Bean serves Carrollwood with mobile espresso carts for country clubs and private events.",
      },
      es: {
        slug: "carrollwood",
        name: "Carrollwood",
        headline: "Carrito de café en Carrollwood para clubes y residencias",
        description:
          "Desde aniversarios en el country club hasta bodas en casa, los anfitriones de Carrollwood confían en nuestro servicio.",
        heroImage: "/images/carrollwood.webp",
        heroAlt: "Carrito de café en evento residencial de Carrollwood",
        travelTime: "A 20 minutos de Tampa",
        venues: [
          "Carrollwood Country Club",
          "Forest Hills Presbyterian",
          "Carrollwood Cultural Center",
          "Residencias privadas",
        ],
        recentEvents: [
          "Barra de espresso para aniversario",
          "Social navideño del vecindario",
          "Bridal shower en el country club",
        ],
        testimonial: {
          quote:
            "Profesionales y elegantes. Un lujo para nuestros invitados. Recomendadísimos en Carrollwood.",
          name: "Lauren Bentley",
          role: "Residente de Carrollwood",
        },
        metaTitle: "Carrito de café en Carrollwood",
        metaDescription:
          "Delightful Bean atiende Carrollwood con carritos de espresso para clubes y eventos privados.",
      },
    },
  }),
  city({
    id: "st-petersburg",
    regionId: "pinellas-county",
    content: {
      en: {
        slug: "st-petersburg",
        name: "St. Petersburg",
        headline: "St. Petersburg coffee cart for art-forward events",
        description:
          "Museum weddings, gallery openings, and downtown rooftops in St. Pete love our stylish espresso setups and flavor-forward drinks.",
        heroImage: "/images/st-petersburg.webp",
        heroAlt: "Coffee cart outside a St. Petersburg gallery",
        travelTime: "40 minutes from Tampa studio",
        venues: [
          "The Vinoy",
          "Morean Art Center",
          "Red Mesa Events",
          "The Dali Museum",
        ],
        recentEvents: [
          "Sunken Gardens wedding espresso bar",
          "Downtown tech summit hydration lounge",
          "Gallery opening signature latte station",
        ],
        testimonial: {
          quote:
            "Their team matched our modern art aesthetic perfectly and guests loved the custom latte art.",
          name: "Avery Chen",
          role: "Gallery Curator",
        },
        metaTitle: "St. Petersburg Coffee Cart",
        metaDescription:
          "Delightful Bean brings mobile espresso catering to St. Petersburg galleries, weddings, and corporate events.",
      },
      es: {
        slug: "san-petersburgo",
        name: "San Petersburgo",
        headline: "Carrito de café en San Petersburgo para eventos artísticos",
        description:
          "Bodas en museos, inauguraciones de galerías y rooftops en downtown St. Pete disfrutan nuestro espresso estilizado y bebidas creativas.",
        heroImage: "/images/st-petersburg.webp",
        heroAlt: "Carrito de café frente a una galería en St. Petersburg",
        travelTime: "A 40 minutos de Tampa",
        venues: [
          "The Vinoy",
          "Morean Art Center",
          "Red Mesa Events",
          "The Dali Museum",
        ],
        recentEvents: [
          "Barra de espresso en boda en Sunken Gardens",
          "Lounge de hidratación en summit tecnológico",
          "Estación de lattes en apertura de galería",
        ],
        testimonial: {
          quote:
            "El equipo combinó perfecto con la estética moderna y el latte art personalizado encantó a todos.",
          name: "Avery Chen",
          role: "Curadora de galería",
        },
        metaTitle: "Carrito de café en San Petersburgo",
        metaDescription:
          "Delightful Bean ofrece catering de espresso en galerías, bodas y eventos corporativos de St. Pete.",
      },
    },
  }),
  city({
    id: "clearwater",
    regionId: "pinellas-county",
    content: {
      en: {
        slug: "clearwater",
        name: "Clearwater",
        headline: "Clearwater Beach mobile espresso cart for coastal venues",
        description:
          "Coastal weddings, sunset corporate events, and resort celebrations in Clearwater pair beautifully with our iced lattes and sparkling mocktails.",
        heroImage: "/images/clearwater.webp",
        heroAlt: "Coffee cart on a Clearwater rooftop",
        travelTime: "45 minutes from Tampa studio",
        venues: [
          "Opal Sands Resort",
          "Sandpearl Resort",
          "Clearwater Marine Aquarium",
          "Island Way Grill",
        ],
        recentEvents: [
          "Sunset vow renewal espresso cart",
          "Corporate leadership yacht reception",
          "Resort guest appreciation activation",
        ],
        testimonial: {
          quote:
            "The sparkling mocktails were a hit on a warm Gulf evening—perfect beach vibe.",
          name: "Daniela Cruz",
          role: "Clearwater Planner",
        },
        metaTitle: "Clearwater Coffee Cart",
        metaDescription:
          "Delightful Bean serves Clearwater Beach weddings and events with mobile espresso and mocktail bars.",
      },
      es: {
        slug: "clearwater",
        name: "Clearwater",
        headline: "Carrito de espresso en Clearwater Beach para venues costeros",
        description:
          "Bodas frente al mar, eventos corporativos al atardecer y celebraciones en resorts combinan con nuestros lattes helados y mocktails espumosos.",
        heroImage: "/images/clearwater.webp",
        heroAlt: "Carrito de café en rooftop de Clearwater",
        travelTime: "A 45 minutos de Tampa",
        venues: [
          "Opal Sands Resort",
          "Sandpearl Resort",
          "Clearwater Marine Aquarium",
          "Island Way Grill",
        ],
        recentEvents: [
          "Carrito de espresso para renovación de votos",
          "Recepción corporativa en yate",
          "Activación de agradecimiento para huéspedes",
        ],
        testimonial: {
          quote:
            "Los mocktails espumosos fueron perfectos para la noche cálida en el Golfo.",
          name: "Daniela Cruz",
          role: "Planner en Clearwater",
        },
        metaTitle: "Carrito de café en Clearwater",
        metaDescription:
          "Delightful Bean atiende bodas y eventos en Clearwater Beach con espresso y mocktails móviles.",
      },
    },
  }),
  city({
    id: "largo",
    regionId: "pinellas-county",
    content: {
      en: {
        slug: "largo",
        name: "Largo",
        headline: "Largo coffee cart for community events and celebrations",
        description:
          "Largo Central Park celebrations, community centers, and intimate backyard events enjoy our polished service and welcoming team.",
        heroImage: "/images/largo-florida.webp",
        heroAlt: "Coffee cart at Largo Central Park",
        travelTime: "45 minutes from Tampa studio",
        venues: [
          "Largo Central Park",
          "The Barn at Crescent Oaks",
          "Pinellas County Schools",
          "Local community centers",
        ],
        recentEvents: [
          "Community appreciation day cold brew bar",
          "Teacher appreciation latte morning",
          "Backyard wedding espresso setup",
        ],
        testimonial: {
          quote:
            "Professional and kind—our community event felt elevated thanks to their team.",
          name: "Gloria Martinez",
          role: "Community Outreach Chair",
        },
        metaTitle: "Largo Coffee Cart",
        metaDescription:
          "Delightful Bean delivers mobile espresso catering to Largo community events and celebrations.",
      },
      es: {
        slug: "largo",
        name: "Largo",
        headline: "Carrito de café en Largo para eventos comunitarios",
        description:
          "Celebraciones en Largo Central Park, centros comunitarios y eventos en casa disfrutan nuestro servicio profesional.",
        heroImage: "/images/largo-florida.webp",
        heroAlt: "Carrito de café en Largo Central Park",
        travelTime: "A 45 minutos de Tampa",
        venues: [
          "Largo Central Park",
          "The Barn at Crescent Oaks",
          "Escuelas del condado de Pinellas",
          "Centros comunitarios",
        ],
        recentEvents: [
          "Barra de cold brew para día comunitario",
          "Mañana de lattes para maestros",
          "Montaje de espresso para boda en patio",
        ],
        testimonial: {
          quote:
            "Profesionales y amables. Nuestro evento comunitario se sintió especial gracias a su equipo.",
          name: "Gloria Martínez",
          role: "Coordinadora comunitaria",
        },
        metaTitle: "Carrito de café en Largo",
        metaDescription:
          "Delightful Bean ofrece catering de espresso móvil para eventos comunitarios en Largo.",
      },
    },
  }),
  city({
    id: "palm-harbor",
    regionId: "pinellas-county",
    content: {
      en: {
        slug: "palm-harbor",
        name: "Palm Harbor",
        headline: "Palm Harbor coffee cart for golf clubs and coastal homes",
        description:
          "From Innisbrook golf retreats to waterfront residences, Palm Harbor hosts love craft espresso experiences.",
        heroImage: "/images/palm-harbor.webp",
        heroAlt: "Coffee cart at Palm Harbor golf club",
        travelTime: "50 minutes from Tampa studio",
        venues: [
          "Innisbrook Resort",
          "Crystal Beach Community",
          "Suncoast Primate Sanctuary",
          "Harbor Hall",
        ],
        recentEvents: [
          "Golf tournament hospitality lounge",
          "Coastal wedding espresso martini bar",
          "Holiday cocoa social",
        ],
        testimonial: {
          quote:
            "They brought a boutique coffeehouse feel to our golf event—huge hit with members.",
          name: "Michael Barrett",
          role: "Club Events Director",
        },
        metaTitle: "Palm Harbor Coffee Cart",
        metaDescription:
          "Delightful Bean provides mobile espresso catering to Palm Harbor golf clubs, weddings, and community events.",
      },
      es: {
        slug: "palm-harbor",
        name: "Palm Harbor",
        headline: "Carrito de café en Palm Harbor para clubes y casas costeras",
        description:
          "Desde retiros en Innisbrook hasta residencias frente al agua, Palm Harbor disfruta nuestras experiencias de espresso artesanal.",
        heroImage: "/images/palm-harbor.webp",
        heroAlt: "Carrito de café en club de golf de Palm Harbor",
        travelTime: "A 50 minutos de Tampa",
        venues: [
          "Innisbrook Resort",
          "Crystal Beach Community",
          "Suncoast Primate Sanctuary",
          "Harbor Hall",
        ],
        recentEvents: [
          "Lounge de hospitalidad para torneo de golf",
          "Barra de espresso martini en boda costera",
          "Social navideño con chocolate",
        ],
        testimonial: {
          quote:
            "Trajeron una cafetería boutique a nuestro evento en el club. Un éxito total.",
          name: "Michael Barrett",
          role: "Director de eventos del club",
        },
        metaTitle: "Carrito de café en Palm Harbor",
        metaDescription:
          "Delightful Bean ofrece catering de espresso móvil para clubes, bodas y eventos comunitarios en Palm Harbor.",
      },
    },
  }),
  city({
    id: "dunedin",
    regionId: "pinellas-county",
    content: {
      en: {
        slug: "dunedin",
        name: "Dunedin",
        headline: "Dunedin coffee cart for charming downtown gatherings",
        description:
          "Art walks, boutique weddings, and brewery buyouts in Dunedin enjoy our creative drinks and local partnerships.",
        heroImage: "/images/dunedin.webp",
        heroAlt: "Coffee cart setup in downtown Dunedin",
        travelTime: "50 minutes from Tampa studio",
        venues: [
          "Dunedin Fine Art Center",
          "The Fenway Hotel",
          "Honeymoon Island State Park",
          "Caledonia Brewing",
        ],
        recentEvents: [
          "Art stroll espresso tasting",
          "Micro wedding cappuccino bar",
          "Brewery collaboration cold brew release",
        ],
        testimonial: {
          quote:
            "Their team embraced the creative vibe of Dunedin and the coffee menu was fantastic.",
          name: "Rachel Owens",
          role: "Dunedin Downtown Events",
        },
        metaTitle: "Dunedin Coffee Cart",
        metaDescription:
          "Delightful Bean serves Dunedin art walks, weddings, and brewery events with mobile espresso bars.",
      },
      es: {
        slug: "dunedin",
        name: "Dunedin",
        headline: "Carrito de café en Dunedin para reuniones con encanto",
        description:
          "Art walks, bodas boutique y eventos en cervecerías de Dunedin disfrutan nuestras bebidas creativas y alianzas locales.",
        heroImage: "/images/dunedin.webp",
        heroAlt: "Carrito de café en el downtown de Dunedin",
        travelTime: "A 50 minutos de Tampa",
        venues: [
          "Dunedin Fine Art Center",
          "The Fenway Hotel",
          "Honeymoon Island State Park",
          "Caledonia Brewing",
        ],
        recentEvents: [
          "Cata de espresso durante art walk",
          "Barra de cappuccino para micro boda",
          "Lanzamiento de cold brew con cervecería",
        ],
        testimonial: {
          quote:
            "El equipo abrazó la vibra creativa de Dunedin y el menú estuvo increíble.",
          name: "Rachel Owens",
          role: "Eventos en Downtown Dunedin",
        },
        metaTitle: "Carrito de café en Dunedin",
        metaDescription:
          "Delightful Bean atiende art walks, bodas y eventos en cervecerías de Dunedin con barras de espresso móviles.",
      },
    },
  }),
  city({
    id: "tarpon-springs",
    regionId: "pinellas-county",
    content: {
      en: {
        slug: "tarpon-springs",
        name: "Tarpon Springs",
        headline: "Tarpon Springs espresso cart for waterfront celebrations",
        description:
          "Greek heritage celebrations, sponge docks events, and waterfront weddings pair perfectly with our espresso cart.",
        heroImage: "/images/tarpon-springs.webp",
        heroAlt: "Coffee cart along Tarpon Springs waterfront",
        travelTime: "55 minutes from Tampa studio",
        venues: [
          "Spartan Manor",
          "Tarpon Springs Yacht Club",
          "Sponge Docks",
          "Heritage Museum",
        ],
        recentEvents: [
          "Greek festival espresso lounge",
          "Waterfront wedding dessert bar",
          "Community night cold brew station",
        ],
        testimonial: {
          quote:
            "Guests loved the baklava latte we crafted together—it felt so true to Tarpon Springs.",
          name: "Eleni Papas",
          role: "Event Coordinator",
        },
        metaTitle: "Tarpon Springs Coffee Cart",
        metaDescription:
          "Delightful Bean provides mobile espresso catering for Tarpon Springs weddings and community events.",
      },
      es: {
        slug: "tarpon-springs",
        name: "Tarpon Springs",
        headline: "Carrito de espresso en Tarpon Springs para eventos frente al agua",
        description:
          "Celebraciones de herencia griega, eventos en Sponge Docks y bodas costeras combinan con nuestro carrito de espresso.",
        heroImage: "/images/tarpon-springs.webp",
        heroAlt: "Carrito de café en el waterfront de Tarpon Springs",
        travelTime: "A 55 minutos de Tampa",
        venues: [
          "Spartan Manor",
          "Tarpon Springs Yacht Club",
          "Sponge Docks",
          "Heritage Museum",
        ],
        recentEvents: [
          "Lounge de espresso en festival griego",
          "Barra de postres para boda frente al agua",
          "Estación de cold brew en noche comunitaria",
        ],
        testimonial: {
          quote:
            "El latte de baklava que creamos juntos fue un detalle perfecto para Tarpon Springs.",
          name: "Eleni Papas",
          role: "Coordinadora de eventos",
        },
        metaTitle: "Carrito de café en Tarpon Springs",
        metaDescription:
          "Delightful Bean ofrece catering de espresso móvil para bodas y eventos comunitarios en Tarpon Springs.",
      },
    },
  }),
  city({
    id: "wesley-chapel",
    regionId: "pasco-county",
    content: {
      en: {
        slug: "wesley-chapel",
        name: "Wesley Chapel",
        headline: "Wesley Chapel coffee cart for schools and master-planned communities",
        description:
          "We support Epperson Lagoon events, school appreciation weeks, and corporate offices in Wesley Chapel with tailored espresso service.",
        heroImage: "/images/wesley-chapel.webp",
        heroAlt: "Coffee cart at Epperson Lagoon",
        travelTime: "35 minutes from Tampa studio",
        venues: [
          "Epperson Lagoon",
          "Wiregrass Ranch",
          "AdventHealth Center Ice",
          "The Groves Clubhouse",
        ],
        recentEvents: [
          "Lagoon sunset espresso martini hour",
          "Teacher appreciation latte mornings",
          "Corporate wellness pop-up",
        ],
        testimonial: {
          quote:
            "They kept our staff energized during testing week with thoughtful drinks and smiles.",
          name: "Principal Mariah Lopez",
          role: "Wesley Chapel High",
        },
        metaTitle: "Wesley Chapel Coffee Cart",
        metaDescription:
          "Delightful Bean provides mobile espresso catering for Wesley Chapel schools, neighborhoods, and events.",
      },
      es: {
        slug: "wesley-chapel",
        name: "Wesley Chapel",
        headline: "Carrito de café en Wesley Chapel para escuelas y comunidades",
        description:
          "Apoyamos eventos en Epperson Lagoon, semanas de agradecimiento docente y oficinas corporativas en Wesley Chapel con espresso personalizado.",
        heroImage: "/images/wesley-chapel.webp",
        heroAlt: "Carrito de café en Epperson Lagoon",
        travelTime: "A 35 minutos de Tampa",
        venues: [
          "Epperson Lagoon",
          "Wiregrass Ranch",
          "AdventHealth Center Ice",
          "The Groves Clubhouse",
        ],
        recentEvents: [
          "Hora de espresso martini al atardecer",
          "Mañanas de latte para maestros",
          "Pop-up corporativo de bienestar",
        ],
        testimonial: {
          quote:
            "Mantuvieron a nuestro staff con energía durante la semana de exámenes con bebidas deliciosas.",
          name: "Directora Mariah López",
          role: "Wesley Chapel High",
        },
        metaTitle: "Carrito de café en Wesley Chapel",
        metaDescription:
          "Delightful Bean atiende escuelas, vecindarios y eventos en Wesley Chapel con carritos de espresso.",
      },
    },
  }),
  city({
    id: "land-o-lakes",
    regionId: "pasco-county",
    content: {
      en: {
        slug: "land-o-lakes",
        name: "Land O' Lakes",
        headline: "Land O' Lakes coffee cart for community gatherings",
        description:
          "Neighborhood socials, HOA meetings, and teacher appreciation events in Land O' Lakes are powered by our espresso cart.",
        heroImage: "/images/land-o-lakes.webp",
        heroAlt: "Coffee cart at Land O' Lakes community center",
        travelTime: "35 minutes from Tampa studio",
        venues: [
          "Connerton Clubhouse",
          "Bexley Club",
          "Heritage Harbor",
          "Local schools",
        ],
        recentEvents: [
          "Community brunch cart",
          "HOA annual meeting espresso bar",
          "Teacher appreciation espresso station",
        ],
        testimonial: {
          quote:
            "Delightful Bean’s team treated every neighbor with care and the lattes were outstanding.",
          name: "Brittany Hall",
          role: "Community Events Chair",
        },
        metaTitle: "Land O' Lakes Coffee Cart",
        metaDescription:
          "Delightful Bean offers mobile espresso carts for Land O' Lakes neighborhoods, schools, and events.",
      },
      es: {
        slug: "land-o-lakes",
        name: "Land O' Lakes",
        headline: "Carrito de café en Land O' Lakes para reuniones comunitarias",
        description:
          "Eventos vecinales, juntas de HOA y agradecimientos docentes en Land O' Lakes cuentan con nuestro carrito de espresso.",
        heroImage: "/images/land-o-lakes.webp",
        heroAlt: "Carrito de café en centro comunitario de Land O' Lakes",
        travelTime: "A 35 minutos de Tampa",
        venues: [
          "Connerton Clubhouse",
          "Bexley Club",
          "Heritage Harbor",
          "Escuelas locales",
        ],
        recentEvents: [
          "Carrito de brunch comunitario",
          "Barra de espresso para asamblea de HOA",
          "Estación de espresso para maestros",
        ],
        testimonial: {
          quote:
            "El equipo de Delightful Bean trató a cada vecino con cariño y los lattes fueron excelentes.",
          name: "Brittany Hall",
          role: "Comité de eventos comunitarios",
        },
        metaTitle: "Carrito de café en Land O' Lakes",
        metaDescription:
          "Delightful Bean ofrece carritos de espresso móviles para vecindarios, escuelas y eventos en Land O' Lakes.",
      },
    },
  }),
  city({
    id: "new-port-richey",
    regionId: "pasco-county",
    content: {
      en: {
        slug: "new-port-richey",
        name: "New Port Richey",
        headline: "New Port Richey coffee cart for riverfront and downtown events",
        description:
          "Riverfront parks, community theaters, and historic downtown venues love our welcoming espresso cart.",
        heroImage: "/images/new-port-richey.webp",
        heroAlt: "Coffee cart in downtown New Port Richey",
        travelTime: "40 minutes from Tampa studio",
        venues: [
          "Sims Park",
          "Hacienda Hotel",
          "Richey Suncoast Theatre",
          "Local breweries",
        ],
        recentEvents: [
          "Community concert espresso lounge",
          "Wedding welcome party cold brew bar",
          "Holiday cocoa crawl",
        ],
        testimonial: {
          quote:
            "Our downtown event had its best turnout yet thanks to their inviting setup and delicious drinks.",
          name: "Jessie Alvarez",
          role: "Downtown Coordinator",
        },
        metaTitle: "New Port Richey Coffee Cart",
        metaDescription:
          "Delightful Bean brings mobile espresso carts to New Port Richey riverfront and downtown events.",
      },
      es: {
        slug: "new-port-richey",
        name: "New Port Richey",
        headline: "Carrito de café en New Port Richey para eventos frente al río",
        description:
          "Parques frente al río, teatros comunitarios y venues históricos disfrutan nuestro carrito acogedor.",
        heroImage: "/images/new-port-richey.webp",
        heroAlt: "Carrito de café en el downtown de New Port Richey",
        travelTime: "A 40 minutos de Tampa",
        venues: [
          "Sims Park",
          "Hacienda Hotel",
          "Richey Suncoast Theatre",
          "Cervecerías locales",
        ],
        recentEvents: [
          "Lounge de espresso en concierto comunitario",
          "Barra de cold brew para fiesta de bienvenida",
          "Recorrido navideño de chocolate",
        ],
        testimonial: {
          quote:
            "Nuestro evento en downtown tuvo récord de asistentes gracias a su montaje atractivo y bebidas deliciosas.",
          name: "Jessie Álvarez",
          role: "Coordinadora de downtown",
        },
        metaTitle: "Carrito de café en New Port Richey",
        metaDescription:
          "Delightful Bean lleva carritos de espresso a eventos frente al río y downtown en New Port Richey.",
      },
    },
  }),
  city({
    id: "trinity",
    regionId: "pasco-county",
    content: {
      en: {
        slug: "trinity",
        name: "Trinity",
        headline: "Trinity coffee cart for upscale neighborhood events",
        description:
          "Golf club banquets, private home celebrations, and church gatherings in Trinity enjoy boutique espresso service.",
        heroImage: "/images/trinity-florida.webp",
        heroAlt: "Trinity neighborhood coffee cart setup",
        travelTime: "40 minutes from Tampa studio",
        venues: [
          "Fox Hollow Golf Club",
          "Heritage Springs Country Club",
          "Church at the Bay",
          "Private residences",
        ],
        recentEvents: [
          "Golf club awards banquet",
          "In-home 40th birthday latte bar",
          "Church volunteer appreciation night",
        ],
        testimonial: {
          quote:
            "Our members adored the espresso cart—it elevated our awards night to a new level.",
          name: "Gregory Smith",
          role: "Fox Hollow Event Chair",
        },
        metaTitle: "Trinity Coffee Cart",
        metaDescription:
          "Delightful Bean serves Trinity neighborhoods and golf clubs with mobile espresso carts.",
      },
      es: {
        slug: "trinity",
        name: "Trinity",
        headline: "Carrito de café en Trinity para vecindarios premium",
        description:
          "Banquetes en clubes de golf, celebraciones en casa y eventos de iglesia en Trinity disfrutan nuestro servicio boutique.",
        heroImage: "/images/trinity-florida.webp",
        heroAlt: "Montaje de carrito de café en vecindario de Trinity",
        travelTime: "A 40 minutos de Tampa",
        venues: [
          "Fox Hollow Golf Club",
          "Heritage Springs Country Club",
          "Church at the Bay",
          "Residencias privadas",
        ],
        recentEvents: [
          "Banquete de premios en golf club",
          "Barra de latte para cumpleaños en casa",
          "Noche de agradecimiento para voluntarios",
        ],
        testimonial: {
          quote:
            "Nuestros miembros adoraron el carrito de espresso. Elevó nuestro evento a otro nivel.",
          name: "Gregory Smith",
          role: "Coordinador de eventos en Fox Hollow",
        },
        metaTitle: "Carrito de café en Trinity",
        metaDescription:
          "Delightful Bean atiende vecindarios y clubes de golf en Trinity con carritos de espresso.",
      },
    },
  }),
  city({
    id: "spring-hill",
    regionId: "hernando-county",
    content: {
      en: {
        slug: "spring-hill",
        name: "Spring Hill",
        headline: "Spring Hill coffee cart for community and sports events",
        description:
          "From booster club banquets to neighborhood festivals, Spring Hill gatherings enjoy our friendly baristas and seasonal menus.",
        heroImage: "/images/spring-hill.webp",
        heroAlt: "Coffee cart serving Spring Hill event",
        travelTime: "45 minutes from Tampa studio",
        venues: [
          "Silverthorn Country Club",
          "Anderson Snow Park",
          "Lake House Recreation Complex",
          "Local schools",
        ],
        recentEvents: [
          "Athletics banquet espresso bar",
          "Fall festival cocoa station",
          "Teacher appreciation latte truck",
        ],
        testimonial: {
          quote:
            "Parents and students raved about the seasonal drinks—they were a highlight of our banquet.",
          name: "Coach Lisa Ramirez",
          role: "Springstead High",
        },
        metaTitle: "Spring Hill Coffee Cart",
        metaDescription:
          "Delightful Bean serves Spring Hill sports, schools, and community events with mobile espresso carts.",
      },
      es: {
        slug: "spring-hill",
        name: "Spring Hill",
        headline: "Carrito de café en Spring Hill para eventos deportivos y comunitarios",
        description:
          "Desde banquetes de booster clubs hasta festivales de vecindario, los eventos de Spring Hill disfrutan nuestros baristas y menús de temporada.",
        heroImage: "/images/spring-hill.webp",
        heroAlt: "Carrito de café sirviendo evento en Spring Hill",
        travelTime: "A 45 minutos de Tampa",
        venues: [
          "Silverthorn Country Club",
          "Anderson Snow Park",
          "Lake House Recreation Complex",
          "Escuelas locales",
        ],
        recentEvents: [
          "Barra de espresso para banquete deportivo",
          "Estación de cocoa en festival de otoño",
          "Camión de lattes para maestros",
        ],
        testimonial: {
          quote:
            "Padres y estudiantes hablaron maravillas de las bebidas de temporada. Fueron el highlight del banquete.",
          name: "Coach Lisa Ramírez",
          role: "Springstead High",
        },
        metaTitle: "Carrito de café en Spring Hill",
        metaDescription:
          "Delightful Bean atiende deportes, escuelas y eventos comunitarios en Spring Hill con carritos de espresso.",
      },
    },
  }),
  city({
    id: "brooksville",
    regionId: "hernando-county",
    content: {
      en: {
        slug: "brooksville",
        name: "Brooksville",
        headline: "Brooksville mobile espresso cart for historic venues",
        description:
          "Historic downtown venues, farm weddings, and courthouse celebrations in Brooksville get an elevated caffeine boost with Delightful Bean.",
        heroImage: "/images/brooksville.webp",
        heroAlt: "Coffee cart outside Brooksville historic venue",
        travelTime: "55 minutes from Tampa studio",
        venues: [
          "Chinsegut Hill Retreat",
          "May-Stringer House",
          "Brooksville Woman's Club",
          "City Hall Courtyard",
        ],
        recentEvents: [
          "Courthouse elopement espresso toast",
          "Fall market cold brew bar",
          "Historic home holiday tour",
        ],
        testimonial: {
          quote:
            "They respected the historic venue guidelines while delivering a beautiful setup and delicious drinks.",
          name: "Margaret Waters",
          role: "Historic Society",
        },
        metaTitle: "Brooksville Coffee Cart",
        metaDescription:
          "Delightful Bean offers mobile espresso catering to Brooksville historic and rustic venues.",
      },
      es: {
        slug: "brooksville",
        name: "Brooksville",
        headline: "Carrito de café en Brooksville para venues históricos",
        description:
          "Venues del downtown histórico, bodas en granjas y celebraciones en el courthouse se elevan con el carrito de Delightful Bean.",
        heroImage: "/images/brooksville.webp",
        heroAlt: "Carrito de café frente a venue histórico en Brooksville",
        travelTime: "A 55 minutos de Tampa",
        venues: [
          "Chinsegut Hill Retreat",
          "May-Stringer House",
          "Brooksville Woman's Club",
          "City Hall Courtyard",
        ],
        recentEvents: [
          "Brindis de espresso para elopement",
          "Barra de cold brew en mercado de otoño",
          "Tour navideño en casas históricas",
        ],
        testimonial: {
          quote:
            "Respetaron las reglas del venue histórico y ofrecieron bebidas increíbles.",
          name: "Margaret Waters",
          role: "Sociedad Histórica",
        },
        metaTitle: "Carrito de café en Brooksville",
        metaDescription:
          "Delightful Bean ofrece catering de espresso móvil en venues históricos y rústicos de Brooksville.",
      },
    },
  }),
  city({
    id: "lakeland",
    regionId: "polk-county",
    content: {
      en: {
        slug: "lakeland",
        name: "Lakeland",
        headline: "Lakeland coffee cart for murals, markets, and modern venues",
        description:
          "Haus 820 weddings, Catapult co-working events, and downtown markets in Lakeland thrive with our specialty coffee menu.",
        heroImage: "/images/lakeland.webp",
        heroAlt: "Coffee cart at Lakeland event space",
        travelTime: "35 minutes from Tampa studio",
        venues: [
          "Haus 820",
          "Catapult Lakeland",
          "Bonnet Springs Park",
          "Union Hall",
        ],
        recentEvents: [
          "Creative industry summit espresso lounge",
          "Murals in the Market cold brew activation",
          "Brunch wedding latte bar",
        ],
        testimonial: {
          quote:
            "They know Lakeland’s creative community and their seasonal drinks are always a hit.",
          name: "Tori James",
          role: "Lakeland Event Producer",
        },
        metaTitle: "Lakeland Coffee Cart",
        metaDescription:
          "Delightful Bean serves Lakeland weddings, markets, and corporate events with mobile espresso carts.",
      },
      es: {
        slug: "lakeland",
        name: "Lakeland",
        headline: "Carrito de café en Lakeland para murales, mercados y venues modernos",
        description:
          "Bodas en Haus 820, eventos en Catapult y mercados en downtown Lakeland disfrutan nuestro menú de café especial.",
        heroImage: "/images/lakeland.webp",
        heroAlt: "Carrito de café en venue de Lakeland",
        travelTime: "A 35 minutos de Tampa",
        venues: [
          "Haus 820",
          "Catapult Lakeland",
          "Bonnet Springs Park",
          "Union Hall",
        ],
        recentEvents: [
          "Lounge de espresso para summit creativo",
          "Activación de cold brew en Murals in the Market",
          "Barra de latte en boda brunch",
        ],
        testimonial: {
          quote:
            "Conocen la comunidad creativa de Lakeland y sus bebidas de temporada siempre encantan.",
          name: "Tori James",
          role: "Productora de eventos en Lakeland",
        },
        metaTitle: "Carrito de café en Lakeland",
        metaDescription:
          "Delightful Bean atiende bodas, mercados y eventos corporativos en Lakeland con carritos de espresso.",
      },
    },
  }),
  city({
    id: "bradenton",
    regionId: "manatee-county",
    content: {
      en: {
        slug: "bradenton",
        name: "Bradenton",
        headline: "Bradenton coffee cart for coastal and riverside venues",
        description:
          "Powel Crosley weddings, IMG Academy banquets, and downtown Bradenton events glow with our polished coffee cart service.",
        heroImage: "/images/bradenton.webp",
        heroAlt: "Coffee cart at Bradenton waterfront venue",
        travelTime: "55 minutes from Tampa studio",
        venues: [
          "Powel Crosley Estate",
          "Bakers Ranch",
          "The Bishop Museum",
          "IMG Academy",
        ],
        recentEvents: [
          "Destination wedding matcha bar",
          "Athlete banquet espresso martinis",
          "Riverwalk community festival",
        ],
        testimonial: {
          quote:
            "Our destination couples love working with Delightful Bean. They’re professional and creative.",
          name: "Elise Parker",
          role: "Wedding Planner",
        },
        metaTitle: "Bradenton Coffee Cart",
        metaDescription:
          "Delightful Bean brings mobile espresso carts to Bradenton waterfront weddings and events.",
      },
      es: {
        slug: "bradenton",
        name: "Bradenton",
        headline: "Carrito de café en Bradenton para venues costeros",
        description:
          "Bodas en Powel Crosley, banquetes en IMG y eventos en downtown Bradenton brillan con nuestro servicio de café.",
        heroImage: "/images/bradenton.webp",
        heroAlt: "Carrito de café en venue frente al agua en Bradenton",
        travelTime: "A 55 minutos de Tampa",
        venues: [
          "Powel Crosley Estate",
          "Bakers Ranch",
          "The Bishop Museum",
          "IMG Academy",
        ],
        recentEvents: [
          "Bar de matcha para boda destino",
          "Martinis de espresso en banquete de atletas",
          "Festival comunitario en Riverwalk",
        ],
        testimonial: {
          quote:
            "A las parejas destino les encanta trabajar con Delightful Bean. Profesionales y creativos.",
          name: "Elise Parker",
          role: "Planner de bodas",
        },
        metaTitle: "Carrito de café en Bradenton",
        metaDescription:
          "Delightful Bean ofrece carritos de espresso en bodas y eventos frente al agua en Bradenton.",
      },
    },
  }),
  city({
    id: "sarasota",
    regionId: "sarasota-county",
    content: {
      en: {
        slug: "sarasota",
        name: "Sarasota",
        headline: "Sarasota coffee cart for arts and coastal luxury events",
        description:
          "Selby Gardens galas, Siesta Key beach weddings, and downtown corporate retreats love our refined beverage program.",
        heroImage: "/images/sarasota.webp",
        heroAlt: "Coffee cart overlooking Sarasota bay",
        travelTime: "70 minutes from Tampa studio",
        venues: [
          "Marie Selby Botanical Gardens",
          "The Ringling",
          "Hyatt Regency Sarasota",
          "Art Ovation Hotel",
        ],
        recentEvents: [
          "Fine arts gala espresso pairing",
          "Siesta Key destination wedding",
          "Corporate wellness retreat matcha bar",
        ],
        testimonial: {
          quote:
            "Our gala guests were obsessed with the espresso pairings—they felt curated and luxurious.",
          name: "Victoria Lane",
          role: "Philanthropy Director",
        },
        metaTitle: "Sarasota Coffee Cart",
        metaDescription:
          "Delightful Bean delivers mobile espresso catering for Sarasota luxury events and beach weddings.",
      },
      es: {
        slug: "sarasota",
        name: "Sarasota",
        headline: "Carrito de café en Sarasota para eventos de arte y lujo costero",
        description:
          "Galas en Selby Gardens, bodas en Siesta Key y retiros corporativos en Sarasota disfrutan nuestro programa de bebidas refinado.",
        heroImage: "/images/sarasota.webp",
        heroAlt: "Carrito de café con vista a la bahía de Sarasota",
        travelTime: "A 70 minutos de Tampa",
        venues: [
          "Marie Selby Botanical Gardens",
          "The Ringling",
          "Hyatt Regency Sarasota",
          "Art Ovation Hotel",
        ],
        recentEvents: [
          "Maridaje de espresso en gala de arte",
          "Boda destino en Siesta Key",
          "Bar de matcha en retiro corporativo",
        ],
        testimonial: {
          quote:
            "Las bebidas con espresso encantaron a los invitados de la gala. Se sintieron curadas y de lujo.",
          name: "Victoria Lane",
          role: "Directora de filantropía",
        },
        metaTitle: "Carrito de café en Sarasota",
        metaDescription:
          "Delightful Bean ofrece catering de espresso para eventos de lujo y bodas en playa en Sarasota.",
      },
    },
  }),
];

export const regionSlugLookup: Record<Language, Record<RegionId, string>> = regions.reduce(
  (acc, region) => {
    acc.en[region.id] = region.content.en.slug;
    acc.es[region.id] = region.content.es.slug;
    return acc;
  },
  {
    en: {} as Record<RegionId, string>,
    es: {} as Record<RegionId, string>,
  }
);

export const citySlugLookup: Record<Language, Record<string, string>> = cities.reduce(
  (acc, cityDefinition) => {
    acc.en[cityDefinition.id] = cityDefinition.content.en.slug;
    acc.es[cityDefinition.id] = cityDefinition.content.es.slug;
    return acc;
  },
  {
    en: {} as Record<string, string>,
    es: {} as Record<string, string>,
  }
);

export const getRegionBySlug = (lang: Language, slug: string) =>
  regions.find((region) => region.content[lang].slug === slug);

export const getCityBySlug = (lang: Language, slug: string) =>
  cities.find((cityDefinition) => cityDefinition.content[lang].slug === slug);

export const regionsByLanguage = (lang: Language) =>
  regions.map((region) => region.content[lang]);

export const citiesByRegion = (lang: Language, regionId: RegionId) =>
  cities.filter((cityDefinition) => cityDefinition.regionId === regionId).map((cityDefinition) => cityDefinition.content[lang]);

export interface ServiceLocationParam {
  serviceId: ServiceId;
  regionId: RegionId;
  cityId: string;
}

export const serviceLocationCombos: ServiceLocationParam[] = [];

for (const serviceId of [
  "weddings",
  "corporate-events",
  "teacher-appreciation",
  "baby-bridal-showers",
  "birthdays",
  "church-community-events",
  "brand-activations",
  "sports-tournaments",
] as const) {
  for (const cityDefinition of cities) {
    serviceLocationCombos.push({
      serviceId,
      regionId: cityDefinition.regionId,
      cityId: cityDefinition.id,
    });
  }
}

export const allCityIds = cities.map((cityDefinition) => cityDefinition.id);

export const regionSlugToId: Record<Language, Record<string, RegionId>> = regions.reduce(
  (acc, region) => {
    acc.en[region.content.en.slug] = region.id;
    acc.es[region.content.es.slug] = region.id;
    return acc;
  },
  {
    en: {} as Record<string, RegionId>,
    es: {} as Record<string, RegionId>,
  }
);

export const citySlugToId: Record<Language, Record<string, string>> = cities.reduce(
  (acc, cityDefinition) => {
    acc.en[cityDefinition.content.en.slug] = cityDefinition.id;
    acc.es[cityDefinition.content.es.slug] = cityDefinition.id;
    return acc;
  },
  {
    en: {} as Record<string, string>,
    es: {} as Record<string, string>,
  }
);
