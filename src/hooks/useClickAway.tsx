import { useRef, useEffect } from 'react';

const events = ['mousedown', 'touchstart'];

const useClickAway = <T extends HTMLElement>(handler: (e: Event) => void) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleEvent = (e: Event) => {
      const element = ref.current;

      if (!element || element.contains(e.target as Node)) {
        return;
      }

      handler(e);
    };

    for (const event of events) {
      document.addEventListener(event, handleEvent);
    }

    return () => {
      for (const event of events) {
        document.removeEventListener(event, handleEvent);
      }
    };
  }, [ref, handler]);

  return ref;
};

export default useClickAway;
