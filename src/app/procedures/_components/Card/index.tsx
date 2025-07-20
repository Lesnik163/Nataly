import React from 'react';
import { Button } from '@/app/ui/A-KIT/Botton';
import { DecorationBubbles } from '@/app/ui/A-KIT/DecorationBubbles';
import './card.css';

interface Procedure {
  id: number;
  title: string;
  price: number | null;
  description: string;
}

interface CardProps {
  procedure: Procedure;
}

export const Card: React.FC<CardProps> = ({ procedure }) => {
  return (
    <div className='card-container group relative overflow-hidden rounded-2xl border border-rose-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl'>
      <div className='absolute inset-0 bg-gradient-to-br from-rose-50 to-pink-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
      <div className='h-2 bg-gradient-to-r from-rose-400 to-pink-400'></div>
      <div className='relative flex h-full flex-col p-6'>
        <h2 className='mb-4 text-xl font-bold text-rose-800 transition-colors duration-300 group-hover:text-rose-900'>
          {procedure.title}
        </h2>
        <p className='mb-6 flex-1 text-sm leading-relaxed text-gray-600'>
          {procedure.description}
        </p>
        <div className='flex items-center justify-between'>
          {procedure.price ? (
            <div className='flex items-center gap-2'>
              <span className='text-2xl font-bold text-rose-600'>
                {procedure.price.toLocaleString()} ₽
              </span>
              <span className='card-price-text text-sm text-gray-500'>
                за процедуру
              </span>
            </div>
          ) : (
            <div className='font-semibold text-rose-600'>Зависит от зоны</div>
          )}
          <Button type='primary' size='md'>
            Записаться
          </Button>
        </div>

        <DecorationBubbles />
      </div>
      <div className='absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-pink-300 to-rose-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
    </div>
  );
};
