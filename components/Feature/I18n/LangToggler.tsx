'use client';

import {IconLang} from '@/components/Icon/IconLang';
import {Button} from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {Locale, i18n} from '@/i18n.config';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

export default function LangToggler() {
  const pathName = usePathname();

  const getSegment = (index: number) => {
    if (!pathName) return 'en';
    const segments = pathName.split('/');
    return segments[index];
  };

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <Button
            variant="outline"
            size="icon"
            className="inline-flex sm:hidden">
            <IconLang className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="outline" size="default" className="hidden sm:block">
            <span>{i18n.localesTitleMap[getSegment(1) as Locale]}</span>
            <span className="sr-only">Toggle language</span>
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => {
          return (
            <Link key={locale} href={redirectedPathName(locale)}>
              <DropdownMenuItem className="cursor-pointer">
                {i18n.localesTitleMap[locale]}
              </DropdownMenuItem>
            </Link>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
