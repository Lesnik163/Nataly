'use client';

import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

const ErrorBoundaryFallback: React.FC<{
  error: Error;
  errorInfo?: React.ErrorInfo;
}> = ({ error }) => {
  return (
    <div className='flex size-full items-center justify-center rounded-lg border-2 border-dashed border-red-200 bg-red-50 p-4'>
      <div className='text-center'>
        <h3 className='mb-1 text-xl font-semibold text-red-600'>Ошибка !!!</h3>
        <p className='text-md mb-2 text-gray-600'>😕 Что-то пошло не так</p>

        {process.env.NODE_ENV === 'development' && (
          <details className='mt-2 text-left'>
            <summary className='cursor-pointer text-xs text-gray-500'>
              Детали
            </summary>
            <pre className='mt-1 overflow-auto rounded bg-gray-100 p-1 text-xs text-gray-600'>
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
};

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.props.onError?.(error, errorInfo);
    this.setState({ errorInfo });
  }

  reset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorBoundaryFallback
          error={this.state.error!}
          errorInfo={this.state.errorInfo}
        />
      );
    }

    return this.props.children;
  }
}
