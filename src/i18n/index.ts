import { en } from './dictionaries/en';
import { no } from './dictionaries/no';
import type { DictionaryMap, Locale } from './types';

export const dictionaries: DictionaryMap = { en, no };

export const DEFAULT_LOCALE: Locale = 'no';

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  no: 'Norsk',
};

export type {
  AboutTranslations,
  DictionaryMap,
  FaqTranslations,
  HomeTranslations,
  Locale,
  NavTranslations,
  ProjectsTranslations,
  ServicesTranslations,
  TranslationDictionary,
} from './types';
