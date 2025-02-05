import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export const runtime = 'edge';

export default async function Page({ params }: { params: { locale: string } }) {
  const t = await getTranslations('home');

  return (
    <div className='space-y-3'>
      <h1>{t('title')}</h1>
      <Image
        src='/images/Croissant.png'
        alt='Croissant'
        className='rounded-lg'
        width={100}
        height={100}
      />
    </div>
  );
}
