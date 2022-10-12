import styled from '@emotion/styled';
import { css } from '@emotion/react';

type AlignToCSSValueObject = {
	[key: string]: string;
};

const AlignToCSSValue: AlignToCSSValueObject = {
	top: 'flex-start',
	middle: 'center',
	bottom: 'flex-end',
};

export interface RowProps {
	children: React.ReactNode;
	justify?: string;
	align?: string;
	gutter?: number[] | number;
	style?: React.CSSProperties;
}

type ContainerRowProps = Pick<RowProps, 'justify' | 'align' | 'gutter'>;

const ContainerRow = styled.div<ContainerRowProps>`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	box-sizing: border-box;

	${({ justify, align }) => css`
		justify-content: ${justify && justify};
		align-items: ${align && AlignToCSSValue[align]};
	`}

	${({ gutter }) =>
		gutter && Array.isArray(gutter)
			? css`
					margin-top: -${gutter[1] / 2}px;
					margin-bottom: -${gutter[1] / 2}px;
					margin-left: -${gutter[0] / 2}px;
					margin-right: -${gutter[0] / 2}px;
			  `
			: css`
					margin-left: -${(gutter as number) / 2}px;
					margin-right: -${(gutter as number) / 2}px;
			  `}
`;

function Row({ children, ...props }: RowProps) {
	return <ContainerRow {...props}>{children}</ContainerRow>;
}

export interface ColumnProps {
	children: React.ReactNode;
	span?: number;
	offset?: number;
	gutter?: number[] | number;
}

type ContainerColumnProps = Pick<ColumnProps, 'span' | 'offset' | 'gutter'>;

const ContainerColumn = styled.div<ContainerColumnProps>`
	max-width: 100%;
	box-sizing: border-box;

	${({ span, offset }) => css`
		width: ${span && `${(span / 12) * 100}%`};
		margin-left: ${offset && `${(offset / 12) * 100}%`};
	`}

	${({ gutter }) =>
		gutter && Array.isArray(gutter)
			? css`
					padding-top: ${gutter[1] / 2}px;
					padding-bottom: ${gutter[1] / 2}px;
					padding-left: ${gutter[0] / 2}px;
					padding-right: ${gutter[0] / 2}px;
			  `
			: css`
					padding-left: ${(gutter as number) / 2}px;
					padding-right: ${(gutter as number) / 2}px;
			  `}
`;

function Column({ children, ...props }: ColumnProps) {
	return <ContainerColumn {...props}>{children}</ContainerColumn>;
}

const Flux = {
	Row,
	Column,
};

export default Flux;
