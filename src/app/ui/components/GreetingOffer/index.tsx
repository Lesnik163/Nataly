'use client';

import React from 'react';
import { DecorationBubbles } from '../../A-KIT/DecorationBubbles';
import { useIntersectionObserver } from './useIntersectionObserver';

const getListItemClasses = (isVisible: boolean) => ({
  item1: `font-medium text-rose-700 opacity-0 before:mr-3 before:text-rose-500 before:content-["→"] ${isVisible ? 'animate-[slideInRight_0.8s_ease-out_forwards]' : ''}`,
  item2: `font-medium text-rose-700 opacity-0 before:mr-3 before:text-rose-500 before:content-["→"] ${isVisible ? 'animate-[slideInLeft_0.8s_ease-out_forwards]' : ''}`,
  item3: `font-medium text-rose-700 opacity-0 before:mr-3 before:text-rose-500 before:content-["→"] ${isVisible ? 'animate-[slideInRight_0.8s_ease-out_forwards]' : ''}`,
});

export const GreetingOffer = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const listItemClasses = getListItemClasses(isVisible);

  return (
    <div
      ref={elementRef}
      className='relative my-[100px] w-[320px] rounded-2xl border border-rose-200/50 bg-rose-50/90 p-6 shadow-xl backdrop-blur-sm min-[899px]:w-[740px] min-[899px]:p-8'
    >
      <h1 className='mb-4 ml-4 font-mono text-[22px] text-rose-800 min-[899px]:text-[50px]'>
        Мы можем сделать тебе:
      </h1>
      <ul className='relative space-y-3 overflow-hidden pl-8 md:pl-12'>
        <li
          className={listItemClasses.item1}
          style={{ animationDelay: '0.5s' }}
        >
          Шугаринг недорого и без боли;
        </li>

        <li className={listItemClasses.item2} style={{ animationDelay: '1s' }}>
          Ресницы любой формы и пышности;
        </li>

        <li
          className={listItemClasses.item3}
          style={{ animationDelay: '1.5s' }}
        >
          Бровки красивой формы;
        </li>
      </ul>
      <DecorationBubbles />
    </div>
  );
};
