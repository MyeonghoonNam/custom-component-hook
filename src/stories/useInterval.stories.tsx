import useInterval from '@hooks/useInterval';
import { useState } from 'react';

export default {
  title: 'Hooks/useInterval',
};

export function Default() {
  const [status, setStatus] = useState(false);
  const [time, setTime] = useState(0);

  useInterval(
    () => {
      setTime((prev) => prev + 1);
    },
    status ? 1000 : null,
  );

  const handleClick = () => {
    setStatus((state) => !state);
    setTime(0);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        {status ? 'Stop' : 'Start'}
      </button>
      Timer: {time}s
    </div>
  );
}
