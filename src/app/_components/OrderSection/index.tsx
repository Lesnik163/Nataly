import Link from "next/link";

export const OrderSection = () => {
  return (
    <section className='mx-auto w-full max-w-6xl px-4 py-16'>
      <div className='rounded-3xl bg-gradient-to-r from-rose-400 to-pink-400 p-8 text-center text-white shadow-lg'>
        <h3 className='mb-3 text-2xl font-bold md:text-3xl'>Ты всегда безупречна!</h3>
        <p className='mx-auto mb-6 max-w-2xl text-white/90'>
          Запишитесь онлайн — и я подберу идеальный образ для Вас.
        </p>
        <Link
          href='/contacts'
          className='inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-rose-700 hover:bg-rose-50 focus-visible:shadow-[0_0_0_2px_rgba(255,255,255,1),_0_0_0_6px_rgba(190,18,60,0.95)]'
          aria-label='Перейти к странице выбора процедуры'
        >
          Записаться
        </Link>
      </div>
    </section>
  );
};