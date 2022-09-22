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
			<Text {...args}>Test Text</Text>

			<br />

			<Text {...args} size="36px">
				Text 1
			</Text>
			<Text {...args} size="27px">
				Text 2
			</Text>
			<Text {...args} size="18px">
				Text 3
			</Text>
		</div>
	);
}
