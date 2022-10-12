import styled from '@emotion/styled';
import Text from './Text';

export interface Props {
	children: React.ReactNode;
	title: string;
	active?: boolean;
	index: string;
}

type ContainerProps = Pick<Props, 'active'>;

const Container = styled.div<ContainerProps>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 140px;
	height: 60px;
	background-color: ${({ active }) => (active ? '#ddf' : '#eee')};
	cursor: pointer;
`;

function TabItem({ title, active, ...props }: Props) {
	return (
		<Container active={active} {...props}>
			<Text strong={active}>{title}</Text>
		</Container>
	);
}

export default TabItem;
