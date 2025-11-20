'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Input } from '@/shared/ui/input';
import { LoginFormBody, FormHeaderTitle, FormOverlay } from '@/shared/ui/form';
import { validateField, validateForm } from '@/shared/lib/validation';
import { loginSchema, type LoginFormData } from './login-form-schema';
import { ErrorBoundary } from '@/shared/ui/error-boundary';

interface LoginFormProps {
  onClose: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  const [touchedFields, setTouchedFields] = useState<Set<keyof LoginFormData>>(
    new Set(),
  );

  // Проверяем валидность всех полей для блокировки кнопки
  const isFormValid = useMemo(() => {
    const { isValid } = validateForm(loginSchema, formData);
    return isValid;
  }, [formData]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleInputChange = useCallback(
    (field: keyof LoginFormData) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;

        setFormData((prev) => ({
          ...prev,
          [field]: newValue,
        }));

        if (touchedFields.has(field)) {
          setErrors((prev) => ({
            ...prev,
            [field]: undefined,
          }));
        }
      },
    [touchedFields],
  );

  const handleInputBlur = useCallback(
    (field: keyof LoginFormData) => () => {
      setTouchedFields((prev) => new Set(prev).add(field));

      const fieldValue = formData[field] ?? '';
      const fieldError = validateField(loginSchema, field, fieldValue);
      setErrors((prev) => ({
        ...prev,
        [field]: fieldError || undefined,
      }));
    },
    [formData],
  );

  return (
    <FormOverlay onClose={onClose}>
      <ErrorBoundary>
        <FormHeaderTitle title='Вход' onClose={onClose} />
        <LoginFormBody
          onClose={onClose}
          errors={errors}
          isFormValid={isFormValid}
        >
          <Input
            id='email'
            name='email'
            type='email'
            label='Email'
            isRequired
            value={formData.email ?? ''}
            onChange={handleInputChange('email')}
            onBlur={handleInputBlur('email')}
            error={errors.email}
            placeholder='example@email.com'
            data-testid='email'
          />
          <Input
            id='password'
            name='password'
            type='password'
            label='Пароль'
            isRequired
            value={formData.password ?? ''}
            onChange={handleInputChange('password')}
            onBlur={handleInputBlur('password')}
            error={errors.password}
            placeholder='Минимум 6 символов'
            data-testid='password'
          />
        </LoginFormBody>
      </ErrorBoundary>
    </FormOverlay>
  );
};
