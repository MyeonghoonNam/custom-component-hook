import useHover from '@hooks/useHover';
import styled from '@emotion/styled';

export default {
  title: 'Hooks/useHover',
};

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
`;

export function Default() {
  const [boxRef, isHover] = useHover<HTMLDivElement>();

  return (
    <div>
      <Box ref={boxRef} />
      {isHover && <div>Tooltip</div>}
    </div>
  );
}
