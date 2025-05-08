import type { Metadata } from 'next';
import './globals.css';

import { roboto } from './ui/fonts';
import { HeaderNavigation } from './ui/components/HeaderNavigation';

export const metadata: Metadata = {
  title: 'Nataly_Lash',
  description:
    'Студия красоты "Nataly_Lash" метро Саларьево, Москва, предлагает профессиональное наращивание ресниц (классика, 2D, 3D), ламинирование ресниц, шугаринг и депиляцию воском. Использую гипоаллергенные материалы, опыт более 10 лет. Запишитесь онлайн и получите консультацию!',
  keywords: [
    'наращивание ресниц',
    'ресницы Москва',
    'студия ресниц',
    'объемные ресницы',
    '2D',
    'классика',
    '3D',
    'ламинирование ресниц',
    'самые дешевые цены',
    'опытный мастер ресниц',
    'шугаринг',
    'восковая депиляция',
    'депиляция воском',
  ],
  openGraph: {
    url: 'https://lashart.ru',
  },
  applicationName: 'Nataly_Lash',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={`${roboto.className} antialiased`}>
        <HeaderNavigation />
        {children}
      </body>
    </html>
  );
}
