'use server';

import { loginSchema } from '@/widgets/header/login-form/login-form-schema';

export type SignInState = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string;
  success?: boolean;
  data?: {
    message?: string;
  };
} | null;

export async function signInUser(
  prevState: SignInState,
  formData: FormData,
): Promise<SignInState> {
  const validatedFields = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Проверьте правильность заполнения полей',
    };
  }

  try {
    const { prisma } = await import('@/shared/db/prisma');
    const bcrypt = await import('bcryptjs');
    const { email, password } = validatedFields.data;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.password) {
      return {
        message: 'Неверный email или пароль',
      };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return {
        message: 'Неверный email или пароль',
      };
    }

    return {
      success: true,
      data: {
        message: 'Вход выполнен успешно',
      },
    };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : 'Неизвестная ошибка',
    };
  }
}
