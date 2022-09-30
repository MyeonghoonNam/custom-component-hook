import Avatar, { Props } from '@components/Avatar';

export default {
	title: 'Components/Avatar',
	component: Avatar,
	argTypes: {
		lazy: {
			defaultValue: false,
			control: { type: 'boolean' },
		},
		src: {
			defaultValue: 'https://picsum.photos/200',
		},
		size: {
			defaultValue: 70,
			control: { type: 'range', min: 40, max: 200 },
		},
		alt: {
			control: { type: 'text' },
		},
		mode: {
			defaultValue: 'cover',
			options: ['cover', 'fill', 'contain'],
			control: { type: 'inline-radio' },
		},
		shape: {
			defaultValue: 'circle',
			control: 'inline-radio',
			options: ['circle', 'round', 'square'],
		},
		placeholder: {
			defaultValue: 'https://via.placeholder.com/200',
			control: { type: 'text' },
		},
		threshold: {
			defaultValue: 0.5,
			control: { type: 'number' },
		},
	},
};

export function Default(args: Props) {
	return <Avatar {...args} />;
}
