import styled from '@emotion/styled';
import { useCallback, useEffect, useState, useRef } from 'react';
import { css } from '@emotion/react';

type ContainerProps = {
  width?: number | string;
  height?: number | string;
  display?: string;
};

const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  height: 16px;

  ${({ width, height, display }) => css`
    width: ${typeof width === 'number' ? `${width}px` : width};
    height: ${typeof height === 'number' ? `${height}px` : height};
    display: ${display};
  `}
`;

const Rail = styled.div`
  position: absolute;
  top: 6px;
  left: 0;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #aaa;
`;

type HandleAndTrackProps = { currentPosition?: number };

const Handle = styled.div<HandleAndTrackProps>`
  position: absolute;
  top: 8px;
  left: 0;
  width: 12px;
  height: 12px;
  transform: translate(-50%, -50%);
  border: 2px solid #44b;
  border-radius: 50%;
  background-color: white;
  cursor: grab;

  ${({ currentPosition }) => css`
    left: ${currentPosition}%;
  `}
`;

const Track = styled.div<HandleAndTrackProps>`
  position: absolute;
  top: 6px;
  left: 0;
  width: 0;
  height: 4px;
  border-radius: 2px;
  background-color: #44b;

  ${({ currentPosition }) => css`
    width: ${currentPosition}%;
  `}
`;

export interface Props {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  display?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
}

function Slider({
  min = 100,
  max = 1000,
  step = 0.1,
  defaultValue,
  onChange,
  ...props
}: Props) {
  const [dragging, setDragging] = useState<boolean>(false);
  const [value, setValue] = useState<number>(defaultValue || min);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback(() => {
    setDragging(() => true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setDragging(() => false);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging) return;

      if (sliderRef.current) {
        const handleOffset = e.pageX - sliderRef.current.offsetLeft;
        const sliderWidth = sliderRef.current.offsetWidth;

        const track = handleOffset / sliderWidth;
        let newValue;

        if (track < 0) {
          newValue = min;
        } else if (track > 1) {
          newValue = max;
        } else {
          newValue = Math.round((min + (max - min) * track) / step) * step;
          newValue = Math.min(max, Math.max(min, newValue));
        }

        setValue(newValue);

        if (onChange) {
          onChange(newValue);
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [min, max, dragging, step, handleMouseUp, onChange]);

  const currentPosition = ((value - min) / (max - min)) * 100;

  return (
    <Container ref={sliderRef} {...props}>
      <Rail />
      <Track currentPosition={currentPosition} />
      <Handle
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        currentPosition={currentPosition}
      />
    </Container>
  );
}

export default Slider;
