export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'zh'],
  localesTitleMap: {
    en: 'English',
    zh: '中文',
  },
} as const;

export type Locale = (typeof i18n)['locales'][number];
