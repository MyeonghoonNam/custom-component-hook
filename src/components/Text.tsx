import styled from '@emotion/styled';
import React from 'react';

export interface IProps {
	children?: React.ReactNode;
	block?: string;
	paragraph?: string;
	size?: string | number;
	strong?: boolean;
	underline?: boolean;
	mark?: boolean;
	code?: boolean;
	delete?: boolean;
	color?: string;
	style?: React.CSSProperties;
}

function Text({
	children,
	block,
	paragraph,
	size,
	strong,
	underline,
	mark,
	code,
	delete: del,
	color,
	...props
}: IProps) {
	const tag = block ? 'div' : paragraph ? 'p' : 'span';

	const Tag = styled(tag)`
		font-size: ${typeof size === 'number' ? `${size}px` : `${size}`};
		strong: ${strong};
		underline: ${underline};
		color: ${color};
	`;

	const getChildren = (text: React.ReactNode) => {
		let temp = text;

		if (mark) {
			temp = <mark>{temp}</mark>;
		}

		if (code) {
			temp = <code>{temp}</code>;
		}

		if (del) {
			temp = <del>{temp}</del>;
		}

		return temp;
	};

	return <Tag style={{ ...props.style }}>{getChildren(children)}</Tag>;
}

export default Text;
