import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import dynamic from 'next/dynamic';

const TopLoadingBar = dynamic(() => import('@/components/top-loading-bar'), {
  ssr: false,
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: 'metadata.home',
  });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className='text-white bg-black min-h-screen max-w-5xl mx-auto w-full'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <TopLoadingBar />
          <Navigation />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
