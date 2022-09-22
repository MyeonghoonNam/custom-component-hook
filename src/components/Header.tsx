import styled from '@emotion/styled';

export interface IProps {
	children: React.ReactNode;
	level: number | string;
	strong?: boolean;
	underline?: boolean;
	color?: string;
	style?: React.CSSProperties;
}

type HeaderElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

function Header({
	children,
	level = 1,
	strong,
	underline,
	color,
	...props
}: IProps) {
	let tag = `h${level}` as HeaderElement;

	if (level < 1 || level > 6) {
		// eslint-disable-next-line no-console
		console.warn('Header only accept `1 ~ 6` as `level`');
		tag = 'h1';
	}

	const Tag = styled(tag)`
		font-weight: ${strong ? 'bold' : 'normal'};
		text-decoration: ${underline && 'underline'};
		color: ${color};
	`;

	return <Tag style={{ ...props.style }}>{children}</Tag>;
}

export default Header;
