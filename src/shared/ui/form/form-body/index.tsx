'use client';

import React, { useActionState, useEffect } from 'react';
import './form-body.css';
import { signUpUser } from '@/features/api/auth/signup';
import { Button } from '../../button';
import { useNotifications } from '@/shared/lib/store';

interface FormProps {
  children: React.ReactNode;
  className?: string;
  onClose: () => void;
  errors?: Record<string, string>;
  isFormValid?: boolean;
}

export const FormBody: React.FC<FormProps> = ({
  children,
  className = '',
  onClose,
  errors = {},
  isFormValid = true,
}) => {
  const [state, formAction, isPending] = useActionState(signUpUser, null);
  const { showSuccess, showError } = useNotifications();

  useEffect(() => {
    if (state?.success) {
      showSuccess(
        'Регистрация успешна!',
        state.data?.message || 'Добро пожаловать!',
        4000,
      );
      onClose();
    } else if (state?.message) {
      showError('Ошибка регистрации', state.message, 5000);
    }
  }, [state, showSuccess, showError, onClose]);

  // Проверяем ошибки валидации полей или общую валидность формы
  const hasErrors =
    Object.values(errors).some((error) => error !== undefined) || !isFormValid;

  return (
    <div className='modal'>
      <form action={formAction} className={`p-6 ${className}`}>
        {children}
        <div className='flex justify-between'>
          <Button
            variant='outline'
            type='button'
            onClick={onClose}
            disabled={isPending}
            className='focus-within:shadow-[0_0_0_2px_white,_0_0_0_6px_theme(colors.rose.500/95)]'
          >
            Отмена
          </Button>
          <Button
            variant='primary'
            type='submit'
            className='focus-within:shadow-[0_0_0_2px_white,_0_0_0_6px_theme(colors.rose.500/95)]'
            showBlick
            disabled={isPending || hasErrors}
          >
            {isPending ? 'Идёт регистрация...' : 'Зарегистрироваться'}
          </Button>
        </div>
      </form>
    </div>
  );
};
