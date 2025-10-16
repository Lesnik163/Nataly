'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Input } from '@/shared/ui/input';
import { PhoneInput } from '@/shared/ui/phone-input';
import { FormBody, FormHeaderTitle, FormOverlay } from '@/shared/ui/form';
import { validateField } from '@/shared/lib/validation';
import {
  registrationSchema,
  type RegistrationFormData,
} from './registration-form-schema';

interface RegistrationFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  onClose,
  onSuccess,
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: '',
    email: '',
    phone: '+7',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Partial<RegistrationFormData>>({});
  const [touchedFields, setTouchedFields] = useState<
    Set<keyof RegistrationFormData>
  >(new Set());

  // Проверяем валидность всех полей для блокировки кнопки
  const isFormValid = useMemo(() => {
    const allFields = Object.keys(formData) as (keyof RegistrationFormData)[];
    return allFields.every((field) => {
      const fieldValue = formData[field] ?? '';
      const fieldError = validateField(registrationSchema, field, fieldValue);
      return !fieldError;
    });
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
    (field: keyof RegistrationFormData) =>
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

        // Если изменился пароль или подтверждение пароля, валидируем совпадение
        if (field === 'password' || field === 'confirmPassword') {
          const updatedFormData = { ...formData, [field]: newValue };
          const passwordMatch =
            updatedFormData.password === updatedFormData.confirmPassword;

          if (
            touchedFields.has('confirmPassword') &&
            !passwordMatch &&
            updatedFormData.confirmPassword
          ) {
            setErrors((prev) => ({
              ...prev,
              confirmPassword: 'Пароли не совпадают',
            }));
          } else if (passwordMatch) {
            setErrors((prev) => ({
              ...prev,
              confirmPassword: undefined,
            }));
          }
        }
      },
    [formData, touchedFields],
  );

  const handleInputBlur = useCallback(
    (field: keyof RegistrationFormData) => () => {
      setTouchedFields((prev) => new Set(prev).add(field));

      // Валидируем поле при потере фокуса
      const fieldValue = formData[field] ?? '';
      const fieldError = validateField(registrationSchema, field, fieldValue);

      setErrors((prev) => ({
        ...prev,
        [field]: fieldError || undefined,
      }));
    },
    [formData],
  );

  return (
    <FormOverlay onClose={onClose}>
      <div>
        <FormHeaderTitle title='Регистрация' onClose={onClose} />
        <FormBody
          onSuccess={onSuccess}
          onClose={onClose}
          errors={errors}
          isFormValid={isFormValid}
        >
          <Input
            id='name'
            name='name'
            label='Имя'
            isRequired
            value={formData.name ?? ''}
            onChange={handleInputChange('name')}
            onBlur={handleInputBlur('name')}
            error={errors.name}
            placeholder='Введите ваше имя'
            data-testid='name'
          />
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
          <PhoneInput
            id='phone'
            name='phone'
            label='Телефон'
            isRequired
            value={formData.phone ?? ''}
            onChange={handleInputChange('phone')}
            onBlur={handleInputBlur('phone')}
            error={errors.phone}
            placeholder='+7 (999) 123-45-67'
            data-testid='phone'
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
          <Input
            id='confirmPassword'
            name='confirmPassword'
            type='password'
            label='Подтвердите пароль'
            isRequired
            value={formData.confirmPassword ?? ''}
            onChange={handleInputChange('confirmPassword')}
            onBlur={handleInputBlur('confirmPassword')}
            error={errors.confirmPassword}
            placeholder='Повторите пароль'
            data-testid='confirmPassword'
          />
        </FormBody>
      </div>
    </FormOverlay>
  );
};
