import React from 'react';
import HeaderLink from '@/shared/ui/headerLink';
import { RegistrationButton } from '../registration-button';

export const DesktopMenu = () => {
  return (
    <div className='hidden items-center gap-4 min-[1210px]:flex'>
      <HeaderLink href='/about' text='Обо мне' />
      <HeaderLink href='/procedures' text='Процедуры' />
      <HeaderLink href='/prices' text='Цены' />
      <HeaderLink href='/information' text='Информация' />
      <HeaderLink href='/contacts' text='Контакты' />
      <RegistrationButton />
    </div>
  );
};
