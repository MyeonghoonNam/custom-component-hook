import useTimeout from '@hooks/useTimeout';
import { useState } from 'react';

export default {
	title: 'Hooks/useTimeout',
};

export function Default() {
	const [visible, setVisible] = useState(false);

	useTimeout(() => {
		setVisible(() => true);
	}, 3000);

	return (
		<div>
			<span>{visible ? '3초 후' : '3초 전'}</span>
		</div>
	);
}
