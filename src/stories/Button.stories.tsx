import Button, { IProps } from '@components/Button';

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		onClick: { action: 'onClick' },
	},
};

export function Default(args: IProps) {
	return <Button {...args}>Login</Button>;
}
