import useScrollDirection from '@hooks/useScrollDirection';
import styled from '@emotion/styled';

export default {
  title: 'Hooks/useScrollDirection',
};

const Box = styled.div`
  width: 100%;
  height: 400vh;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 970;
  margin: 0 auto;
  background-color: blue;
  transition: transform 0.2s ease 0s;
  transform: translateY(0);

  &[aria-hidden='true'] {
    transform: translateY(-100%);
  }
`;

export function Default() {
  const { scrollDirection } = useScrollDirection();

  return (
    <Box>
      <Header aria-hidden={scrollDirection === 'down'} />
    </Box>
  );
}
