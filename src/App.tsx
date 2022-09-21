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
			<div
				style={{
					width: '200px',
					height: '150px',
					padding: '8px',
					border: '1px solid black',
				}}
			>
				<Input type="text" width="100%" height="20px" />
			</div>
			<br />
			<Button width="100px" height="40px" onClick={handleClick}>
				Login
			</Button>
		</div>
	);
}

export default App;
