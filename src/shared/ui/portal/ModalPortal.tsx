'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ErrorBoundary } from '@/shared/ui/error-boundary';

type ModalPortalProps = {
  children: React.ReactNode;
};

export const ModalPortal: React.FC<ModalPortalProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(<ErrorBoundary>{children}</ErrorBoundary>, document.body);
};
