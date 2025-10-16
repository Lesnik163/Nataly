import React from 'react';
import { Input } from '../input';

interface PhoneInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'type' | 'value' | 'onChange'
  > {
  label?: string;
  error?: string;
  isRequired?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  ...props
}) => {
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    // Если поле пустое, устанавливаем +7
    if (newValue === '') {
      newValue = '+7';
    }
    // Если пользователь удалил +7, добавляем обратно
    else if (!newValue.startsWith('+7')) {
      newValue = '+7' + newValue;
    }

    // Создаем новый event с обновленным значением
    const newEvent = {
      ...e,
      target: {
        ...e.target,
        value: newValue,
      },
    };

    onChange(newEvent);
  };

  return (
    <Input
      {...props}
      type='tel'
      value={value || '+7'}
      onChange={handlePhoneChange}
    />
  );
};
