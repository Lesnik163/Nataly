'use server';

import { registrationSchema } from '@/widgets/header/registration-form/registration-form-schema';

export type SignUpState = {
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  message?: string;
  success?: boolean;
  data?: {
    message: string;
    user: {
      id: string;
      name: string | null;
      email: string;
      phone: string | null;
      role: string;
      createdAt: Date;
    };
  };
} | null;

export async function signUpUser(
  prevState: SignUpState,
  formData: FormData,
): Promise<SignUpState> {
  const validatedFields = registrationSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
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

    const { name, email, phone, password } = validatedFields.data;

    // Проверяем, существует ли пользователь с таким email
    const existingUserByEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUserByEmail) {
      return {
        message: 'Пользователь с таким email уже существует',
      };
    }

    // Проверяем, существует ли пользователь с таким телефоном
    const existingUserByPhone = await prisma.user.findUnique({
      where: { phone },
    });

    if (existingUserByPhone) {
      return {
        message: 'Пользователь с таким номером телефона уже существует',
      };
    }

    // Определяем роль пользователя
    const userRole = 'user';

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
        role: userRole,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
      },
    });

    return {
      success: true,
      data: {
        message: 'Пользователь успешно зарегистрирован',
        user,
      },
    };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : 'Неизвестная ошибка',
    };
  }
}
