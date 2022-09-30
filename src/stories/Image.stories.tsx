import Image, { Props } from '@components/Image';

export default {
	title: 'Components/Image',
	component: Image,
	argTypes: {
		lazy: {
			defaultValue: false,
			control: { type: 'boolean' },
		},
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
			control: { type: 'text' },
		},
		mode: {
			defaultValue: 'cover',
			options: ['cover', 'fill', 'contain'],
			control: { type: 'inline-radio' },
		},
		block: {
			control: { type: 'boolean' },
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
	return (
		<div>
			<Image {...args} />
			<Image {...args} />
		</div>
	);
}

export function Lazy(args: Props) {
	return (
		<div>
			{Array.from(new Array(20), (_, k) => k).map((i) => (
				<Image key={i} {...args} lazy block src={`${args.src}?${i}`} />
			))}
		</div>
	);
}
