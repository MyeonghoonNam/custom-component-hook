import React from 'react';
import styled from '@emotion/styled';

export interface IProps {
	children: React.ReactNode;
	type: string;
	size: number | string;
	style: React.CSSProperties;
}

function Spacer({ children, type = 'horizontal', size = 8, ...props }: IProps) {
	const Container = styled.div`
		display: ${type === 'vertical' ? 'block' : 'inline-block'};
		vertical-align: ${type === 'horizontal' && 'middle'};

		${({ style }) => ({
			...style,
		})}
	`;

	const nodes = React.Children.toArray(children)
		.filter((element) => React.isValidElement(element))
		.map((element, index, elements) => {
			return React.cloneElement(element as React.ReactElement, {
				...props,
				style: {
					...props.style,
					marginRight:
						type === 'horizontal' && index !== elements.length - 1 && size,
					marginBottom:
						type === 'vertical' && index !== elements.length - 1 && size,
				},
			});
		});

	return <Container {...props}>{nodes}</Container>;
}

export default Spacer;
