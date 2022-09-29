import Badge, { IProps } from '@components/Badge';
import Image from '@components/Image';

export default {
	title: 'Components/Badge',
	component: Badge,
	argTypes: {
		count: { defaultValue: 10, control: 'number' },
		maxCount: { defaultValue: 100, control: 'number' },
		backgroundColor: { control: 'color' },
		textColor: { control: 'color' },
	},
};

export function Default(args: IProps) {
	return (
		<Badge {...args}>
			<Image
				src="https://picsum.photos/60"
				width={60}
				height={60}
				alt="Image"
				style={{ borderRadius: 8 }}
			/>
		</Badge>
	);
}

export function Dot() {
	return (
		<Badge dot>
			<Image
				src="https://picsum.photos/60"
				width={60}
				height={60}
				alt="Image"
				style={{ borderRadius: 8 }}
			/>
		</Badge>
	);
}
