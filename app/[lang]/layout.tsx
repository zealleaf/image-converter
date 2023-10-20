import {ThemeToggler} from '@/components/Feature/DarkMode';
import {LangToggler} from '@/components/Feature/I18n';
import {Footer} from '@/components/Layout/Footer';
import {TopNav} from '@/components/Layout/TopNav';
import {Locale} from '@/i18n.config';
import {getDictionary} from '@/lib/dictionary';
import '@/public/globals.css';
import {siteConfig} from '../siteConfig';
import {getTopNavLinks} from '../topNavLinks';

export const runtime = 'edge';

export default async function LangLayout({
  params,
  children,
}: {
  params: {lang: Locale};
  children: React.ReactNode;
}) {
  const t = await getDictionary(params.lang);

  return (
    <div>
      <TopNav
        siteName={siteConfig.siteName}
        links={getTopNavLinks(t)}
        extra={
          <div className="flex gap-2">
            <LangToggler />
            <ThemeToggler />
          </div>
        }
      />
      <div className="min-h-[calc(100vh-65px-64px)]">
        <div className="mx-6 h-full py-6 sm:container sm:mx-auto">
          {children}
        </div>
      </div>
      <Footer copyright={siteConfig.copyright} />
    </div>
  );
}
