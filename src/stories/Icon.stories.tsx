import Icon, { IProps } from '@components/Icon';

export default {
	title: 'Components/Icon',
	component: Icon,
	argTypes: {
		name: { defaultValue: 'box', control: 'text' },
		size: { defaultValue: 16, control: { type: 'range', min: 16, max: 80 } },
		strokeWidth: {
			defaultValue: 2,
			control: { type: 'range', min: 2, max: 6 },
		},
		color: { defaultValue: '#222', control: 'color' },
		rotate: { defaultValue: 0, control: { type: 'range', min: 0, max: 360 } },
	},
};

export function Default(args: IProps) {
	return <Icon {...args} />;
}
