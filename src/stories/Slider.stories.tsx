import Slider, { Props } from '@components/Slider';
import Spacer from '@components/Spacer';
import Icon from '@components/Icon';

export default {
	title: 'Components/Slider',
	component: Slider,
	argTypes: {
		defaultValue: { defaultValue: 1, control: 'number' },
		min: { defaultValue: 1, control: 'number' },
		max: { defaultValue: 100, control: 'number' },
		step: { defaultValue: 0.1, control: 'number' },
		onChange: { action: 'onChange' },
	},
};

export function Default(args: Props) {
	return <Slider {...args} />;
}

export function Volumn() {
	return (
		<Spacer>
			<Icon name="volume" />
			<Slider width="100px" display="inline-block" />
			<Icon name="volume-2" />
		</Spacer>
	);
}
