import { useCallback, useEffect } from 'react';

type KeyboardEvents = 'keyup' | 'keydown';

const useKey = (
  event: KeyboardEvents,
  targetKey: string,
  handler: () => void,
) => {
  const handleKey = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === targetKey) {
        handler();
      }
    },
    [targetKey, handler],
  );

  useEffect(() => {
    window.addEventListener(event, handleKey);

    return () => {
      window.removeEventListener(event, handleKey);
    };
  }, [event, targetKey, handleKey]);
};

export default useKey;
