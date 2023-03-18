import useScroll from '@hooks/useScroll';
import styled from '@emotion/styled';
import { useCallback } from 'react';

export default {
  title: 'Hooks/useScroll',
};

const Container = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
  overflow-y: auto;
`;

const Inner = styled.div`
  width: 100%;
  height: 10000px;
  background-image: linear-gradient(180deg, #000 0%, #fff 100%);
`;

export function Default() {
  const [ref, coord] = useScroll<HTMLDivElement>();

  const handleClick = useCallback(() => {
    ref.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [ref]);

  return (
    <div>
      <Container ref={ref}>
        <Inner />
      </Container>
      <div>
        {coord.x} {coord.y}
      </div>
      <button type="button" onClick={handleClick}>
        ScrollToTop
      </button>
    </div>
  );
}
