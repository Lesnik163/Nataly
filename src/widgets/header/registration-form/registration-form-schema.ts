import { fieldValidators } from '@/shared/lib/validation';
import { z } from 'zod';

export const registrationSchema = z
  .object({
    name: fieldValidators.name,
    email: fieldValidators.email,
    phone: fieldValidators.phone,
    password: fieldValidators.password,
    confirmPassword: fieldValidators.confirmPassword,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });

export type RegistrationFormData = z.infer<typeof registrationSchema>;
