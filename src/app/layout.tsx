import './globals.css';
import { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Shuolin (Leo) Yin | AI Engineer',
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
    <html lang="en" className="scroll-smooth bg-black">
      <body className={`${inter.variable} ${jetbrainsMono.variable} bg-black text-zinc-200 antialiased font-sans selection:bg-brand-accent selection:text-black`}>
        <NextTopLoader
          color="#c0ff00"
          showSpinner={false}
          height={2}
        />
        {children}
      </body>
    </html>
  );
}
