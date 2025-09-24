import { Language } from "./languages";
import { ServiceId, serviceSlugLookup, serviceSlugToId } from "./data/services";
import {
  RegionId,
  citySlugLookup,
  citySlugToId,
  regionSlugLookup,
  regionSlugToId,
} from "./data/locations";

const sectionSegments = {
  services: { en: "services", es: "servicios" },
  locations: { en: "locations", es: "ubicaciones" },
  menu: { en: "menu", es: "menu" },
  gallery: { en: "gallery", es: "galeria" },
  about: { en: "about", es: "nosotros" },
  contact: { en: "contact", es: "contacto" },
} as const;

export type SectionKey = keyof typeof sectionSegments;

export const sectionPath = (lang: Language, section: SectionKey) =>
  `/${lang}/${sectionSegments[section][lang]}`;

export const homePath = (lang: Language) => `/${lang}`;

export const servicePath = (lang: Language, serviceId: ServiceId) =>
  `/${lang}/${sectionSegments.services[lang]}/${serviceSlugLookup[lang][serviceId]}`;

export const regionPath = (lang: Language, regionId: RegionId) =>
  `/${lang}/${sectionSegments.locations[lang]}/${regionSlugLookup[lang][regionId]}`;

export const cityPath = (lang: Language, regionId: RegionId, cityId: string) =>
  `/${lang}/${sectionSegments.locations[lang]}/${regionSlugLookup[lang][regionId]}/${citySlugLookup[lang][cityId]}`;

export const serviceLocationPath = (
  lang: Language,
  serviceId: ServiceId,
  regionId: RegionId,
  cityId: string,
) =>
  `/${lang}/${serviceSlugLookup[lang][serviceId]}/${regionSlugLookup[lang][regionId]}/${citySlugLookup[lang][cityId]}`;

export const resolveLanguageAlternate = (currentLang: Language, pathname: string) => {
  const targetLang: Language = currentLang === "en" ? "es" : "en";
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return homePath(targetLang);
  }

  const [, ...rest] = segments;

  if (rest.length === 0) {
    return homePath(targetLang);
  }

  const [first, second, third] = rest;

  if (
    first === sectionSegments.services[currentLang] ||
    first === sectionSegments.services[targetLang]
  ) {
    if (!second) {
      return sectionPath(targetLang, "services");
    }
    const serviceId = serviceSlugToId[currentLang][second] ?? serviceSlugToId[targetLang][second];
    if (serviceId) {
      return `/${targetLang}/${sectionSegments.services[targetLang]}/${serviceSlugLookup[targetLang][serviceId]}`;
    }
  }

  if (
    first === sectionSegments.locations[currentLang] ||
    first === sectionSegments.locations[targetLang]
  ) {
    if (!second) {
      return sectionPath(targetLang, "locations");
    }
    const regionId = regionSlugToId[currentLang][second] ?? regionSlugToId[targetLang][second];
    if (regionId && !third) {
      return `/${targetLang}/${sectionSegments.locations[targetLang]}/${regionSlugLookup[targetLang][regionId]}`;
    }
    if (regionId && third) {
      const cityId = citySlugToId[currentLang][third] ?? citySlugToId[targetLang][third];
      if (cityId) {
        return `/${targetLang}/${sectionSegments.locations[targetLang]}/${regionSlugLookup[targetLang][regionId]}/${citySlugLookup[targetLang][cityId]}`;
      }
    }
  }

  const serviceId = serviceSlugToId[currentLang][first] ?? serviceSlugToId[targetLang][first];
  if (serviceId && second && third) {
    const regionId = regionSlugToId[currentLang][second] ?? regionSlugToId[targetLang][second];
    const cityId = citySlugToId[currentLang][third] ?? citySlugToId[targetLang][third];
    if (regionId && cityId) {
      return `/${targetLang}/${serviceSlugLookup[targetLang][serviceId]}/${regionSlugLookup[targetLang][regionId]}/${citySlugLookup[targetLang][cityId]}`;
    }
  }

  const section = (Object.keys(sectionSegments) as SectionKey[]).find(
    (key) =>
      sectionSegments[key][currentLang] === first ||
      sectionSegments[key][targetLang] === first,
  );
  if (section) {
    return sectionPath(targetLang, section);
  }

  return homePath(targetLang);
};
