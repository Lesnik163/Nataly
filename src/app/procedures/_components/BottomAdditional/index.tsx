import React from 'react';
import { WhyMeReason } from '../WhyMeReason';

export const BottomAdditional = () => {
  return (
    <div className='mt-16 text-center'>
      <div className='mx-auto max-w-4xl rounded-2xl border border-rose-200 bg-white p-8 shadow-lg'>
        <h3 className='mb-4 text-2xl font-bold text-rose-800'>
          Почему выбирают меня?
        </h3>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          <WhyMeReason
            icon='✨'
            title='Качество'
            description='Используем только премиальные материалы'
          />
          <WhyMeReason
            icon='👩‍⚕️'
            title='Опыт'
            description='Более 10 лет в индустрии красоты'
          />
          <WhyMeReason
            icon='💝'
            title='Забота'
            description='Индивидуальный подход к каждому клиенту'
          />
        </div>
      </div>
    </div>
  );
};
