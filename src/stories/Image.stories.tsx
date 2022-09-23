import Image, { IProps } from '@components/Image';

export default {
	title: 'Components/Image',
	component: Image,
	argTypes: {
		src: {
			defaultValue: 'https://picsum.photos/200',
		},
		width: {
			defaultValue: 200,
			control: { type: 'range', min: 200, max: 600 },
		},
		height: {
			defaultValue: 200,
			control: { type: 'range', min: 200, max: 600 },
		},
		alt: {
			control: 'string',
		},
		mode: {
			defaultValue: 'cover',
			options: ['cover', 'fill', 'contain'],
			control: { type: 'inline-radio' },
		},
		block: {
			control: { type: 'boolean' },
		},
	},
};

export function Default(args: IProps) {
	return (
		<div>
			<Image {...args} />
			<Image {...args} />
		</div>
	);
}
