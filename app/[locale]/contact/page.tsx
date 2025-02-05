import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: 'Metadata.contact',
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
      <p>{process.env.NEXT_PUBLIC_SITE_URL}</p>
    </div>
  );
}
