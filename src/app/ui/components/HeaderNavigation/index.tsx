'use client';

import React from 'react';
import Logo from '../Logo';
import { BurgerMenu } from '../BurgerMenu';
import { DesktopMenu } from '../DesktopMenu';
import { useScrollEffect } from './useScrollEffect';

import './headerNavigation.css';

export const HeaderNavigation = () => {
  const isScrolled = useScrollEffect();

  return (
    <div className='headerContainer h-[100px] items-center rounded-b-[10px] bg-gradient-to-r from-rose-400 to-pink-400'>
      <div className='fixed top-0 z-50 flex h-[100px] w-full items-center justify-between px-4'>
        <Logo />
        <DesktopMenu isScrolled={isScrolled} />
        <BurgerMenu isScrolled={isScrolled} />
      </div>

      <div className='headerBlick pointer-events-none absolute inset-0 z-10' />
    </div>
  );
};
