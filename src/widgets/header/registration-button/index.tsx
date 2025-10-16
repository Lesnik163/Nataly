import React, { useState } from 'react';
import { Button } from '@/shared/ui/button';
import { RegistrationForm } from '../registration-form';

export const RegistrationButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSuccess = () => {
    // TODO: Добавить логику после успешной регистрации
  };

  return (
    <>
      <Button
        variant='primary'
        onClick={handleOpenModal}
        ariaLabel='Регистрация'
      >
        Регистрация
      </Button>

      {isModalOpen && (
        <RegistrationForm
          onClose={handleCloseModal}
          onSuccess={handleSuccess}
        />
      )}
    </>
  );
};
