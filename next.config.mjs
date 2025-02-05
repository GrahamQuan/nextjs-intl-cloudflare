import createNextIntlPlugin from 'next-intl/plugin';
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default () =>
  [withNextIntl].reduce((acc, next) => next(acc), nextConfig);
