import Flux from '@components/Flux';
import Box from '@components/Box';

export default {
	title: 'Components/Flux',
	component: Flux,
};

export function Default() {
	return (
		<Flux.Row gutter={[8, 4]}>
			<Flux.Column gutter={[8, 4]} span={2}>
				<Box width="100%" height="100px" style={{ borderRadius: 8 }} />
			</Flux.Column>
			<Flux.Column gutter={[8, 4]} span={2}>
				<Box width="100%" height="100px" style={{ borderRadius: 8 }} />
			</Flux.Column>
			<Flux.Column gutter={[8, 4]} span={2}>
				<Box width="100%" height="100px" style={{ borderRadius: 8 }} />
			</Flux.Column>
			<Flux.Column gutter={[8, 4]} span={2}>
				<Box width="100%" height="100px" style={{ borderRadius: 8 }} />
			</Flux.Column>
			<Flux.Column gutter={[8, 4]} span={2}>
				<Box width="100%" height="100px" style={{ borderRadius: 8 }} />
			</Flux.Column>
			<Flux.Column gutter={[8, 4]} span={2}>
				<Box width="100%" height="100px" style={{ borderRadius: 8 }} />
			</Flux.Column>
			<Flux.Column gutter={[8, 4]} span={4} offset={4}>
				<Box width="100%" height="100px" style={{ borderRadius: 8 }} />
			</Flux.Column>
		</Flux.Row>
	);
}
