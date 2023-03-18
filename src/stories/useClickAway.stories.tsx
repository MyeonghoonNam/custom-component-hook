/* eslint-disable @typescript-eslint/no-unused-vars */
import useClickAway from '@hooks/useClickAway';
import styled from '@emotion/styled';
import { useState } from 'react';

export default {
  title: 'Hooks/useClickAway',
};

type PopOverProps = { show: boolean };

const PopOver = styled.div<PopOverProps>`
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background-color: #eee;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

export function Default() {
  const [show, setShow] = useState(false);
  const ref = useClickAway<HTMLDivElement>((e: Event) => {
    const { tagName } = e.target as HTMLElement;

    if (tagName !== 'BUTTON') {
      setShow(() => false);
    }
  });

  const handleClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        {show ? 'Hide' : 'Show'}
      </button>
      <PopOver ref={ref} show={show}>
        PopOver
      </PopOver>
    </div>
  );
}
