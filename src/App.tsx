import Box from '@components/Box';
import Input from '@components/Input';
import Button from '@components/Button';
import React from 'react';

function App() {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log('button click');
	};

	return (
		<div>
			<Box />
			<br />
			<Input type="text" width="150px" height="20px" />
			<br />
			<Button width="100px" height="40px" onClick={handleClick}>
				Login
			</Button>
		</div>
	);
}

export default App;
