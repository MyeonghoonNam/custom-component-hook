import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useState, useRef, useEffect } from 'react';

export interface Props {
  src: string;
  width: number | string;
  height: number | string;
  alt: string;
  mode?: string;
  block?: boolean;
  lazy?: boolean;
  threshold?: number;
  placeholder?: string;
  style?: React.CSSProperties;
}

let observer: IntersectionObserver;
const LOAD_IMG_EVENT_TYPE = 'loadImage';

const onIntersection: IntersectionObserverCallback = (entries, io) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
    }
  });
};

type ContainerProps = Pick<Props, 'block' | 'width' | 'height' | 'mode'>;

const Container = styled.img<ContainerProps>`
  ${({ block, width, height, mode }) => css`
    display: ${block && 'block'};
    width: ${typeof width === 'number' ? `${width}px` : width};
    height: ${typeof height === 'number' ? `${height}px` : height};
    object-fit: ${mode};
  `}
`;

function Image({
  src,
  width,
  height,
  alt,
  mode,
  block,
  lazy,
  threshold = 0.5,
  placeholder,
  ...props
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!lazy) {
      setLoaded(true);
      return;
    }

    const handleLoadImage = () => setLoaded(true);

    const imgElement = imgRef.current;

    if (imgElement) {
      imgElement.addEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
    }

    return () => {
      if (imgElement) {
        imgElement.removeEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
      }
    };
  }, [lazy]);

  useEffect(() => {
    if (!lazy) return;

    if (!observer) {
      observer = new IntersectionObserver(onIntersection, { threshold });
    }

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
  }, [lazy, threshold]);

  return (
    <Container
      ref={imgRef}
      src={loaded ? src : placeholder}
      alt={alt}
      width={width}
      height={height}
      mode={mode}
      block={block}
      {...props}
    />
  );
}

export default Image;
