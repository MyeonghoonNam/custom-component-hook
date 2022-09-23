import { useCallback, useState } from 'react';

type ReturnType = [boolean, () => void];

const useToggle = (initialState = false): ReturnType => {
	const [state, setState] = useState<boolean>(initialState);
	const toggle = useCallback(() => setState((s) => !s), []);

	return [state, toggle];
};

export default useToggle;
