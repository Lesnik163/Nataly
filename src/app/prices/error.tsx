'use client';

import { ErrorPage } from '@/shared/ui/error-page';

export default function PricesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorPage error={error} reset={reset} showBackButton={true} />;
}
