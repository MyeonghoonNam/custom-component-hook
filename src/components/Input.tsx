import styled from '@emotion/styled';

export interface IProps {
	width: string;
	height: string;
}

const Input = styled.input<IProps>`
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

export default Input;
