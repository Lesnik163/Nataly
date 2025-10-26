'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/shared/ui/button';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
  showBackButton?: boolean;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({
  error,
  reset,
  showBackButton = true,
}: ErrorPageProps) => {
  const pathname = usePathname();
  const router = useRouter();

  // Определяем название страницы
  const getPageName = (path: string) => {
    const pageNames: Record<string, string> = {
      '/': 'главной странице',
      '/about': 'странице "О нас"',
      '/procedures': 'странице "Процедуры"',
      '/prices': 'странице "Цены"',
      '/information': 'странице "Информация"',
      '/contacts': 'странице "Контакты"',
    };
    return pageNames[path] || 'этой странице';
  };

  // Определяем тип ошибки
  const isInfrastructureError =
    error.message.includes('fetch') ||
    error.message.includes('network') ||
    error.message.includes('database') ||
    error.message.includes('server') ||
    error.message.includes('connection') ||
    error.message.includes('timeout') ||
    error.message.includes('ECONNREFUSED') ||
    error.message.includes('ENOTFOUND');

  const pageName = getPageName(pathname);

  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-50 to-pink-100 p-4'>
      <div className='w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-lg'>
        <div className='mb-6'>
          <div className='mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-red-100'>
            <svg
              className='size-8 text-red-500'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z'
              />
            </svg>
          </div>
          <h2 className='mb-2 text-xl font-bold text-gray-900'>
            {isInfrastructureError
              ? 'Проблемы с подключением'
              : 'Произошла ошибка'}
          </h2>
          <p className='mb-4 text-gray-600'>
            На {pageName} возникла проблема.
            {isInfrastructureError
              ? ' Не удается подключиться к серверу. Проверьте интернет-соединение и попробуйте позже.'
              : ' Мы уже работаем над решением проблемы.'}
          </p>
        </div>
        <div className='flex flex-col gap-3 sm:flex-row'>
          <Button onClick={reset} variant='outline' className='flex-1'>
            Попробовать снова
          </Button>
          {showBackButton && (
            <Button
              onClick={() => router.push('/')}
              variant='primary'
              className='flex-1'
            >
              На главную
            </Button>
          )}
        </div>
        {process.env.NODE_ENV === 'development' && (
          <details className='mt-6 text-left'>
            <summary className='cursor-pointer text-sm text-gray-500 hover:text-gray-700'>
              Детали ошибки (только в разработке)
            </summary>
            <pre className='mt-2 overflow-auto rounded bg-gray-100 p-3 text-xs text-gray-600'>
              {error.message}
              {error.stack && `\n\nStack trace:\n${error.stack}`}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
};
