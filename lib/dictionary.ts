import type {Locale} from '@/i18n.config';
import 'server-only';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  zh: () => import('@/dictionaries/zh.json').then((module) => module.default),
};

type PromiseType<T> = (args: any[]) => Promise<T>;
type UnPromisify<T> = T extends PromiseType<infer U> ? U : never;

export type DictionaryPromise = ReturnType<(typeof dictionaries)['en']>;
export type Dictionary = UnPromisify<(typeof dictionaries)['en']>;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
