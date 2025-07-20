import React from 'react';
import { DecorationBubbles } from '../../A-KIT/DecorationBubbles';

export const GreetingText = () => {
  return (
    <div className='sliding-word relative w-[320px] rounded-2xl border border-rose-200/50 bg-rose-50/90 p-6 text-lg text-rose-800 shadow-lg backdrop-blur-sm min-[899px]:w-[740px] min-[899px]:p-8 min-[899px]:text-xl'>
      Привет! Вот мы и встретились!!! Моё имя — Наталья. Я — мастер-универсал,
      рада знакомству! Профессионально занимаюсь депиляцией, ресницами и бровями
      с 2006г. Жду нашей встречи.
      <DecorationBubbles />
    </div>
  );
};
