import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/shared/ui/button';
import { signOut } from 'next-auth/react';

export const LogoutButton: React.FC = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false, callbackUrl: '/' });
    router.refresh();
    router.push('/');
  };

  return (
    <Button
      variant='primary'
      onClick={handleLogout}
      ariaLabel='Выйти'
      className='min-w-[140px]'
    >
      Выйти
    </Button>
  );
};
