import React, { useMemo } from 'react';
import './button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'fill' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  showBlick?: boolean;
  ariaLabel?: string;
}

const baseClasses =
  'rounded-lg font-medium transition-all duration-300 shadow-md';

const variantClasses = {
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

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  className = '',
  disabled = false,
  showBlick = false,
  ariaLabel,
}) => {
  const buttonClasses = useMemo(() => {
    const disabledClasses = disabled
      ? 'opacity-50 cursor-not-allowed hover:scale-100'
      : '';

    return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  }, [disabled, variant, size, className]);

  return (
    <div className='group relative overflow-hidden rounded-lg focus-within:shadow-[0_0_0_2px_white,_0_0_0_6px_theme(colors.rose.500/95)] group-focus-visible:shadow-[0_0_0_2px_white,_0_0_0_6px_theme(colors.rose.500/95)]'>
      <button
        type={type}
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
      >
        {children}
      </button>
      {showBlick && !disabled && <div className='button-blick'></div>}
    </div>
  );
};
