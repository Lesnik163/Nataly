import Image from 'next/image';
import './arrowPointer.css';

export const ArrowPointer = () => {
  return (
    <a
      href='#benefits'
      className='animate-arrow-pulse absolute bottom-[360px] left-[60%] hidden h-[100px] w-16 -translate-x-1/2 items-center justify-center rounded-full border border-white/60 text-white/90 backdrop-blur-sm transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-4 lg:inline-flex'
      aria-label='Прокрутить вниз'
    >
      <Image src='/arrowDownScroll.svg' alt='Вниз' width={24} height={24} />
    </a>
  );
};