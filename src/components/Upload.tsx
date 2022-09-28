import styled from '@emotion/styled';
import React, { useRef, useCallback } from 'react';

export interface IProps {
	children: React.ReactNode;
	name: string;
	accept: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.div`
	${({ style }) => ({ ...style })}
`;

const Input = styled.input`
	display: none;
`;

function Upload({ children, name, accept, onChange, ...props }: IProps) {
	const inputRef = useRef<HTMLInputElement>(null);

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
				onChange={onChange}
			/>
			{children}
		</Container>
	);
}

export default React.memo(Upload);
