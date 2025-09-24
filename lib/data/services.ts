import { Language } from "../languages";
import { MENU_SECTIONS } from "./menu";

export type ServiceId =
  | "weddings"
  | "corporate-events"
  | "teacher-appreciation"
  | "baby-bridal-showers"
  | "birthdays"
  | "church-community-events"
  | "brand-activations"
  | "sports-tournaments";

export type IconKey =
  | "coffee"
  | "bean"
  | "milk"
  | "calendar"
  | "map"
  | "clock"
  | "thumbs"
  | "steam";

export interface TimedStep {
  title: string;
  description: string;
}

export interface ServiceContent {
  slug: string;
  name: string;
  pageTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    highlight: string;
    stats: { label: string; value: string }[];
  };
  valueProps: { icon: IconKey; title: string; description: string }[];
  inclusions: { title: string; points: string[] }[];
  sampleMenu: { title: string; items: string[] }[];
  addOns: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  testimonials: { quote: string; name: string; role?: string }[];
  workflow: TimedStep[];
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
  layoutVariant: "classic" | "split" | "overlay" | "gallery";
}

export interface ServiceDefinition {
  id: ServiceId;
  order: number;
  content: Record<Language, ServiceContent>;
}

export const services: ServiceDefinition[] = [
  {
    id: "weddings",
    order: 1,
    content: {
      en: {
        slug: "weddings",
        name: "Weddings",
        pageTitle: "Wedding Coffee Cart Catering in Tampa Bay",
        metaDescription:
          "Delightful Bean elevates Tampa Bay weddings with a luxury espresso bar, handcrafted lattes, and personalized coffee moments for your guests.",
        hero: {
          eyebrow: "Wedding Espresso Experiences",
          title: "Sip-worthy moments for your celebration of love",
          description:
            "From welcome lattes to a late-night espresso bar, our wedding coffee cart keeps every guest delighted. Two professional baristas, custom signage, and a menu tailored to your story come standard.",
          image: "/images/wedding-cheers.webp",
          imageAlt: "Bride and groom enjoying lattes from a coffee cart",
          highlight: "Serving couples across Tampa Bay, St. Pete, Sarasota, and beyond",
          stats: [],
        },
        valueProps: [
          {
            icon: "coffee",
            title: "Boutique espresso bar",
            description:
              "Craft cappuccinos, iced lattes, and affogato-style desserts keep the celebration buzzing well into the evening.",
          },
          {
            icon: "thumbs",
            title: "White-glove service",
            description:
              "We coordinate with your planner, venue, and catering team to ensure seamless setup, service, and teardown.",
          },
          {
            icon: "map",
            title: "Venue-ready footprint",
            description:
              "Our mobile cart fits ballroom, barn, and waterfront venues, requiring just a standard outlet and 6x8 ft space.",
          },
        ],
        inclusions: [
          {
            title: "Included in every wedding package",
            points: [
              "Two certified baristas in polished wedding attire",
              "Custom espresso cart styling with florals or signage to match",
              "Full espresso menu with dairy & oat milk at no extra cost",
              "Seasonal syrups inspired by your theme (e.g., cinnamon toast latte)",
              "Setup, power management, and complete cleanup",
            ],
          },
          {
            title: "Enhancements couples love",
            points: [
              "Cold brew welcome station for cocktail hour",
              "Evening affogato & dessert pairing bar",
              "Monogrammed cups or sleeves",
              "Matcha bar upgrade for bridal parties",
            ],
          },
        ],
        sampleMenu: MENU_SECTIONS.en,
        addOns: [
          {
            title: "Champagne & espresso toast",
            description:
              "Pair a celebratory bubbly shot with crema-topped espresso for a unique reception moment.",
          },
          {
            title: "Custom signage",
            description:
              "Hand-lettered or acrylic signage featuring your signature drink names and timeline.",
          },
          {
            title: "Matcha morning bar",
            description:
              "Perfect for bridal lounges or day-after brunches with fresh whisked matcha and flavor infusions.",
          },
        ],
        faqs: [
          {
            question: "How far in advance should we book for our wedding?",
            answer:
              "Most couples secure their date 6–9 months out. We recommend reaching out as soon as you have your venue to ensure availability.",
          },
          {
            question: "Can you create signature drinks named after us?",
            answer:
              "Absolutely. We design personalized drink cards and craft recipes that reflect your love story or favorite flavors.",
          },
          {
            question: "Do you coordinate with planners and venues?",
            answer:
              "Yes. We connect with your planner and venue to manage logistics, power requirements, floor plan placement, and load-in/load-out timing.",
          },
        ],
        testimonials: [
          {
            quote:
              "Our guests still talk about the espresso martini lattes months later. The cart looked stunning next to our cake table!",
            name: "Alyssa & Marc",
            role: "Oxford Exchange Wedding",
          },
          {
            quote:
              "Delightful Bean handled everything with our planner seamlessly. Their team kept us caffeinated through photos and the dance floor.",
            name: "Renee Harper",
            role: "Tampa Bride",
          },
        ],
        workflow: [
          {
            title: "Curate your menu",
            description:
              "We hop on a tasting call to customize flavors, seasonal syrups, and presentation details for your day.",
          },
          {
            title: "Coordinate logistics",
            description:
              "We align with your planner and venue about timelines, load-in path, and styling notes so you can relax.",
          },
          {
            title: "Celebrate in style",
            description:
              "Our baristas arrive 90 minutes early to style the cart, brew the first shots, and keep the love flowing all night.",
          },
        ],
        cta: {
          title: "Let’s design your wedding espresso bar",
          description:
            "Share your date, venue, and dream drinks. We’ll send a tailored proposal within 48 hours.",
          primaryLabel: "Request wedding quote",
          secondaryLabel: "Browse menu inspiration",
        },
        layoutVariant: "classic",
      },
      es: {
        slug: "bodas",
        name: "Bodas",
        pageTitle: "Carrito de café para bodas en Tampa Bay",
        metaDescription:
          "Delightful Bean eleva las bodas en Tampa Bay con un bar de espresso de lujo, lattes artesanales y momentos personalizados para tus invitados.",
        hero: {
          eyebrow: "Experiencias de espresso para bodas",
          title: "Momentos para brindar con cada sorbo de amor",
          description:
            "Desde lattes de bienvenida hasta un bar nocturno de espresso, nuestro carrito de café mantiene encantados a todos los invitados. Dos baristas profesionales, señalización personalizada y un menú hecho a su medida están incluidos.",
          image: "/images/wedding-cheers.webp",
          imageAlt: "Pareja recién casada disfrutando lattes en un carrito de café",
          highlight: "Servimos a parejas en Tampa Bay, St. Pete, Sarasota y más allá",
          stats: [],
        },
        valueProps: [
          {
            icon: "coffee",
            title: "Bar de espresso boutique",
            description:
              "Cappuccinos artesanales, lattes fríos y postres tipo affogato mantienen la celebración con energía toda la noche.",
          },
          {
            icon: "thumbs",
            title: "Servicio impecable",
            description:
              "Coordinamos con tu planner, el lugar y el catering para asegurar montaje, servicio y desmontaje sin estrés.",
          },
          {
            icon: "map",
            title: "Se adapta a cualquier venue",
            description:
              "Nuestro carrito cabe en salones, graneros y terrazas; solo necesitamos un tomacorriente estándar y un espacio de 2x3 metros.",
          },
        ],
        inclusions: [
          {
            title: "Incluido en cada paquete de boda",
            points: [
              "Dos baristas certificados con vestimenta elegante",
              "Decoración del carrito con flores o señalización acorde a su estilo",
              "Menú completo de espresso con leche entera y de avena sin costo adicional",
              "Jarabes de temporada inspirados en su temática (ej. latte de canela tostada)",
              "Montaje, gestión de electricidad y limpieza total",
            ],
          },
          {
            title: "Mejoras favoritas",
            points: [
              "Estación de cold brew para la hora del cóctel",
              "Bar de affogato y postres nocturnos",
              "Vasos o mangas con monograma",
              "Upgrade de matcha para el getting ready",
            ],
          },
        ],
        sampleMenu: MENU_SECTIONS.es,
        addOns: [
          {
            title: "Brindis de champagne con espresso",
            description:
              "Combina una copa burbujeante con un espresso cremoso para un momento inolvidable en la recepción.",
          },
          {
            title: "Señalización personalizada",
            description:
              "Letreros en acrílico o lettering hechos a mano con los nombres de sus bebidas de autor.",
          },
          {
            title: "Bar matutino de matcha",
            description:
              "Ideal para el lounge de la novia o el brunch post-boda con matcha fresco y sabores infundidos.",
          },
        ],
        faqs: [
          {
            question: "¿Con cuánta anticipación debemos reservar?",
            answer:
              "La mayoría de las parejas apartan su fecha entre 6 y 9 meses antes. Contáctanos en cuanto tengas venue para asegurar disponibilidad.",
          },
          {
            question: "¿Pueden crear bebidas con nuestros nombres?",
            answer:
              "Claro. Diseñamos tarjetas personalizadas y recetas que reflejen su historia o sabores favoritos.",
          },
          {
            question: "¿Coordinan con planners y venues?",
            answer:
              "Sí. Nos comunicamos con su planner y el lugar para manejar logística, electricidad, ubicación y horarios de montaje/desmontaje.",
          },
        ],
        testimonials: [
          {
            quote:
              "Nuestros invitados aún hablan de los lattes tipo martini. El carrito se veía espectacular junto a la mesa del pastel.",
            name: "Alyssa y Marc",
            role: "Boda en Oxford Exchange",
          },
          {
            quote:
              "Delightful Bean trabajó con nuestra planner sin problemas. Nos mantuvieron con energía para fotos y la pista de baile.",
            name: "Renee Harper",
            role: "Novia en Tampa",
          },
        ],
        workflow: [
          {
            title: "Curamos el menú",
            description:
              "Coordinamos una llamada de degustación para personalizar sabores, jarabes de temporada y detalles visuales.",
          },
          {
            title: "Cuidamos la logística",
            description:
              "Nos alineamos con planner y venue sobre horarios, rutas de acceso y detalles de estilo para que disfruten sin preocupaciones.",
          },
          {
            title: "Celebran sin estrés",
            description:
              "Llegamos 90 minutos antes para ambientar el carrito, preparar los primeros shots y mantener el amor en cada taza.",
          },
        ],
        cta: {
          title: "Diseñemos su bar de espresso nupcial",
          description:
            "Compartan fecha, venue y bebidas soñadas. Enviamos una propuesta personalizada en 48 horas.",
          primaryLabel: "Solicitar cotización de boda",
          secondaryLabel: "Ver menú de inspiración",
        },
        layoutVariant: "classic",
      },
    },
  },
  {
    id: "corporate-events",
    order: 2,
    content: {
      en: {
        slug: "corporate-events",
        name: "Corporate Events",
        pageTitle: "Corporate Espresso Bar Catering in Tampa Bay",
        metaDescription:
          "Fuel productive meetings and brand activations with Delightful Bean’s professional corporate coffee cart across Tampa Bay and St. Petersburg.",
        hero: {
          eyebrow: "Corporate Coffee Cart",
          title: "Keep your team energized and your brand top of mind",
          description:
            "From quarterly town halls to client appreciation lounges, our espresso bar creates a hospitality moment your attendees remember.",
          image: "/images/corporate-latte-flight.webp",
          imageAlt: "Corporate team enjoying espresso drinks at an event",
          highlight: "Trusted by HR teams, conference planners, and marketing agencies",
          stats: [],
        },
        valueProps: [
          {
            icon: "calendar",
            title: "Boost engagement",
            description:
              "Espresso shots, nitro cold brew, and chai fuel breakout sessions and keep attendees present.",
          },
          {
            icon: "coffee",
            title: "Brandable experience",
            description:
              "Custom cups, sleeves, menu boards, and even branded latte art integrate your identity flawlessly.",
          },
          {
            icon: "clock",
            title: "Zero disruption",
            description:
              "Efficient onsite setup, tidy service footprint, and silent grinders ensure meetings stay on schedule.",
          },
        ],
        inclusions: [
          {
            title: "What every corporate package includes",
            points: [
              "Professional baristas trained for high-volume service",
              "Curated menu balancing espresso, tea, and non-coffee options",
              "Touchless ordering signage or QR menu available",
              "Certificate of insurance and venue coordination",
            ],
          },
          {
            title: "Optional engagement boosts",
            points: [
              "Branded photo moment with neon signage",
              "Product sampling pairing (donuts, pastries, acai bowls)",
              "Data capture via digital order form",
            ],
          },
        ],
        sampleMenu: MENU_SECTIONS.en,
        addOns: [
          {
            title: "Latte art logo stencils",
            description:
              "Imprint your brand on every cappuccino with cocoa or cinnamon art.",
          },
          {
            title: "Branded backdrop lounge",
            description:
              "Create a networking zone with cafe tables, greenery walls, and conversation signage.",
          },
          {
            title: "Extended service blocks",
            description:
              "Add early morning or late evening coverage for conferences and multi-shift teams.",
          },
        ],
        faqs: [
          {
            question: "How much space do you require in an office?",
            answer:
              "A 6x8 ft footprint near power is ideal. We provide mats, cable covers, and keep service tidy for corporate environments.",
          },
          {
            question: "Can you handle large headcounts quickly?",
            answer:
              "Yes. For 200+ guests we staff additional baristas and pre-batch select drinks to maintain a under-3 minute wait time.",
          },
          {
            question: "Do you carry liability insurance?",
            answer:
              "We carry a $2M general liability policy and can list your venue or company as additionally insured.",
          },
        ],
        testimonials: [
          {
            quote:
              "Our leadership summit attendees raved about the espresso bar. The branded cups were a nice touch for social media posts.",
            name: "Jordan Patel",
            role: "Director of People, TechWave",
          },
          {
            quote:
              "They arrived early, set up quietly, and kept our team caffeinated through a marathon planning day.",
            name: "Melissa Ortiz",
            role: "HR Manager, Coastal Health",
          },
        ],
        workflow: [
          {
            title: "Share event goals",
            description:
              "We align on service times, guest flow, and desired brand touchpoints for your activation.",
          },
          {
            title: "Customize branding",
            description:
              "Choose menu names, signage, and collateral so the cart feels like part of your team.",
          },
          {
            title: "Deliver hospitality",
            description:
              "Our crew handles every detail onsite and provides recap metrics if needed.",
          },
        ],
        cta: {
          title: "Book a corporate coffee cart",
          description:
            "Tell us about your meeting, summit, or activation and we’ll build a proposal designed for your attendees.",
          primaryLabel: "Request corporate quote",
          secondaryLabel: "Download menu sheet",
        },
        layoutVariant: "split",
      },
      es: {
        slug: "eventos-corporativos",
        name: "Eventos corporativos",
        pageTitle: "Bar de espresso corporativo en Tampa Bay",
        metaDescription:
          "Impulsa reuniones y activaciones de marca con el carrito de café corporativo de Delightful Bean en Tampa Bay y St. Petersburg.",
        hero: {
          eyebrow: "Carrito de café corporativo",
          title: "Energía para tu equipo y presencia para tu marca",
          description:
            "Desde juntas trimestrales hasta lounges para clientes, nuestro bar de espresso crea una experiencia de hospitalidad memorable.",
          image: "/images/corporate-latte-flight.webp",
          imageAlt: "Equipo corporativo disfrutando bebidas de espresso en un evento",
          highlight: "Preferido por equipos de RR.HH., planners de conferencias y agencias de marketing",
          stats: [],
        },
        valueProps: [
          {
            icon: "calendar",
            title: "Mayor participación",
            description:
              "Shots de espresso, cold brew y chai mantienen atentos a tus asistentes y fomentan el networking.",
          },
          {
            icon: "coffee",
            title: "Experiencia personalizable",
            description:
              "Vasos, mangas, menús y hasta arte en latte se adaptan a tu identidad de marca.",
          },
          {
            icon: "clock",
            title: "Sin interrupciones",
            description:
              "Montaje eficiente, equipo silencioso y área ordenada para respetar agendas corporativas.",
          },
        ],
        inclusions: [
          {
            title: "Todo paquete corporativo incluye",
            points: [
              "Baristas profesionales entrenados para alto volumen",
              "Menú equilibrado con espresso, té y opciones sin cafeína",
              "Señalización sin contacto o menú con código QR",
              "Seguro de responsabilidad y coordinación con el venue",
            ],
          },
          {
            title: "Impulso extra de engagement",
            points: [
              "Zona de fotos con neón y branding",
              "Maridaje con productos promocionales (donas, pastelitos, bowls)",
              "Captura de datos mediante formulario digital",
            ],
          },
        ],
        sampleMenu: MENU_SECTIONS.es,
        addOns: [
          {
            title: "Stencils con logo",
            description:
              "Impregna tu marca en cada cappuccino con cocoa o canela.",
          },
          {
            title: "Lounge con branding",
            description:
              "Crea una zona de networking con mesas de café, muro verde y señalización.",
          },
          {
            title: "Bloques de servicio extendidos",
            description:
              "Agrega cobertura matutina temprana o nocturna para conferencias y equipos por turnos.",
          },
        ],
        faqs: [
          {
            question: "¿Cuánto espacio necesitan en la oficina?",
            answer:
              "Un área de 2x3 metros cerca de un tomacorriente es ideal. Llevamos tapetes, canaletas y mantenemos el servicio impecable.",
          },
          {
            question: "¿Pueden atender grandes volúmenes rápido?",
            answer:
              "Sí. Para más de 200 asistentes añadimos baristas y preparamos bebidas para mantener la espera por debajo de 3 minutos.",
          },
          {
            question: "¿Cuentan con seguro de responsabilidad?",
            answer:
              "Tenemos póliza de $2M y podemos agregar a tu empresa o venue como asegurado adicional.",
          },
        ],
        testimonials: [
          {
            quote:
              "Los asistentes a nuestro summit quedaron encantados. Los vasos con logo fueron perfectos para redes sociales.",
            name: "Jordan Patel",
            role: "Director de People, TechWave",
          },
          {
            quote:
              "Llegaron temprano, montaron en silencio y mantuvieron al equipo con energía todo el día.",
            name: "Melissa Ortiz",
            role: "Gerente de RR.HH., Coastal Health",
          },
        ],
        workflow: [
          {
            title: "Definimos objetivos",
            description:
              "Alineamos horarios de servicio, flujo de asistentes y toques de marca para tu evento.",
          },
          {
            title: "Personalizamos el branding",
            description:
              "Elegimos nombres de bebidas, señalización y detalles para que el carrito represente a tu marca.",
          },
          {
            title: "Hospitalidad impecable",
            description:
              "Nuestro equipo ejecuta cada detalle en sitio y entrega métricas si las necesitas.",
          },
        ],
        cta: {
          title: "Reserva tu carrito corporativo",
          description:
            "Cuéntanos sobre tu reunión, summit o activación y enviaremos una propuesta especial para tus asistentes.",
          primaryLabel: "Solicitar cotización corporativa",
          secondaryLabel: "Descargar menú",
        },
        layoutVariant: "split",
      },
    },
  },
  {
    id: "teacher-appreciation",
    order: 3,
    content: {
      en: {
        slug: "teacher-appreciation-school-events",
        name: "Teacher Appreciation & School Events",
        pageTitle: "Teacher Appreciation Coffee Cart in Tampa Bay Schools",
        metaDescription:
          "Celebrate educators with Delightful Bean’s teacher appreciation coffee cart featuring espresso drinks, chai, and kid-friendly cocoa.",
        hero: {
          eyebrow: "School & Campus Events",
          title: "Celebrate educators with a mobile cafe they deserve",
          description:
            "We bring a warm, joyful coffee moment to teacher lounges, faculty breakfasts, and school celebrations across Tampa Bay.",
          image: "/images/teacher-appreciation.webp",
          imageAlt: "Teachers smiling while receiving lattes",
          highlight: "Perfect for Teacher Appreciation Week, PTA surprises, and exam season boosts",
          stats: [],
        },
        valueProps: [
          {
            icon: "bean",
            title: "Locally roasted beans",
            description:
              "We brew small-batch Tampa roasts and seasonal syrups teachers adore.",
          },
          {
            icon: "milk",
            title: "Inclusive menu",
            description:
              "Includes decaf, herbal teas, dairy-free milks, and allergy-conscious toppings.",
          },
          {
            icon: "clock",
            title: "Bell-schedule friendly",
            description:
              "We serve efficiently during planning periods or early mornings without disrupting classes.",
          },
        ],
        inclusions: [
          {
            title: "Every teacher appreciation package includes",
            points: [
              "Pop-up cafe setup with festive signage",
              "Express menu for quick service",
              "Breakfast condiments station with cinnamon, raw sugar, cocoa",
              "Complimentary hot chocolate for students or staff families",
            ],
          },
          {
            title: "School-friendly upgrades",
            points: [
              "Pastry add-on featuring local bakeries",
              "Take-home latte kits for night-shift staff",
              "Gratitude wall for student notes",
            ],
          },
        ],
        sampleMenu: MENU_SECTIONS.en,
        addOns: [
          {
            title: "Thank-you board",
            description:
              "We set up a chalkboard where students leave quick gratitude notes for teachers to take home.",
          },
          {
            title: "Gift card bundle",
            description:
              "Add $5 delight cards teachers can redeem later for another pick-me-up.",
          },
          {
            title: "After-school treat bar",
            description:
              "Extend service for parent-teacher nights with cold brew and sparkling tea spritzers.",
          },
        ],
        faqs: [
          {
            question: "Can you serve before the first bell?",
            answer:
              "Yes. We often arrive by 6:00 a.m. to start pouring for faculty arriving early.",
          },
          {
            question: "Do you offer budget-friendly menus?",
            answer:
              "We tailor menus to PTA budgets and can focus on a streamlined latte + cold brew offering to serve more staff quickly.",
          },
          {
            question: "Is tipping required?",
            answer:
              "Tips are never expected for school events. If invited, we display a small gratitude jar.",
          },
        ],
        testimonials: [
          {
            quote:
              "Our teachers felt celebrated and cared for. The cart team was so friendly with students stopping by!",
            name: "Kara Nguyen",
            role: "PTA President, Plant City High",
          },
          {
            quote:
              "They managed to serve 90 staff members in under an hour between class periods—amazing!",
            name: "Principal Leslie Carter",
            role: "Riverview Elementary",
          },
        ],
        workflow: [
          {
            title: "Pick your window",
            description:
              "We help you choose the best service times around bell schedules and planning periods.",
          },
          {
            title: "Customize treats",
            description:
              "Select flavors, toppings, and any treats or notes from students.",
          },
          {
            title: "Deliver smiles",
            description:
              "Our team sets up quietly and keeps caffeine flowing so educators feel appreciated.",
          },
        ],
        cta: {
          title: "Plan a teacher appreciation cafe",
          description:
            "Share your campus details and we’ll send a tailored quote along with fundraising ideas.",
          primaryLabel: "Start planning",
          secondaryLabel: "Download school flyer",
        },
        layoutVariant: "overlay",
      },
      es: {
        slug: "agradecimiento-docente-eventos-escolares",
        name: "Agradecimiento docente y eventos escolares",
        pageTitle: "Carrito de café para maestros en Tampa Bay",
        metaDescription:
          "Celebra a los educadores con el carrito de café de Delightful Bean: espresso, chai y chocolate caliente para toda la comunidad escolar.",
        hero: {
          eyebrow: "Eventos escolares y universitarios",
          title: "Celebra a los maestros con la cafetería móvil que merecen",
          description:
            "Llevamos un momento cálido de café a salas de maestros, desayunos de facultad y celebraciones escolares en Tampa Bay.",
          image: "/images/teacher-appreciation.webp",
          imageAlt: "Maestros sonriendo mientras reciben lattes",
          highlight: "Ideal para la Semana de Agradecimiento Docente, sorpresas de PTA y refuerzos en época de exámenes",
          stats: [],
        },
        valueProps: [
          {
            icon: "bean",
            title: "Café local",
            description:
              "Trabajamos con tostadores de Tampa y jarabes de temporada que conquistan a los maestros.",
          },
          {
            icon: "milk",
            title: "Menú inclusivo",
            description:
              "Incluye descafeinado, tés herbales, leches sin lácteos y toppings libres de alérgenos comunes.",
          },
          {
            icon: "clock",
            title: "A tiempo con la campana",
            description:
              "Servimos con eficiencia durante periodos libres o antes de clases sin interrumpir la jornada.",
          },
        ],
        inclusions: [
          {
            title: "Incluido en cada paquete escolar",
            points: [
              "Montaje tipo café con señalización festiva",
              "Menú exprés para servicio ágil",
              "Estación de condimentos con canela, azúcar crudo y cocoa",
              "Chocolate caliente cortesía para estudiantes o familiares",
            ],
          },
          {
            title: "Upgrades para la escuela",
            points: [
              "Pastelería de panaderías locales",
              "Kits de latte para llevar al personal nocturno",
              "Muro de agradecimientos para mensajes estudiantiles",
            ],
          },
        ],
        sampleMenu: MENU_SECTIONS.es,
        addOns: [
          {
            title: "Tablero de agradecimientos",
            description:
              "Colocamos un pizarrón para que los estudiantes dejen notas que los maestros se llevan a casa.",
          },
          {
            title: "Paquete de gift cards",
            description:
              "Agrega tarjetas de regalo de $5 para que los maestros disfruten otro café más adelante.",
          },
          {
            title: "Servicio vespertino",
            description:
              "Extiende el servicio para noches de padres y maestros con cold brew y spritzers de té.",
          },
        ],
        faqs: [
          {
            question: "¿Pueden servir antes de la primera campana?",
            answer:
              "Sí. Llegamos desde las 6:00 a.m. para servir a la facultad más madrugadora.",
          },
          {
            question: "¿Tienen menús ajustados al presupuesto?",
            answer:
              "Adaptamos menús a presupuestos de PTA y podemos enfocarnos en pocas bebidas para servir más rápido.",
          },
          {
            question: "¿Se aceptan propinas?",
            answer:
              "Nunca exigimos propinas en eventos escolares. Si lo sugieren, colocamos un pequeño frasco de agradecimiento.",
          },
        ],
        testimonials: [
          {
            quote:
              "Nuestros maestros se sintieron valorados. El equipo del carrito fue muy amable con los estudiantes que pasaban.",
            name: "Kara Nguyen",
            role: "Presidenta de PTA, Plant City High",
          },
          {
            quote:
              "Sirvieron a 90 miembros del personal en menos de una hora entre clases. ¡Increíble!",
            name: "Directora Leslie Carter",
            role: "Riverview Elementary",
          },
        ],
        workflow: [
          {
            title: "Elegimos el horario",
            description:
              "Te ayudamos a elegir los mejores momentos entre campanas y periodos libres.",
          },
          {
            title: "Personalizamos detalles",
            description:
              "Seleccionamos sabores, toppings y mensajes de estudiantes.",
          },
          {
            title: "Entregamos sonrisas",
            description:
              "Montamos en silencio y mantenemos el café fluyendo para consentir a los educadores.",
          },
        ],
        cta: {
          title: "Organiza una cafetería para maestros",
          description:
            "Comparte los detalles de tu campus y enviaremos cotización con ideas de financiamiento.",
          primaryLabel: "Comenzar planificación",
          secondaryLabel: "Descargar flyer escolar",
        },
        layoutVariant: "overlay",
      },
    },
  },
  {
    id: "baby-bridal-showers",
    order: 4,
    content: {
      en: {
        slug: "baby-bridal-showers",
        name: "Baby & Bridal Showers",
        pageTitle: "Coffee Cart for Baby and Bridal Showers in Tampa Bay",
        metaDescription:
          "Host an elevated shower with Delightful Bean’s mobile coffee cart featuring handcrafted lattes, teas, and mocktails for guests.",
        hero: {
          eyebrow: "Intimate Celebrations",
          title: "The sweetest way to spoil your guests",
          description:
            "Our petite espresso cart brings a cozy cafe vibe to baby showers, bridal brunches, and afternoon celebrations.",
          image: "/images/bridal-shower-latte.webp",
          imageAlt: "Guests clinking coffee cups at a bridal shower",
          highlight: "Perfect for 30–75 guests with seated or mingling layouts",
          stats: [],
        },
        valueProps: [
          {
            icon: "milk",
            title: "Sip-friendly for everyone",
            description:
              "We offer caffeine-free mocktails, sparkling teas, and signature lattes for moms-to-be.",
          },
          {
            icon: "thumbs",
            title: "Instagram-ready styling",
            description:
              "Custom florals, pastel cups, and menu signage match your color palette perfectly.",
          },
          {
            icon: "coffee",
            title: "Dessert pairing",
            description:
              "Pair espresso service with mini dessert flights or brunch bites from local partners.",
          },
        ],
        inclusions: [
          {
            title: "Every shower package includes",
            points: [
              "Compact espresso cart and soft seating vignette",
              "Menu with hot, iced, and zero-proof options",
              "Custom drink name cards celebrating the guest of honor",
              "Complimentary kids cocoa station",
            ],
          },
          {
            title: "Add extra sparkle",
            points: [
              "Floral garland and signage",
              "Keepsake recipe cards",
              "Sparkling juice mimosa bar",
            ],
          },
        ],
        sampleMenu: MENU_SECTIONS.en,
        addOns: [
          {
            title: "Bridal toast tower",
            description:
              "Create a latte tower moment with custom sprinkle rims and keepsake mugs.",
          },
          {
            title: "Baby name reveal latte art",
            description:
              "We pour the name or initials inside the first latte for a photo-worthy reveal.",
          },
          {
            title: "Favor bar",
            description:
              "Send guests home with DIY latte kits and handwritten thank-you tags.",
          },
        ],
        faqs: [
          {
            question: "Can you fit inside a private home?",
            answer:
              "Yes. We can navigate elevators and set up in living rooms, patios, or clubhouses with standard door widths.",
          },
          {
            question: "Do you provide decaf and dairy-free?",
            answer:
              "Every menu includes decaf espresso, oat milk, almond milk, and caffeine-free teas.",
          },
          {
            question: "How long do you stay?",
            answer:
              "Most showers book two hours of service with optional extensions in 30-minute increments.",
          },
        ],
        testimonials: [
          {
            quote:
              "The iced lavender matcha was a hit and the cart made our brunch feel so luxe.",
            name: "Brianna Lopez",
            role: "Bridesmaid Host",
          },
          {
            quote:
              "Loved the custom drink names for the mom-to-be. Every guest took photos!",
            name: "Sharon Mills",
            role: "Grandma-to-be",
          },
        ],
        workflow: [
          {
            title: "Choose your vibe",
            description:
              "Tell us your theme and colors—we’ll tailor cart styling and drink names to match.",
          },
          {
            title: "Select the menu",
            description:
              "Mix and match espresso, mocktails, and treats to fit your schedule.",
          },
          {
            title: "Celebrate together",
            description:
              "We handle setup, service, and pack-down so you can soak in every toast.",
          },
        ],
        cta: {
          title: "Design your shower coffee cart",
          description:
            "Share your guest count, venue, and inspiration board—we’ll craft the perfect package.",
          primaryLabel: "Check availability",
          secondaryLabel: "See styling ideas",
        },
        layoutVariant: "gallery",
      },
      es: {
        slug: "baby-showers-despedidas",
        name: "Baby showers y despedidas",
        pageTitle: "Carrito de café para baby y bridal showers",
        metaDescription:
          "Sorprende a tus invitadas con el carrito de café móvil de Delightful Bean: lattes artesanales, tés y mocktails personalizados.",
        hero: {
          eyebrow: "Celebraciones íntimas",
          title: "La manera más dulce de consentir a tus invitadas",
          description:
            "Nuestro carrito de espresso crea una atmósfera acogedora en baby showers, brunches de novia y tardes especiales.",
          image: "/images/bridal-shower-latte.webp",
          imageAlt: "Invitadas brindando con tazas de café en un bridal shower",
          highlight: "Ideal para 30 a 75 invitadas sentadas o tipo cóctel",
          stats: [],
        },
        valueProps: [
          {
            icon: "milk",
            title: "Opciones para todos",
            description:
              "Mocktails sin cafeína, tés espumosos y lattes suaves para futuras mamás.",
          },
          {
            icon: "thumbs",
            title: "Estilo instagramable",
            description:
              "Florales personalizados, vasos pasteles y señalización que combina con tu paleta.",
          },
          {
            icon: "coffee",
            title: "Maridaje dulce",
            description:
              "Acompañamos el espresso con postres mini o bocadillos de brunch.",
          },
        ],
        inclusions: [
          {
            title: "Incluido en cada paquete",
            points: [
              "Carrito compacto y rincón lounge",
              "Menú con bebidas calientes, frías y sin alcohol",
              "Tarjetas de bebidas con el nombre de la homenajeada",
              "Estación de chocolate para peques",
            ],
          },
          {
            title: "Más brillo",
            points: [
              "Guirnalda floral y señalización",
              "Recetarios de recuerdo",
              "Barra de jugos espumosos",
            ],
          },
        ],
        sampleMenu: MENU_SECTIONS.es,
        addOns: [
          {
            title: "Torre de brindis",
            description:
              "Crea un momento tipo torre de latte con bordes de sprinkles y tazas de recuerdo.",
          },
          {
            title: "Latte reveal",
            description:
              "Vertemos el nombre o iniciales del bebé en el primer latte para una revelación inolvidable.",
          },
          {
            title: "Barra de recuerdos",
            description:
              "Regala kits para preparar latte en casa con tarjetas de agradecimiento hechas a mano.",
          },
        ],
        faqs: [
          {
            question: "¿Pueden montar en una casa privada?",
            answer:
              "Sí. Nos adaptamos a salas, patios o casas club con puertas estándar.",
          },
          {
            question: "¿Incluyen descafeinado y leches vegetales?",
            answer:
              "Siempre llevamos espresso descafeinado, leche de avena, almendra y tés sin cafeína.",
          },
          {
            question: "¿Cuánto dura el servicio?",
            answer:
              "La mayoría de los eventos reservan dos horas con opción a extender en bloques de 30 minutos.",
          },
        ],
        testimonials: [
          {
            quote:
              "El matcha de lavanda fue un éxito y el carrito elevó nuestro brunch.",
            name: "Brianna López",
            role: "Dama de honor",
          },
          {
            quote:
              "Amamos los nombres de bebidas personalizados para la futura mamá. ¡Todas tomaron fotos!",
            name: "Sharon Mills",
            role: "Abuela feliz",
          },
        ],
        workflow: [
          {
            title: "Elige el estilo",
            description:
              "Cuéntanos tu tema y colores. Adaptamos decoración y nombres de bebidas.",
          },
          {
            title: "Arma el menú",
            description:
              "Combina espresso, mocktails y postres según tu itinerario.",
          },
          {
            title: "Disfruta sin preocupaciones",
            description:
              "Nos encargamos del montaje, servicio y desmontaje para que disfrutes cada brindis.",
          },
        ],
        cta: {
          title: "Crea tu carrito para showers",
          description:
            "Comparte invitados, venue e inspiración y diseñaremos el paquete ideal.",
          primaryLabel: "Consultar disponibilidad",
          secondaryLabel: "Ver ideas de estilo",
        },
        layoutVariant: "gallery",
      },
    },
  },
  {
    id: "birthdays",
    order: 5,
    content: {
      en: {
        slug: "birthdays",
        name: "Birthdays",
        pageTitle: "Birthday Coffee Cart Catering in Tampa Bay",
        metaDescription:
          "Celebrate birthdays of all ages with a mobile coffee cart serving espresso flights, specialty lattes, and kid-friendly drinks.",
        hero: {
          eyebrow: "Birthday Celebrations",
          title: "Make every milestone more memorable",
          description:
            "From sweet sixteen parties to milestone birthdays, our cart keeps the energy high with handcrafted drinks and dessert pairings.",
          image: "/images/birthday-latte-toast.webp",
          imageAlt: "Friends toasting with lattes at a birthday party",
          highlight: "Perfect for indoor/outdoor parties, poolsides, clubhouses, and backyard soirées",
          stats: [],
        },
        valueProps: [
          {
            icon: "coffee",
            title: "Custom flavors",
            description:
              "We create birthday cake lattes, cinnamon roll cappuccinos, and mocktails inspired by the guest of honor.",
          },
          {
            icon: "map",
            title: "Anywhere you celebrate",
            description:
              "We can pop up poolside, rooftop, or in your backyard with minimal power needs.",
          },
          {
            icon: "steam",
            title: "Dessert theatrics",
            description:
              "Add steam wands, sprinkle rims, and torch-toasted toppings for wow-worthy moments.",
          },
        ],
        inclusions: [
          {
            title: "Included with every birthday booking",
            points: [
              "Two baristas with branded celebration aprons",
              "Menu signage featuring the birthday honoree",
              "Iced + hot beverage lineup with caffeine-free choices",
              "Eco-friendly cups, napkins, and straws",
            ],
          },
          {
            title: "Party upgrades",
            points: [
              "Birthday latte flights",
              "Dessert table styling",
              "Glow-in-the-dark toppings for evening events",
            ],
          },
        ],
        sampleMenu: MENU_SECTIONS.en,
        addOns: [
          {
            title: "Sparkler latte reveal",
            description:
              "We top the birthday person’s latte with a sparkle candle for the big toast.",
          },
          {
            title: "Dessert pairing bar",
            description:
              "Customize a dessert pairing lineup featuring local bakers and chocolatiers.",
          },
          {
            title: "Late-night chill station",
            description:
              "Add frappe-style frozen drinks for pool parties and summer birthdays.",
          },
        ],
        faqs: [
          {
            question: "Do you serve alcohol?",
            answer:
              "We are a dry cart but happily collaborate with your bartender for espresso martinis or coffee cocktails.",
          },
          {
            question: "Is there a minimum age?",
            answer:
              "We cater birthdays from 7 to 70+. Kids love the cocoa station while grown-ups enjoy specialty lattes.",
          },
          {
            question: "What if it rains?",
            answer:
              "We provide a compact canopy or can relocate indoors if weather shifts. Backup plans are part of our prep.",
          },
        ],
        testimonials: [
          {
            quote:
              "The sprinkle rimmed lattes were the highlight of our daughter’s sweet sixteen. Guests lined up twice!",
            name: "Megan Foster",
            role: "Tampa Host",
          },
          {
            quote:
              "They worked perfectly with our outdoor pool setup and kept the area spotless.",
            name: "Devon Hart",
            role: "St. Petersburg Birthday Bash",
          },
        ],
        workflow: [
          {
            title: "Plan the party",
            description:
              "Share your theme, age, and must-have flavors so we can tailor the experience.",
          },
          {
            title: "Prep the cart",
            description:
              "We design signage, coordinate dessert add-ons, and check logistics for your space.",
          },
          {
            title: "Celebrate big",
            description:
              "Our baristas keep drinks flowing while you make birthday memories.",
          },
        ],
        cta: {
          title: "Check birthday availability",
          description:
            "Tell us your date, location, and guest count so we can send a tailored celebration quote.",
          primaryLabel: "Get birthday quote",
          secondaryLabel: "View party menu",
        },
        layoutVariant: "classic",
      },
      es: {
        slug: "cumpleanos",
        name: "Cumpleaños",
        pageTitle: "Carrito de café para cumpleaños",
        metaDescription:
          "Celebra cumpleaños de todas las edades con nuestro carrito de café móvil: lattes especiales, espresso flights y bebidas divertidas para niños.",
        hero: {
          eyebrow: "Fiestas de cumpleaños",
          title: "Haz que cada año sea inolvidable",
          description:
            "Desde sweet sixteens hasta fiestas de 50, nuestro carrito mantiene la energía con bebidas artesanales y postres.",
          image: "/images/birthday-latte-toast.webp",
          imageAlt: "Amigos brindando con lattes en una fiesta de cumpleaños",
          highlight: "Ideal para fiestas en casa, clubhouses, piscinas y terrazas",
          stats: [],
        },
        valueProps: [
          {
            icon: "coffee",
            title: "Sabores personalizados",
            description:
              "Creamos lattes de pastel, cappuccinos de rollo de canela y mocktails inspirados en la persona festejada.",
          },
          {
            icon: "map",
            title: "Vamos donde tú celebres",
            description:
              "Nos instalamos en patios, azoteas o junto a la piscina con necesidades mínimas de energía.",
          },
          {
            icon: "steam",
            title: "Show de postres",
            description:
              "Agrega vapores, bordes con sprinkles y toppings flameados para momentos memorables.",
          },
        ],
        inclusions: [
          {
            title: "Incluido en cada reserva",
            points: [
              "Dos baristas con delantales festivos",
              "Menú con el nombre de la persona festejada",
              "Bebidas frías y calientes con opciones sin cafeína",
              "Vasos, servilletas y popotes eco-friendly",
            ],
          },
          {
            title: "Upgrades para la fiesta",
            points: [
              "Flights de latte",
              "Montaje de mesa de postres",
              "Toppings fluorescentes para eventos nocturnos",
            ],
          },
        ],
        sampleMenu: MENU_SECTIONS.es,
        addOns: [
          {
            title: "Latte con bengala",
            description:
              "Decoramos el latte de la persona festejada con vela tipo bengala para el brindis.",
          },
          {
            title: "Barra de postres",
            description:
              "Personaliza una mesa de postres con aliados locales.",
          },
          {
            title: "Estación frozen",
            description:
              "Agrega bebidas estilo frappe para fiestas veraniegas.",
          },
        ],
        faqs: [
          {
            question: "¿Sirven alcohol?",
            answer:
              "Somos un carrito sin alcohol, pero podemos trabajar con tu bartender para cocteles con espresso.",
          },
          {
            question: "¿Hay edad mínima?",
            answer:
              "Atendemos cumpleaños desde los 7 años hasta los 70+. Hay opciones para niños y adultos.",
          },
          {
            question: "¿Qué pasa si llueve?",
            answer:
              "Llevamos carpa compacta o reubicamos el servicio en interiores. Siempre planeamos un plan B.",
          },
        ],
        testimonials: [
          {
            quote:
              "Los lattes con sprinkles fueron la sensación del sweet sixteen. ¡Los invitados repitieron!",
            name: "Megan Foster",
            role: "Anfitriona en Tampa",
          },
          {
            quote:
              "Se adaptaron perfecto a nuestra fiesta en la piscina y mantuvieron todo impecable.",
            name: "Devon Hart",
            role: "Fiesta en St. Petersburg",
          },
        ],
        workflow: [
          {
            title: "Planeamos contigo",
            description:
              "Compartes tema, edad y sabores imprescindibles para personalizar la experiencia.",
          },
          {
            title: "Preparamos el carrito",
            description:
              "Diseñamos señalización, coordinamos postres y revisamos logística del espacio.",
          },
          {
            title: "Celebran a lo grande",
            description:
              "Nuestros baristas mantienen el ritmo mientras tú disfrutas el momento.",
          },
        ],
        cta: {
          title: "Consulta disponibilidad para tu cumpleaños",
          description:
            "Cuéntanos fecha, lugar e invitados para mandar una cotización personalizada.",
          primaryLabel: "Solicitar cotización",
          secondaryLabel: "Ver menú de fiesta",
        },
        layoutVariant: "classic",
      },
    },
  },
  {
    id: "church-community-events",
    order: 6,
    content: {
      en: {
        slug: "church-community-events",
        name: "Church & Community Events",
        pageTitle: "Coffee Cart for Church and Community Events in Tampa Bay",
        metaDescription:
          "Delightful Bean supports church gatherings and community events with a welcoming mobile coffee cart and inclusive menu.",
        hero: {
          eyebrow: "Community Hospitality",
          title: "Serve generous hospitality at every gathering",
          description:
            "Whether it’s Sunday fellowship, fundraising galas, or neighborhood nights, our cart creates meaningful connection points.",
          image: "/images/community-coffee.webp",
          imageAlt: "Community members enjoying coffee together",
          highlight: "Flexible packages for congregations, nonprofits, and outreach teams",
          stats: [],
        },
        valueProps: [
          {
            icon: "bean",
            title: "Mission-aligned",
            description:
              "We honor your organization’s values with friendly service, modest styling, and inclusive beverages.",
          },
          {
            icon: "map",
            title: "Indoor & outdoor setups",
            description:
              "From gymnasiums to parking lot festivals, we adapt to your space and power access.",
          },
          {
            icon: "clock",
            title: "Volunteer friendly",
            description:
              "We brief your volunteer team for smooth guest flow and can integrate donation prompts.",
          },
        ],
        inclusions: [
          {
            title: "Every community booking includes",
            points: [
              "Espresso, drip, and tea service",
              "Menu signage with bilingual options available",
              "Donation or give-back messaging",
              "Setup aligned with venue guidelines",
            ],
          },
          {
            title: "Helpful add-ons",
            points: [
              "Bulk traveler coffee for additional stations",
              "Community spotlight board for announcements",
              "Volunteer appreciation drink vouchers",
            ],
          },
        ],
        sampleMenu: MENU_SECTIONS.en,
        addOns: [
          {
            title: "Story wall",
            description:
              "Invite guests to pin answered prayers or community wins next to the cart.",
          },
          {
            title: "Sponsor partnership",
            description:
              "Highlight local business sponsors on menu signage and cups.",
          },
          {
            title: "Breakfast pairing",
            description:
              "Partnered pastries or breakfast sandwiches for early services.",
          },
        ],
        faqs: [
          {
            question: "Can you work around our service schedule?",
            answer:
              "Absolutely. We serve between services, during intermissions, or at evening events with flexible timing.",
          },
          {
            question: "Do you offer non-dairy and decaf?",
            answer:
              "Yes. Oat milk, almond milk, and decaf espresso are always included.",
          },
          {
            question: "Can we include a give-back component?",
            answer:
              "We can donate a portion of proceeds to your mission or promote donations via signage and QR codes.",
          },
        ],
        testimonials: [
          {
            quote:
              "Delightful Bean helped us welcome new families with warmth and kindness. The cart became a hub of conversation.",
            name: "Pastor Elaine Brooks",
            role: "Grace Collective Church",
          },
          {
            quote:
              "Our outreach night drew record attendance thanks to their inviting setup and delicious menu.",
            name: "Marcus Reed",
            role: "Community Coordinator",
          },
        ],
        workflow: [
          {
            title: "Clarify the mission",
            description:
              "We review event goals, expected turnout, and any fundraising tie-ins.",
          },
          {
            title: "Plan logistics",
            description:
              "We assess power access, volunteer roles, and signage needs.",
          },
          {
            title: "Serve with purpose",
            description:
              "Our team arrives early, greets every guest, and keeps service flowing smoothly.",
          },
        ],
        cta: {
          title: "Bring the cart to your community",
          description:
            "Tell us about your church or nonprofit gathering and we’ll propose a package aligned with your vision.",
          primaryLabel: "Schedule a call",
          secondaryLabel: "View community menu",
        },
        layoutVariant: "split",
      },
      es: {
        slug: "eventos-iglesia-comunidad",
        name: "Eventos de iglesias y comunidad",
        pageTitle: "Carrito de café para iglesias y comunidad",
        metaDescription:
          "Delightful Bean acompaña reuniones de iglesias y eventos comunitarios con un carrito de café acogedor y menú inclusivo.",
        hero: {
          eyebrow: "Hospitalidad comunitaria",
          title: "Hospitalidad generosa en cada encuentro",
          description:
            "Ya sea convivencia dominical, gala de recaudación o noche vecinal, nuestro carrito crea puntos de conexión.",
          image: "/images/community-coffee.webp",
          imageAlt: "Vecinos disfrutando café juntos",
          highlight: "Paquetes flexibles para congregaciones, organizaciones y equipos de alcance",
          stats: [],
        },
        valueProps: [
          {
            icon: "bean",
            title: "Alineado a la misión",
            description:
              "Honramos los valores de tu organización con servicio amable, decoración discreta y bebidas para todos.",
          },
          {
            icon: "map",
            title: "Montaje interior o exterior",
            description:
              "Nos adaptamos a gimnasios, estacionamientos o salones comunitarios.",
          },
          {
            icon: "clock",
            title: "Colaboración con voluntarios",
            description:
              "Brindamos inducción al equipo de voluntarios y podemos integrar mensajes de donación.",
          },
        ],
        inclusions: [
          {
            title: "Incluido en cada evento comunitario",
            points: [
              "Servicio de espresso, café filtrado y té",
              "Señalización bilingüe disponible",
              "Mensajes de donación o causa",
              "Montaje acorde a lineamientos del venue",
            ],
          },
          {
            title: "Apoyos adicionales",
            points: [
              "Café en termos para estaciones extras",
              "Tablero para testimonios y anuncios",
              "Bebidas de agradecimiento para voluntarios",
            ],
          },
        ],
        sampleMenu: MENU_SECTIONS.es,
        addOns: [
          {
            title: "Muro de historias",
            description:
              "Invita a compartir testimonios, oraciones respondidas o anuncios comunitarios.",
          },
          {
            title: "Patrocinios",
            description:
              "Resalta negocios locales en la señalización y vasos.",
          },
          {
            title: "Desayuno complementario",
            description:
              "Agrega pan dulce, bagels o sándwiches matutinos.",
          },
        ],
        faqs: [
          {
            question: "¿Pueden ajustarse a nuestros horarios de servicio?",
            answer:
              "Claro. Servimos entre reuniones, en intermedios o eventos nocturnos con horarios flexibles.",
          },
          {
            question: "¿Incluyen opciones sin lácteos y descafeinado?",
            answer:
              "Siempre llevamos leche de avena, almendra y espresso descafeinado.",
          },
          {
            question: "¿Podemos integrar donativos?",
            answer:
              "Podemos donar un porcentaje o promover tu causa con señalización y códigos QR.",
          },
        ],
        testimonials: [
          {
            quote:
              "Delightful Bean nos ayudó a recibir a nuevas familias con calidez. El carrito fue un punto de encuentro.",
            name: "Pastora Elaine Brooks",
            role: "Grace Collective Church",
          },
          {
            quote:
              "Nuestra noche comunitaria tuvo récord de asistencia gracias a su montaje y menú delicioso.",
            name: "Marcus Reed",
            role: "Coordinador comunitario",
          },
        ],
        workflow: [
          {
            title: "Definimos la misión",
            description:
              "Revisamos objetivos, aforo esperado y posibles recaudaciones.",
          },
          {
            title: "Ajustamos logística",
            description:
              "Analizamos electricidad, roles de voluntarios y necesidades de señalización.",
          },
          {
            title: "Servimos con propósito",
            description:
              "Llegamos temprano, saludamos a cada invitado y mantenemos un servicio fluido.",
          },
        ],
        cta: {
          title: "Lleva el carrito a tu comunidad",
          description:
            "Cuéntanos sobre tu iglesia u organización y crearemos un paquete acorde a tu visión.",
          primaryLabel: "Agendar llamada",
          secondaryLabel: "Ver menú comunitario",
        },
        layoutVariant: "split",
      },
    },
  },
  {
    id: "brand-activations",
    order: 7,
    content: {
      en: {
        slug: "brand-activations-grand-openings",
        name: "Brand Activations & Grand Openings",
        pageTitle: "Coffee Cart for Brand Activations and Grand Openings",
        metaDescription:
          "Drive attention and engagement at brand activations with Delightful Bean’s customizable coffee cart and branded espresso beverages.",
        hero: {
          eyebrow: "Experiential Marketing",
          title: "Create buzz with every handcrafted sip",
          description:
            "We transform your launch into a sensory experience with branded espresso drinks, interactive moments, and social-ready styling.",
          image: "/images/brand-activation-cart.webp",
          imageAlt: "Branded coffee cart during a product launch",
          highlight: "Ideal for retail launches, auto unveilings, real estate showrooms, and pop-up tours",
          stats: [],
        },
        valueProps: [
          {
            icon: "coffee",
            title: "Branded beverages",
            description:
              "Logo latte art, Pantone-matched syrups, and signature drinks inspired by your launch.",
          },
          {
            icon: "map",
            title: "Modular footprint",
            description:
              "We adapt to storefronts, parking lots, or convention spaces with eye-catching cart wraps.",
          },
          {
            icon: "calendar",
            title: "Pre and post event support",
            description:
              "Coordination with PR teams, vendor compliance, and recap metrics included.",
          },
        ],
        inclusions: [
          {
            title: "Activation essentials",
            points: [
              "Branded menu design",
              "Custom cup sleeves or stickers",
              "Social media signage with event hashtags",
              "Detailed timeline and staffing plan",
            ],
          },
          {
            title: "Extended experience",
            points: [
              "Product sampling pairings",
              "Live latte art performances",
              "Lead capture QR workflows",
            ],
          },
        ],
        sampleMenu: MENU_SECTIONS.en,
        addOns: [
          {
            title: "Cart wrap & backdrop",
            description:
              "Full vinyl wrap and media backdrop that align with your campaign visuals.",
          },
          {
            title: "Influencer tasting hour",
            description:
              "Host a VIP hour with curated content moments and tasting flights.",
          },
          {
            title: "Mobile tour support",
            description:
              "Multi-day routing, storage, and logistics for pop-up roadshows.",
          },
        ],
        faqs: [
          {
            question: "Can you handle permitting requirements?",
            answer:
              "We assist with COI, vendor forms, and can coordinate with venue management for compliance.",
          },
          {
            question: "Do you travel outside Tampa Bay?",
            answer:
              "Yes. We service statewide activations with travel fees and logistics planning.",
          },
          {
            question: "How do you measure engagement?",
            answer:
              "We can provide drink counts, dwell times, and QR scan metrics after the event.",
          },
        ],
        testimonials: [
          {
            quote:
              "The branded latte art created nonstop photo content. Our clients loved the elevated hospitality.",
            name: "Kendall Ruiz",
            role: "Event Producer, BlueMarlin Creative",
          },
          {
            quote:
              "They handled every detail, from permits to influencer outreach. The cart looked like an extension of our showroom.",
            name: "Thomas Avery",
            role: "Marketing Director, Avery Auto Group",
          },
        ],
        workflow: [
          {
            title: "Brief & strategy",
            description:
              "We align on objectives, audience, KPIs, and creative direction.",
          },
          {
            title: "Design & logistics",
            description:
              "Our team delivers mockups, confirms power, and preps brand elements.",
          },
          {
            title: "Activate & amplify",
            description:
              "Baristas execute while our lead manages social moments and post-event reporting.",
          },
        ],
        cta: {
          title: "Plan your branded coffee experience",
          description:
            "Share launch details and we’ll craft a turnkey activation package.",
          primaryLabel: "Schedule activation call",
          secondaryLabel: "View case studies",
        },
        layoutVariant: "overlay",
      },
      es: {
        slug: "activaciones-marca-inauguraciones",
        name: "Activaciones de marca e inauguraciones",
        pageTitle: "Carrito de café para activaciones de marca",
        metaDescription:
          "Genera expectativa en tu lanzamiento con el carrito de café personalizable de Delightful Bean y bebidas con branding.",
        hero: {
          eyebrow: "Marketing experiencial",
          title: "Crea conversación con cada sorbo",
          description:
            "Transformamos tu lanzamiento en una experiencia sensorial con bebidas con branding, momentos interactivos y montaje listo para redes.",
          image: "/images/brand-activation-cart.webp",
          imageAlt: "Carrito de café con branding durante un lanzamiento",
          highlight: "Ideal para aperturas, lanzamientos automotrices, showrooms y giras pop-up",
          stats: [],
        },
        valueProps: [
          {
            icon: "coffee",
            title: "Bebidas con branding",
            description:
              "Arte en latte con tu logo, jarabes en tus colores y bebidas inspiradas en tu lanzamiento.",
          },
          {
            icon: "map",
            title: "Huella modular",
            description:
              "Nos adaptamos a tiendas, estacionamientos o centros de convenciones con wraps llamativos.",
          },
          {
            icon: "calendar",
            title: "Soporte integral",
            description:
              "Coordinación con equipos de PR, cumplimiento de proveedores y métricas post evento.",
          },
        ],
        inclusions: [
          {
            title: "Esenciales de la activación",
            points: [
              "Diseño de menú con marca",
              "Mangas o stickers personalizados",
              "Señalización para redes y hashtags",
              "Cronograma detallado y plan de staff",
            ],
          },
          {
            title: "Experiencia extendida",
            points: [
              "Maridaje con productos",
              "Presentaciones en vivo de latte art",
              "Flujos de captura de leads vía QR",
            ],
          },
        ],
        sampleMenu: MENU_SECTIONS.es,
        addOns: [
          {
            title: "Wrap y backdrop",
            description:
              "Wrap vinílico completo y fondo para medios alineado a tu campaña.",
          },
          {
            title: "Hora VIP",
            description:
              "Sesión para influencers con momentos de contenido y flights de degustación.",
          },
          {
            title: "Gira móvil",
            description:
              "Logística, almacenamiento y rutas para tours pop-up multi ciudad.",
          },
        ],
        faqs: [
          {
            question: "¿Ayudan con permisos?",
            answer:
              "Apoyamos con COI, formularios y coordinamos con la administración del venue para cumplir requisitos.",
          },
          {
            question: "¿Viajan fuera de Tampa Bay?",
            answer:
              "Sí, atendemos activaciones en todo el estado con viáticos y planeación logística.",
          },
          {
            question: "¿Cómo miden el engagement?",
            answer:
              "Podemos entregar conteo de bebidas, tiempos de permanencia y métricas de QR.",
          },
        ],
        testimonials: [
          {
            quote:
              "El arte con logo generó contenido sin parar. Nuestros clientes amaron la hospitalidad premium.",
            name: "Kendall Ruiz",
            role: "Productora de eventos, BlueMarlin Creative",
          },
          {
            quote:
              "Manejaron permisos e influencers. El carrito parecía parte de nuestro showroom.",
            name: "Thomas Avery",
            role: "Director de marketing, Avery Auto Group",
          },
        ],
        workflow: [
          {
            title: "Brief y estrategia",
            description:
              "Alineamos objetivos, audiencia, KPIs y creatividad.",
          },
          {
            title: "Diseño y logística",
            description:
              "Entregamos mockups, confirmamos energía y preparamos elementos de marca.",
          },
          {
            title: "Activamos y amplificamos",
            description:
              "El equipo ejecuta mientras apoyamos momentos sociales y reporte posterior.",
          },
        ],
        cta: {
          title: "Planea tu experiencia con café",
          description:
            "Comparte detalles del lanzamiento y diseñaremos un paquete turnkey.",
          primaryLabel: "Agendar llamada",
          secondaryLabel: "Ver casos de éxito",
        },
        layoutVariant: "overlay",
      },
    },
  },
  {
    id: "sports-tournaments",
    order: 8,
    content: {
      en: {
        slug: "sports-tournaments",
        name: "Sports Tournaments",
        pageTitle: "Coffee Cart for Sports Tournaments in Tampa Bay",
        metaDescription:
          "Keep athletes, coaches, and fans fueled with Delightful Bean’s mobile coffee cart at sports tournaments and championship games.",
        hero: {
          eyebrow: "Game Day Fuel",
          title: "Fuel every play with handcrafted energy",
          description:
            "From early morning check-ins to championship celebrations, our coffee cart keeps your tournament energized and on schedule.",
          image: "/images/sports-tournament-coffee.webp",
          imageAlt: "Parents grabbing coffee at a sports tournament",
          highlight: "Great for soccer complexes, baseball tournaments, cheer competitions, and athletic banquets",
          stats: [],
        },
        valueProps: [
          {
            icon: "clock",
            title: "Fast service",
            description:
              "High-efficiency setup keeps lines moving between matches and halftime breaks.",
          },
          {
            icon: "milk",
            title: "Fuel for all ages",
            description:
              "Includes protein-enhanced cold brew, vitamin-packed smoothies, and kid-friendly cocoa.",
          },
          {
            icon: "map",
            title: "Any field or arena",
            description:
              "We are self-contained with water and can operate indoors or outdoors with generator options.",
          },
        ],
        inclusions: [
          {
            title: "Tournament staples",
            points: [
              "Early arrival and warm-up batch brewing",
              "Athlete-focused menu with recovery add-ons",
              "Sponsor signage integration",
              "Cashless payments + receipts",
            ],
          },
          {
            title: "Boost performance",
            points: [
              "Electrolyte spritzers",
              "Protein energy bites",
              "Coaches’ hospitality station",
            ],
          },
        ],
        sampleMenu: MENU_SECTIONS.en,
        addOns: [
          {
            title: "Team-branded toppings",
            description:
              "Color-matched sprinkles and sleeves featuring team logos.",
          },
          {
            title: "Athlete recovery zone",
            description:
              "Set up a lounge with foam rollers, fruits, and hydration coolers.",
          },
          {
            title: "Awards ceremony service",
            description:
              "Keep the celebration buzzing with post-game espresso and mocktails.",
          },
        ],
        faqs: [
          {
            question: "Do you need access to water?",
            answer:
              "We bring filtered water tanks but appreciate hose access for multi-day events.",
          },
          {
            question: "Can you start before sunrise?",
            answer:
              "Yes. We often arrive by 5:30 a.m. to serve coaches and parents before the first whistle.",
          },
          {
            question: "How do you manage lines?",
            answer:
              "We add extra baristas and implement express menus to serve 100 drinks per hour when needed.",
          },
        ],
        testimonials: [
          {
            quote:
              "Parents loved having real coffee at the fields. The kids went crazy for the team sprinkle cocoas.",
            name: "Coach Bryan Ellis",
            role: "Tampa Bay United",
          },
          {
            quote:
              "Their crew hustled all weekend and made our sponsors look great with branded sleeves.",
            name: "Lydia Coleman",
            role: "Tournament Director",
          },
        ],
        workflow: [
          {
            title: "Map your schedule",
            description:
              "We review match times and foot traffic to plan service windows.",
          },
          {
            title: "Prep hydration",
            description:
              "We stock extra cold brew, spritzers, and snacks for busy intervals.",
          },
          {
            title: "Keep the wins flowing",
            description:
              "Our team stays flexible for overtime games and award ceremonies.",
          },
        ],
        cta: {
          title: "Add a coffee cart to your tournament",
          description:
            "Share dates, fields, and expected teams so we can design a fueling plan.",
          primaryLabel: "Reserve tournament cart",
          secondaryLabel: "View sports menu",
        },
        layoutVariant: "gallery",
      },
      es: {
        slug: "torneos-deportivos",
        name: "Torneos deportivos",
        pageTitle: "Carrito de café para torneos deportivos",
        metaDescription:
          "Mantén a atletas, coaches y fans con energía gracias al carrito de café móvil de Delightful Bean en torneos y finales.",
        hero: {
          eyebrow: "Energía para el juego",
          title: "Impulsa cada jugada con energía artesanal",
          description:
            "Desde los registros al amanecer hasta la premiación, nuestro carrito mantiene tu torneo con ritmo.",
          image: "/images/sports-tournament-coffee.webp",
          imageAlt: "Padres tomando café en un torneo deportivo",
          highlight: "Ideal para complejos de soccer, béisbol, competencias de porristas y banquetes atléticos",
          stats: [],
        },
        valueProps: [
          {
            icon: "clock",
            title: "Servicio rápido",
            description:
              "Montaje eficiente para mover filas entre partidos y descansos.",
          },
          {
            icon: "milk",
            title: "Energía para todas las edades",
            description:
              "Cold brew con proteína, smoothies con vitaminas y cocoa para peques.",
          },
          {
            icon: "map",
            title: "Cualquier cancha o arena",
            description:
              "Somos autónomos con agua y operamos en interior o exterior con opción de generador.",
          },
        ],
        inclusions: [
          {
            title: "Básicos del torneo",
            points: [
              "Llegada temprana y preparación previa",
              "Menú enfocado en atletas con extras de recuperación",
              "Integración de patrocinadores",
              "Pagos cashless y recibos",
            ],
          },
          {
            title: "Impulsa el rendimiento",
            points: [
              "Spritzers con electrolitos",
              "Bites energéticos de proteína",
              "Estación de hospitalidad para coaches",
            ],
          },
        ],
        sampleMenu: MENU_SECTIONS.es,
        addOns: [
          {
            title: "Toppings con el logo",
            description:
              "Sprinkles en colores del equipo y mangas con logotipo.",
          },
          {
            title: "Zona de recuperación",
            description:
              "Lounge con foam rollers, fruta y hieleras hidratantes.",
          },
          {
            title: "Servicio para premiación",
            description:
              "Mantén la celebración con espresso y mocktails después del juego.",
          },
        ],
        faqs: [
          {
            question: "¿Necesitan acceso a agua?",
            answer:
              "Llevamos tanques filtrados, pero agradecemos acceso a manguera para eventos de varios días.",
          },
          {
            question: "¿Pueden iniciar antes del amanecer?",
            answer:
              "Sí, llegamos desde las 5:30 a.m. para servir a coaches y familias antes del primer silbatazo.",
          },
          {
            question: "¿Cómo manejan las filas?",
            answer:
              "Sumamos baristas y usamos menús exprés para servir hasta 100 bebidas por hora.",
          },
        ],
        testimonials: [
          {
            quote:
              "Los padres agradecieron tener café real en las canchas. Los niños amaron las cocoas con sprinkles del equipo.",
            name: "Coach Bryan Ellis",
            role: "Tampa Bay United",
          },
          {
            quote:
              "Su equipo trabajó sin parar todo el fin de semana y lució a nuestros patrocinadores con mangas personalizadas.",
            name: "Lydia Coleman",
            role: "Directora de torneo",
          },
        ],
        workflow: [
          {
            title: "Mapeamos el cronograma",
            description:
              "Revisamos horarios de juegos y flujo de personas para programar el servicio.",
          },
          {
            title: "Preparamos hidratación",
            description:
              "Stock extra de cold brew, spritzers y snacks para momentos de alta demanda.",
          },
          {
            title: "Celebramos las victorias",
            description:
              "Nos mantenemos flexibles para tiempos extra y premiaciones.",
          },
        ],
        cta: {
          title: "Suma el carrito a tu torneo",
          description:
            "Comparte fechas, canchas y equipos esperados para diseñar un plan de energía.",
          primaryLabel: "Reservar carrito",
          secondaryLabel: "Ver menú deportivo",
        },
        layoutVariant: "gallery",
      },
    },
  },
];

