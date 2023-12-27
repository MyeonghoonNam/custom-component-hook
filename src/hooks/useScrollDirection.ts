import React from 'react';

type ScrollDirection = 'up' | 'down' | undefined;

const useScrollDirection = (initThreshold = 100) => {
  const [threshold, setThreshold] = React.useState(initThreshold);
  const [scrollDirection, setScrollDirection] =
    React.useState<ScrollDirection>();

  const prevScrollY = React.useRef(0);

  // const isScrollingUp = (scrollY: number) =>
  //   scrollY > prevScrollY.current &&
  //   !(prevScrollY.current > 0 && scrollY === 0) &&
  //   !(scrollY > 0 && prevScrollY.current === 0);

  // const checkScrolledMoreThanThreshold = React.useCallback(
  //   (currentScrollY: number) =>
  //     Math.abs(currentScrollY - prevScrollY.current) > threshold,
  //   [threshold],
  // );

  // const updateScrollDirection = React.useCallback(() => {
  //   const { scrollY } = window;

  //   if (checkScrolledMoreThanThreshold(scrollY)) {
  //     const newScrollDirection = isScrollingUp(scrollY) ? 'down' : 'up';
  //     setScrollDirection(newScrollDirection);
  //     prevScrollY.current = scrollY > 0 ? scrollY : 0;
  //   }
  // }, [checkScrolledMoreThanThreshold]);

  React.useEffect(() => {
    const checkScrolledMoreThanThreshold = (currentScrollY: number) =>
      Math.abs(currentScrollY - prevScrollY.current) > threshold;

    const isScrollingUp = (scrollY: number) =>
      scrollY > prevScrollY.current &&
      !(prevScrollY.current > 0 && scrollY === 0) &&
      !(scrollY > 0 && prevScrollY.current === 0);

    const updateScrollDirection = () => {
      const { scrollY } = window;

      if (checkScrolledMoreThanThreshold(scrollY)) {
        const newScrollDirection = isScrollingUp(scrollY) ? 'down' : 'up';
        setScrollDirection(newScrollDirection);
        prevScrollY.current = scrollY > 0 ? scrollY : 0;

        if (threshold !== 0) {
          setThreshold(0);
        }

        if (scrollY === 0) {
          setThreshold(initThreshold);
        }
      }
    };

    const onScroll = () => window.requestAnimationFrame(updateScrollDirection);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [initThreshold, threshold]);

  return {
    scrollDirection,
  };
};

export default useScrollDirection;
