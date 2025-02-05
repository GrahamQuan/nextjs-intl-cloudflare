import createMiddleware from 'next-intl/middleware';

import { localePrefix } from '@/app/navigation';

import { defaultLocale, locales } from '../i18n';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
  localeDetection: false,
});

export default intlMiddleware;
