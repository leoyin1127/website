import './globals.css';
import { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Shuolin (Leo) Yin | AI Engineer & Computer Engineer',
  description: 'Personal website for Shuolin (Leo) Yin - AI Engineer, Researcher, and Computer Engineering Student',
  keywords: 'Shuolin Yin, Leo Yin, AI Engineer, Computer Engineer, React, NextJS, Machine Learning, University of Toronto',
  authors: [{ name: 'Shuolin (Leo) Yin' }],
  creator: 'Shuolin (Leo) Yin',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-primary dark:to-slate-900">
        <ThemeProvider>
          <NextTopLoader
            color="#3b82f6"
            showSpinner={false}
            height={4}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
