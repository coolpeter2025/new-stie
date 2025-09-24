import { Language } from "../languages";

export interface NavDictionary {
  home: string;
  services: string;
  locations: string;
  menu: string;
  gallery: string;
  about: string;
  contact: string;
  languageSwitcher: string;
  getQuote: string;
}

export interface FooterDictionary {
  tagline: string;
  quickLinks: string;
  contactTitle: string;
  serviceRadius: string;
  hours: string;
  followUs: string;
}

export interface CommonDictionary {
  getQuote: string;
  viewMenu: string;
  learnMore: string;
  bookNow: string;
  languageName: string;
  languageSwitchPrompt: string;
  phoneLabel: string;
  emailLabel: string;
  instagramLabel: string;
}

export interface ContactDictionary {
  heroTitle: string;
  heroDescription: string;
  formTitle: string;
  formDescription: string;
  bookingSteps: { title: string; description: string }[];
  formLabels: {
    name: string;
    email: string;
    phone: string;
    eventDate: string;
    guestCount: string;
    eventDuration: string;
    venue: string;
    serviceType: string;
    addOns: string;
    notes: string;
    submit: string;
  };
}

export interface GalleryDictionary {
  title: string;
  description: string;
}

export interface Dictionary {
  nav: NavDictionary;
  footer: FooterDictionary;
  common: CommonDictionary;
  contact: ContactDictionary;
  gallery: GalleryDictionary;
}

export type DictionaryMap = Record<Language, Dictionary>;
