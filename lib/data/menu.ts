import type { Language } from "../languages";

type MenuSection = {
  title: string;
  items: string[];
};

type MenuContent = Record<Language, MenuSection[]>;

export const MENU_SECTIONS: MenuContent = {
  en: [
    {
      title: "Signature drinks",
      items: [
        "Pumpkin Patch Bliss — Espresso, your choice of milk, pumpkin syrup, served over ice",
        "Golden Caramel Cloud — Espresso, steamed milk, caramel syrup, light foam",
        "Vanilla Velvet — Espresso, steamed milk, vanilla syrup",
      ],
    },
    {
      title: "Espresso classics (hot or iced)",
      items: ["Espresso", "Americano", "Latte", "Cappuccino", "Mocha"],
    },
    {
      title: "Syrups & add-ins",
      items: [
        "French Vanilla",
        "Caramel",
        "White Chocolate",
        "Peppermint",
        "Lavender",
        "Simple Syrup",
        "Hazelnut",
        "Pistachio",
      ],
    },
    {
      title: "Milks & teas",
      items: [
        "Whole milk",
        "Oat milk",
        "Black tea",
        "Peach tea",
        "Peppermint tea",
        "Passion tea",
      ],
    },
  ],
  es: [
    {
      title: "Bebidas emblemáticas",
      items: [
        "Pumpkin Patch Bliss — Espresso doble, tu leche favorita y jarabe de calabaza servido con hielo",
        "Golden Caramel Cloud — Espresso doble, leche vaporizada, jarabe de caramelo y espuma ligera",
        "Vanilla Velvet — Espresso doble, leche vaporizada y jarabe de vainilla",
      ],
    },
    {
      title: "Clásicos de espresso (calientes o fríos)",
      items: ["Espresso", "Americano", "Latte", "Cappuccino", "Mocha"],
    },
    {
      title: "Jarabes y complementos",
      items: [
        "Vainilla francesa",
        "Caramelo",
        "Chocolate blanco",
        "Menta peppermint",
        "Lavanda",
        "Jarabe simple",
        "Avellana",
        "Pistache",
      ],
    },
    {
      title: "Leches y tés",
      items: [
        "Leche entera",
        "Leche de avena",
        "Té negro",
        "Té de durazno",
        "Té de menta",
        "Té de maracuyá",
      ],
    },
  ],
};

export const signatureDescriptions: Record<Language, string> = {
  en: "Every cart booking includes our handcrafted signature drinks, espresso classics, premium syrups, plus milk and tea options.",
  es: "Cada reserva incluye nuestras bebidas emblemáticas, clásicos de espresso, jarabes premium y opciones de leche y té.",
};
