import useSessionStorage from '@hooks/useSessionStorage';

export default {
	title: 'Hooks/useSessionStorage',
};

export function Default() {
	const [value, setValue] = useSessionStorage('status');
	const handleClick = () => {
		setValue({ key: 'value' });
	};

	return (
		<div>
			<button type="button" onClick={handleClick}>
				Bind Storage
			</button>
			<span>{value && value.key}</span>
		</div>
	);
}