export const serviceSlugLookup: Record<Language, Record<ServiceId, string>> = services.reduce(
  (map, service) => {
    map.en[service.id] = service.content.en.slug;
    map.es[service.id] = service.content.es.slug;
    return map;
  },
  {
    en: {} as Record<ServiceId, string>,
    es: {} as Record<ServiceId, string>,
  }
);

export const serviceNameLookup: Record<Language, Record<ServiceId, string>> = services.reduce(
  (map, service) => {
    map.en[service.id] = service.content.en.name;
    map.es[service.id] = service.content.es.name;
    return map;
  },
  {
    en: {} as Record<ServiceId, string>,
    es: {} as Record<ServiceId, string>,
  }
);

export const serviceMetaLookup: Record<Language, Record<ServiceId, { title: string; description: string }>> =
  services.reduce(
    (map, service) => {
      map.en[service.id] = {
        title: service.content.en.pageTitle,
        description: service.content.en.metaDescription,
      };
      map.es[service.id] = {
        title: service.content.es.pageTitle,
        description: service.content.es.metaDescription,
      };
      return map;
    },
    {
      en: {} as Record<ServiceId, { title: string; description: string }>,
      es: {} as Record<ServiceId, { title: string; description: string }>,
    }
  );

export const serviceSlugsByLanguage = (lang: Language) =>
  services.map((service) => service.content[lang].slug);

export const findServiceBySlug = (lang: Language, slug: string) =>
  services.find((service) => service.content[lang].slug === slug);

export const serviceIds: ServiceId[] = services.map((service) => service.id);

export const serviceSlugToId: Record<Language, Record<string, ServiceId>> = services.reduce(
  (map, service) => {
    map.en[service.content.en.slug] = service.id;
    map.es[service.content.es.slug] = service.id;
    return map;
  },
  {
    en: {} as Record<string, ServiceId>,
    es: {} as Record<string, ServiceId>,
  }
);
