import { DecorationBubbles } from '@/app/ui/A-KIT/DecorationBubbles';
import { benefits } from '@/mockDB/benefits';

export const BenefitsSection = () => {
  return (
    <section id='benefits' className='mx-auto w-full max-w-6xl px-4 pt-16'>
      <h2 className='mb-16 text-center text-3xl font-bold text-rose-900 md:text-4xl'>
        Что вы получаете?
      </h2>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {benefits.map((b) => (
          <div
            key={b.title}
            className='group relative overflow-hidden rounded-2xl border border-rose-200/60 bg-white p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-md'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-rose-50/30 to-pink-100/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
            <h3 className='relative z-10 mb-2 text-xl font-semibold text-rose-800'>
              {b.title}
            </h3>
            <p className='relative z-10 text-rose-900/70'>{b.text}</p>
            <DecorationBubbles className='opacity-30' />
            <div className='absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-pink-300 to-rose-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
          </div>
        ))}
      </div>
    </section>
  );
};
