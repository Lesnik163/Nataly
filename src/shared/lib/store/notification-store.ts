import { useCallback } from 'react';
import { create, type StateCreator } from 'zustand';
import { type NoticeType } from '@/shared/ui/notice';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

export interface NoticeData {
  id: string;
  type: NoticeType;
  title: string;
  message: string;
  duration?: number;
}

interface Actions {
  addNotice: (notice: Omit<NoticeData, 'id'>) => void;
  removeNotice: (id: string) => void;
}

interface InitialState {
  notices: NoticeData[];
}

interface NotificationStore extends InitialState, Actions {}

const notificationStore: StateCreator<
  NotificationStore,
  [['zustand/devtools', never], ['zustand/immer', never]]
> = (set) => ({
  notices: [],
  addNotice: (notice) => {
    const id = Math.random().toString(36).slice(2, 11);
    set(
      (state) => {
        state.notices.push({
          ...notice,
          id,
        });
      },
      false,
      `addNotice/${notice.type}`,
    );
  },
  removeNotice: (id) => {
    set(
      (state) => {
        state.notices = state.notices.filter(
          (item: NoticeData) => item.id !== id,
        );
      },
      false,
      'removeNotice',
    );
  },
});

export const useNotificationStore = create<NotificationStore>()(
  devtools(immer(notificationStore), {
    name: 'NotificationStore',
    enabled: process.env.NODE_ENV === 'development',
  }),
);
const useAddNotice = () => useNotificationStore((state) => state.addNotice);
const useRemoveNotice = () =>
  useNotificationStore((state) => state.removeNotice);

export const useNotifications = () => {
  const addNotice = useAddNotice();
  const removeNotice = useRemoveNotice();

  const showSuccess = useCallback(
    (title: string, message: string, duration?: number) => {
      addNotice({ type: 'success', title, message, duration });
    },
    [addNotice],
  );

  const showError = useCallback(
    (title: string, message: string, duration?: number) => {
      addNotice({ type: 'error', title, message, duration });
    },
    [addNotice],
  );

  const showWarning = useCallback(
    (title: string, message: string, duration?: number) => {
      addNotice({ type: 'warning', title, message, duration });
    },
    [addNotice],
  );

  return {
    showSuccess,
    showError,
    showWarning,
    removeNotice,
  };
};
