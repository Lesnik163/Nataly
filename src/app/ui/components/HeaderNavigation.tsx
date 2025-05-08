'use client';

import React from 'react';
import HeaderLink from './KIT/HeaderLink';
import Logo from './KIT/Logo';

export const HeaderNavigation = () => {
  return (
    <div className='headerContainer relative h-[100px] items-center overflow-hidden rounded-b-[10px] bg-pink-300'>
      <div className='flex h-full min-w-[650px] items-center justify-between'>
        <Logo />
        <HeaderLink href='/about' text='Обо мне' />
        <HeaderLink href='/procedures' text='Процедуры' />
        <HeaderLink href='/prices' text='Цены' />
        <HeaderLink href='/information' text='Информация' />
        <HeaderLink href='/contacts' text='Контакты' />
      </div>

      <div className='headerBlick pointer-events-none absolute inset-0' />
    </div>
  );
};
