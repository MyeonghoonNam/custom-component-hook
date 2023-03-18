import styled from '@emotion/styled';
import { useEffect, useMemo } from 'react';
import useClickAway from '@hooks/useClickAway';
import ReactDom from 'react-dom';

export interface Props {
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  visible?: boolean;
  onClose?: () => void;
  style?: React.CSSProperties;
}

type DimProps = Pick<Props, 'visible'>;

const Dim = styled.div<DimProps>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

type ContainerProps = Pick<Props, 'width' | 'height'>;

const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) => width || '500px'};
  height: ${({ height }) => height && height};
  padding: 8px;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`;

function Modal({ children, visible = false, onClose, ...props }: Props) {
  const ref = useClickAway<HTMLDivElement>(() => {
    if (onClose) {
      onClose();
    }
  });

  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    document.body.appendChild(element);

    return () => {
      document.body.removeChild(element);
    };
  }, [element]);

  return ReactDom.createPortal(
    <Dim visible={visible}>
      <Container ref={ref} {...props}>
        {children}
      </Container>
    </Dim>,
    element,
  );
}

export default Modal;
