import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: 'Metadata.about',
  });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function Page() {
  const t = await getTranslations('about');
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/hello`);
  const data = await res.json();

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{data.message}</p>
    </div>
  );
}
