import Breadcrumb from '@components/Breadcrumb';

export default {
	title: 'Components/Breadcrumb',
	component: Breadcrumb,
};

export function Default() {
	return (
		<Breadcrumb>
			<Breadcrumb.Item>Home</Breadcrumb.Item>
			<Breadcrumb.Item>Level 1</Breadcrumb.Item>
			<Breadcrumb.Item>Level 2</Breadcrumb.Item>
		</Breadcrumb>
	);
}
