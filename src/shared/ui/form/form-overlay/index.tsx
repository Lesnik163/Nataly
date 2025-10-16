import React from 'react';
import './form-overlay.css';
import { ModalPortal } from '@/shared/ui/portal/ModalPortal';

interface FormOverlayProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const FormOverlay = ({ children, onClose }: FormOverlayProps) => {
  return (
    <ModalPortal>
      <div
        className='modal-overlay'
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Escape' && onClose()}
        role='button'
        tabIndex={-1}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          onKeyDown={(e) => {
            e.stopPropagation();
          }}
          role='button'
          tabIndex={-1}
        >
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};
