import React, { useState } from 'react';
import { Button } from '@/shared/ui/button';
import { LoginForm } from '../login-form';

export const LoginButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        variant='primary'
        onClick={handleOpenModal}
        ariaLabel='Войти'
        className='min-w-[140px]'
      >
        Войти
      </Button>

      {isModalOpen && <LoginForm onClose={handleCloseModal} />}
    </>
  );
};
