import './globals.css';
import { ReactNode } from 'react';
import Head from 'next/head';

export const metadata = {
  title: 'NawaHub | منصة التمكين الرقمي للمرأة والشباب',
  description: 'منصة عربية شاملة لدعم وتمكين المشاريع الرقمية للنساء والشباب. أنشئ مشروعك وشارك أفكارك بسهولة.',
  keywords: 'NawaHub, تمكين المرأة, المشاريع الرقمية, الشباب, منصة عربية, دعم المشاريع',
  author: 'NawaHub Team',
  viewport: 'width=device-width, initial-scale=1.0',
  charset: 'UTF-8',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />
        <meta charSet={metadata.charset} />
        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_AR" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
