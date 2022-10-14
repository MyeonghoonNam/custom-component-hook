import useKeyPress from '@hooks/useKeyPress';

export default {
	title: 'Hooks/useKeyPress',
};

export function Default() {
	const pressed = useKeyPress('?');

	return <div>{pressed ? 'Peek-A-Boo' : 'Press ? key'}</div>;
}
