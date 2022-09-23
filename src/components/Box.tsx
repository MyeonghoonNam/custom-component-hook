import styled from '@emotion/styled';

export interface IProps {
	width: number | string;
	height: number | string;
	block?: boolean;
	backgroundColor?: string;
}

function Box({
	width,
	height,
	block,
	backgroundColor = 'black',
	...props
}: IProps) {
	const Container = styled.div`
		display: ${block ? 'block' : 'inline-block'};
		width: ${typeof width === 'number' ? `${width}px` : width};
		height: ${typeof height === 'number' ? `${width}px` : width};
		background-color: ${backgroundColor};

		${({ style }) => ({
			...style,
		})}
	`;

	return <Container {...props} />;
}

export default Box;
