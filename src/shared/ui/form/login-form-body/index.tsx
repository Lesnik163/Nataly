'use client';

import React, { useActionState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import '@/shared/ui/form/form-body.css';
import { signInUser } from '@/features/api/auth/signin';
import { Button } from '../../button';
import { useNotifications } from '@/shared/lib/store';

interface LoginFormBodyProps {
  children: React.ReactNode;
  className?: string;
  onClose: () => void;
  errors?: Record<string, string>;
  isFormValid?: boolean;
}

export const LoginFormBody: React.FC<LoginFormBodyProps> = ({
  children,
  className = '',
  onClose,
  errors = {},
  isFormValid = true,
}) => {
  const [state, formAction, isPending] = useActionState(signInUser, null);
  const { showSuccess, showError } = useNotifications();
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      const form = formRef.current;
      if (form) {
        const formData = new FormData(form);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        signIn('credentials', {
          email,
          password,
          redirect: false,
        }).then(async (result) => {
          if (result?.ok) {
            showSuccess(
              'Вход успешен!',
              state.data?.message || 'Вы успешно вошли в систему!',
              4000,
            );
            onClose();
            // Обновляем сессию и выполняем редирект
            router.refresh();
            router.push('/profile');
          } else {
            showError('Ошибка входа', 'Не удалось создать сессию', 5000);
          }
        });
      }
    } else if (state?.message) {
      showError('Ошибка входа', state.message, 5000);
    }
  }, [state, showSuccess, showError, onClose, router]);

  // Проверяем ошибки валидации полей или общую валидность формы
  const hasErrors =
    Object.values(errors).some((error) => error !== undefined) || !isFormValid;

  return (
    <div className='modal'>
      <form ref={formRef} action={formAction} className={`p-6 ${className}`}>
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
            {isPending ? 'Идёт вход...' : 'Войти'}
          </Button>
        </div>
      </form>
    </div>
  );
};
