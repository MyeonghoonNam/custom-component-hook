import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface IProps {
	width: string;
	height: string;
}

const Button = styled.button<IProps>`
	${({ width, height }) => css`
		width: ${width};
		height: ${height};
	`}

	display: block;
	padding: 8px 6px;
	color: white;
	border: none;
	border-radius: 4px;
	outline: none;
	background-color: black;
	box-sizing: border-box;
	cursor: pointer;

	&:hover {
		background-color: #111;
	}

	&:active {
		background-color: #222;
	}

	&:disabled {
		background-color: #888;
	}
`;

export default Button;
