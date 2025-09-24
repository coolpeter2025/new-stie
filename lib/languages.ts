export const LANGUAGES = ["en", "es"] as const;
export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = "en";

export const languageConfig: Record<Language, {
  label: string;
  nativeLabel: string;
  hreflang: string;
}> = {
  en: {
    label: "English",
    nativeLabel: "English",
    hreflang: "en-US",
  },
  es: {
    label: "Spanish",
    nativeLabel: "Español",
    hreflang: "es-US",
  },
};

export const isLanguage = (value: string): value is Language =>
  LANGUAGES.includes(value as Language);
