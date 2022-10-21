import Input, { InputHandle } from '@components/Input';
import { useRef } from 'react';

export default {
	title: 'Hooks/useImperativeHandle',
};

export function Default() {
	const inputRef = useRef<InputHandle>(null);

	return (
		<div>
			<Input ref={inputRef} />
			<button type="button" onClick={() => inputRef.current?.focus()}>
				Focus
			</button>
			<button type="button" onClick={() => inputRef.current?.clear()}>
				Clear
			</button>
		</div>
	);
}
