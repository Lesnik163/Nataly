'use client';

import React from 'react';
import Logo from './logo';
import { BurgerMenu } from './burger-menu';
import { DesktopMenu } from './desktop-menu';

import './headerNavigation.css';

export const HeaderNavigation = () => {
  return (
    <div className='headerContainer h-[100px] items-center rounded-b-[10px] bg-gradient-to-r from-rose-400 to-pink-400'>
      <div className='relative z-50 flex h-[100px] w-full items-center justify-between px-4'>
        <Logo />
        <DesktopMenu />
        <BurgerMenu />
      </div>

      <div className='headerBlick pointer-events-none absolute inset-0 z-10' />
    </div>
  );
};
