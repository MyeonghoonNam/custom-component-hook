/* eslint-disable no-console */
import { useState } from 'react';

const useSessionStorage = (key: string) => {
	const [value, setValue] = useState(() => {
		try {
			const item = sessionStorage.getItem(key);
			return item && JSON.parse(item);
		} catch (e) {
			console.error(e);
		}
	});

	const setSessionStorageValue = (value: object) => {
		try {
			setValue(value);
			sessionStorage.setItem(key, JSON.stringify(value));
		} catch (e) {
			console.error(e);
		}
	};

	return [value, setSessionStorageValue];
};

export default useSessionStorage;
