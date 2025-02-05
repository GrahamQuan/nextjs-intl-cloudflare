'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { languages } from '@/i18n';
import { useLocale } from 'next-intl';

import { isEmptyObject } from '@/lib/utils/objectUtils';
import { objToQueryStr } from '@/lib/utils/stringUtils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { usePathname, useRouter } from '../app/navigation';

export default function LocaleSwitcher() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [localeVal, setLocaleVal] = useState(currentLocale);

  const onValueChange = (newLocale: string) => {
    let url = pathname;
    const querysObj = Object.fromEntries(searchParams.entries());
    if (!isEmptyObject(querysObj)) {
      url = objToQueryStr(pathname, querysObj);
    }

    setLocaleVal(newLocale);
    router.replace(url, { locale: newLocale });
  };

  return (
    <Select
      value={localeVal}
      defaultValue={currentLocale}
      onValueChange={onValueChange}
    >
      <SelectTrigger className='flex w-[150px] h-8 items-center gap-1 rounded-lg bg-transparent border-white/40 text-white/40 px-2 lg:h-11'>
        <img src='/icons/global.svg' className='size-5' />
        <SelectValue placeholder='locale'>
          {localeVal.toUpperCase()}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className='max-h-fit bg-card-black'>
        {languages.map((language) => (
          <SelectItem
            value={language.lang}
            key={language.code}
            className='text-white/40 hover:cursor-pointer hover:!bg-white/40 focus:bg-[#2C2D36]'
          >
            {language.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
