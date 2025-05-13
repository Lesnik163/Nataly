'use client';

import React from 'react';
import HeaderLink from '../HeaderLink';
import Logo from '../Logo';

import './headerNavigation.css';

export const HeaderNavigation = () => {
  return (
    <div className='headerContainer h-[100px] items-center rounded-b-[10px] bg-rose-300'>
      <div className='fixed top-0 z-50 flex h-[100px] w-full items-center justify-between'>
        <Logo />
        <HeaderLink href='/about' text='Обо мне' />
        <HeaderLink href='/procedures' text='Процедуры' />
        <HeaderLink href='/prices' text='Цены' />
        <HeaderLink href='/information' text='Информация' />
        <HeaderLink href='/contacts' text='Контакты' />
      </div>

      <div className='headerBlick pointer-events-none absolute inset-0 z-10' />
    </div>
  );
};
