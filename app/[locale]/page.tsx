import { getTranslations } from 'next-intl/server';

export default async function Page({ params }: { params: { locale: string } }) {
  const t = await getTranslations('home');

  return <div>{t('title')}</div>;
}
