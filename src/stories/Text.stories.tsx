import Text, { IProps } from '@components/Text';

export default {
	title: 'Components/Text',
	component: Text,
	argTypes: {
		block: { control: 'boolean' },
		paragraph: { control: 'boolean' },
		size: { control: 'number' },
		strong: { control: 'boolean' },
		underline: { control: 'boolean' },
		delete: { control: 'boolean' },
		color: { control: 'color' },
	},
};

export function Default(args: IProps) {
	return (
		<div>
			<Text {...args} style={{ color: 'blue' }}>
				Text 1
			</Text>
			<Text {...args}>Text 2</Text>
		</div>
	);
}
