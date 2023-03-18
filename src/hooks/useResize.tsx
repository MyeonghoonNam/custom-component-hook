import { useEffect, useRef } from 'react';

const useResize = (handler: (rect: DOMRectReadOnly) => void) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      handler(entries[0].contentRect);
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, handler]);

  return ref;
};

export default useResize;
