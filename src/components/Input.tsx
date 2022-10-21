import styled from '@emotion/styled';
import React, { forwardRef, useRef, useImperativeHandle } from 'react';

export interface Props {
	width?: string;
	height?: string;
	type?: string;
	name?: string;
	value?: string;
	autoFocus?: boolean;
	placeholder?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	style?: React.CSSProperties;
}

export interface InputHandle {
	focus: () => void;
	clear: () => void;
}

type ContainerProps = Pick<Props, 'width' | 'height'>;

const Container = styled.input<ContainerProps>`
	${({ width, height }) => ({
		width,
		height,
	})}

	display: block;
	padding: 4px 6px;
	border: 2px solid #333;
	border-radius: 4px;
	background-color: white;
	font-size: 14px;
	box-sizing: border-box;
`;

const Input = forwardRef<InputHandle, Props>(({ ...props }, ref) => {
	const inputRef = useRef<HTMLInputElement>(null);

	useImperativeHandle(ref, () => ({
		clear: () => {
			if (inputRef.current) {
				inputRef.current.value = '';
				inputRef.current?.focus();
			}
		},
		focus: () => {
			inputRef.current?.focus();
		},
	}));

	return <Container ref={inputRef} {...props} />;
});

Input.displayName = 'Input';

export default Input;
