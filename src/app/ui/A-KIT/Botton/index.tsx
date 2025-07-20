import React from 'react';
import './button.css';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'primary' | 'fill' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  showBlick?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'primary',
  size = 'md',
  onClick,
  className = '',
  disabled = false,
  showBlick = true,
}) => {
  const baseClasses =
    'rounded-lg font-medium transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2';

  const typeClasses = {
    primary:
      'bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-600 hover:to-pink-600 hover:scale-105',
    fill: 'bg-rose-600 text-white hover:bg-rose-700 hover:scale-105',
    outline:
      'border-2 border-rose-500 text-rose-600 hover:bg-rose-500 hover:text-white hover:scale-105',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed hover:scale-100'
    : '';

  const buttonClasses = `${baseClasses} ${typeClasses[type]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  return (
    <div className='relative'>
      <button className={buttonClasses} onClick={onClick} disabled={disabled}>
        {children}
      </button>
      {showBlick && <div className='button-blick'></div>}
    </div>
  );
};
