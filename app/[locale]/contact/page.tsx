import { PUBLIC_BASE_URL } from '@/lib/env';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const runtime = 'edge';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: 'metadata.contact',
  });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function Page() {
  const t = await getTranslations('contact');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{PUBLIC_BASE_URL}</p>
    </div>
  );
}
