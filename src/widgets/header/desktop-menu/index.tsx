import React from 'react';
import HeaderLink from '@/shared/ui/headerLink';

export const DesktopMenu = () => {
  return (
    <div className='hidden items-center gap-4 lg:flex'>
      <HeaderLink href='/about' text='Обо мне' />
      <HeaderLink href='/procedures' text='Процедуры' />
      <HeaderLink href='/prices' text='Цены' />
      <HeaderLink href='/information' text='Информация' />
      <HeaderLink href='/contacts' text='Контакты' />
    </div>
  );
};
