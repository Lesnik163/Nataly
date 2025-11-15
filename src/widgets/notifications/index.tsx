'use client';

import React from 'react';
import { useNotificationStore } from '@/shared/lib/store';
import { Notice } from '@/shared/ui/notice';

export const NotificationsContainer: React.FC = () => {
  const notices = useNotificationStore((state) => state.notices);
  const removeNotice = useNotificationStore((state) => state.removeNotice);

  return (
    <div className='fixed right-4 top-4 z-[9999] flex flex-col gap-2'>
      {notices.map((notice) => (
        <Notice key={notice.id} {...notice} onClose={removeNotice} />
      ))}
    </div>
  );
};
