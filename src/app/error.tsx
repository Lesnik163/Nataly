'use client';

import { ErrorPage } from '@/shared/ui/error-page';

export default function HomeError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorPage error={error} showBackButton={false} reset={reset} />;
}
