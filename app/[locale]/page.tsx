import { getTranslations } from 'next-intl/server';

export const runtime = 'edge';

export default async function Page({ params }: { params: { locale: string } }) {
  const t = await getTranslations('home');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>test ci</p>
    </div>
  );
}
