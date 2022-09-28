import styled from '@emotion/styled';
import React, { useRef, useState, useCallback } from 'react';

type TChildren = (file: File | null) => React.ReactNode;
export interface IProps {
	children: React.ReactNode | TChildren;
	name: string;
	accept: string;
	onChange?: (file: File) => void;
}

const Container = styled.div`
	${({ style }) => ({ ...style })}
`;

const Input = styled.input`
	display: none;
`;

function Upload({ children, name, onChange, accept, ...props }: IProps) {
	const [file, setFile] = useState<File | null>(null);
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

	return (
		<Container onClick={handleClick} {...props}>
			<Input
				ref={inputRef}
				type="file"
				name={name}
				accept={accept}
				onChange={handleChange}
			/>
			{typeof children === 'function' ? children(file) : children}
		</Container>
	);
}

export default React.memo(Upload);
