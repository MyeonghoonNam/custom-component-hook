import styled from '@emotion/styled';
import { css } from '@emotion/react';
import React from 'react';

export interface Props {
	children: React.ReactNode;
	shape?: string;
	size: number;
	style?: React.CSSProperties;
}

type ContainerProps = Pick<Props, 'size'>;

const Container = styled.div<ContainerProps>`
	${({ size }) => css`
		padding-left: ${size / 5}px;
	`}
`;

function AvatarGroup({
	children,
	shape = 'circle',
	size = 70,
	...props
}: Props) {
	const avatars = React.Children.toArray(children)
		.filter((element) => {
			if (React.isValidElement(element)) {
				return true;
			}

			return false;
		})
		.map((avatar, index, arrays) => {
			return React.cloneElement(avatar as React.ReactElement, {
				...props,
				size,
				shape,
				style: {
					marginLeft: -size / 5,
					zIndex: arrays.length - index,
				},
			});
		});

	return (
		<Container size={size} {...props}>
			{avatars}
		</Container>
	);
}

export default AvatarGroup;
