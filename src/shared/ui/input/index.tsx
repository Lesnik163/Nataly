import React, { useId } from 'react';
import './input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  isRequired?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  isRequired = false,
  className = '',
  id,
  ...props
}) => {
  const reactId = useId();
  const inputId = id || `input-${reactId}`;

  return (
    <div className='mb-5'>
      {label && (
        <label
          htmlFor={inputId}
          className='color-stone-800 mb-2.5 block text-sm font-medium'
        >
          {label} {isRequired && '*'}
        </label>
      )}
      <input
        id={inputId}
        className={`form-input ${error ? 'form-input-error' : ''} ${className}`}
        aria-invalid={!!error}
        aria-required='true'
        type={props.type || 'text'}
        {...props}
      />
      {error && <span className='form-error'>{error}</span>}
    </div>
  );
};
