import { useState, useRef, useCallback } from 'react';

interface Scroll {
	x: number;
	y: number;
}

type Return = [Scroll, (value: Scroll) => void];

const useRequestAnimationFrameState = (initialState: Scroll): Return => {
	const frame = useRef(0);
	const [state, setState] = useState<Scroll>(initialState);

	const setRequestAnimationFrame = useCallback((value: Scroll) => {
		cancelAnimationFrame(frame.current);

		frame.current = requestAnimationFrame(() => {
			setState(() => value);
		});
	}, []);

	return [state, setRequestAnimationFrame];
};

export default useRequestAnimationFrameState;
