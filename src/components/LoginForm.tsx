import styled from '@emotion/styled';
import Input from './Input';
import Button from './Button';

const Container = styled.form`
	width: 400px;
	padding: 16px;
	background-color: white;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
`;

const Title = styled.h1`
	font-size: 24px;
	text-align: center;
`;

function LoginForm() {
	return (
		<Container>
			<Title>Login</Title>
			<Input
				type="text"
				width="100%"
				height="20px"
				name="id"
				placeholder="Id"
			/>
			<Input
				type="password"
				width="100%"
				height="20px"
				name="password"
				placeholder="Password"
				style={{ marginTop: '8px' }}
			/>
			<Button
				type="submit"
				width="100%"
				height="32px"
				style={{ marginTop: '16px' }}
			>
				Login
			</Button>
		</Container>
	);
}

export default LoginForm;
