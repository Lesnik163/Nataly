import React, { useEffect, useCallback } from 'react';
import Link from 'next/link';
import './burgerMenu.css';

type BurgerModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const menuItems = [
  { href: '/about', text: 'Обо мне' },
  { href: '/procedures', text: 'Процедуры' },
  { href: '/prices', text: 'Цены' },
  { href: '/information', text: 'Информация' },
  { href: '/contacts', text: 'Контакты' },
];

export const BurgerModal = ({ isOpen, onClose }: BurgerModalProps) => {
  const handleEnter = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        onClose();
      }
    },
    [onClose],
  );

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleEscape]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      onClick={onClose}
      onKeyDown={handleEnter}
      role='button'
      tabIndex={0}
    >
      <div
        className={`absolute right-4 top-[100px] w-64 rounded-2xl border border-rose-200/50 bg-white/95 p-6 shadow-2xl backdrop-blur-sm transition-all duration-300${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
        role='button'
        tabIndex={0}
      >
        <div className='space-y-4'>
          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-lg px-4 py-3 text-lg font-medium text-rose-800 transition-all duration-200 hover:bg-rose-100/50 hover:text-rose-900 ${
                isOpen ? `animate-slideInRight-delay-${index}` : ''
              }`}
              onClick={onClose}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
