import Avatar from '@components/Avatar';
import AvatarGroup, { Props } from '@components/AvatarGroup';

export default {
	title: 'Components/AvatarGroup',
	component: AvatarGroup,
	argTypes: {
		size: {
			defaultValue: 70,
			control: { type: 'range', min: 40, max: 200 },
		},
	},
};

export function Default(args: Props) {
	return (
		<AvatarGroup {...args}>
			{/* <Avatar {...args} /> */}
			<Avatar {...args} src="https://picsum.photos/200?1" alt="avatar" />
			<Avatar {...args} src="https://picsum.photos/200?2" alt="avatar" />
			<Avatar {...args} src="https://picsum.photos/200?3" alt="avatar" />
			<Avatar {...args} src="https://picsum.photos/200?4" alt="avatar" />
		</AvatarGroup>
	);
}
