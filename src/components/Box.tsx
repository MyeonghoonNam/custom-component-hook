import styled from '@emotion/styled';

export interface IProps {
  width: number | string;
  height: number | string;
  block?: boolean;
  backgroundColor?: string;
  style?: React.CSSProperties;
}

function Box({
  width,
  height,
  block,
  backgroundColor = 'black',
  ...props
}: IProps) {
  const Container = styled.div`
    display: ${block ? 'block' : 'inline-block'};
    width: ${typeof width === 'number' ? `${width}px` : width};
    height: ${typeof height === 'number' ? `${height}px` : height};
    background-color: ${backgroundColor};
  `;

  return <Container {...props} />;
}

export default Box;
