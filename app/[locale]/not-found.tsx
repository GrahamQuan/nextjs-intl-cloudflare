import { useTranslations } from 'next-intl';
import { Link } from '../navigation';

export default function NotFound() {
  const t = useTranslations('error-page.not-found');
  return (
    <div className='flex w-screen flex-1 items-center justify-center'>
      <div className='flex flex-col items-center gap-4'>
        <img
          src='https://c.topshort.org/sana_ai/404.webp'
          className='h-[248px] w-[248px] rounded-full'
          alt='404'
        />
        <h1 className='text-sm text-white/40'>{t('title')}</h1>
        <Link href='/'>{t('goHome')}</Link>
      </div>
    </div>
  );
}
