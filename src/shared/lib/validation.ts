import { z } from 'zod';

// Схема валидации для регистрации пользователя
export const fieldValidators = {
  name: z
    .string()
    .min(2, 'Имя не менее 2 символов')
    .max(50, 'Имя не более 50 символов')
    .regex(/^[а-яёА-ЯЁa-zA-Z\s]+$/, 'Имя может содержать только буквы')
    .trim(),
  email: z
    .string()
    .min(1, 'Email обязателен')
    .email('Введите корректный email адрес')
    .trim(),
  phone: z
    .string()
    .min(12, 'Телефон не менее 10 цифр')
    .max(12, 'Телефон не более 10 символов')
    .regex(/^[\+]?[0-9\s\-\(\)]+$/, 'Введите цифрами номер телефона')
    .trim(),
  password: z
    .string()
    .min(6, 'Пароль не менее 6 символов')
    .max(100, 'Пароль не более 100 символов')
    .trim(),
  confirmPassword: z.string().min(6, 'Подтверждение пароля обязательно').trim(),
  newPassword: z
    .string()
    .min(6, 'Новый пароль не менее 6 символов')
    .max(100, 'Новый пароль не более 100 символов')
    .trim(),
};

export function validateForm<T>(schema: z.ZodSchema<T>, data: T) {
  const result = schema.safeParse(data);

  if (result.success) {
    return { isValid: true, errors: {} };
  }
  const errors: Record<string, string> = result.error.issues.reduce(
    (acc, error) => {
      const field = error.path[0] as string;
      acc[field] = error.message;
      return acc;
    },
    {} as Record<string, string>,
  );

  return { isValid: false, errors };
}

export function validateField<T>(
  schema: z.ZodSchema<T>,
  field: keyof T,
  value: string | undefined,
) {
  const testData = { [field]: value } as Partial<T>;
  const result = schema.safeParse(testData);

  if (result.success) {
    return null;
  }

  const fieldError = result.error.issues.find(
    (issue) => issue.path[0] === field,
  );

  if (!fieldError) {
    return null;
  }

  return fieldError.message;
}
