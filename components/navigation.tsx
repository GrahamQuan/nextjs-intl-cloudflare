import { Link } from '@/app/navigation';
import LocaleSwitcher from './locale-switcher';

function LinkBtn({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link href={href} className='hover:text-sky-500'>
      {children}
    </Link>
  );
}

export default async function Navigation() {
  return (
    <nav className='flex gap-5 items-center w-full py-4 border-b border-white/10'>
      <LinkBtn href='/'>Home</LinkBtn>
      <LinkBtn href='/about'>About</LinkBtn>
      <LinkBtn href='/contact'>Contact</LinkBtn>
      <LocaleSwitcher />
    </nav>
  );
}
