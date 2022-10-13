import { useEffect, useRef } from 'react';
import useRequestAnimationFrameState from './useRequestAnimationFrameState';

interface Scroll {
	x: number;
	y: number;
}

const useScroll = <T extends HTMLElement>(): [React.RefObject<T>, Scroll] => {
	const [state, setState] = useRequestAnimationFrameState({ x: 0, y: 0 });
	const ref = useRef<T>(null);

	useEffect(() => {
		const element = ref.current;

		if (!element) return;

		const handleScroll = () => {
			setState({
				x: element.scrollLeft,
				y: element.scrollTop,
			});
		};

		element.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			element.removeEventListener('scroll', handleScroll);
		};
	}, [ref, setState]);

	return [ref, state];
};

export default useScroll;
