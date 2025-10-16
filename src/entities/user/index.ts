export interface User {
  id: string;
  email: string;
  name: string | null;
  phone?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserData {
  email: string;
  name: string;
  phone?: string;
  password: string;
}

export interface UserRegistrationFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}
