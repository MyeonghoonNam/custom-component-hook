import styled from '@emotion/styled';
import React, { useRef, useState, useCallback } from 'react';

type TChildren = (file: File | null, dragging: boolean) => React.ReactNode;
export interface IProps {
  children: React.ReactNode | TChildren;
  name: string;
  accept: string;
  droppable?: boolean;
  onChange?: (file: File) => void;
}

const Container = styled.div`
  ${({ style }) => ({ ...style })}
`;

const Input = styled.input`
  display: none;
`;

function Upload({
  children,
  name,
  droppable,
  onChange,
  accept,
  ...props
}: IProps) {
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;

      if (files) {
        const chooseFile = files[0];
        setFile(() => chooseFile);

        if (onChange) {
          onChange(chooseFile);
        }
      }
    },
    [onChange],
  );

  const handleClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }, []);

  const handleDragEnter = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      if (!droppable) return;

      e.preventDefault();
      e.stopPropagation();

      if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
        setDragging(true);
      }
    },
    [droppable],
  );

  const handleDragLeave = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      if (!droppable) return;

      e.preventDefault();
      e.stopPropagation();

      setDragging(false);
    },
    [droppable],
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      if (!droppable) return;

      e.preventDefault();
      e.stopPropagation();
    },
    [droppable],
  );

  const handleDragAndDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      if (!droppable) return;

      e.preventDefault();
      e.stopPropagation();

      const { files } = e.dataTransfer;
      const chooseFile = files[0];

      setFile(chooseFile);
      setDragging(false);
    },
    [droppable],
  );

  return (
    <Container
      onDrop={handleDragAndDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onClick={handleClick}
      {...props}
    >
      <Input
        ref={inputRef}
        type="file"
        name={name}
        accept={accept}
        onChange={handleChange}
      />
      {typeof children === 'function' ? children(file, dragging) : children}
    </Container>
  );
}

export default React.memo(Upload);
