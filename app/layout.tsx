import {ThemeProvider} from '@/components/Feature/DarkMode';
import '@/public/globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';

const inter = Inter({subsets: ['latin']});

export const runtime = 'edge';

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
