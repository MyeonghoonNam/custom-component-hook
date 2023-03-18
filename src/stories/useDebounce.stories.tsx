import useDebounce from '@hooks/useDebounce';
import Input from '@components/Input';
import React, { useCallback, useEffect, useState } from 'react';

export default {
  title: 'Hooks/useDebounce',
};

const suggest = ['Kakao', 'Naver', 'Coupang', 'Line'];

export function Default() {
  const [result, setResult] = useState<string[]>([]);
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    if (debouncedValue === '') {
      setResult(() => []);
    } else {
      setResult(() =>
        suggest.filter((company) =>
          company.toLocaleLowerCase().includes(debouncedValue.toLowerCase()),
        ),
      );
    }
  }, [debouncedValue]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(() => e.target.value);
  }, []);

  return (
    <div>
      <Input
        width="300px"
        height="20px"
        value={value}
        onChange={handleChange}
        autoFocus
      />

      <div>
        {result.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}
