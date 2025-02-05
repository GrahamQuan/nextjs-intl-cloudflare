import { notFound } from 'next/navigation';
import type { NextRequest } from 'next/server';
import { getRequestConfig } from 'next-intl/server';

export const defaultLocale = 'en-US' as const;

export const languages = [
  {
    code: 'en-US',
    lang: 'en-US',
    backendValue: 'en',
    label: 'English',
  },
  {
    code: 'es-ES',
    lang: 'es-ES',
    backendValue: 'es',
    label: 'Español',
  },
  {
    code: 'zh-CN',
    lang: 'zh-CN',
    backendValue: 'zh',
    label: '简体中文',
  },
];

export const generateLanguagePaths = (baseRoute: string, route: string) =>
  languages.reduce(
    (paths, { code, lang }) => ({
      ...paths,
      [lang === defaultLocale ? 'x-default' : code]:
        lang === defaultLocale
          ? `${baseRoute}/${route}`
          : `${baseRoute}/${lang}/${route}`,
    }),
    {}
  );

export const locales = languages.map((lang) => lang.lang);

export function getUrlLocale(request: NextRequest): string {
  const { pathname } = request.nextUrl;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  if (pathnameIsMissingLocale) {
    return defaultLocale;
  }
  return pathname.split('/')[1];
}

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
