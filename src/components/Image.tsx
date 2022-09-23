import styled from '@emotion/styled';

export interface IProps {
	src: string;
	width: number | string;
	height: number | string;
	alt: string;
	mode: string;
	block: boolean;
	style: React.CSSProperties;
}

function Image({ src, width, height, alt, mode, block, ...props }: IProps) {
	const Img = styled.img`
		display: ${block && 'block'};
		width: ${typeof width === 'number' ? `${width}px` : width};
		height: ${typeof height === 'number' ? `${height}px` : height};
		object-fit: ${mode};
	`;

	return <Img src={src} alt={alt} style={{ ...props.style }} />;
}

export default Image;
