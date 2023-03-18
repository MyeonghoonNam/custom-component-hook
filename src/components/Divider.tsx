import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface Props {
  type: 'horizontal' | 'vertical';
  size: number;
}

type ContainerProps = Pick<Props, 'size'>;

const Container = styled.hr<ContainerProps>`
	border: none;
	background-color: #aaa;

  &.vertical {
    position relative;
    top: -1px;
    display: inline-block;
    width: 1px;
    height: 13px;
    vertical-align: middle;

    ${({ size }) => css`
      margin: 0 ${size}px;
    `}
  }

  &.horizontal {
    display: block;
    width: 100%;
    height: 1px;

    ${({ size }) => css`
      margin: ${size}px 0;
    `}
  }
`;

function Divider({ type, ...props }: Props) {
  return <Container className={type} {...props} />;
}

export default Divider;
