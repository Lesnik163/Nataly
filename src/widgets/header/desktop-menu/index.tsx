'use client';

import { useSession } from 'next-auth/react';
import HeaderLink from '@/shared/ui/headerLink';
import { RegistrationButton } from '../registration-button';
import { LoginButton } from '../login-button';
import { LogoutButton } from '../logout-button';

export const DesktopMenu = () => {
  const { data: session } = useSession();

  return (
    <div className='hidden items-center gap-4 min-[1210px]:flex'>
      <HeaderLink href='/about' text='Обо мне' />
      <HeaderLink href='/procedures' text='Процедуры' />
      <HeaderLink href='/prices' text='Цены' />
      <HeaderLink href='/information' text='Информация' />
      <HeaderLink href='/contacts' text='Контакты' />
      {session && <HeaderLink href='/profile' text='Профиль' />}
      {session && <LogoutButton />}
      {!session && <LoginButton />}
      {!session && <RegistrationButton />}
    </div>
  );
};
