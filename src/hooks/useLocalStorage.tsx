/* eslint-disable no-console */
import { useState } from 'react';

const useLocalStorage = <T extends {}>(key: string) => {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item && JSON.parse(item);
    } catch (e) {
      console.error(e);
    }
  });

  const setLocalStorageValue = (value: T) => {
    try {
      setValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  };

  return [value, setLocalStorageValue];
};

export default useLocalStorage;
