import React, { useEffect, useState, useCallback } from 'react';
import './notice.css';

export type NoticeType = 'success' | 'warning' | 'error';

export interface NoticeProps {
  id: string;
  type: NoticeType;
  title: string;
  message: string;
  duration?: number;
  onClose: (id: string) => void;
}

export const Notice: React.FC<NoticeProps> = ({
  id,
  type,
  title,
  message,
  duration = 5000,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const autoCloseTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleClose = useCallback(() => {
    if (isLeaving) return; // Уже закрывается

    setIsLeaving(true);

    // Очищаем таймер автоматического закрытия
    if (autoCloseTimerRef.current) {
      clearTimeout(autoCloseTimerRef.current);
      autoCloseTimerRef.current = null;
    }

    closeTimeoutRef.current = setTimeout(() => {
      onClose(id);
      closeTimeoutRef.current = null;
    }, 300); // Время для анимации исчезновения
  }, [id, onClose, isLeaving]);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    autoCloseTimerRef.current = setTimeout(() => {
      handleClose();
    }, duration);

    return () => {
      clearTimeout(showTimer);
      if (autoCloseTimerRef.current) {
        clearTimeout(autoCloseTimerRef.current);
      }
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        // Если компонент размонтируется до вызова onClose, вызываем его немедленно
        onClose(id);
      }
    };
  }, [duration, handleClose, id, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg
            className='notice-icon'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path d='M9 12l2 2 4-4' />
            <circle cx='12' cy='12' r='10' />
          </svg>
        );
      case 'warning':
        return (
          <svg
            className='notice-icon'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z' />
            <line x1='12' y1='9' x2='12' y2='13' />
            <line x1='12' y1='17' x2='12.01' y2='17' />
          </svg>
        );
      case 'error':
        return (
          <svg
            className='notice-icon'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <circle cx='12' cy='12' r='10' />
            <line x1='15' y1='9' x2='9' y2='15' />
            <line x1='9' y1='9' x2='15' y2='15' />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`notice notice-${type} ${isVisible ? 'notice-visible' : ''} ${isLeaving ? 'notice-leaving' : ''}`}
    >
      <div className='notice-content'>
        <div className='notice-icon-container'>{getIcon()}</div>
        <div className='notice-text'>
          <div className='notice-title'>{title}</div>
          <div className='notice-message'>{message}</div>
        </div>
        <button
          className='notice-close'
          onClick={handleClose}
          aria-label='Закрыть уведомление'
        >
          <svg
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <line x1='18' y1='6' x2='6' y2='18' />
            <line x1='6' y1='6' x2='18' y2='18' />
          </svg>
        </button>
      </div>
      <div className='notice-progress'>
        <div
          className='notice-progress-bar'
          style={{ animationDuration: `${duration}ms` }}
        />
      </div>
    </div>
  );
};
