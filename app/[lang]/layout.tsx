import {ThemeProvider, ThemeToggler} from '@/components/Feature/DarkMode';
import {LangToggler} from '@/components/Feature/I18n';
import {Footer} from '@/components/Layout/Footer';
import {TopNav} from '@/components/Layout/TopNav';
import '@/public/globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {siteConfig} from '../siteConfig';
import {topNavLinks} from '../topNavLinks';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Image Converter',
  description: 'A simple image conversion tool online website',
  icons: '/favicon.ico',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <div>
            <TopNav
              siteName={siteConfig.siteName}
              links={topNavLinks}
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
        </ThemeProvider>
      </body>
    </html>
  );
}
