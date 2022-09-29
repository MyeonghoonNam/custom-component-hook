import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface IProps {
	children: React.ReactNode;
	count?: number;
	maxCount?: number;
	backgroundColor?: string;
	textColor?: string;
	dot?: boolean;
}

type TSuper = Pick<IProps, 'backgroundColor' | 'textColor' | 'dot'>;

const Container = styled.div`
	position: relative;
	display: inline-block;

	${({ style }) => ({ ...style })}
`;

const Super = styled.sup<TSuper>`
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	align-items: center;
	height: 20px;
	padding: 0 8px;
	font-size: 12px;
	border-radius: 20px;
	color: ${({ textColor }) => textColor || 'white'};
	background-color: ${({ backgroundColor }) => backgroundColor || '#f44'};
	transform: translate(50%, -50%);

	${({ dot }) =>
		dot &&
		css`
			padding: 0;
			width: 15px;
			height: 15px;
			border-radius: 50%;
		`}
`;

function Badge({
	children,
	count,
	maxCount,
	backgroundColor,
	textColor,
	dot,
	...props
}: IProps) {
	let badge = null;

	if (count && count > 0) {
		badge = (
			<Super backgroundColor={backgroundColor} textColor={textColor}>
				{maxCount && count > maxCount ? `${maxCount}+` : count}
			</Super>
		);
	} else if (!count && dot) {
		badge = <Super dot={dot} />;
	}

	return (
		<Container {...props}>
			{children}
			{badge}
		</Container>
	);
}

export default Badge;
