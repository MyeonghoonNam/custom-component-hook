import Header, { IProps } from '@components/Header';

export default {
	title: 'Components/Header',
	component: Header,
	argTypes: {
		level: { control: { type: 'range', min: 1, max: 6 } },
		strong: { control: 'boolean' },
		underline: { control: 'boolean' },
		color: { control: 'color' },
	},
};

export function Default(args: IProps) {
	return (
		<div>
			<Header {...args}>Test Header</Header>
			<Header {...args} level="1">
				제목1
			</Header>
			<Header {...args} level="2">
				제목2
			</Header>
			<Header {...args} level="3">
				제목3
			</Header>
			<Header {...args} level="4">
				제목4
			</Header>
			<Header {...args} level="5">
				제목5
			</Header>
			<Header {...args} level="6">
				제목6
			</Header>
		</div>
	);
}
