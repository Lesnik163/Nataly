import { Roboto_Mono, Mea_Culpa } from 'next/font/google';

export const roboto = Roboto_Mono({
  weight: ['400', '700'],
  subsets: ['cyrillic', 'latin'],
});

export const culpa = Mea_Culpa({
  weight: ['400'],
  subsets: ['latin'],
  fallback: ['Dancing Script', 'cursive', 'Segoe Script'],
  preload: true,
});
