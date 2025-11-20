import { fieldValidators } from '@/shared/lib/validation';
import { z } from 'zod';

export const loginSchema = z.object({
  email: fieldValidators.email,
  password: fieldValidators.password,
});

export type LoginFormData = z.infer<typeof loginSchema>;
