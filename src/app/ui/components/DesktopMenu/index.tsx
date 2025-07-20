import React from 'react';
import HeaderLink from '../HeaderLink';

type DesktopMenuProps = {
  isScrolled: boolean;
};

const DesktopMenuComponent = ({ isScrolled }: DesktopMenuProps) => {
  return (
    <div className='hidden items-center gap-4 lg:flex'>
      <HeaderLink href='/about' text='Обо мне' isScrolled={isScrolled} />
      <HeaderLink href='/procedures' text='Процедуры' isScrolled={isScrolled} />
      <HeaderLink href='/prices' text='Цены' isScrolled={isScrolled} />
      <HeaderLink
        href='/information'
        text='Информация'
        isScrolled={isScrolled}
      />
      <HeaderLink href='/contacts' text='Контакты' isScrolled={isScrolled} />
    </div>
  );
};

export const DesktopMenu = React.memo(DesktopMenuComponent);
