import React from 'react';
import { CloseIcon } from '@/shared/ui/icons/CloseIcon';
import './form-header-title.css';

interface FormHeaderTitleProps {
  title: string;
  onClose: () => void;
  className?: string;
}

export const FormHeaderTitle: React.FC<FormHeaderTitleProps> = ({
  title,
  onClose,
  className = '',
}) => {
  return (
    <div className={`form-header-title ${className}`}>
      <h2 className='form-header-title__text'>{title}</h2>
      <button
        className='form-header-title__close'
        onClick={onClose}
        aria-label='Закрыть'
        type='button'
        title='Закрыть форму'
      >
        <CloseIcon className='size-4 transition-transform duration-200 hover:rotate-90' />
      </button>
    </div>
  );
};
