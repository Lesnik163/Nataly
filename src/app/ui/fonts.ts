import { Roboto_Mono, Mea_Culpa, Share_Tech } from 'next/font/google';

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

export const share_teck = Share_Tech({
  weight: ['400'],
  subsets: ['latin'],
  fallback: ['Roboto Mono', 'Courier New', 'monospace'],
  preload: true,
});
