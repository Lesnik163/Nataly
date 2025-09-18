import React, { useState } from 'react';
import { BurgerModal } from './burgerModal';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='lg:hidden'>
      <button
        onClick={toggleMenu}
        className='relative flex size-8 flex-col items-center justify-center gap-1 rounded-md text-white transition-colors'
        aria-label='Открыть меню'
      >
        <span className='h-0.5 w-6 rounded-full bg-current' />
        <span className='h-0.5 w-6 rounded-full bg-current' />
        <span className='h-0.5 w-6 rounded-full bg-current' />
      </button>
      <BurgerModal isOpen={isOpen} onClose={toggleMenu} />
    </div>
  );
};
