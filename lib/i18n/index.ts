import { Language } from "../languages";
import { enDictionary } from "./en";
import { esDictionary } from "./es";
import type { Dictionary } from "./types";

const dictionaries: Record<Language, Dictionary> = {
  en: enDictionary,
  es: esDictionary,
};

export const getDictionary = (lang: Language) => dictionaries[lang];
