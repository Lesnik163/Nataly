import React from 'react';
import { WhyMePoint } from '../WhyMePoint';

export const WhyMe = () => {
  return (
    <div className='mx-4 rounded-2xl border border-rose-200/50 bg-white/80 p-8 shadow-lg backdrop-blur-sm md:mx-0'>
      <h3 className='mb-4 text-2xl font-bold text-rose-800'>
        Почему выбирают мои услуги?
      </h3>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <WhyMePoint text='Гипоаллергенные материалы' />
        <WhyMePoint text='Стерильные инструменты' />
        <WhyMePoint text='Удобное расположение' />
        <WhyMePoint text='Доступные цены' />
      </div>
    </div>
  );
};
