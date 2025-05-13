import React from 'react';

import './greeting.css';
import { share_teck } from '../../fonts';

const Greeting = () => {
  return (
    <div className='relative z-10 flex h-[calc(screen-100px)] flex-col items-center justify-between'>
      <div
        className={`sliding-word bg-rose-300 ${share_teck.className} w-[320px] text-rose-800 min-[899px]:w-[740px]`}
      >
        Привет! Вот мы и встретились!!! Моё имя — Наталья. Я — мастер-универсал,
        рада знакомству! Профессионально занимаюсь депиляцией, ресницами и
        бровями с 2006г. Жду нашей встречи.
      </div>
      <div
        className='animate-scaleIn text-stroke mt-[76px] text-[50px] text-rose-400 
        md:text-[100px] min-[899px]:mt-[50px] lg:text-[130px] xl:text-[190px]'
      >
        Nataly.
        <span className='text-stroke text-rose-600'>L</span>
        ash
      </div>
      <div className='my-[100px] w-[320px] rounded-[10px] bg-rose-300 p-[10px_15px] text-neutral-50 min-[899px]:w-[740px]'>
        <h1 className='ml-[40] font-mono text-[22px] min-[899px]:text-[50px]'>
          Мы можем сделать тебе:
        </h1>
        <ul className='relative overflow-hidden pl-[30px] md:pl-[60px]'>
          <li
            className='animate-[slideInRight_0.8s_ease-out_forwards] 
          text-rose-700
          opacity-0 before:mr-3 before:content-["→"]'
            style={{ animationDelay: '0.5s' }}
          >
            Шугаринг недорого и без боли;
          </li>

          <li
            className='animate-[slideInLeft_0.8s_ease-out_forwards] 
          text-rose-700
          opacity-0 before:mr-3 before:content-["→"]'
            style={{ animationDelay: '1s' }}
          >
            Ресницы любой формы и пышности;
          </li>

          <li
            className='animate-[slideInRight_0.8s_ease-out_forwards] 
          text-rose-700
          opacity-0 before:mr-3 before:content-["→"]'
            style={{ animationDelay: '1.5s' }}
          >
            Бровки красивой формы;
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Greeting;
