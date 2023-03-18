import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Base = styled.div`
  display: inline-block;
  border-radius: 4px;
  background-image: linear-gradient(
    90deg,
    #dfe3e9 0px,
    #efefef 40px,
    #dfe3e9 80px
  );
  background-size: 200% 100%;
  background-position: 0 center;
  animation: skeleton--zoom-in 0.2s ease-out,
    skeleton--loading 2s infinite linear;

  @keyframes skeleton--zoom-in {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes skeleton--loading {
    0% {
      background-position-x: 100%;
    }
    50% {
      background-position-x: -100%;
    }
    100% {
      background-position-x: -100%;
    }
  }
`;

export interface BoxProps {
  width: number | string;
  height: number | string;
}

const Box = styled(Base)<BoxProps>`
  ${({ width, height }) => css`
    width: ${typeof width === 'number' ? `${width}px` : width};
    height: ${typeof height === 'number' ? `${height}px` : height};
  `}
`;

export interface CircleProps {
  size: number | string;
}

const Circle = styled(Base)<CircleProps>`
  ${({ size }) => css`
    width: ${typeof size === 'number' ? `${size}px` : size};
    height: ${typeof size === 'number' ? `${size}px` : size};
    border-radius: 50%;
  `}
`;

export interface ParagraphProps {
  line?: number;
}

function Paragraph({ line = 3, ...props }: ParagraphProps) {
  return (
    <div {...props}>
      {Array.from(new Array(line), (_, index) => {
        return <Box width="100%" height={16} key={index} />;
      })}
    </div>
  );
}

const Skeleton = {
  Box,
  Circle,
  Paragraph,
};

export default Skeleton;
