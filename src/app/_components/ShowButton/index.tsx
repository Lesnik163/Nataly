import Link from 'next/link';

export const ShowButton = () => {
  return (
    <div className='flex flex-col items-center gap-3 md:flex-row md:justify-start'>
      <Link
        href='/procedures'
        className='my-[40px] box-border inline-flex w-full max-w-[576px] items-center justify-center rounded-lg border-2 border-rose-500 px-6 py-3 text-lg text-zinc-100 shadow-md transition-all duration-300 hover:scale-105 hover:bg-rose-500 hover:text-white focus-visible:shadow-[0_0_0_2px_rgba(255,255,255,1),_0_0_0_6px_rgba(190,18,60,0.95)]'
        aria-label='Перейти к списку процедур'
      >
        Смотреть услуги
      </Link>
    </div>
  );
};