import styled from '@emotion/styled';
import { Buffer } from 'buffer';
import { CSSProperties } from 'react';

const feather = require('feather-icons');

export interface IProps {
	name: string;
	size?: number;
	strokeWidth?: number;
	color?: string;
	rotate?: number;
	style?: CSSProperties;
}

const Container = styled.i`
	display: inline-block;

	${({ style }) => ({ ...style })}
`;

function Icon({
	name,
	size = 16,
	strokeWidth = 2,
	color = '#222',
	rotate,
	style,
	...props
}: IProps) {
	const iconStyle = {
		'stroke-width': strokeWidth,
		stroke: color,
		width: size,
		height: size,
	};

	const shapeStyle = {
		width: size,
		height: size,
		transform: rotate ? `rotate(${rotate}deg)` : undefined,
		...style,
	};

	const icon = feather.icons[name];
	const svg = icon ? icon.toSvg(iconStyle) : '';
	const base64 = Buffer.from(svg, 'utf8').toString('base64');

	return (
		<Container {...props} style={shapeStyle}>
			<img src={`data:image/svg+xml;base64,${base64}`} alt={name} />
		</Container>
	);
}

export default Icon;
