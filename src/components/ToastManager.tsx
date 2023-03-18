import styled from '@emotion/styled';
import { useState, useCallback, useEffect } from 'react';
import { v4 } from 'uuid';
import ToastItem from './ToastItem';

const Conatainer = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 1500;
`;

interface Toast {
  id: string;
  message: string;
  duration: number;
}

interface Props {
  bind: (fn: (message: string, duration: number) => void) => void;
}

function ToastManager({ bind }: Props) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const createToast = useCallback((message: string, duration: number) => {
    const newToast = {
      id: v4(),
      message,
      duration,
    };

    setToasts((state) => [...state, newToast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((state) => state.filter((toast) => toast.id !== id));
  }, []);

  useEffect(() => {
    bind(createToast);
  }, [bind, createToast]);

  return (
    <Conatainer>
      {toasts.map(({ id, message, duration }) => (
        <ToastItem
          key={id}
          message={message}
          duration={duration}
          onDone={() => removeToast(id)}
        />
      ))}
    </Conatainer>
  );
}

export default ToastManager;
