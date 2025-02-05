import type { MetadataRoute } from 'next';
import { defaultLocale, locales } from '@/i18n';
import { PUBLIC_BASE_URL } from '@/lib/env';

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapRoutes = [
    {
      url: '', // home
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'about',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'contact',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ] satisfies MetadataRoute.Sitemap;

  const sitemapData = sitemapRoutes.flatMap((route) =>
    locales.map((locale) => {
      const lang = locale === defaultLocale ? '' : `/${locale}`;
      const routeUrl = route.url === '' ? '' : `/${route.url}`;
      return {
        ...route,
        url: `${PUBLIC_BASE_URL}${lang}${routeUrl}`,
      };
    })
  );

  return sitemapData;
}
