import Spacer, { IProps } from '@components/Spacer';
import Box from '@components/Box';

export default {
	title: 'Components/Spacer',
	component: Spacer,
	argTypes: {
		size: {
			defaultValue: 8,
			control: { type: 'range', min: 8, max: 64 },
		},
	},
};

export function Horizontal(args: IProps) {
	return (
		<Spacer {...args} type="horizontal">
			<Box width={100} height={100} />
			<Box width={100} height={100} />
			<Box width={100} height={100} />
		</Spacer>
	);
}

export function Vertical(args: IProps) {
	return (
		<Spacer {...args} type="vertical">
			<Box width={100} height={100} block />
			<Box width={100} height={100} block />
			<Box width={100} height={100} block />
		</Spacer>
	);
}
