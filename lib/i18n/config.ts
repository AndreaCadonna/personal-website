export const locales = ['en', 'it', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
