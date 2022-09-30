import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import ImageComponent from './Image';

export interface Props {
	src: string;
	size: number | string;
	lazy?: boolean;
	threshold?: number;
	shape?: string;
	placeholder?: string;
	alt: string;
	mode?: string;
	style?: React.CSSProperties;
}

type ContainerProps = Pick<Props, 'shape' | 'size'>;

const SHAPE_TO_CSS_VALUE: {
	[key: string]: string;
	circle: string;
	round: string;
	square: string;
} = {
	circle: '50%',
	round: '4px',
	square: '0px',
};

const Container = styled.div<ContainerProps>`
	${({ size, shape }) => css`
		width: ${typeof size === 'number' ? `${size}px` : size};
		height: ${typeof size === 'number' ? `${size}px` : size};
		border-radius: ${shape && SHAPE_TO_CSS_VALUE[shape]};
	`}

	position: relative;
	display: inline-block;
	border: 1px solid #dadada;
	overflow: hidden;
	background-color: #eee;

	> img {
		transition: opacity 0.2s ease-out;
	}
`;

function Avatar({
	src,
	size,
	lazy,
	threshold = 0.5,
	shape = 'circle',
	placeholder,
	alt,
	mode = 'cover',
	...props
}: Props) {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const image = new Image();

		image.src = src;
		image.onload = () => setLoaded(true);
	}, [src]);

	return (
		<Container size={size} shape={shape} {...props}>
			<ImageComponent
				src={src}
				width="100%"
				height="100%"
				alt={alt}
				lazy={lazy}
				threshold={threshold}
				placeholder={placeholder}
				mode={mode}
				style={{ opacity: loaded ? 1 : 0 }}
			/>
		</Container>
	);
}

export default Avatar;
