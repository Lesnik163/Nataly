'use client';

import { ErrorPage } from '@/shared/ui/error-page';

export default function ProceduresError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorPage error={error} reset={reset} showBackButton={true} />;
}
