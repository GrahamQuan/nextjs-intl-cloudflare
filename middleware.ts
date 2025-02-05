import { type NextRequest } from 'next/server';

import { getUrlLocale } from './i18n';
import intlMiddleware from './middlewares/intlMiddleware';

// function getIp(request: NextRequest): string {
//   return (
//     request.headers.get('cf-connecting-ip') ||
//     request.headers.get('x-real-ip') ||
//     request.headers.get('x-forwarded-for')?.split(',')[0] ||
//     request.ip ||
//     ''
//   );
// }

export default function middleware(request: NextRequest) {
  // const ip = getIp(request);

  const urlLocale = getUrlLocale(request);

  request.headers.set('X-HEADER-NEXT-LOCALE', urlLocale);

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
