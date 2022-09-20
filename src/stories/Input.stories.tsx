import Input, { IProps } from '@components/Input';

export default {
	title: 'Components/Input',
	component: Input,
	argTypes: {
		width: { control: 'number' },
		height: { control: 'number' },
	},
};

export function Default(args: IProps) {
	return <Input {...args} />;
}
