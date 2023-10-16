import {ThemeProvider} from '@/components/Feature/DarkMode/ThemeProvider';
import {ThemeToggler} from '@/components/Feature/DarkMode/ThemeToggler';
import {TopNav} from '@/components/Layout/TopNav';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import '../public/globals.css';
import {siteConfig} from './siteConfig';
import {topNavLinks} from './topNavLinks';

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
          <TopNav
            siteName={siteConfig.siteName}
            links={topNavLinks}
            extra={<ThemeToggler />}
          />
          <div className="h-[calc(100vh-60px)]  bg-gray-100 dark:bg-gray-900">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
